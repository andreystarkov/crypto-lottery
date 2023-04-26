import React, { Component } from 'react'

import { Table, Th, Td, Tbody, Tr, Thead } from 'Styles/TableStyles'

import { toBET } from 'Utils/Eth'
import { formatUnix } from 'Utils/Date'
import { TableLink } from './TransactionsTableStyles'
import EthConfig from 'Config/Eth'

import l from 'Intl'

const { transactionUrl } = EthConfig

export default class TransactionsTable extends Component {
  renderTable = ({ hash, value, timeStamp }, key) => (
    <Tr key={key}>
      <Td width='8rem'>
        <TableLink target='_blank' href={`${transactionUrl}${hash}`}>
          {hash}
        </TableLink>
      </Td>
      {/* <Td width='100%'>{name}</Td> */}
      <Td>{formatUnix(timeStamp)}</Td>
      <Td right>{toBET(value)} BET</Td>
    </Tr>
  )

  render () {
    const { data, full } = this.props
    return (
      <Table>
        <Tbody>
          <Thead full={full}>
            <Th width='8rem'>{l.t('main.tx.txId')}</Th>
            {/* <Th width='100%'>User Name</Th> */}
            <Th>{l.t('main.draw.date')}</Th>
            <Th right>{l.t('main.tx.amount')}</Th>
          </Thead>
          {data && data.filter((f, i) => i < 4).map(this.renderTable)}
        </Tbody>
      </Table>
    )
  }
}
