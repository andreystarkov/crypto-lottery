import React, { Component } from 'react'

// import moment from 'moment'
import { Ball } from './DrawsTableStyles'

import { FlexRow } from 'Styles/CommonStyles'
import { Table, Th, Td, Tbody, Tr, Thead } from 'Styles/TableStyles'

import { prepareTicketNumbers } from 'Utils/Tickets'

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

  renderTable = ({ drawId, jackpotDraws, ticketsDraws, winnersDraws, combination }, key) => {
    const numbers = prepareTicketNumbers(combination)
    return <Tr key={key}>
      <Td>{drawId}</Td>
      <Td>{jackpotDraws}</Td>
      <Td>{winnersDraws}</Td>
      <Td>{ticketsDraws}</Td>
      <Td right>
        <FlexRow justifyContent={'flex-end'}>
          {numbers && numbers[0] && numbers[0] !== 0 ? numbers.map(this.renderCombination) : '-'}
        </FlexRow>
      </Td>
    </Tr>
  }

  render () {
    const { data, full } = this.props
    return (
      <Table fixed={full} style={{ overflow: 'hidden' }}>
        <Tbody>
          <Thead full={full}>
            <Th>Draw</Th>
            <Th>Jackpot</Th>
            <Th>Winners</Th>
            <Th>Tickets</Th>
            <Th right>Combination</Th>
          </Thead>
          {data.map(this.renderTable)}
        </Tbody>
      </Table>
    )
  }
}
