import React, { Component } from 'react'

import moment from 'moment'
import { TransactionsTable, Head, TableLink } from './TransactionsStyles'
import { Td, Tbody, Tr, Thead } from 'Styles/TableStyles'
import { Colors } from 'Themes'

import EthConfig from 'Config/Eth'
import l from 'Intl'

const { transactionUrl } = EthConfig

export default class Transactions extends Component {
  renderTable = ({ transactionId, name, amount, date }, key) => (
    <Tr key={key}>
      <Td>
        <TableLink target='_blank' href={`${transactionUrl}${transactionId}`}>
          {transactionId}
        </TableLink>
      </Td>
      <Td color={Colors.lightGrey}>{moment(date).format('DD.MM.YYYY')}</Td>
      <Td right color={Colors.lightGrey}>
        {amount} ETH
      </Td>
    </Tr>
  )

  render () {
    const { data, full } = this.props
    return (
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
    )
  }
}
