import { put, call, fork, select, all } from 'redux-saga/effects'
import TicketsActions from 'Redux/TicketsRedux'
import LotteryActions from 'Redux/LotteryRedux'

import { callContract, callStorage, callERC20 } from 'Services/Eth'
import { log } from 'Utils/Log'
import { formatUnix } from 'Utils/Date'
import { splitTransactions } from 'Utils/Transactions'
import { getLastLotteryTickets } from './LotteryTickets'
import { getLastLotteryDraws } from './LotteryDraws'
import { CONTRACT_ADDRESS } from 'Constants/Eth'

const refreshLotterySagas = [
  getTicketPrice,
  getJackpot,
  getLotteryStatistics,
  getTotalWinners,
  getLotteryWinNumbers,
  getLastLotteryDraws,
  getLastLotteryTickets
]

export function * refreshLottery () {
  yield call(getCountOfDraws)
  log('Refreshing lottery data...')
  yield all(refreshLotterySagas.map(saga => fork(saga)))
  yield put(LotteryActions.lotteryTransactionsRequest())
}

export function * getLotteryStatistics () {
  // const countTicketSold = yield call(callStorage, 'countTicketSold', 'int')
  // const totalWinReward = yield call(callStorage, 'totalWinReward', 'bet')
  // yield put(LotteryActions.lotteryUpdate({ countTicketSold, totalWinReward }))
}

export function * getTicketPrice () {
  const ticketPrice = yield call(callContract, 'ticketPrice', 'bet')
  log('getTicketPrice', { ticketPrice })
  yield put(LotteryActions.lotteryUpdate({ ticketPrice }))
}

export function * getWinTicketChoosen () {
  const isWinTicket = yield call(callContract, 'winTicketChoosen')
  log('getWinTicketChoosen', { isWinTicket })
  yield put(LotteryActions.lotteryUpdate({ isWinTicket }))
}

export function * getLotteryWinNumbers () {
  const winNumbers = yield call(callContract, 'winTicket')
  log('getLotteryWinNumbers', { winNumbers })
  yield put(LotteryActions.lotteryUpdate({ winNumbers }))
}

export function * getCountOfDraws () {
  const countOfDraws = yield call(callContract, 'countOfDraws', 'int')
  log('getCountOfDraws', { countOfDraws })
  yield put(LotteryActions.lotteryUpdate({ countOfDraws }))
}

export function * getTotalWinners () {
  const prevTotalWinners = yield select(state => state.lottery.totalWinners)
  let totalWinners = yield call(callContract, 'totalWinners', 'int')
  yield put(LotteryActions.lotteryUpdate({ totalWinners }))
  const shouldUpdate = prevTotalWinners !== totalWinners
  log('getTotalWinners', { shouldUpdate, totalWinners, prevTotalWinners })
  let goTo = totalWinners - 10
  if (goTo < 0) goTo = 0
  if (shouldUpdate) {
    for (let i = totalWinners - 1; i >= goTo; i--) {
      let reward = yield call(callStorage, 'listUsersRewards', 'bet', i)
      let dateWinners = yield call(callStorage, 'dateWinners', 'int', i)
      let winnerAccount = yield call(callStorage, 'winnerAccount', false, i)
      const block = yield call(window.web3.eth.getBlock, dateWinners)
      const winner = {
        id: i + 1,
        reward,
        date: formatUnix(block.timestamp),
        account: winnerAccount
      }
      log('getTotalWinners', { winner })
      yield put(LotteryActions.lotteryWinnersAdd(winner))
    }
  }
}

export function * getLotteryTickets () {
  yield call(getLastLotteryTickets)
}

export function * getNumberOfTickets () {
  const totalNumberOfTickets = yield call(callContract, 'totalNumberOfTickets', 'int')
  log('getNumberOfTickets', { totalNumberOfTickets })
  return totalNumberOfTickets
}

export function * getSellOverBlock () {
  const sellOverBlock = yield call(callContract, 'sellOverBlock', 'int')
  log('getSellOverBlock', { sellOverBlock })
  yield put(LotteryActions.lotteryUpdate({ sellOverBlock }))
}

export function * getJackpot () {
  const jackpot = yield call(callContract, 'jackpot', 'bet')
  log('getJackpot', { jackpot })
  if (jackpot > 0) {
    yield put(LotteryActions.lotteryUpdate({ jackpot }))
  } else {
    const lotteryBalance = yield call(getLotteryBalance)
    log('getJackpot', { lotteryBalance })
    yield put(LotteryActions.lotteryUpdate({ jackpot: lotteryBalance }))
  }
}

export function * getLotteryBalance () {
  const lotteryBalanceBET = yield call(callERC20, 'balanceOf', 'bet', CONTRACT_ADDRESS)
  yield put(LotteryActions.lotteryUpdate({ lotteryBalanceBET }))
  log('getLotteryBalance', { lotteryBalanceBET })
  return lotteryBalanceBET
}

export function * getLotteryStatus () {
  const isActive = yield call(callContract, 'activeLottery')
  log('getLotteryStatus', { isActive })
  yield put(LotteryActions.lotteryUpdate({ isActive }))
}

export function * getLotteryTransactions (esApi) {
  const openKey = CONTRACT_ADDRESS
  const response = yield call(esApi.getTransactions, openKey)
  if (response.ok) {
    const data = response.data
    if (data.status === '1') {
      const transactions = splitTransactions(data.result, openKey)
      log('getLotteryTransactions', { transactions })
      yield put(LotteryActions.lotteryUpdate({ transactions }))
    }
  } else {
    log('getLotteryTransactions error', { response })
  }
}

export function * getPrizes () {
  let dataPrize = {}
  let dataPowerPlay = {}
  dataPrize[50] = yield call(callContract, 'dataPrize', 'bet', 50)
  dataPrize[41] = yield call(callContract, 'dataPrize', 'bet', 41)
  dataPrize[40] = yield call(callContract, 'dataPrize', 'bet', 40)
  dataPrize[31] = yield call(callContract, 'dataPrize', 'bet', 31)
  dataPrize[30] = yield call(callContract, 'dataPrize', 'bet', 30)
  dataPrize[21] = yield call(callContract, 'dataPrize', 'bet', 21)
  dataPrize[11] = yield call(callContract, 'dataPrize', 'bet', 11)
  dataPrize[1] = yield call(callContract, 'dataPrize', 'bet', 1)

  dataPowerPlay[1] = yield call(callContract, 'dataPowerPlay', 'int', 1)
  dataPowerPlay[2] = yield call(callContract, 'dataPowerPlay', 'int', 2)
  dataPowerPlay[3] = yield call(callContract, 'dataPowerPlay', 'int', 3)
  dataPowerPlay[4] = yield call(callContract, 'dataPowerPlay', 'int', 4)
  dataPowerPlay[5] = yield call(callContract, 'dataPowerPlay', 'int', 5)

  log('getPrizes', { dataPowerPlay, dataPrize })
  let multiplier = yield call(callContract, 'multiplier')
  yield put(TicketsActions.ticketUpdate({ dataPrize, multiplier, dataPowerPlay }))
}
