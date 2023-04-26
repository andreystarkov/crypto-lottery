import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LotteryCreation from './LotteryCreation'

const LotteryCreationContainer = props => <LotteryCreation {...props} />

const mapStateToProps = state => {
  return {
    lottery: state.lottery
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LotteryCreationContainer))
