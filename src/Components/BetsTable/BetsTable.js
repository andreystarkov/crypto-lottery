import React, { Component } from 'react'

import moment from 'moment'

import { FlexRow } from 'Styles/CommonStyles'
import { Table, Th, Td, Tbody, Tr, Thead } from 'Styles/TableStyles'
import { Ball } from './BetsTableStyles'
import l from 'Intl'

export default class BetsTable extends Component {
  renderCombination = (num, index, combination) => {
    return (
      <Ball key={index} power={index === combination.length - 1}>
        {num}
      </Ball>
    )
  }

  renderTable = ({ name, draw, date, combination, prize }, key) => (
    <Tr key={key}>
      <Td>{name}</Td>
      <Td>{draw}</Td>
      <Td>{moment(date).format('DD.MM.YYYY')}</Td>
      <Td right={!prize}>
        <FlexRow justifyContent={!prize && 'flex-end'}>
          {combination.map(this.renderCombination)}
        </FlexRow>
      </Td>
      {prize && <Td right>{prize} BET</Td>}
    </Tr>
  )

  render () {
    const { data, full } = this.props
    const isWinners = data && data.length > 0 && data[0] && data[0].prize
    return (
      <Table fixed={full}>
        <Tbody>
          <Thead full={full}>
            <Th>{l.t('profile.name')}</Th>
            <Th>{l.t('profile.draw')}</Th>
            <Th>{l.t('profile.date')}</Th>
            <Th right={!isWinners}>{l.t('profile.combination')}</Th>
            {isWinners && <Th right>{l.t('profile.prize')}</Th>}
          </Thead>
          {data.map(this.renderTable)}
        </Tbody>
      </Table>
    )
  }
}
