import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  updateParams: ['params'],
  authSuccess: null,
  authRequest: ['params'],
  resetAuth: null,
  refreshTransactionStatus: ['params'], // hash, type
  refreshRewardTransactionStatus: ['params'],
  getPrizes: null,
  buyTickets: null,
  getTicketsLength: null
})

export const EthTypes = Types
export default Creators

export const ETH_INITIAL_STATE = {
  auth: false,
  jackpot: null,
  transaction: {
    type: null,
    done: null,
    success: null,
    failure: null
  },
  ethPriceUSD: null,
  valuesBET: {},
  priceBET: {},
  pendingTransaction: false,
  multiplier: null,
  loading: true,
  betValues: {
    USD: {
      market_cap: null,
      percent_change_1hp: null,
      percent_change_7dp: null,
      percent_change_24hp: null,
      price: null,
      volume_24hp: null
    },
    ETH: {
      market_cap: null,
      percent_change_1hp: null,
      percent_change_7dp: null,
      percent_change_24hp: null,
      price: null,
      volume_24hp: null
    }
  },
  openKey: null,
  privateKey: null
}

export const INITIAL_STATE = Immutable(ETH_INITIAL_STATE)

export const updateParams = (state, action) => state.merge({ ...action.params })

export const getPrizes = (state) => state
export const getTicketsLength = (state) => state

export const refreshTransactionStatus = state => state

export const buyTickets = state => state

export const authRequest = (state) => state
export const authSuccess = (state) => state.merge({ auth: true })
export const resetAuth = (state) => state

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_PARAMS]: updateParams,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_REQUEST]: authRequest,
  [Types.RESET_AUTH]: resetAuth,
  [Types.GET_PRIZES]: getPrizes,
  [Types.REFRESH_TRANSACTION_STATUS]: refreshTransactionStatus,
  [Types.REFRESH_REWARD_TRANSACTION_STATUS]: refreshTransactionStatus,
  [Types.BUY_TICKETS]: buyTickets
})
