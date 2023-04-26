import React from 'react'
import { connect } from 'react-redux'
import Alert from './Alert'

import AlertActions from 'Redux/AlertRedux'

const AlertContainer = (props) => <Alert {...props} />

const mapStateToProps = (state) => {
  return {
    alert: state.alert.alert,
    isOpen: state.alert.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openAlert: (params) => dispatch(AlertActions.openAlert(params)),
    closeAlert: () => dispatch(AlertActions.closeAlert())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer)
