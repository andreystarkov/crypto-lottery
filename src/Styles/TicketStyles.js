import React from 'react'
import styled from 'styled-components'
import { Ball } from 'Styles/MainStyles'
import { Colors, Images, Gradients } from 'Themes'
import { ZoomIn } from 'Animation/Animated'
import { media } from 'Utils/Media'

export const CloseIcon = (props) => <div {...props}><ZoomIn><img src={Images.icons.ticketClose} /></ZoomIn></div>

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  right: -0.8rem;
  top: -0.8rem;
  transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  cursor: pointer;
  &:hover {
    transform: scale(1.2)
  }
`

export const TicketDivider = (props) => (
  <TicketDividerContainer>
    <TicketDividerDots />
    <DividerCircle left />
    <DividerCircle right />
  </TicketDividerContainer>
)

export const DividerCircle = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  background-color: ${Colors.navyBlue};
  border-radius: 2rem;
  ${props => props.left ? `
    left: -0.8rem;
  ` : `
    right: -0.8rem;
  `}
  top: 0rem;
`

export const TicketDividerContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 2rem;
  overflow: hidden;
`

export const TicketDividerDots = styled.div`
  border-style: dotted;
  border-color: ${Colors.navyBlue};
  border-image-source: url(${Images.dots});
  border-image-slice: 33% 33%;
  border-image-repeat: round;
  margin-top: 0.3rem;
  width: '100%';
  border-width: 0 0 0.8rem 0;
`

export const TicketContainer = styled.div`
  width: 100%;
  background-color: ${Colors.menuBlue};
  border-radius: 3px;
  position: relative;
  margin-bottom: 2rem;
`

export const TicketContentContainer = styled.div`
  padding: 0 0.875rem 0.875rem;
`

export const WhiteBalls = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: -0.5rem;
  margin-right: -0.5rem;
`

export const PowerBalls = styled(WhiteBalls)`
`
// cubic-bezier(0.25, 0.46, 0.45, 0.94);
export const WhiteBall = styled(Ball)`
  border-radius: 0.813rem;
  font-size: 0.875rem;
  line-height: 1.625rem;
  width: calc(100%/6 - 0.5rem);
  height: 1.625rem;

  ${media.between('sm', 'lg')`
    width: calc(100%/6 - 0.5rem);
    height: 1.625rem;
    line-height: 1.625rem;
  `}

  ${media.lessThan('sm')`
    width: calc(100%/5 - 0.5rem);
  `}

  position: relative;
  z-index: 2;

  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  cursor: pointer;
  -webkit-appearance: none;
  &:after {
    border-radius: inherit;
    background-image: ${Gradients.blue};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${props => props.selected ? '1' : 0};
    width: 100%;
    transition: opacity 0.45s;
    z-index: -100;
  }
  ${props => !props.selected && `
    &:hover {
      &:after {
        opacity: 0.4;
      }
    }
  `}
`

export const PowerBall = styled(WhiteBall)`
  background-color: ${Colors.navyBlue};
  &:after {
    background-image: ${Gradients.yellow};
  }
`

export const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${props => props.paddingTop || '0rem'};
  padding-bottom: ${props => props.paddingBottom || '0rem'};
  min-height: 1.75rem;
`

export const TicketTitle = styled.span`
  display: inline-block;
  color: #d8d8e3;
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
`

export const PowerTitle = styled(TicketTitle)`
  text-transform: none;
`

export const BallButton = styled.span`
  display: inline-block;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-top: 0.32rem;
  background: url(${Images.icons.checkmark}) center center no-repeat;
  background-size: 100% 100%;
`

export const btnIconStyles = {
  width: '1rem',
  height: '1rem'
}

export const EraseIcon = (props) => (
  <img style={btnIconStyles} src={Images.icons.eraseSmall} {...props} />
)

export const RandomIcon = (props) => <img style={btnIconStyles} src={Images.icons.diceSmall} {...props} />

export const TitleButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
export const FlexLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const TitleBtn = ({ children, ...etc }) => (<div {...etc}>{children}</div>)

export const TitleButton = styled(TitleBtn)`
  display: flex;
  height: 1rem;
  border-left: 1px solid #313150;
  padding-left: 0.5rem;
  padding-right: 0.5em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:first-child {
    border-left: none;
  }
  &:hover {
    opacity: 0.5;
  }
`
