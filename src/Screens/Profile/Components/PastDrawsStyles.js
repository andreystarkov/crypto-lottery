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

export const JackpotButtonContainer = styled.span`
  display: inline-block;
  padding: 0.3rem 0.5rem;
  color: ${Colors.orange};
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
`

export const PrizeButtonContainer = styled.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  border-radius: 2rem;
  color: ${Colors.white};
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  background-image: linear-gradient(135deg, #0091f8 0%, #6942ef 100%);
  transition: all 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  &:hover {
    box-shadow: inset 0 -2px 7px rgba(255, 255, 255, 0.34);
  }
`
