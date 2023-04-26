import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RulesScreen from './Rules'

const RulesScreenContainer = (props) => <RulesScreen {...props} />

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RulesScreenContainer))
