import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SectionHeader from './SectionHeader'
import TicketsActions from 'Redux/TicketsRedux'

const SectionHeaderContainer = (props) => <SectionHeader {...props} />

const mapStateToProps = (state) => {
  return {
    lastDraws: state.lottery.lastDraws,
    tickets: state.tickets.tickets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearAllTickets: ticketId => dispatch(TicketsActions.clearAllTickets(ticketId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SectionHeaderContainer))
