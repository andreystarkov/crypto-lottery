import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  GameStatusField,
  GameStatusButtonWrapper,
  GameStatusButton,
  GameStatusDot,
  GameStatusOdometer
} from '../LotteryStatisticsStyles'

import { Odometer } from 'Components'

export default class GameStatusItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    active: PropTypes.bool,
    progress: PropTypes.string
  }
  render = () => {
    const { name, value, active } = this.props
    return (
      <GameStatusField active={active}>
        <GameStatusButtonWrapper>
          <GameStatusDot />
          <GameStatusButton>{name}</GameStatusButton>
        </GameStatusButtonWrapper>
        <GameStatusOdometer className={active ? 'odometer_small' : 'odometer_small odometer_disabled'}>
          <Odometer value={value} />
        </GameStatusOdometer>
      </GameStatusField>
    )
  }
}
