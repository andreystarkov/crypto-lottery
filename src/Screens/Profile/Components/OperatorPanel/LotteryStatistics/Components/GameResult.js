import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Tooltip } from 'Components'

import {
  StatisticsBlock,
  GameResultTop,
  GameResultMain,
  GameResultValue,
  GameResultIcon
} from '../LotteryStatisticsStyles'

import { Subtitle } from 'Styles/OperatorPanelStyles'

export default class GameResult extends Component {
  static propTypes = {
    subtitle: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tooltip: PropTypes.bool,
    tooltipText: PropTypes.string,
    icon: PropTypes.string
  }
  rendertooltip = () => {
    const { tooltip, tooltipText, tooltipID } = this.props
    if (tooltip) return <Tooltip tooltipID={tooltipID} marginLeft='0.6875rem' place='top' tooltipText={tooltipText} />
  }
  render () {
    const { subtitle, value, icon } = this.props
    return (
      <StatisticsBlock>
        <GameResultTop>
          <Subtitle>{subtitle}</Subtitle>
          {this.rendertooltip()}
        </GameResultTop>
        <GameResultMain>
          <GameResultValue>{value}</GameResultValue>
          <GameResultIcon icon={icon} />
        </GameResultMain>
      </StatisticsBlock>
    )
  }
}
