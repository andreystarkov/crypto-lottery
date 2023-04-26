import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import GameScreen from './Game'
import ModalActions from 'Redux/ModalRedux'
import TicketsActions from 'Redux/TicketsRedux'
import AlertActions from 'Redux/AlertRedux'
import EthActions from 'Redux/EthRedux'
import TutorialActions from 'Redux/TutorialRedux'

const GameScreenContainer = (props) => <GameScreen {...props} />

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
    tutorial: state.tutorial
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTicket: (params) => dispatch(TicketsActions.addTicket(params)),
    removeTicket: (ticketId) => dispatch(TicketsActions.removeTicket(ticketId)),
    removeLastTicket: () => dispatch(TicketsActions.removeLastTicket()),
    updateTicket: ticket => dispatch(TicketsActions.updateTicket(ticket)),
    clearTicket: ticketId => dispatch(TicketsActions.clearTicket(ticketId)),
    clearAllTickets: ticketId => dispatch(TicketsActions.clearAllTickets(ticketId)),
    openModal: (modalType) => dispatch(ModalActions.openModal(modalType)),
    openTransactionModal: (params) => dispatch(ModalActions.openTransactionModal(params)),
    closeModal: () => dispatch(ModalActions.closeModal()),
    openAlert: (params) => dispatch(AlertActions.openAlert(params)),
    closeAlert: () => dispatch(AlertActions.closeAlert()),
    refreshTransactionStatus: params => dispatch(EthActions.refreshTransactionStatus(params)),
    buyTickets: () => dispatch(EthActions.buyTickets()),
    updateTicketParams: params => dispatch(TicketsActions.ticketUpdate(params)),
    tutorialUpdate: params => dispatch(TutorialActions.tutorialUpdate(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameScreenContainer))
