import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  toggleAlert: null,
  openAlert: ['params'],
  closeAlert: null,
  alertUpdate: ['params'],
  alertReset: null
})

export const AlertTypes = Types
export default Creators

const ALERT_INITIAL_STATE = {
  title: null, // string
  type: null, // success/error
  message: null // string
}
// is open == true
//   либо title либо message (но 1 из них)
//   и type обязателен

export const INITIAL_STATE = Immutable({
  isOpen: false,
  alert: ALERT_INITIAL_STATE
})

export const alertUpdate = (state, action) => state.merge({ ...action.params })

export const toggleAlert = (state) => {
  const { isOpen } = state
  return state.merge({ isOpen: !isOpen, alert: isOpen ? state.alert : ALERT_INITIAL_STATE })
}

export const closeAlert = state => state
export const openAlert = state => state

export const alertReset = state => state.merge({ isOpen: false, alert: ALERT_INITIAL_STATE })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_ALERT]: toggleAlert,
  [Types.OPEN_ALERT]: openAlert,
  [Types.CLOSE_ALERT]: closeAlert,
  [Types.ALERT_UPDATE]: alertUpdate,
  [Types.ALERT_RESET]: alertReset
})
