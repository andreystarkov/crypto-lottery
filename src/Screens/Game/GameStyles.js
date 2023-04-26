import styled from 'styled-components'
import { media } from 'Utils/Media'
import { Row } from 'react-styled-flexboxgrid'

export const AddTicketsContainer = styled.div`
  ${media.greaterThan('lg')`
    display: none;
  `};
`

export const GameRow = styled(Row)`
  ${media.lessThan('xs')`
    flex-direction: column;
  `}
`
export const TicketsRow = styled(GameRow)`
  overflow: hidden;
  margin-bottom: -2rem;
  padding-top: 2rem;

  ${media.lessThan('xs')`
    padding-top: 1rem;
  `}
`
