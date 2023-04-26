import React from 'react'
import { connect } from 'react-redux'

import TicketsActions from 'Redux/TicketsRedux'
import AddTickets from './AddTickets'

const AddTicketsContainer = (props) => <AddTickets {...props} />

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTicket: () => dispatch(TicketsActions.addTicket())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTicketsContainer)
