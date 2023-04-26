import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ResultsScreen from './Results'

import LotteryActions from 'Redux/LotteryRedux'

const ResultsScreenContainer = (props) => <ResultsScreen {...props} />

const mapStateToProps = (state) => {
  return {
    lotteryTickets: state.lottery.lotteryTickets,
    countOfDraws: state.lottery.countOfDraws,
    lotteryTicketsPage: state.lottery.lotteryTicketsPage,
    lotteryTicketsLoading: state.lottery.lotteryTicketsLoading,
    lotteryTicketsTotal: state.lottery.lotteryTicketsTotal,
    lotteryTicketsMap: state.lottery.lotteryTicketsMap,
    lotteryWinners: state.lottery.lotteryWinners
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lotteryTicketsRequest: () => dispatch(LotteryActions.lotteryTicketsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResultsScreenContainer))
