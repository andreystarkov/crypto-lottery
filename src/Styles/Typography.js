import styled from 'styled-components'

import { Colors } from 'Themes'
import { media } from 'Utils/Media'

export const TextSection = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`

export const A = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: ${Colors.white};
`

export const Head = styled.span`
  display: block;
  color: ${Colors.white};
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: 400;
  text-align: ${props => props.align || 'left'};
  padding-right: ${props => props.paddingRight || 0};
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-left: ${props => props.marginLeft || '0'};
`

export const H1 = styled(Head)`
  font-size: 3rem;

  ${media.lessThan('sm')`
    font-size: 2.5rem;
    line-height: 3.125rem;
  `}
  ${media.lessThan('xs')`
    font-size: 1.875rem;
    line-height: 2.5rem;
  `}
`

export const H2 = styled(Head)`
  font-size: 2.1rem;
  line-height: 2.8rem;
  margin-bottom: ${props => props.margin ? '2rem' : '0'};

  ${media.lessThan('sm')`
    font-size: 1.875rem;
    line-height: 2.4rem;
  `}

  ${media.lessThan('xs')`
    font-size: 1.625rem;
    line-height: 1.875rem;
  `}
`

export const H3 = styled(Head)`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`

export const H4 = styled(Head)`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

export const Text = styled.span`
  font-size: ${props => props.fontSize || '0.9rem'};
  font-weight: 400;
  line-height: 1.6rem;
  color: ${props => props.color ? Colors[props.color] : Colors.text};
  text-align: ${props => props.align || 'left'};
  padding-right: ${props => props.paddingRight || 0};
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-left: ${props => props.marginLeft || '0'};
`

export const Paragraph = styled(Text)`
  margin-bottom: 1.1rem;
  display: block;

  ${media.lessThan('sm')`
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: -0.009rem;
  `}
`

export const Ph = Paragraph
export const P = Paragraph

export const P1 = styled(Paragraph)`
  color: ${Colors.text1};
  font-size: 1rem;
  line-height: 1.6rem;
`

export const TextHeader = styled(Text)`
  margin-top: 1.5rem;
  margin-bottom: 0.9rem;
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  color: ${Colors.white};
`

export const PH = TextHeader
