import React, { Component } from 'react'

import { formatUnix } from 'Utils/Date'

import { FlexRow } from 'Styles/CommonStyles'
import { Table, Th, Td, Tbody, Tr, Thead, TableLink } from 'Styles/TableStyles'
import { RecentBetsBall } from 'Styles/MainStyles'

import EthConfig from 'Config/Eth'
import l from 'Intl'

const { addressUrl } = EthConfig

export default class RecentBetsTable extends Component {
  renderCombination = (num, index, combination) => {
    return (
      <RecentBetsBall
        key={index}
        power={index === combination.length - 1}>
        {num}
      </RecentBetsBall>
    )
  }

  renderTable = ({ ticketAccount, timestamp, date, ticketDraws, combination }, key) => (
    <Tr key={`rbt:${key}`} className='animated fadeIn'>
      <Td>
        <TableLink
          target='_blank'
          href={`${addressUrl}${ticketAccount}`}>
          {ticketAccount}
        </TableLink>
      </Td>
      <Td>{ticketDraws}</Td>
      <Td>{date}</Td>
      <Td right>
        <FlexRow justifyContent={'flex-end'}>
          {combination.map(this.renderCombination)}
        </FlexRow>
      </Td>
    </Tr>
  )

  render () {
    const { data, full } = this.props
    return (
      <Table fixed={full}>
        <Tbody>
          <Thead full={full}>
            <Th>{l.t('main.draw.openkey')}</Th>
            <Th>{l.t('profile.draw')}</Th>
            <Th>{l.t('profile.date')}</Th>
            <Th right>{l.t('profile.combination')}</Th>
          </Thead>
          {data.map(this.renderTable)}
        </Tbody>
      </Table>
    )
  }
}
