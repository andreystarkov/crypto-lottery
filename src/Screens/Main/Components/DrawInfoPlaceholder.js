import React from 'react'
import { DrawItem, DrawCount, DrawDate, Ball, DrawInfoName, DrawInfoValue, DrawInfoTable } from 'Styles/MainStyles'

export default class DrawInfoPlaceholder extends React.PureComponent {
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
    let combination = [1, 2, 3, 4, 5, 6]
    return (
      <DrawItem style={{ opacity: 0.4 }}>
        <DrawDate>NEAR FUTURE</DrawDate>
        <DrawCount>COMING SOON</DrawCount>
        <div className='flex flex-row items-center'>
          {combination.map(this.renderCombination)}
        </div>
        <DrawInfoTable>
          <tbody>
            <tr>
              <td className='left-align'><DrawInfoName>Try</DrawInfoName></td>
              <td className='right-align'><DrawInfoValue></DrawInfoValue></td>
            </tr>
            <tr>
              <td className='left-align'><DrawInfoName>to play</DrawInfoName></td>
              <td className='right-align'><DrawInfoValue></DrawInfoValue></td>
            </tr>
            <tr>
              <td className='left-align'><DrawInfoName>and win</DrawInfoName></td>
              <td className='right-align'><DrawInfoValue></DrawInfoValue></td>
            </tr>
          </tbody>
        </DrawInfoTable>
      </DrawItem>
    )
  }
}
