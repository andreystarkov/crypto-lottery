import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  toggleSidebar: null,
  openSidebar: null,
  closeSidebar: null
})

export const SidebarTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  sidebarOpen: false
})

export const toggleSidebar = (state) => {
  const { sidebarOpen } = state
  return state.merge({ sidebarOpen: !sidebarOpen })
}

export const openSidebar = (state, action) => {
  return state.merge({ sidebarOpen: true })
}

export const closeSidebar = (state, action) => {
  return state.merge({ sidebarOpen: false })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_SIDEBAR]: toggleSidebar,
  [Types.OPEN_SIDEBAR]: openSidebar,
  [Types.CLOSE_SIDEBAR]: closeSidebar
})
