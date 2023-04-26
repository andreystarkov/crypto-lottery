import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StatisticsMobRow, StatisticsMobCol, StatisticsMobHalfCol } from './../LotteryStatisticsStyles'

import GameStatistics from './GameStatistics'
import GameResult from './GameResult'
import GameStatus from './GameStatus'

export default class StatisticsMain extends Component {
  static propTypes = {
    gameSummary: PropTypes.shape({
      subtitle: PropTypes.string,
      statistics: PropTypes.object
    }),
    gameSettings: PropTypes.shape({
      subtitle: PropTypes.string,
      statistics: PropTypes.object
    }),
    ticketsSold: PropTypes.shape({
      subtitle: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      tooltip: PropTypes.bool,
      icon: PropTypes.string
    }),
    betsEarned: PropTypes.shape({
      subtitle: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      tooltip: PropTypes.bool,
      tooltipText: PropTypes.string,
      tooltipID: PropTypes.string,
      icon: PropTypes.string
    }),
    gameStatus: PropTypes.shape({
      subtitle: PropTypes.string,
      results: PropTypes.object
    })
  }
  render = () => {
    const {
      gameSummary,
      gameSettings,
      ticketsSold,
      betsEarned,
      gameStatus
    } = this.props
    return (
      <StatisticsMobRow>
        <StatisticsMobCol xs={12} sm={5} md={6} lg={7}>
          <GameStatistics
            subtitle={gameSummary.subtitle}
            statistics={gameSummary.statistics}
          />
          <GameStatistics
            subtitle={gameSettings.subtitle}
            statistics={gameSettings.statistics}
          />
        </StatisticsMobCol>
        <StatisticsMobCol xs={12} sm={7} md={6} lg={5}>
          <StatisticsMobRow>
            <StatisticsMobHalfCol xs>
              <GameResult
                subtitle={ticketsSold.subtitle}
                value={ticketsSold.value}
                tooltip={ticketsSold.tooltip}
                icon={ticketsSold.icon}
              />
            </StatisticsMobHalfCol>
            <StatisticsMobHalfCol xs>
              <GameResult
                subtitle={betsEarned.subtitle}
                value={betsEarned.value}
                tooltip={betsEarned.tooltip}
                tooltipText={betsEarned.tooltipText}
                tooltipID={betsEarned.tooltipID}
                icon={betsEarned.icon}
              />
            </StatisticsMobHalfCol>
          </StatisticsMobRow>
          <StatisticsMobRow>
            <StatisticsMobCol xs>
              <GameStatus
                subtitle={gameStatus.subtitle}
                results={gameStatus.results}
              />
            </StatisticsMobCol>
          </StatisticsMobRow>
        </StatisticsMobCol>
      </StatisticsMobRow>
    )
  }
}
