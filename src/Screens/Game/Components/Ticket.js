import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { random, randomArray, pushOrRemoveIfExists } from 'Utils'

import { ZoomIn, FadeInDown, FadeIn } from 'Animation/Animated'

import {
  TicketContainer,
  WhiteBalls,
  PowerBalls,
  WhiteBall,
  PowerBall,
  TicketHeader,
  TicketTitle,
  PowerTitle,
  BallButton,
  TitleButtons,
  TitleButton,
  EraseIcon,
  RandomIcon,
  TicketDivider,
  CloseButton,
  FlexLeft,
  TicketContentContainer
} from 'Styles/TicketStyles'

import { powerNumbers, whiteNumbers, randomWhiteNumbers } from 'Utils/Tickets'
import { removeTicketAnimation } from 'Animation/Tickets'

import l from 'Intl'

import {
  WHITE_BALLS_LIMIT, WHITE_BALLS_MAX_SELECT,
  POWER_BALLS_LIMIT,
  RANDOM_ANIMATION_INTERVAL,
  RANDOM_ANIMATION_STEPS
} from 'Constants/Tickets'

const INITIAL_STATE = {
  randomWhite: [],
  randomPower: null,
  randomizing: false
}

const PowerTitleAnimated = ({ children }) => (
  <ZoomIn delay={0.35}>
    <PowerTitle>{children}</PowerTitle>
  </ZoomIn>
)
const TicketTitleAnimated = ({ children }) => (
  <FadeIn delay={0.35} duration={0.5}>
    <TicketTitle>{children}</TicketTitle>
  </FadeIn>
)

const FilledMark = () => (
  <FadeInDown>
    <BallButton />
  </FadeInDown>
)

export default class Ticket extends Component {
  static propTypes = {
    visibility: PropTypes.object,
    clearTicket: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    updateTicket: PropTypes.func.isRequired,
    ticketsCount: PropTypes.number.isRequired,
    whiteSelected: PropTypes.array,
    powerSelected: PropTypes.number,
    ticketId: PropTypes.number.isRequired,
    removeTicket: PropTypes.func.isRequired,
    tickets: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)
    this.state = INITIAL_STATE
    this.interval = null
  }

  isVisible = () => {
    const { visibility } = this.props
    const { visibilityRect } = visibility
    const { top, bottom } = visibilityRect
    return top || bottom
  }

  resetBalls = () => {
    const { randomizing } = this.state
    if (randomizing) this.stopRandomizing()
    const { clearTicket, id } = this.props
    clearTicket(id)
  }

  stopRandomizing = () => {
    clearInterval(this.interval)
    const { randomPower, randomWhite } = this.state
    this.updateTicket({
      whiteSelected: randomWhite,
      powerSelected: randomPower
    })
    setTimeout(() => this.setState(INITIAL_STATE), RANDOM_ANIMATION_INTERVAL)
  }

  updateTicket = params => {
    const { updateTicket, id } = this.props
    const updated = { id, ...params }
    updateTicket(updated)
  }

  randomBalls = isAll => {
    const { ticketsCount } = this.props
    const { randomizing } = this.state
    let step = 0
    if (ticketsCount < 7) {
      if (randomizing) {
        step = RANDOM_ANIMATION_STEPS
        this.stopRandomizing()
      } else {
        this.interval = setInterval(() => {
          step += 1
          if (step === RANDOM_ANIMATION_STEPS) {
            this.stopRandomizing()
          } else {
            const randomWhite = randomWhiteNumbers()
            const randomPower = random(1, POWER_BALLS_LIMIT)
            this.setState({ randomWhite, randomPower, randomizing: true })
          }
        }, RANDOM_ANIMATION_INTERVAL)
      }
    } else {
      this.updateTicket({
        whiteSelected: randomArray(WHITE_BALLS_MAX_SELECT, WHITE_BALLS_LIMIT),
        powerSelected: random(1, POWER_BALLS_LIMIT)
      })
    }
  }

  toggleWhiteSelect = num => {
    const { whiteSelected } = this.props
    this.updateTicket({
      whiteSelected: pushOrRemoveIfExists(num, whiteSelected)
    })
  }

  togglePowerSelect = num => {
    const { powerSelected } = this.props
    this.updateTicket({
      powerSelected: num === powerSelected ? null : num
    })
  }

  renderWhiteBall = num => {
    const { whiteSelected, ticketId } = this.props
    const { randomizing, randomWhite } = this.state

    let isSelected = false

    if (randomizing) {
      isSelected = randomWhite.findIndex(f => f === num) > -1
    } else {
      isSelected = whiteSelected.findIndex(f => f === num) > -1
    }

    return (
      <WhiteBall
        key={`white:${num}`}
        id={`white-${num}`}
        randomizing={randomizing}
        className={`whiteball ${isSelected && 'whiteball-selected'} ${
          ticketId === 1 && num === 30 ? `tutorial-step-white` : ``
        }`}
        onClick={() => this.toggleWhiteSelect(num)}
        selected={isSelected}>
        {num}
      </WhiteBall>
    )
  }

  renderPowerBall = num => {
    const { powerSelected } = this.props
    const { randomizing, randomPower } = this.state

    let isSelected = false

    if (randomizing) {
      isSelected = randomPower === num
    } else {
      isSelected = powerSelected === num
    }

    return (
      <PowerBall
        key={`power:${num}`}
        id={`white-${num}`}
        randomizing={randomizing}
        className={`powerball ${isSelected && 'powerball-selected'} ${
          num === 12 ? 'tutorial-step-power' : ``
        }`}
        onClick={() => this.togglePowerSelect(num)}
        selected={isSelected}>
        {num}
      </PowerBall>
    )
  }

  renderTitle = () => {
    const { whiteSelected } = this.props
    const isSelectedAll = whiteSelected.length === WHITE_BALLS_MAX_SELECT
    const leftToChoose = WHITE_BALLS_MAX_SELECT - whiteSelected.length
    return !isSelectedAll ? (
      <TicketTitleAnimated>
        {l.t('getTickets.choose')} {leftToChoose}{' '}
        {leftToChoose === WHITE_BALLS_MAX_SELECT
          ? l.t('getTickets.numbers')
          : leftToChoose === 1
            ? l.t('getTickets.number')
            : l.t('getTickets.numbers2')}
      </TicketTitleAnimated>
    ) : (
      <FilledMark />
    )
  }

  renderPowerTitle = () => {
    const { powerSelected } = this.props
    const isSelected = powerSelected !== null
    return (
      <TicketHeader paddingBottom='0.2rem'>
        <FlexLeft>
          {!isSelected ? (
            <PowerTitleAnimated>{l.t('getTickets.choose1')}</PowerTitleAnimated>
          ) : (
            <FilledMark />
          )}
        </FlexLeft>
      </TicketHeader>
    )
  }

  renderHeader = () => {
    const { whiteSelected, powerSelected } = this.props
    const isSelected = whiteSelected.length > 0 || powerSelected !== null
    return (
      <TicketHeader>
        <div style={{ flex: '1' }}>{this.renderTitle()}</div>
        <TitleButtons>
          {isSelected && (
            <ZoomIn delay={0.33}>
              <TitleButton onClick={this.resetBalls}>
                <EraseIcon />
              </TitleButton>
            </ZoomIn>
          )}
          <TitleButton onClick={this.randomBalls}>
            <RandomIcon />
          </TitleButton>
        </TitleButtons>
      </TicketHeader>
    )
  }

  closeTicket = () => {
    const { removeTicket, id } = this.props
    if (removeTicket) removeTicket(id)
  }

  closeTicket = () => {
    const { removeTicket, id, tickets, ticketId } = this.props
    removeTicketAnimation(tickets.length, () => removeTicket(id), ticketId)
  }

  renderCloseButton = () => {
    const { tickets } = this.props
    return tickets.length > 1 && <CloseButton onClick={this.closeTicket} />
  }

  render () {
    return (
      <TicketContainer>
        {this.renderCloseButton()}
        <TicketContentContainer style={{ paddingTop: '1rem' }}>
          {this.renderHeader()}
          <WhiteBalls>{whiteNumbers.map(this.renderWhiteBall)}</WhiteBalls>
        </TicketContentContainer>
        <TicketDivider />
        <TicketContentContainer>
          {this.renderPowerTitle()}
          <PowerBalls>{powerNumbers.map(this.renderPowerBall)}</PowerBalls>
        </TicketContentContainer>
      </TicketContainer>
    )
  }
}
