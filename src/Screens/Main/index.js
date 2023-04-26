import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TutorialActions from 'Redux/TutorialRedux'
import ModalActions from 'Redux/ModalRedux'

import MainScreen from './Main'

const MainScreenContainer = (props) => <MainScreen {...props} />

const mapStateToProps = (state) => {
  return {
    jackpot: state.lottery.jackpot,
    tickets: state.tickets,
    betValues: state.eth.betValues,
    transactions: state.lottery.transactions,
    lottery: state.lottery,
    lastDraws: state.lottery.lastDraws,
    ticketPrice: state.lottery.ticketPrice,
    lotteryTickets: state.lottery.lotteryTickets,
    lastDrawsLoading: state.lottery.lastDrawsLoading,
    lotteryWinners: state.lottery.lotteryWinners,
    totalWinners: state.lottery.totalWinners,
    loading: state.eth.loading,
    tutorial: state.tutorial
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tutorialStart: () => dispatch(TutorialActions.tutorialStart()),
    openModal: modalType => dispatch(ModalActions.openModal(modalType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainScreenContainer))
