import React from 'react'
import { connect } from 'react-redux'

import TicketsActions from 'Redux/TicketsRedux'
import DrawsCountControl from './DrawsCountControl'

const DrawsCountControlContainer = (props) => <DrawsCountControl {...props} />

const mapStateToProps = (state) => {
  return {
    count: state.tickets.multidraws,
    ticketsCount: state.tickets.tickets.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    prevDraw: () => dispatch(TicketsActions.prevDraw()),
    nextDraw: () => dispatch(TicketsActions.nextDraw())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawsCountControlContainer)
