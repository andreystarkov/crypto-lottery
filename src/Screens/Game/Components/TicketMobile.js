import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ZoomIn, FadeInDown, FadeIn } from 'Animation/Animated'
import { removeTicketAnimation } from 'Animation/Tickets'
import {
  TicketContainer,
  BallButton,
  EraseIcon,
  RandomIcon,
  CloseButton
} from 'Styles/TicketStyles'

import {
  ExpandButton,
  TitleButtons,
  TicketTitle,
  TitleButton,
  TicketHeader,
  TicketTitleActive,
  NumbersList,
  NumberItem,
  TicketContentContainer
} from 'Styles/TicketMobileStyles'

import Picker from 'rmc-picker/es/Picker'
import MultiPicker from 'rmc-picker/es/MultiPicker'

import { powerNumbers, whiteNumbers } from 'Utils/Tickets'
import { random, randomArray } from 'Utils'
import {
  WHITE_BALLS_MAX_SELECT,
  WHITE_BALLS_LIMIT,
  POWER_BALLS_LIMIT
} from 'Constants/Tickets'

import l from 'Intl'

const TicketTitleAnimated = ({ children }) => (
  <FadeIn delay={0.35} duration={0.5}>
    <TicketTitle>{children}</TicketTitle>
  </FadeIn>
)

const TicketTitleActiveAnimated = props => {
  const { children } = props
  return (
    <FadeIn {...props} delay={0.35} duration={0.5}>
      <TicketTitleActive>{children}</TicketTitleActive>
    </FadeIn>
  )
}

const FilledMark = () => (
  <FadeInDown>
    <BallButton />
  </FadeInDown>
)

const INITIAL_STATE = {
  expanded: false
}

const DEFAULT = 0
const DEFAULT_LABEL = '_'

export default class TicketMobile extends Component {
  static propTypes = {
    whiteSelected: PropTypes.array,
    powerSelected: PropTypes.number,
    tickets: PropTypes.array.isRequired,
    ticketId: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    updateTicket: PropTypes.func.isRequired,
    removeTicket: PropTypes.func.isRequired,
    clearTicket: PropTypes.func.isRequired
  }
  state = INITIAL_STATE

  toggleExpanded = () => {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
  }

  renderNumber = (num, key) => {
    const selected = key === WHITE_BALLS_MAX_SELECT
    return (
      <NumberItem selected={selected} key={`number:${key}`}>
        {num === DEFAULT ? DEFAULT_LABEL : num}
      </NumberItem>
    )
  }

  getChoseNumbers = () => {
    const { whiteSelected, powerSelected } = this.props

    let choseNumbers = [DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, powerSelected | DEFAULT]
    for (let i = 0; i < WHITE_BALLS_MAX_SELECT; i++) {
      choseNumbers[i] = whiteSelected[i] | DEFAULT
    }

    return choseNumbers
  }

  renderNumbers = () => {
    const choseNumbers = this.getChoseNumbers()
    return <NumbersList onClick={this.toggleExpanded}>{choseNumbers.map(this.renderNumber)}</NumbersList>
  }

  renderItem = (num, key) => {
    return (
      <Picker.Item key={`picker-item:${key}`} value={num}>
        {num === DEFAULT ? DEFAULT_LABEL : num}
      </Picker.Item>
    )
  }

  pickedValue = value => {
    this.updateTicket({
      whiteSelected: value.slice(0, WHITE_BALLS_MAX_SELECT),
      powerSelected: value[WHITE_BALLS_MAX_SELECT]
    })

    this.setState({ choseNumbers: value })
  }

  updateTicket = params => {
    const { updateTicket, id } = this.props
    const updated = { id, ...params }
    updateTicket(updated)
  }

  renderPicker = (nums, index) => {
    return <Picker key={`picker:${index}`}>{nums.map(this.renderItem)}</Picker>
  }

  renderPickers = () => {
    const defaultWhite = [DEFAULT, ...whiteNumbers]
    const defaultPower = [DEFAULT, ...powerNumbers]
    const numbers = [
      defaultWhite,
      defaultWhite,
      defaultWhite,
      defaultWhite,
      defaultWhite,
      defaultPower
    ]

    const choseNumbers = this.getChoseNumbers()
    return (
      <MultiPicker
        selectedValue={choseNumbers}
        onValueChange={this.pickedValue}>
        {numbers.map(this.renderPicker)}
      </MultiPicker>
    )
  }

  renderTitle = () => {
    const { whiteSelected } = this.props
    const white = whiteSelected.filter(num => num !== DEFAULT)
    const isSelectedAll = white.length === WHITE_BALLS_MAX_SELECT
    const leftToChoose = WHITE_BALLS_MAX_SELECT - white.length
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

  renderHeader = () => {
    const { whiteSelected, powerSelected } = this.props
    const isSelected = whiteSelected.length > 0 || powerSelected !== null
    const { expanded } = this.state
    return (
      <TicketHeader>
        <TitleButtons>
          <ExpandButton
            expanded={expanded ? 1 : 0}
            onClick={this.toggleExpanded}
          />
        </TitleButtons>
        {expanded ? (
          <TicketTitleActiveAnimated onClick={this.toggleExpanded}>
            {l.t('getTickets.save')}
          </TicketTitleActiveAnimated>
        ) : (
          this.renderTitle()
        )}
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

  resetBalls = () => {
    const { clearTicket, id } = this.props
    clearTicket(id)
  }

  randomBalls = isAll => {
    this.updateTicket({
      whiteSelected: randomArray(WHITE_BALLS_MAX_SELECT, WHITE_BALLS_LIMIT),
      powerSelected: random(1, POWER_BALLS_LIMIT)
    })
  }

  render () {
    const { expanded } = this.state

    return (
      <TicketContainer>
        {this.renderCloseButton()}
        <TicketContentContainer>
          {this.renderHeader()}
          {expanded ? this.renderPickers() : this.renderNumbers()}
        </TicketContentContainer>
      </TicketContainer>
    )
  }
}
