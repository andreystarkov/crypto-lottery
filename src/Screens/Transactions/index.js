import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TransactionsScreen from './Transactions'
import LotteryActions from 'Redux/LotteryRedux'

class TransactionsScreenContainer extends Component {
  componentDidMount = () => this.props.getTransactions()
  render = () => <TransactionsScreen {...this.props} />
}

const mapStateToProps = (state) => {
  return {
    transactions: state.lottery.transactions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: () => dispatch(LotteryActions.lotteryTransactionsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TransactionsScreenContainer))
