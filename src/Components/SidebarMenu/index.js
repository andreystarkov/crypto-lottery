
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import SidebarMenu from './SidebarMenu'

import SidebarActions from 'Redux/SidebarRedux'
import ModalActions from 'Redux/ModalRedux'
import EthActions from 'Redux/EthRedux'

const SidebarMenuContainer = (props) => <SidebarMenu {...props} />

const mapStateToProps = (state) => {
  return {
    isOpen: state.sidebar.sidebarOpen,
    isAuth: state.eth.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(SidebarActions.toggleSidebar()),
    closeSidebar: () => dispatch(SidebarActions.closeSidebar()),
    openModal: (modalType, params) => dispatch(ModalActions.openModal(modalType, params)),
    logout: () => dispatch(EthActions.resetAuth())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarMenuContainer))
