import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  openModal: ['modalType', 'params'],
  openTransactionModal: ['params'],
  modalUpdate: ['params'],
  closeModal: null,
  resetModal: null
})

export const ModalTypes = Types
export default Creators

export const MODAL_INITIAL_STATE = {
  isOpen: false,
  modalType: null,
  params: null
}

export const INITIAL_STATE = Immutable(MODAL_INITIAL_STATE)

export const modalUpdate = (state, action) => state.merge({ ...action.params })

export const openTransactionModal = (state, action) => {
  const { params } = action
  const { type, hash } = params
  return state.merge({ isOpen: true, modalType: 'transaction', params: { hash, type } })
}

export const resetModal = (state) => state.merge(MODAL_INITIAL_STATE)

export const closeModal = state => state
export const openModal = state => state

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_MODAL]: openModal,
  [Types.CLOSE_MODAL]: closeModal,
  [Types.OPEN_TRANSACTION_MODAL]: openTransactionModal,
  [Types.MODAL_UPDATE]: modalUpdate,
  [Types.RESET_MODAL]: resetModal
})
