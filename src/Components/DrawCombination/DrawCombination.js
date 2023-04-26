import React from 'react'
import { Ball } from './DrawCombinationStyles'

export default class DrawCombination extends React.Component {
  renderCombination = (num, index, combination) => {
    const { winNumbers, showWinNumbers } = this.props
    const cutWb = (f, i) => i < 5
    let isPower = index === 5
    let isWhite = index < 5
    let isWin = false
    if (isPower && winNumbers[5] === num && showWinNumbers) {
      isWin = true
    }
    if (isWhite && winNumbers.filter(cutWb).includes(num) && showWinNumbers) {
      isWin = true
    }
    return (
      <Ball key={`${index}${combination.join('')}`} win={isWin} power={isPower}>
        {num}
      </Ball>
    )
  }
  render () {
    const { combination, winNumbers, showWinNumbers, ...etc } = this.props
    return (
      <div className='flex flex-row items-center' {...etc}>
        {combination.map(this.renderCombination)}
      </div>
    )
  }
}
