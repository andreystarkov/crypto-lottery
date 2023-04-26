import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { update } from 'ramda'

const { Types, Creators } = createActions({
  storageUpdate: ['params'],
  storageRewardAdd: ['drawId']
})

export const StorageTypes = Types
export default Creators

export const STORAGE_INITIAL_STATE = {
  userRewards: []
}

export const INITIAL_STATE = Immutable(STORAGE_INITIAL_STATE)

export const storageUpdate = (state, action) => state.merge({ ...action.params })
export const storageRewardAdd = (state, action) => state.merge({ userRewards: [ ...state.userRewards, action.drawId ] })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STORAGE_UPDATE]: storageUpdate,
  [Types.STORAGE_REWARD_ADD]: storageRewardAdd
})
