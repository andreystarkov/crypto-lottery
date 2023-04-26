import React, { Component } from 'react'
import { Footer } from 'Styles/OperatorPanelStyles'
import { FooterBigButton } from './../LotteryStatisticsStyles'

import l from 'Intl'

export default class FooterShowCombination extends Component {
  render = () => {
    return (
      <Footer>
        <FooterBigButton >
          {l.t('operatorPanel.lotteryStatistics.actionButton2')}
        </FooterBigButton>
      </Footer>
    )
  }
}
