import React, { Component } from 'react'

import { Tooltip } from 'Components'

import {
  ManagerWrapper,
  ManagerTitle,
  ManagerContent
} from './../LotteryStatisticsStyles'

import {
  Subtitle
} from 'Styles/OperatorPanelStyles'

import ManagerSet from './ManagerSet'
import ManagerEdit from './ManagerEdit'
import ManagerFill from './ManagerFill'

import l from 'Intl'

export default class StatisticsManager extends Component {
  render = () => {
    return (
      <ManagerWrapper>
        <ManagerTitle>
          <Subtitle>{l.t('operatorPanel.lotteryStatistics.manager.title')}</Subtitle>
          <Tooltip
            tooltipID='managerTooltip'
            marginLeft='0.3rem'
            place='right'
            tooltipText={l.t('operatorPanel.lotteryStatistics.manager.tooltip')}
          />
        </ManagerTitle>
        <ManagerContent>
          {/* <ManagerSet /> */}
          <ManagerFill />
          {/* <ManagerEdit /> */}
        </ManagerContent>
      </ManagerWrapper>
    )
  }
}
