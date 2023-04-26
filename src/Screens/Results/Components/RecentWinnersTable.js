import React, { Component } from 'react'

import { FlexRow } from 'Styles/CommonStyles'
import { Table, Th, Td, Tbody, Tr, Thead, TableLink } from 'Styles/TableStyles'
import { formatUnix } from 'Utils/Date'

import l from 'Intl'

import EthConfig from 'Config/Eth'
const { addressUrl } = EthConfig

export default class RecentWinners extends Component {
  renderTable = ({ id, openkey, timestamp, reward }, key) => (
    <Tr key={`rwt:${key}`} className='animated fadeIn'>
      <Td>
        <TableLink target='_blank' href={`${addressUrl}${openkey}`}>
          {openkey}
        </TableLink>
      </Td>
      <Td>{id}</Td>
      <Td>{formatUnix(timestamp)}</Td>
      <Td right>
        <FlexRow justifyContent={'flex-end'}>{reward}</FlexRow>
      </Td>
    </Tr>
  )

  render () {
    const { data, full } = this.props
    return (
      <Table fixed={full}>
        <Tbody>
          <Thead full={full}>
            <Th>{l.t('profile.account')}</Th>
            <Th>{l.t('profile.winnerId')}</Th>
            <Th>{l.t('profile.date')}</Th>
            <Th right>{l.t('profile.reward')}</Th>
          </Thead>
          {data.map(this.renderTable)}
        </Tbody>
      </Table>
    )
  }
}
