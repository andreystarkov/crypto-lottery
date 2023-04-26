import styled from 'styled-components'
import { Table, Th } from 'Styles/TableStyles'
import { Colors } from 'Themes'

export const TransactionsTable = styled(Table)`
  table-layout: fixed;
`

export const Head = styled(Th)`
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
