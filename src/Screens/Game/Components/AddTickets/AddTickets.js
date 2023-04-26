import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-styled-flexboxgrid'
import { CountControl } from 'Components'
import { TICKETS_MAX } from 'Constants/Tickets'
import l from 'Intl'
import {
  PanelContainer,
  PanelRow,
  PanelTitle,
  TicketsControl,
  TicketsMaxCol,
  TicketsMax
} from './AddTicketsStyles'

export default class AddTickets extends Component {
  static propTypes = {
    addTicket: PropTypes.func
  }

  handleClick = () => {
    const { addTicket } = this.props
    addTicket()
  }

  render () {
    return (
      <PanelContainer>
        <PanelRow>
          <Col sm={4} md={4} lg={6}>
            <TicketsControl>
              <CountControl />
            </TicketsControl>
          </Col>
          <Col sm={4} md={4} lg={6}>
            <PanelTitle onClick={this.handleClick}>
              {l.t('getTickets.addtickets')}
            </PanelTitle>
          </Col>
          <TicketsMaxCol sm={4} md={4}>
            <TicketsMax>{`${TICKETS_MAX} ${l.t(
              'getTickets.maxTickets'
            )}`}</TicketsMax>
          </TicketsMaxCol>
        </PanelRow>
      </PanelContainer>
    )
  }
}
