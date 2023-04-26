import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { update, prop, sortWith, descend } from 'ramda'
// import shortid from 'shortid'

const { Types, Creators } = createActions({
  lotteryUpdate: ['params'],
  lotteryTransactionsRequest: null,
  lotteryDrawsRequest: null,
  lotteryPrizesRequest: null,
  lotteryTicketsAdd: ['ticket'],
  lotteryDrawsAdd: ['draw'],
  lotteryWinnersAdd: ['winner'],
  lotteryTicketsRequest: null,
  lotteryWinnersRequest: null
})

export const LotteryTypes = Types
export default Creators

export const LOTTERY_INITIAL_STATE = {
  isActive: false,
  transactions: {
    incoming: [],
    outcoming: []
  },
  lotteryBalanceBET: null,
  sellOverBlock: null,
  currentBlock: null,
  blockForRandom: null,
  closeLotteryBlock: null,
  startLotteryBlock: null,
  stopLotteryBlock: null,
  winTicketDraws: [],
  countOfTickets: null,
  lastDraws: [],
  lastDrawsPage: 0,
  lastDrawsLoading: false,
  lotteryTickets: [],
  lotteryTicketsPage: 0,
  lotteryTicketsLoading: false,
  lotteryTicketsTotal: 0,
  lotteryTicketsMap: {},
  countTicketSold: 0,
  totalWinReward: 0,
  winNumbers: null,
  countOfDraws: null,
  prevCountOfDraws: null,
  isWinTicket: null,
  ticketPrice: null,
  totalWinners: null,
  lotteryWinners: [],
  lotteryWinnersLoading: false,
  totalNumberOfTickets: null,
  userRewards: [],
  jackpot: null
}

export const INITIAL_STATE = Immutable(LOTTERY_INITIAL_STATE)

export const updateParams = (state, action) => state.merge({ ...action.params })

const sortById = sortWith([
  descend(prop('id'))
])

export const lotteryTicketsAdd = (state, action) => {
  const { ticket } = action
  let lotteryTickets = []
  const index = state.lotteryTickets.findIndex(f => f.ticketId === ticket.ticketId)
  if (index > -1) {
    lotteryTickets = update(index, ticket, state.lotteryTickets)
  } else {
    lotteryTickets = [ ...state.lotteryTickets, ticket ]
  }
  lotteryTickets = sortById(lotteryTickets)
  return state.merge({ lotteryTickets })
}

export const lotteryWinnersAdd = (state, action) => {
  const { winner } = action
  let lotteryWinners = []
  const index = state.lotteryWinners.findIndex(f => f.id === winner.id)
  if (index > -1) {
    lotteryWinners = update(index, winner, state.lotteryWinners)
  } else {
    lotteryWinners = [ ...state.lotteryWinners, winner ]
  }
  return state.merge({ lotteryWinners })
}

export const lotteryDrawsAdd = (state, action) => {
  const { draw } = action
  let lastDraws = []
  const drawIndex = state.lastDraws.findIndex(f => f.drawId === draw.drawId)
  if (drawIndex > -1) {
    lastDraws = update(drawIndex, draw, state.lastDraws)
  } else {
    lastDraws = [ ...state.lastDraws, draw ]
  }
  return state.merge({ lastDraws })
}

export const lotteryTransactionsRequest = (state) => state
export const lotteryDrawsRequest = (state) => state
export const lotteryTicketsRequest = (state) => state
export const lotteryPrizesRequest = (state) => state
export const lotteryWinnersRequest = state => state

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOTTERY_TRANSACTIONS_REQUEST]: lotteryTransactionsRequest,
  [Types.LOTTERY_UPDATE]: updateParams,
  [Types.LOTTERY_PRIZES_REQUEST]: lotteryPrizesRequest,
  [Types.LOTTERY_TICKETS_ADD]: lotteryTicketsAdd,
  [Types.LOTTERY_WINNERS_ADD]: lotteryWinnersAdd,
  [Types.LOTTERY_DRAWS_REQUEST]: lotteryDrawsRequest,
  [Types.LOTTERY_TICKETS_REQUEST]: lotteryTicketsRequest,
  [Types.LOTTERY_WINNERS_REQUEST]: lotteryWinnersRequest,
  [Types.LOTTERY_DRAWS_ADD]: lotteryDrawsAdd
})
