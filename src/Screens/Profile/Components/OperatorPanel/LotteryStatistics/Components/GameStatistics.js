import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  StatisticsBlock,
  StatisticsInfoList,
  StatisticsInfoItem,
  StatisticsInfoTitle,
  StatisticsInfoValue
} from './../LotteryStatisticsStyles'

import { Subtitle } from 'Styles/OperatorPanelStyles'

export default class GameStatistics extends Component {
  static propTypes = {
    subtitle: PropTypes.string,
    statistics: PropTypes.object
  }
  renderItem = item => {
    const { statistics } = this.props
    return (
      <StatisticsInfoItem key={item}>
        <StatisticsInfoTitle>{item}</StatisticsInfoTitle>
        <StatisticsInfoValue>{statistics[item]}</StatisticsInfoValue>
      </StatisticsInfoItem>
    )
  }
  render = () => {
    const { subtitle, statistics } = this.props
    return (
      <StatisticsBlock>
        <Subtitle>{subtitle}</Subtitle>
        <StatisticsInfoList>
          {Object.keys(statistics).map(item => this.renderItem(item))}
        </StatisticsInfoList>
      </StatisticsBlock>
    )
  }
}
