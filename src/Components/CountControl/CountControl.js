import React, { Component } from 'react'

import { ControlContainer, PlusButton, MinusButton, Value } from 'Styles/CountControlStyles'

import { TICKETS_MIN, TICKETS_MAX } from 'Constants/Tickets'
import { removeTicketAnimation, addTicketAnimation } from 'Animation/Tickets'

export default class CountControl extends Component {
  componentDidUpdate (prevProps) {
    const { count } = this.props
    const isNewItem = (prevProps.count < count)
    if (isNewItem) addTicketAnimation(count)
  }

  onPlus = () => {
    const { addTicket } = this.props
    addTicket()
  }

  onMinus = () => {
    const { removeLastTicket, count } = this.props
    if (count > TICKETS_MIN) removeTicketAnimation(count, removeLastTicket)
  }

  render () {
    const { count, multidraws } = this.props
    let ticketsMax = TICKETS_MAX
    if (multidraws > 0) ticketsMax = 5
    return (
      <ControlContainer id='tickets-count-control' className='tutorial-step-add-tickets'>
        <MinusButton disabled={count === TICKETS_MIN} onClick={this.onMinus} />
        <Value>{count}<span className='sm-hide'> / {TICKETS_MAX}</span></Value>
        <PlusButton disabled={count === ticketsMax} onClick={this.onPlus} />
      </ControlContainer>
    )
  }
}
