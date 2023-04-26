import styled from 'styled-components'

import { Colors } from 'Themes'

export const Table = styled.table`
  width: 100%;
  ${props => props.fixed && `
    table-layout: fixed;
  `}
`

export const Th = styled.th`
  color: ${Colors.purpleGrey};
  opacity: 0.5;
  text-transform: uppercase;
  text-align: ${props => props.right ? 'right' : 'left'};
  font-size: 0.88rem;
  font-weight: 500;
  padding: 0.65rem 1rem;
  white-space: nowrap;
  ${props => props.width ? `width: ${props.width};` : `width: 100%;`}
  overflow: hidden;
  text-overflow: ellipsis;
  &:first-child {
    padding-left: 1.8rem;
  }
`

export const Td = styled.td`
  color: ${props => props.color || Colors.lightGrey};
  text-align: ${props => props.right ? 'right' : 'left'};
  font-size: 0.88rem;
  font-weight: 600;
  height: 3.25rem;
  padding: 0.65rem 1rem;
  white-space: nowrap;
  ${props => props.width ? `width: ${props.width};` : `width: 100%;`}
  overflow: hidden;
  text-overflow: ellipsis;
  &:first-child {
    padding-left: 1.8rem;
  }
`

export const Tbody = styled.tbody`
  color: #fff;
`
export const Tr = styled.tr`
  border-bottom: 2px solid ${Colors.navyBlue};
  background: ${props => props.background ? props.background : 'transparent'}
`

export const Thead = styled.tr`
  ${props => props.full ? `
    height: 3.2rem;
    border-bottom: 2px solid ${Colors.navyBlue};
  ` : `
    border-bottom: 2px solid #313152;
  `}
  background: ${props => props.background ? props.background : 'transparent'}
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