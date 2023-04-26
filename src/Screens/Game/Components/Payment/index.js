import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Payment from './Payment'
import PaymentBlock from './PaymentBlock'
import ModalActions from 'Redux/ModalRedux'
import TicketsActions from 'Redux/TicketsRedux'
import AlertActions from 'Redux/AlertRedux'
import EthActions from 'Redux/EthRedux'

import { getBuyTicketsParams } from 'Utils/Selectors'

const PaymentContainer = (props) => <PaymentBlock><Payment {...props} /></PaymentBlock>

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
    ticketsLength: state.tickets.tickets.length,
    multidraws: state.tickets.multidraws,
    powerplay: state.tickets.powerplay,
    dataDraws: state.tickets.dataDraws,
    ticketPrice: state.lottery.ticketPrice,
    transaction: state.eth.transaction,
    eth: state.eth,
    buyTicketsParams: getBuyTicketsParams(state),
    isLotteryActive: state.lottery.isActive,
    multiDrawsTicketsLength: state.user.multiDrawsTicketsLength,
    numEndDraws: state.lottery.numEndDraws,
    countOfDraws: state.lottery.countOfDraws,
    sellOverBlock: state.lottery.sellOverBlock,
    currentBlock: state.lottery.currentBlock,
    lastDraws: state.lottery.lastDraws,
    totalTicketsLength: state.user.totalTicketsLength,
    upcomingTicketsLength: state.user.upcomingTicketsData.length,
    user: state.user
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
    updateTicketParams: params => dispatch(TicketsActions.ticketUpdate(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaymentContainer))
