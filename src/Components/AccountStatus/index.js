
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AccountStatus from './AccountStatus'

import EthActions from 'Redux/EthRedux'

const AccountStatusContainer = (props) => <AccountStatus {...props} />

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.eth.auth,
    openKey: state.user.openKey,
    balanceBET: state.user.balanceBET,
    balanceETH: state.user.balanceETH
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(EthActions.resetAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountStatusContainer))
