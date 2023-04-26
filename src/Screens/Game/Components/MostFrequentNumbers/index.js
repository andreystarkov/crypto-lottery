import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MostFrequentNumbers from './MostFrequentNumbers'
import TicketsActions from 'Redux/TicketsRedux'

const MostFrequentNumbersContainer = (props) => <MostFrequentNumbers {...props} />

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
    lastDraws: state.lottery.lastDraws
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTicket: (params) => dispatch(TicketsActions.addTicket(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MostFrequentNumbersContainer))
