import { put, call, fork, select, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { log } from 'Utils/Log'
import { prepareTicketNumbers } from 'Utils/Tickets'
import { getOpenKey, selectCountOfDraws, selectIsWinTicket } from 'Utils/Selectors'
import { splitTransactions } from 'Utils/Transactions'

import { callStorage, callERC20, callContract, faucetToAddress } from 'Services/Eth'

import UserActions from 'Redux/UserRedux'
import LotteryActions from 'Redux/LotteryRedux'
import ModalActions from 'Redux/ModalRedux'
import AlertActions from 'Redux/AlertRedux'

import { getWinTicketChoosen } from './Lottery/LotteryData'

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

export function * refreshUserState (isAuth) {
  log('Refreshing user state...')
  yield all([
    yield call(getUserBalance, isAuth),
    yield call(getUserTickets)
  ])
  log('User refreshed')
  yield put(UserActions.userTransactionsRequest())
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

export function * getUserBalance (isAuth) {
  const isLoggedIn = yield select(state => state.eth.auth)
  if (isLoggedIn) {
    let openKey = yield select(getOpenKey)
    let balanceETH = yield call(window.web3.eth.getBalance, openKey)
    const balanceBET = yield call(callERC20, 'balanceOf', 'bet', openKey)
    balanceETH = parseInt(balanceETH) / 10 ** 18
    yield put(UserActions.userUpdate({ balanceETH: balanceETH, balanceBET }))
  }
}

export function * watchUserBalanceService () {
  while (true) {
    yield delay(10000)
    yield call(getUserBalance)
  }
}

export function * refreshUserService () {
  while (true) {
    log('User service: refreshing user')
    yield call(refreshUserState)
    yield delay(20000)
  }
}

export async function getTicketNumbers (id) {
  // console.log('getTicketNumbers', { id })
  try {
    const value = await window.contractLottery.methods.ticketNumbers(id).call()
    return value
  } catch (err) {
    log('getTicketNumbers error', { id })
    return 0
  }
}

export function * getPastUserTicket (i) {
  const countOfDraws = yield select(selectCountOfDraws)
  const openKey = yield select(getOpenKey)
  const id = yield call(callContract, 'usersAllTickets', 'int', openKey, i)
  const draw = yield call(callStorage, 'ticketDraws', 'int', id)
  if (draw < countOfDraws) {
    const numbers = yield call(getTicketNumbers, id)
    return {
      id,
      draw,
      combination: prepareTicketNumbers(numbers),
      numbers
    }
  }
  return false
}

export function * getUserTicket (i) {
  // const countOfDraws = yield select(selectCountOfDraws)
  // const openKey = yield select(getOpenKey)
  // const id = yield call(callContract, 'usersTickets', 'int', openKey, i)
  // const draw = yield call(callStorage, 'ticketDraws', 'int', id)
  // if (draw === countOfDraws) {
  //   const numbers = yield call(getTicketNumbers, id)
  //   return {
  //     id,
  //     draw,
  //     combination: prepareTicketNumbers(numbers),
  //     numbers
  //   }
  // }
  return false
}

export function * getMultiDrawTicket (i) {
  const openKey = yield select(getOpenKey)
  const id = yield call(callContract, 'multiDrawsTickets', 'int', openKey, i)
  const draw = yield call(callStorage, 'ticketDraws', 'int', id)
  const numbers = yield call(getTicketNumbers, id)
  return {
    numbers,
    draw,
    id
  }
}

export function * getUserTickets () {
  const openKey = yield select(getOpenKey)
  const isAuth = yield select(state => state.eth.auth)
  if (isAuth) {
    log('getUserTickets', { openKey })
    try {
      yield call(getWinTicketChoosen)
      const prevTicketsLength = yield select(state => state.user.ticketsLength)
      const prevMultiTicketsLength = yield select(state => state.user.multiDrawsTicketsLength)
      const prevNumEndDraws = yield select(state => state.user.numEndDraws)
      const prevCurrDraws = yield select(state => state.user.currDraws)
      const countOfDraws = yield select(selectCountOfDraws)
      const isLoading = yield select(state => state.user.isUserLoading)
      const prevAllTicketLength = yield select(state => state.user.allTicketsLength)
      const allTicketsLength = yield call(callContract, 'getLengthAllTickets', 'int', openKey)
      let ticketsLength = yield call(callContract, 'getLengthTickets', 'int', openKey)
      let multiDrawsTicketsLength = yield call(callContract, 'getLengthMultiDrawsTickets', 'int', openKey)
      let totalTicketsLength = ticketsLength + multiDrawsTicketsLength

      const userRewards = yield call(callContract, 'checkMyTicket', false, openKey)

      let currentReward = {
        totalWinAmount: parseInt(userRewards[0]) / 10 ** 18,
        isJackpot: parseInt(userRewards[1]) === 1,
        winTicketsCount: parseInt(userRewards[2])
      }

      let ticketsData = []
      let multidrawsTicketsData = []
      let pastTicketsData = []
      let userTicketsData = []
      let upcomingTicketsData = []

      const isWinTicket = yield select(selectIsWinTicket)
      const numEndDraws = yield call(callContract, 'numEndDraws', 'int', openKey)
      const currDraws = yield call(callContract, 'curDraws', 'int', openKey)

      const shouldUpdate = (
        prevCurrDraws !== currDraws ||
        prevTicketsLength !== ticketsLength ||
        prevMultiTicketsLength !== multiDrawsTicketsLength ||
        prevNumEndDraws !== numEndDraws ||
        prevAllTicketLength !== allTicketsLength
      ) && !isLoading

      yield put(UserActions.userUpdate({
        currDraws, ticketsLength, multiDrawsTicketsLength, numEndDraws, totalTicketsLength, allTicketsLength, currentReward
      }))

      log('getUserTickets', { shouldUpdate, isWinTicket, numEndDraws, currDraws, countOfDraws })
      if (shouldUpdate) {
        yield put(UserActions.userUpdate({ isUserLoading: true }))

        if (allTicketsLength > 0) {
          let atLimit = allTicketsLength - 30
          if (atLimit < 0) atLimit = 0
          log({ atLimit, allTicketsLength })
          for (let i = allTicketsLength - 1; i >= atLimit; i--) {
            const ticket = yield call(getPastUserTicket, i)
            log('all tickets', { i, ticket })
            ticket && pastTicketsData.push(ticket)
          }
        }

        if (ticketsLength > 0) {
          let tLimit = ticketsLength - 30
          if (tLimit < 0) tLimit = 0
          log({ tLimit, ticketsLength })
          for (let i = ticketsLength - 1; i >= tLimit; i--) {
            const ticket = yield call(getUserTicket, i)
            if (ticket) {
              log('tickets', { i, ticket })
              ticketsData.push(ticket)
              userTicketsData.push(ticket)
              if (currDraws === countOfDraws && !isWinTicket) upcomingTicketsData.push(ticket)
            }
          }
        }

        if (multiDrawsTicketsLength > 0) {
          for (let i = multiDrawsTicketsLength; i >= 0; i--) {
            const multiDrawTicket = yield call(getMultiDrawTicket, i)
            if (multiDrawTicket) {
              ticketsData.push(multiDrawTicket)
              multidrawsTicketsData.push(multiDrawTicket)
              log('multi ticket', { i, multiDrawTicket })
              if (!(numEndDraws <= countOfDraws)) upcomingTicketsData.push(multiDrawTicket)
            }
          }
        }

        const closeLotteryBlock = yield call(callContract, 'closeLotteryBlock', 'int')
        yield put(LotteryActions.lotteryUpdate({ closeLotteryBlock }))

        const userParams = {
          ticketsLength,
          multiDrawsTicketsLength,
          multidrawsTicketsData,
          totalTicketsLength,
          userTicketsData,
          ticketsData,
          upcomingTicketsData,
          currDraws,
          numEndDraws,
          pastTicketsData,
          isUserLoading: false
        }

        log('getUserTickets results', { ...userParams })
        yield put(UserActions.userUpdate(userParams))
      }
    } catch (err) {
      log('getUserTickets saga error', err)
    }
  }
}
