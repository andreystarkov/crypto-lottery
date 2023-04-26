import styled from 'styled-components'
import { media } from 'Utils/Media'
import { Colors, Gradients } from 'Themes'
import { Col } from 'react-styled-flexboxgrid'
import { Th, Td } from 'Styles/TableStyles'

export const ScreenText = styled.span`
  display: block;
  font-size: 1rem;
  color: ${Colors.text1};
  line-height: 1.45rem;
  margin-top: 2rem;
`

export const RuleText = styled(ScreenText)`
  color: ${Colors.white};
  text-align: center;

  ${media.lessThan('sm')`
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.009rem;
    font-size: 0.875rem;
    margin-top: 0;
  `};
`

export const RulesGrid = styled.div`
  margin-top: 0rem;
  margin-bottom: 0rem;
`

export const RuleBlock = styled.div`
  padding: 2rem 2.5rem;
  display: flex;
  position: relative;
  flex-direction: column;

  ${media.lessThan('sm')`
    padding: 1.25rem 1.625rem;
  `} ${media.lessThan('xs')`
    padding: 1.25rem 0;
  `};
`

export const RuleIcon = styled.div`
  background-image: url(${props => require(`Images/BigIcons/${props.icon}.png`)});
  width: 4rem;
  height: 4rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`

export const RuleNumber = styled.div`
  background-image: url(${props => require(`Images/Icons/number-${props.number}.png`)});
  width: 1.5rem;
  height: 2rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto;
  position: absolute;
  left: 2rem;
  top: 2rem;

  ${media.lessThan('xs')`
    left: 0.75rem;
    top: 0.75rem;
  `};
`

export const IconWrap = styled.div`
  display: flex;
  height: 7rem;
  align-items: center;
  justify-content: center;
`

export const RuleCol = styled(Col)`
  position: relative;

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    right: 0;
  }

  background-size: 1px 100%;

  ${media.greaterThan('xs')`
    background-image: ${Gradients.borderTop};

    &::after {
        background-color: #333363;
    }

    &:nth-child(1) {
      &::after {
        background-image: ${Gradients.bottomLeft};
        background-color: transparent;
      }
    }

    &:nth-child(3) {
      &::after {
        background-image: ${Gradients.bottomRight};
        background-color: transparent;
      }
    }

    &:nth-last-child(-n+3) {
      background-image: ${Gradients.borderBottom};

      &::after {
        display: none;
      }
    }
  `} ${media.lessThan('xs')`
    flex-basis: 50%;
    max-width: 50%;

    background-image: ${Gradients.borderCenter};

    &:after {
      background-image: ${Gradients.bottomLeft};
    }

    &:nth-child(even) {
      &:after {
        background-image: ${Gradients.bottomRight};
      }
    }

    &:nth-child(-n+2) {
      background-image: ${Gradients.borderTop};
    }

    &:nth-last-child(-n+2) {
      background-image: ${Gradients.borderBottom};

      &::after {
        display: none;
      }
    }
  `};
`
export const MobileCol = styled(Col)`
  ${media.lessThan('xs')`
    width: 100%;
    padding-bottom: 2rem;
  `};
`

export const TableCell = styled(Td)`
  text-align: center;
  &:first-child {
    text-align: left;
  }
`

export const TableHead = styled(Th)`
  font-size: 0.8rem;
  text-align: center;
  &:first-child {
    text-align: left;
  }
`

export const Balls = styled.div`
  width: 7.5rem;
  text-align: right;
`

export const GrandPrize = styled.a`
  text-transform: uppercase;
  color: #ffaf36;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;

  ${media.lessThan('sm')`
    display: block;
    border-radius: 0.938rem;
    line-height: 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    border: 2px solid #ffaf36;
    padding-top: 3px;
    padding-bottom: 5px;
  `};
`

export const Blue = styled.span`
  display: inline-block;
  height: 1rem;
  border-radius: 2rem;
  width: 1rem;
  margin-right: 0.3rem;
  opacity: ${props => (props.no ? 0 : 1)};
  background-image: linear-gradient(135deg, #0091f8 0%, #6942ef 100%);
`

export const Yellow = styled(Blue)`
  background-image: linear-gradient(135deg, #ffb037 0%, #f7841d 100%);
`
