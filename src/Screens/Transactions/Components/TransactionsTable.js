import React, { Component } from 'react'

import moment from 'moment'

import { Td, Tbody, Tr, Thead } from 'Styles/TableStyles'
import {
  TransactionsTable,
  TableHead,
  TableLink
} from 'Styles/TransactionStyles'

import { Colors } from 'Themes'
import { toBET } from 'Utils/Eth'
import { formatUnix } from 'Utils/Date'
import EthConfig from 'Config/Eth'
import l from 'Intl'

const { transactionUrl } = EthConfig

export default class Transactions extends Component {
  renderTable = ({ hash, value, timeStamp }, key) => (
    <Tr key={key}>
      <Td>
        <TableLink target='_blank' href={`${transactionUrl}${hash}`}>
          {hash}
        </TableLink>
      </Td>
      <Td color={Colors.lightGrey}>{formatUnix(timeStamp)}</Td>
      <Td right color={Colors.lightGrey}>
        {toBET(value)} BET
      </Td>
    </Tr>
  )

  render () {
    const { data, full } = this.props
    return (
      <TransactionsTable>
        <Tbody>
          <Thead full={full}>
            <TableHead width='50%'>{l.t('main.tx.txId')}</TableHead>
            <TableHead width='25%'>{l.t('profile.date')}</TableHead>
            <TableHead width='25%' right>
              {l.t('main.tx.amount')}
            </TableHead>
          </Thead>
          {data.map(this.renderTable)}
        </Tbody>
      </TransactionsTable>
    )
  }
}
