import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { log } from 'Utils/Log'
import { pushOrReplaceIfExists, sortById } from 'Utils'

const { Types, Creators } = createActions({
  userUpdate: ['params'],
  userTransactionsRequest: null,
  userBalanceWatch: null,
  userBalanceRequest: null,
  userTicketsRequest: null,
  userRefresh: null,
  userReset: null,
  userRewardsAdd: ['drawId'],
  userPastTicketAdd: ['ticket'],
  userTicketAdd: ['ticket'],
  userMultidrawTicketAdd: ['ticket']
})

export const UserTypes = Types
export default Creators

export const USER_INITIAL_STATE = {
  auth: false,
  openKey: null,
  balanceETH: null,
  balanceBET: null,
  transactions: {
    incoming: [],
    outcoming: []
  },
  ticketsLength: null,
  multiDrawsTicketsLength: null,
  totalTicketsLength: null,
  ticketsData: [],
  pastTicketsData: [],
  numEndDraws: null, // по какую лоттерею билеты мультидровс действительны
  countOfDraws: null, // количество лоттерей всего
  currDraws: null, // к какой лоттерее куплены наши билеты
  isWinTicket: false, // был ли произведен розыгрыш текущей лоттереи
  winNumbers: [],
  multidrawsTicketsData: [],
  upcomingTicketsData: [],
  userTicketsData: [],
  winTicketDraws: [],
  userLoading: false,
  userRewards: [],
  currentReward: {
    totalWinAmount: null,
    isJackpot: null,
    winTicketsCount: null
  }
}

export const INITIAL_STATE = Immutable(USER_INITIAL_STATE)

export const updateParams = (state, action) => state.merge({ ...action.params })
export const userRewardAdd = (state, action) => state.merge({ userRewards: [ ...state.userRewards, action.drawId ] })

export const userTicketAdd = (state, action) => {
  const { ticket } = action
  let userTicketsData = pushOrReplaceIfExists(ticket, state.userTicketsData)
  log('userPastTicketsAdd', { userTicketsData, ticket })
  userTicketsData = sortById(userTicketsData)
  return state.merge({ userTicketsData })
}

export const userPastTicketAdd = (state, action) => {
  const { ticket } = action
  let pastTicketsData = pushOrReplaceIfExists(ticket, state.pastTicketsData)
  log('userPastTicketsAdd', { pastTicketsData, ticket })
  pastTicketsData = sortById(pastTicketsData)
  return state.merge({ pastTicketsData })
}

export const userMultidrawTicketAdd = (state, action) => {
  const { ticket } = action
  let multidrawsTicketsData = pushOrReplaceIfExists(ticket, state.multidrawsTicketsData)
  log('userMultidrawTicketAdd', { multidrawsTicketsData, ticket })
  multidrawsTicketsData = sortById(multidrawsTicketsData)
  return state.merge({ multidrawsTicketsData })
}

export const getTransactions = (state) => state
export const getTickets = (state) => state
export const getBalance = (state) => state
export const userBalanceWatch = (state) => state
export const refresh = (state) => state
export const resetUser = (state) => state.merge(INITIAL_STATE)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_TRANSACTIONS_REQUEST]: getTransactions,
  [Types.USER_BALANCE_WATCH]: userBalanceWatch,
  [Types.USER_UPDATE]: updateParams,
  [Types.USER_REFRESH]: refresh,
  [Types.USER_BALANCE_REQUEST]: getBalance,
  [Types.USER_TICKETS_REQUEST]: getTickets,
  [Types.USER_REWARDS_ADD]: userRewardAdd,
  [Types.USER_PAST_TICKET_ADD]: userPastTicketAdd,
  [Types.USER_TICKET_ADD]: userTicketAdd,
  [Types.USER_MULTIDRAW_TICKET_ADD]: userMultidrawTicketAdd,
  [Types.USER_RESET]: resetUser
})
