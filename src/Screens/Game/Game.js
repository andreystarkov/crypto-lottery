import React, { Component } from 'react'

import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { Header, SectionDivider, Footer, RoundButton } from 'Components'

import { Colors } from 'Themes'

import { ScreenWrapper, FlexLeft } from 'Styles/CommonStyles'
import { AddTicketsContainer, GameRow, TicketsRow } from './GameStyles'
import Ticket from './Components/Ticket'
import TicketMobile from './Components/TicketMobile'
import SectionHeader from './Components/SectionHeader'
import Payment from './Components/Payment'
import MostFrequentNumbers from './Components/MostFrequentNumbers'
import AddTickets from './Components/AddTickets'

import './Game.css'

import l from 'Intl'

export default class GameScreen extends Component {
  state = { isMobile: false }

  componentDidMount () {
    const { tutorial, tutorialUpdate } = this.props
    const { isStarted } = tutorial
    if (isStarted) {
      tutorialUpdate({ run: true, stepIndex: 7 })
    }

    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({ isMobile: document.documentElement.clientWidth <= 576 })
  }

  closeTicket = ({ id }) => {
    const { removeTicket } = this.props
    removeTicket(id)
  }

  fillAllTickets = () => {
    const { tickets } = this.props
    tickets.map(({ id }) => {
      const ticket = this[id]
      ticket.randomBalls(true)
    })
  }

  renderTicket = (ticket, index) => {
    const { tickets } = this.props
    const { isMobile } = this.state
    return (
      <Col sm={4} key={`tc:${index}`} id={`ticket-container-${index + 1}`}>
        {isMobile ? (
          <TicketMobile
            ticketsCount={tickets.length}
            ref={o => {
              this[ticket.id] = o
            }}
            ticketId={index + 1}
            {...this.props}
            {...ticket}
          />
        ) : (
          <Ticket
            ticketsCount={tickets.length}
            ref={o => {
              this[ticket.id] = o
            }}
            ticketId={index + 1}
            {...this.props}
            {...ticket}
          />
        )}
      </Col>
    )
  }

  renderTickets = () => {
    const { tickets } = this.props
    return <TicketsRow>{tickets.map(this.renderTicket)}</TicketsRow>
  }

  renderBack = () => {
    const { history } = this.props
    return (
      <Grid className='mb2 over-absolute'>
        <Row>
          <Col xs={12}>
            <FlexLeft className='mt1'>
              <RoundButton
                onClick={() => history.push('/')}
                arrowLeft
                style={{ marginLeft: '-1.1rem' }}>
                <div className='flex flex-left'>{l.t('game.backButton')}</div>
              </RoundButton>
            </FlexLeft>
          </Col>
        </Row>
      </Grid>
    )
  }

  render () {
    return (
      <ScreenWrapper backgroundColor={Colors.navyBlue}>
        <Header />
        {/* <BackgroundImage name='about' initialOpacity={0.9} /> */}
        {this.renderBack()}
        <SectionHeader onFill={this.fillAllTickets} />
        <Grid className='kal'>
          <GameRow>
            <Col lg={9} sm={12} xs={12}>
              {this.renderTickets()}
              <AddTicketsContainer>
                <AddTickets />
              </AddTicketsContainer>
              <SectionDivider />
            </Col>
            <Col lg={3} xs={12} className='relative'>
              <Payment />
            </Col>
          </GameRow>
          <GameRow>
            <Col lg={9} sm={12} xs={12}>
              <div id='freq-numbers'>
                <MostFrequentNumbers />
              </div>
            </Col>
            <Col lg={3} sm={12} xs={12} className='xs-hide sm-hide md-hide' />
          </GameRow>
        </Grid>
        <Footer />
      </ScreenWrapper>
    )
  }
}
