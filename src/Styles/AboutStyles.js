import styled, { css } from 'styled-components'

import { Paragraph, P1, H2, H4 } from 'Styles/Typography'
import { Row, Col } from 'react-styled-flexboxgrid'

import { Colors } from 'Themes'
import { media } from 'Utils/Media'

export const P = styled(Paragraph)`
  color: ${Colors.text1};
`

export const AboutHeader = styled.div`
  text-align: center;
  padding-top: 0rem;
  padding-bottom: 22rem;
`

export const Cell = styled(Col)`
  padding-bottom: 2rem;

  ${media.greaterThan('md')`
    padding: 1rem 6rem 1rem 2rem;
    ${props => props.right && `
      padding-right: 1rem;
    `}
  `}
`

export const Num = styled(H4)`
  color: ${Colors.text1};
`

export const NumbersBlock = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 54rem;
  text-align: center;
  margin-top: 2rem;
  padding-bottom: 3.5rem;
`

export const NumbersTitle = styled(H2)`
  margin-top: 1rem;
  margin-bottom: 1.8rem;
  text-align: center;
  color: ${Colors.white};
`

export const NumbersText = styled(P1)`
  margin-bottom: 0;
  text-align: center;
  color: ${Colors.text1};
`

export const GradientBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 5.7rem;
  background-image: linear-gradient(135deg, #0091f8 0%, #6942ef 100%);
  border-radius: 4px;
  padding: 1.5rem 0rem;
`

export const BlockCell = styled(Col)`
`

export const BlockValue = styled(H4)`
  color: ${Colors.white};
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0;

  ${media.lessThan('sm')`
    font-size: 1.875rem;
    line-height: 3.125rem;
  `}
`

export const BlockText = styled(P)`
  text-transform: uppercase;
  text-align: center;
  color: ${Colors.white};
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 700;

${props => !props.last && css`
  ${media.lessThan(`xs`)`
    margin-bottom: 1.8rem;
    `}
  `}
`

export const AboutRow = styled(Row)`
  ${media.greaterThan('md')`
    margin: 0;
  `}

  ${media.lessThan('xs')`
    flex-direction: column;
  `}
`

export const AboutBox = styled.div`
  padding: 3.5rem 4.5rem 2rem;
  margin-bottom: 9rem;
  border-radius: 4px;
  background-color: ${Colors.menuBlue};

  ${media.lessThan('sm')`
    padding: 2.5rem 1.5rem;
  `}

  ${media.lessThan(`xs`)`
    padding: 2rem 1rem;
    padding-bottom: 10rem;
    margin-bottom: 11rem;
  `}
`
