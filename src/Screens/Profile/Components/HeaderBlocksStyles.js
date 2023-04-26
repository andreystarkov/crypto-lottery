import styled from 'styled-components'
import { Col, Row } from 'react-styled-flexboxgrid'
import { Colors } from 'Themes'
import { media } from 'Utils/Media'

export const Block = styled.div`
  background-color: ${Colors.menuBlue};
  padding: 1.5rem 1.2rem;
  border-radius: 4px;
`

export const BlockTitle = styled.div`
  display: block;
  color: ${Colors.purpleGrey};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-transform: uppercase;
`

export const BlockValue = styled.div`
  display: inline-block;
  color: ${Colors.lightOrange};
  font-size: 2.125rem;
  font-weight: 400;
  line-height: 2.75rem;

  ${media.between('xs', 'sm')`
    font-size: 1.5rem;
  `}
`

export const BlockCurrency = styled(BlockValue)`
  opacity: 0.5;
  margin-left: 0.5rem;
`

export const Img = styled.img`
  opacity: 1;
`

export const BlockRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

export const BlockCol = styled(Col)``
export const BlockColImage = styled(BlockCol)`
`
