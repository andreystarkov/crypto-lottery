import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProfileScreen from './Profile'

import ModalActions from 'Redux/ModalRedux'
import TicketsActions from 'Redux/TicketsRedux'
import AlertActions from 'Redux/AlertRedux'
import EthActions from 'Redux/EthRedux'
import LotteryActions from 'Redux/LotteryRedux'

const ProfileScreenContainer = (props) => <ProfileScreen {...props} />

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    multidraws: state.tickets.multidraws,
    eth: state.eth,
    transactions: state.user.transactions.outcoming,
    user: state.user,
    dataPrize: state.tickets.dataPrize,
    dataPowerPlay: state.tickets.dataPowerPlay,
    betValues: state.eth.betValues,
    multiplier: state.tickets.multiplier,
    jackpot: state.lottery.jackpot,
    balanceBET: state.user.balanceBET,
    balanceETH: state.user.balanceETH,
    totalTicketsLength: state.user.ticketsLength + state.user.multiDrawsTicketsLength,
    lottery: state.lottery,
    ethPriceUSD: state.eth.ethPriceUSD
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
    openModal: (modalType, params) => dispatch(ModalActions.openModal(modalType, params)),
    closeModal: () => dispatch(ModalActions.closeModal()),
    openAlert: (params) => dispatch(AlertActions.openAlert(params)),
    closeAlert: () => dispatch(AlertActions.closeAlert()),
    openTransactionModal: (params) => dispatch(ModalActions.openTransactionModal(params)),
    refreshRewardTxStatus: (params) => dispatch(EthActions.refreshRewardTransactionStatus(params)),
    lotteryTicketsRequest: () => dispatch(LotteryActions.lotteryTicketsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileScreenContainer))
