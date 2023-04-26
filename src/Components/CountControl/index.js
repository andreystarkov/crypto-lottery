import React from 'react'
import { connect } from 'react-redux'

import TicketsActions from 'Redux/TicketsRedux'
import CountControl from './CountControl'

const CountControlContainer = (props) => <CountControl {...props} />

const mapStateToProps = (state) => {
  return {
    count: state.tickets.tickets.length,
    multidraws: state.tickets.multidraws
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTicket: () => dispatch(TicketsActions.addTicket()),
    removeLastTicket: () => dispatch(TicketsActions.removeLastTicket())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountControlContainer)
