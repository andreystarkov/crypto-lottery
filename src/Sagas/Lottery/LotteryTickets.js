import { put, call, select } from 'redux-saga/effects'
import LotteryActions from 'Redux/LotteryRedux'

import { log } from 'Utils/Log'
import { callContract, callStorage } from 'Services/Eth'
import { prepareTicketNumbers } from 'Utils/Tickets'
import { formatUnix } from 'Utils/Date'
import { LOTTERY_TICKETS_PER_PAGE } from 'Constants'

import { loadNextItems, loadPrevItems, loadLastItems } from 'Sagas/Common/LoadData'

const loadProps = {
  loadingSelector: state => state.lottery.lotteryTicketsLoading,
  prevSelector: state => state.lottery.lotteryTickets,
  perPage: LOTTERY_TICKETS_PER_PAGE,
  name: 'lottery tickets',
  actionBefore: LotteryActions.lotteryUpdate({ lotteryTicketsLoading: true }),
  actionAfter: LotteryActions.lotteryUpdate({ lotteryTicketsLoading: false })
}

export function * getNumberOfTickets () {
  const totalNumberOfTickets = yield call(callContract, 'totalNumberOfTickets', 'int')
  yield put(LotteryActions.lotteryUpdate({ totalNumberOfTickets }))
  log('getNumberOfTickets', { totalNumberOfTickets })
  return totalNumberOfTickets
}

export function * loadNextLotteryTickets () {
  const total = yield call(getNumberOfTickets)
  yield call(loadNextItems, loadLotteryTicket, { ...loadProps, total })
}

export function * loadPrevLotteryTickets () {
  const total = yield call(getNumberOfTickets)
  yield call(loadPrevItems, loadLotteryTicket, { ...loadProps, total })
}

export function * loadLastLotteryTickets () {
  const total = yield call(getNumberOfTickets)
  yield call(loadLastItems, loadLotteryTicket, { ...loadProps, total })
}

export function * loadLotteryTicket (ticketId) {
  // try {
  //   const ticketAccount = yield call(callStorage, 'ticketAccount', false, ticketId)
  //   const dateTickets = yield call(callStorage, 'dateTickets', 'int', ticketId)
  //   const ticketDraws = yield call(callStorage, 'ticketDraws', 'int', ticketId)
  //   const numbers = yield call(callContract, 'ticketNumbers', false, ticketId)
  //   const block = yield call(window.web3.eth.getBlock, dateTickets)
  //   const ticket = {
  //     ticketId,
  //     id: ticketId,
  //     dateTickets,
  //     ticketDraws,
  //     ticketAccount,
  //     date: formatUnix(block.timestamp),
  //     combination: prepareTicketNumbers(numbers)
  //   }
  //   log('loadLotteryTicket', { ticketId, ticket, block })
  //   yield put(LotteryActions.lotteryTicketsAdd(ticket))
  // } catch (err) {
  //   log('loadLotteryTicket error', err)
  // }
}

export function * getLastLotteryTickets () {
  const prevLotteryTicketsTotal = yield select(state => state.lottery.lotteryTicketsTotal)
  const lotteryTicketsTotal = yield call(callContract, 'idTicket', 'int')
  const lotteryTickets = yield select(state => state.lottery.lotteryTickets)
  let countTickets = lotteryTicketsTotal - 5
  if (countTickets < 0) countTickets = 0
  const shouldUpdate = countTickets >= 0 && prevLotteryTicketsTotal !== lotteryTicketsTotal
  log('getLastLotteryTickets', { shouldUpdate, lotteryTickets, prevLotteryTicketsTotal, lotteryTicketsTotal, countTickets })
  if (shouldUpdate) {
    yield put(LotteryActions.lotteryUpdate({ lotteryTicketsTotal }))
    for (let ticketId = lotteryTicketsTotal - 1; ticketId >= countTickets; ticketId--) {
      yield call(loadLotteryTicket, ticketId)
    }
  }
}
