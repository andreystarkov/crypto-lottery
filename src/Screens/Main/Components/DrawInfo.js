import React from 'react'
import { DrawItem, DrawCount, DrawDate, Ball, DrawInfoName, DrawInfoValue, DrawInfoTable } from 'Styles/MainStyles'
import l from 'Intl'
import { formatNumber } from 'Utils'

export default class DrawInfo extends React.PureComponent {
  renderCombination = (num, index, combination) => {
    return (
      <Ball
        key={index}
        power={index === combination.length - 1}>
        {num}
      </Ball>
    )
  }
  render () {
    const { date, combination, drawId, winnersDraws, ticketsDraws, jackpotDraws } = this.props
    return (
      <DrawItem>
        <DrawDate>{date}</DrawDate>
        <DrawCount>{formatNumber(jackpotDraws)} BET</DrawCount>
        <div className='flex flex-row items-center'>
          {combination.map(this.renderCombination)}
        </div>
        <DrawInfoTable>
          <tbody>
            <tr>
              <td className='left-align'><DrawInfoName>{l.t('main.draw.number')}</DrawInfoName></td>
              <td className='right-align'><DrawInfoValue>{formatNumber(drawId)}</DrawInfoValue></td>
            </tr>
            <tr>
              <td className='left-align'><DrawInfoName>{l.t('main.draw.sold')}</DrawInfoName></td>
              <td className='right-align'><DrawInfoValue>{formatNumber(ticketsDraws)}</DrawInfoValue></td>
            </tr>
            <tr>
              <td className='left-align'><DrawInfoName>{l.t('main.draw.winners')}</DrawInfoName></td>
              <td className='right-align'><DrawInfoValue>{formatNumber(winnersDraws)}</DrawInfoValue></td>
            </tr>
          </tbody>
        </DrawInfoTable>
      </DrawItem>
    )
  }
}
