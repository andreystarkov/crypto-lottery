import { put, call, fork, select, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { log } from 'Utils/Log'
import { getOpenKey } from 'Utils/Selectors'
import { splitTransactions } from 'Utils/Transactions'

import { callERC20, faucetToAddress, callContract } from 'Services/Eth'
import { getWinTicketChoosen } from 'Sagas/Lottery/LotteryData'
import { getCurrentUserTickets, getUserPastTickets, getMultiDrawTickets, getCurrentReward } from 'Sagas/User/UserTickets'

import UserActions from 'Redux/UserRedux'
import ModalActions from 'Redux/ModalRedux'
import AlertActions from 'Redux/AlertRedux'

export function * refreshUserState (params) {
  let isAuth = yield select(state => state.eth.auth)
  log('refreshUserStart', { isAuth, ...params })
  if (isAuth) {
    try {
      yield fork(getUserBalance, params)
      yield fork(getWinTicketChoosen, params)
      yield fork(getDrawMeasures, params)
      yield fork(getCurrentReward, params)
      yield fork(getUserTickets, params)
    } catch (err) {
      log('getUserTickets saga error', err)
    }
  }
}

export function * getUserTickets (params) {
  log('getUserTickets', { ...params })
  yield all([
    yield fork(getCurrentUserTickets, params),
    yield fork(getUserPastTickets, params),
    yield fork(getMultiDrawTickets, params)
  ])
}

export function * getDrawMeasures () {
  const openKey = yield select(getOpenKey)
  const prevNumEndDraws = yield select(state => state.user.numEndDraws)
  const numEndDraws = yield call(callContract, 'numEndDraws', 'int', openKey)
  // numEndDraws -- общее количество розыгрышей
  // номер драва до которого действует мультидрав
  // if (numEndDraws[openkey] < countOfDraws) -> мультидров действителен
  const prevCurrDraws = yield select(state => state.user.currDraws)
  const currDraws = yield call(callContract, 'curDraws', 'int', openKey)
  // curDraws - номер розыгрыша, в котором участвует игрок
  // если он меньше текущего, игрок в пролете
  const shouldUpdate = (prevCurrDraws !== currDraws || prevNumEndDraws !== numEndDraws)
  log('getDrawMeasures', { shouldUpdate, currDraws, prevCurrDraws, numEndDraws, prevNumEndDraws })
  if (shouldUpdate) {
    yield put(UserActions.userUpdate({ currDraws, numEndDraws }))
  }
}

export function * getUserInitialBalance () {
  const openKey = yield select(getOpenKey)
  const response = yield call(fetch, `http://faucet.ropsten.be:3001/donate/${openKey}`)
  if (response.ok) {
    yield fork(watchUserBalanceETH)
  } else {
    yield put(AlertActions.openAlert({
      type: 'success',
      title: `Can't get start balance`,
      message: `Send ETH/BET to ${openKey} manually`
    }))
  }
}

export function * watchUserBalanceBET () {
  let shouldCheck = true
  let openKey = yield select(getOpenKey)
  log('Watching user balance BET', { openKey })
  yield put(ModalActions.openTransactionModal({ type: 'initial-balance-bet', hash: openKey }))
  while (shouldCheck) {
    const balanceBET = yield call(callERC20, 'balanceOf', 'bet', openKey)
    // ({ balanceBET })
    log(`Got ${balanceBET} BET, Its fine!`, { balanceBET })
    if (balanceBET > 0) {
      shouldCheck = false
      yield put(ModalActions.closeModal())
      yield put(AlertActions.openAlert({
        type: 'success',
        title: 'You got your balance',
        message: 'Now you can buy tickets!'
      }))
    }
    yield delay(5000)
  }
}

export function * watchUserBalanceETH () {
  let shouldCheck = true
  const openKey = yield select(getOpenKey)
  // log('Watching user balance ETH', { openKey })
  yield put(ModalActions.openTransactionModal({ type: 'initial-balance-eth', hash: openKey }))
  while (shouldCheck) {
    let balanceETH = yield call(window.web3.eth.getBalance, openKey)
    balanceETH = parseInt(balanceETH)
    // log('Watching for ETH...', { balanceETH })
    if (balanceETH > 0) {
      shouldCheck = false
      yield put(ModalActions.closeModal())
      log(`Got ${balanceETH} ETH. Excellent!`, { balanceETH })
      yield put(UserActions.userUpdate({ balanceETH }))
      faucetToAddress({ openKey })
      yield fork(watchUserBalanceBET)
    }
    yield delay(5000)
  }
}

export function * getUserTransactions (esApi) {
  const openKey = yield select(getOpenKey)
  const response = yield call(esApi.getTransactions, openKey)
  if (response.ok) {
    const data = response.data
    if (data.status === '1') {
      const list = data.result
      const transactions = splitTransactions(list, openKey)
      yield put(UserActions.userUpdate({ transactions }))
    }
  }
}

export function * getUserBalance () {
  const isLoggedIn = yield select(state => state.eth.auth)
  if (isLoggedIn) {
    const prevBalanceBET = yield select(state => state.user.balanceBET)
    let openKey = yield select(getOpenKey)
    let balanceETH = yield call(window.web3.eth.getBalance, openKey)
    const balanceBET = yield call(callERC20, 'balanceOf', 'bet', openKey)
    balanceETH = parseInt(balanceETH) / 10 ** 18
    const shouldUpdate = balanceBET !== prevBalanceBET
    log('getUserBalance', { shouldUpdate, isLoggedIn, balanceBET, balanceETH, prevBalanceBET })
    if (shouldUpdate) {
      yield put(UserActions.userUpdate({ balanceETH, balanceBET }))
      yield put(UserActions.userTransactionsRequest())
    }
  }
}
