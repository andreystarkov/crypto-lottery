
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'

import SidebarActions from 'Redux/SidebarRedux'
import ModalActions from 'Redux/ModalRedux'

const HeaderContainer = (props) => <Header {...props} />

const mapStateToProps = (state) => {
  return {
    isOpen: state.sidebar.sidebarOpen,
    eth: state.eth,
    auth: state.eth.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(SidebarActions.toggleSidebar()),
    openModal: (modalType) => dispatch(ModalActions.openModal(modalType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
