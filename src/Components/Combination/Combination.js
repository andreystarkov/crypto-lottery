import React from 'react'
import { Ball } from 'Styles/MainStyles'

export default class Combination extends React.Component {
  renderCombination = (num, index, combination) => {
    const { winNumbers } = this.props
    let isWin = false
    let isPower = index === combination.length - 1
    if (winNumbers) {
      isPower = false
      isWin = winNumbers.includes(num)
    }
    return (
      <Ball
        key={`${index}${combination.join('')}`}
        win={isWin}
        power={isPower}>
        {num}
      </Ball>
    )
  }
  render () {
    const { combination, winNumbers, ...etc } = this.props
    return (
      <div className='flex flex-row items-center' {...etc}>
        {combination.map(this.renderCombination)}
      </div>
    )
  }
}
