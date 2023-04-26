import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GameStatusItem from './GameStatusItem'

import { StatisticsBlock, GameStatusWrapper, GameStatusProgress } from '../LotteryStatisticsStyles'

import { Subtitle } from 'Styles/OperatorPanelStyles'

export default class GameStatus extends Component {
  static propTypes = {
    subtitle: PropTypes.string,
    results: PropTypes.object
  }
  render = () => {
    const { subtitle, results } = this.props
    return (
      <StatisticsBlock>
        <Subtitle>{subtitle}</Subtitle>
        <GameStatusWrapper>
          <GameStatusProgress progress={'30%'} />
          {Object.keys(results).map(item => (
            <GameStatusItem
              key={item}
              name={item}
              value={results[item]}
              active={false}
            />
          ))}
        </GameStatusWrapper>
      </StatisticsBlock>
    )
  }
}
