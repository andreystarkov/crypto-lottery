import React, { Component } from 'react'

import styled from 'styled-components'

import { prepareLotteryTickets } from 'Utils/Tickets'
import { formatUnix } from 'Utils/Date'

import { FlexRow } from 'Styles/CommonStyles'
import { Table, Th, Td, Tbody, Tr, Thead, TableLink } from 'Styles/TableStyles'

import EthConfig from 'Config/Eth'
import { Colors } from 'Themes'

import l from 'Intl'

const { addressUrl } = EthConfig

export const Ball = styled.span`
  display: flex;
  width: 1.9rem;
  height: 1.9rem;
  align-items: center;
  justify-content: center;
  margin-left: 0.2rem;
  margin-right: 0.1rem;
  border-radius: 1.4rem;
  font-size: 0.9rem;
  ${props => props.power ? `
    background-image: linear-gradient(135deg, #ffb037 0%, #f7841d 100%);
    color ${Colors.white}
  ` : `
    background-color: rgba(255, 255, 255, 0.1);
    color: ${Colors.white}
  `}
  text-align: center;
  font-weight: 600;
`

export default class RecentBetsTable extends Component {
  renderCombination = (num, index, combination) => {
    return (
      <Ball
        key={index}
        power={index === combination.length - 1}>
        {num}
      </Ball>
    )
  }

  renderTable = ({ ticketAccount, date, ticketDraws, combination }, key) => (
    <Tr key={`rbt:${key}`} className='animated fadeIn'>
      <Td>
        <TableLink
          target='_blank'
          href={`${addressUrl}${ticketAccount}`}>
          {ticketAccount}
        </TableLink>
      </Td>
      {/* <Td>{ticketDraws}</Td>
      <Td>{formatUnix(timestamp)}</Td> */}
      <Td>{date}</Td>
      <Td right>
        <FlexRow justifyContent={'flex-end'}>
          {combination.map(this.renderCombination)}
        </FlexRow>
      </Td>
    </Tr>
  )

  render () {
    const { lotteryTickets, full } = this.props
    const bets = prepareLotteryTickets(lotteryTickets, 5)
    return (
      <Table fixed={full}>
        <Tbody>
          <Thead full={full}>
            <Th>{l.t('main.draw.openkey')}</Th>
            {/* <Th>Draw</Th> */}
            <Th>{l.t('main.draw.date')}</Th>
            <Th right>{l.t('main.draw.combination')}</Th>
          </Thead>
          {bets.map(this.renderTable)}
        </Tbody>
      </Table>
    )
  }
}
