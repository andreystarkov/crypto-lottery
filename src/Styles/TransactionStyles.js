import styled from 'styled-components'
import { Colors } from 'Themes'
import { Th, Table } from 'Styles/TableStyles'

export const TransactionsTable = styled(Table)`
  table-layout: fixed;
`

export const TableHead = styled(Th)`
  font-size: 0.8rem;
`

export const TableLink = styled.a`
  text-decoration: none;
  color: ${Colors.lightBlue};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 8rem;
  display: block;
`
