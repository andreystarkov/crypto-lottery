import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RecentDrawsScreen from './RecentDraws'

import LotteryActions from 'Redux/LotteryRedux'

const RecentDrawsScreenContainer = (props) => <RecentDrawsScreen {...props} />

const mapStateToProps = (state) => {
  return {
    lastDraws: state.lottery.lastDraws,
    countOfDraws: state.lottery.countOfDraws,
    lastDrawsPage: state.lottery.lastDrawsPage,
    lastDrawsLoading: state.lottery.lastDrawsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lotteryDrawsRequest: () => dispatch(LotteryActions.lotteryDrawsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RecentDrawsScreenContainer))
