import React, { Component } from 'react'
import { TransactionsTable, Head, TableLink } from './TxTableStyles'

import { Td, Tbody, Tr, Thead } from 'Styles/TableStyles'

import { Colors } from 'Themes'
import { Placeholder } from 'Components'

import { toBET } from 'Utils/Eth'
import { formatUnix } from 'Utils/Date'

import EthConfig from 'Config/Eth'
import l from 'Intl'

const { transactionUrl } = EthConfig

export default class TxTable extends Component {
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
    const { data, full, placeholder } = this.props
    return data && data.length > 0 ? (
      <TransactionsTable>
        <Tbody>
          <Thead full={full}>
            <Head width='50%'>{l.t('main.tx.txId')}</Head>
            <Head width='25%'>{l.t('profile.date')}</Head>
            <Head width='25%' right>
              {l.t('main.tx.amount')}
            </Head>
          </Thead>
          {data.map(this.renderTable)}
        </Tbody>
      </TransactionsTable>
    ) : (
      <Placeholder title={placeholder || 'No transactions'} />
    )
  }
}
