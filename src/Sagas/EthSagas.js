import { put, call, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import EthActions from 'Redux/EthRedux'
import ModalActions from 'Redux/ModalRedux'
import AlertActions from 'Redux/AlertRedux'
import UserActions from 'Redux/UserRedux'

import { refreshLottery } from 'Sagas/Lottery/LotteryData'
import { refreshUserState } from 'Sagas/User/UserData'
import { getTransaction, selectCountOfDraws } from 'Utils/Selectors'
import { log } from 'Utils/Log'

export function * getBETValues (cmApi) {
  const r = yield call(cmApi.getBETValues)
  if (r.ok && r.data && r.data.data && r.data.data.quotes) {
    const betValues = r.data.data.quotes
    yield put(EthActions.updateParams({ betValues }))
  }
  const a = yield call(cmApi.getETHValues)
  if (a.ok && a.data && a.data[0]) {
    const ethValues = a.data[0]
    const ethPriceUSD = parseFloat(ethValues.price_usd)
    yield put(EthActions.updateParams({ ethPriceUSD }))
  }
}

export function * watchInitialBalanceTxStatus (action) {
  const { params } = action
  const { hash } = params

  const prevousState = yield select(getTransaction)

  let isStarted = false

  yield put(ModalActions.openTransactionModal({ type: 'initial-balance-eth', hash }))

  while (!isStarted) {
    yield call(delay, 1000)
    const receipt = yield call(window.web3.eth.getTransactionReceipt, hash || prevousState.hash)
    if (receipt) {
      isStarted = true
      let isDone = false
      while (!isDone) {
        const { status } = receipt
        isDone = (status === true || status === '0x1')
        if (isDone) {
          yield put(ModalActions.closeModal())
          yield put(ModalActions.openModal('win'))
          yield call(refreshUserState, { forceUpdate: true })
          yield call(refreshLottery)
        }
        const transaction = {
          hash: hash || prevousState.hash,
          done: status === true,
          success: status === true || status === '0x1',
          failure: status === '0x2',
          processing: !status === '0x1' && !status === '0x0',
          receipt
        }
        console.info(`getInitialBalanceTxStatus done`, { transaction })
        yield put(EthActions.updateParams({ transaction }))
        yield call(delay, 5000)
      }
    }
  }
}

export function * getRewardTransactionStatus (action) {
  const { params } = action
  const { hash, winAmount } = params
  const currentDrawId = yield select(selectCountOfDraws)
  const prevousState = yield select(getTransaction)

  let isStarted = false

  log('getRewardTransactionStatus start', { hash })

  while (!isStarted) {
    yield call(delay, 5000)
    const receipt = yield call(window.web3.eth.getTransactionReceipt, hash || prevousState.hash)

    if (receipt) {
      isStarted = true
      let isDone = false
      while (!isDone) {
        const { status } = receipt
        isDone = (status === true || status === '0x1')
        if (isDone) {
          yield put(ModalActions.closeModal())
          yield put(ModalActions.openModal('win', winAmount))
          yield call(refreshUserState)
          yield call(refreshLottery)
        }
        const transaction = {
          hash: hash || prevousState.hash,
          done: status === true,
          success: status === true || status === '0x1',
          failure: status === '0x2',
          processing: !status === '0x1' && !status === '0x0',
          receipt
        }
        console.info(`getRewardTransactionStatus done`, { transaction })
        yield put(EthActions.updateParams({ transaction, pendingTransaction: false }))
        yield put(UserActions.userRewardsAdd(currentDrawId))
        yield call(refreshUserState)
        yield call(delay, 5000)
      }
    } else {
      yield put(EthActions.updateParams({ pendingTransaction: true }))
    }
  }
}

export function * buyTicketSuccessMessage () {
  yield put(AlertActions.openAlert({
    type: 'success',
    title: 'Tickets are yours!',
    message: 'Good luck'
  }))
}

export function * getTransactionStatus (action) {
  const { params } = action
  const { hash } = params

  const prevousState = yield select(getTransaction)

  let isStarted = false

  log('Checking status of pending transaction')
  log({ hash })
  while (!isStarted) {
    const receipt = yield call(window.web3.eth.getTransactionReceipt, hash || prevousState.hash)
    // console.log({ receipt })
    if (receipt) {
      isStarted = true
      let isDone = false
      while (!isDone) {
        const { status } = receipt
        isDone = (status === true || status === '0x1')
        if (isDone) {
          yield put(ModalActions.closeModal())
          yield call(buyTicketSuccessMessage)
          yield call(refreshUserState, { forceUpdate: true })
          yield call(refreshLottery)
          // yield put(TicketsActions.ticketHistoryAdd())
          isDone = true
        }
        const transaction = {
          hash: hash || prevousState.hash,
          done: status === true,
          success: status === true || status === '0x1',
          failure: status === '0x2',
          processing: !status === '0x1' && !status === '0x0',
          receipt
        }
        log(`Done transaction`, { transaction })
        yield put(EthActions.updateParams({ transaction, pendingTransaction: false }))
        yield call(delay, 5000)
      }
    } else {
      yield put(EthActions.updateParams({ pendingTransaction: true }))
    }
    yield call(delay, 5000)
  }
}
