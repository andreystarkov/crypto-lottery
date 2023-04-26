import React, { Component } from 'react'

import { ControlContainer, PlusButton, MinusButton, Col, Value } from 'Styles/DrawsControlStyles'

export default class CountControl extends Component {
  onPlus = () => {
    const { nextDraw } = this.props
    nextDraw()
  }
  onMinus = () => {
    const { prevDraw } = this.props
    prevDraw()
  }
  render () {
    const { count, ticketsCount } = this.props
    return (
      <ControlContainer>
        <Col justifyContent='flex-start'>
          <MinusButton disabled={ticketsCount > 5 || count === 0} onClick={this.onMinus} />
        </Col>
        <Col>
          <Value>{count}</Value>
        </Col>
        <Col justifyContent='flex-end'>
          <PlusButton disabled={ticketsCount > 5 || count === 52} onClick={this.onPlus} />
        </Col>
      </ControlContainer>
    )
  }
}
