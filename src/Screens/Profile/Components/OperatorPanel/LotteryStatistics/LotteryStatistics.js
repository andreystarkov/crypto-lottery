import React, { Component } from 'react'

import StatisticsHeader from './Components/StatisticsHeader'
import StatisticsManager from './Components/StatisticsManager'
import StatisticsMain from './Components/StatisticsMain'
import StatisticsFooter from './Components/StatisticsFooter'

import { OperatorPanelContainer } from './LotteryStatisticsStyles'

import l from 'Intl'
export default class LotteryStatistics extends Component {
  render () {
    const { lottery } = this.props
    return (
      <OperatorPanelContainer>
        <StatisticsHeader
          title={l.t('operatorPanel.lotteryStatistics.title')}
          openkey={'0x083061f7c7837270C67CCeCe36B1493DD527cBDD5'}
          link={'#'}
          currentBlock={lottery.currentBlock}
        />
        <StatisticsManager />
        <StatisticsMain
          gameSummary={{
            subtitle: l.t('operatorPanel.lotteryStatistics.subtitle1'),
            statistics: {
              [l.t('operatorPanel.lotteryStatistics.statistics1.text1')]: `20,00 BET`,
              [l.t('operatorPanel.lotteryStatistics.statistics1.text2')]: `${lottery.jackpot} BET`,
              [l.t('operatorPanel.lotteryStatistics.statistics1.text3')]: `6,00 BET`
            }
          }}
          gameSettings={{
            subtitle: l.t('operatorPanel.lotteryStatistics.subtitle2'),
            statistics: {
              [l.t('operatorPanel.lotteryStatistics.statistics2.text1')]: `${lottery.countOfDraws}`,
              [l.t('operatorPanel.lotteryStatistics.statistics2.text2')]: `${lottery.ticketPrice} BET`,
              [l.t('operatorPanel.lotteryStatistics.statistics2.text3')]: `2X`
            }
          }}
          ticketsSold={{
            subtitle: l.t('operatorPanel.lotteryStatistics.subtitle3'),
            value: '2 781',
            tooltip: false,
            icon: 'tickets'
          }}
          betsEarned={{
            subtitle: l.t('operatorPanel.lotteryStatistics.subtitle4'),
            value: '29 233',
            tooltipId: 'betsEarned',
            tooltip: true,
            tooltipText: l.t('operatorPanel.lotteryStatistics.tooltip4'),
            icon: 'square'
          }}
          gameStatus={{
            subtitle: l.t('operatorPanel.lotteryStatistics.subtitle5'),
            results: {
              [l.t('operatorPanel.lotteryStatistics.statistics5.text1')]: lottery.sellOverBlock,
              [l.t('operatorPanel.lotteryStatistics.statistics5.text2')]: lottery.blockForRandom,
              [l.t('operatorPanel.lotteryStatistics.statistics5.text3')]: 3984849,
              [l.t('operatorPanel.lotteryStatistics.statistics5.text4')]: lottery.closeLotteryBlock
            }
          }}
        />
        <StatisticsFooter
          subtitle={l.t('operatorPanel.lotteryStatistics.subtitle6')}
          combination={lottery.winNumbers}
        />
      </OperatorPanelContainer>
    )
  }
}
