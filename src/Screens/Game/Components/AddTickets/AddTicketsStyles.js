import styled from 'styled-components'
import { Colors } from 'Themes'
import { media } from 'Utils/Media'
import { Row, Col } from 'react-styled-flexboxgrid'

export const PanelContainer = styled.div`
  margin-top: 1.3rem;
  position: relative;
  padding: 0.8rem 1.4rem;
  border: 2px solid ${Colors.grey1};
  border-radius: 1.6rem;
`

export const PanelRow = styled(Row)`
  align-items: center;

  ${media.lessThan('xs')`
    justify-content: space-between;
  `}
`

export const PanelTitle = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${Colors.purpleGrey};
  white-space: nowrap;
  cursor: pointer;
`
export const TicketsMax = styled.div`
  text-align: right;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${Colors.purpleGrey};
`

export const TicketsControl = styled.span`
  display: inline-block;
`

export const TicketsMaxCol = styled(Col)`
  ${media.greaterThan('lg')`
    display: none;
  `}

  ${media.lessThan('xs')`
    display: none;
  `}
`
