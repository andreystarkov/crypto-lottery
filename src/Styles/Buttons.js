import React from 'react'
import styled from 'styled-components'

import Color from 'color'
import { Colors, Metrics, Images, Gradients } from 'Themes'
import { GradientButton, RoundButton } from 'Components'

import { media } from 'Utils/Media'

export const ButtonRound = styled.span`
  display: inline-block;
  padding: ${props => props.padding || Metrics.roundButton.paddingBorder};
  border-radius: ${props =>
    props.borderRadius || Metrics.roundButton.borderRadius};
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  box-sizing: border-box;
  border: 0.125rem solid rgba(0,0,0,0);
  ${props =>
    props.color && props.border
      ? `
    border-color: ${props.color};
    color: ${props.color};
    border-width: 0.125rem;
    border-style: solid;
  `
      : `
    color: ${Colors.purpleGrey}
  `};
  ${props =>
    props.textColor
      ? `
    color: ${props.textColor}
  `
      : ``}
  font-size: 0.9rem;
  line-height: 1rem;
  transition: 0.4s cubic-bezier(0.68, -0.65, 0.365, 1.55);
  ${props => (props.style ? props.style : '')}
  ${props =>
    props.arrowRight
      ? `
    background: url(${Images.buttonArrowRight}) right 1rem center no-repeat;
    padding-right: 2rem;
  `
      : ''}
  ${props =>
    props.arrowLeft
      ? `
    background: url(${Images.icons.angleLeft}) left 1rem center no-repeat;
    padding-left: 2rem;
    text-align: left;
  `
      : ''}
  &:hover {
    ${props =>
    props.color
      ? `
      background-color: ${props.color};
      color: ${props.hoverTextColor || '#fff'};
    `
      : `
      color: ${Color(Colors.purpleGrey).lighten(0.4)};
      border: 0.125rem solid ${Color(Colors.purpleGrey).lighten(0.4)}
    `}
  }
`

export const ButtonBullet = styled.span`
  display: inline-block;
  margin-right: 1rem;
  background-color: ${Colors.grey1};
  width: 1rem;
  height: 1rem;
  border: 0.22rem solid ${Colors.grey1};
  border-radius: 2rem;
  transition: background-color 0.5s cubic-bezier(0.675, 0.82, 0.565, 1),
    border 0.8s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  ${media.lessThan('sm')`
    margin-right: 0.5rem;
  `};
`

export const ButtonTab = styled(ButtonRound)`
  position: relative;
  display: flex;
  flex: 40% 1 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 1.25rem;
  padding: 0.8rem 0.5rem;
  border: 0.125rem solid ${Colors.grey1};
  color: ${Colors.purpleGrey};
  transition: color 0.356s cubic-bezier(0.375, 0.82, 0.565, 1),
    border 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    z-index 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  z-index: 0;
  &:hover,
  &.active {
    border: 0.125rem solid ${Colors.lightBlue};
    color: ${Colors.lightBlue};
    z-index: 1;
    > ${ButtonBullet} {
      border: 0.22rem solid
        ${Color(Colors.lightBlue)
    .desaturate(0.4)
    .darken(0.5)
    .rgb()
    .toString()};
      background-color: ${Colors.lightBlue};
    }
  }

  &:last-child {
    margin-right: 0;
  }

  ${media.lessThan('sm')`
    margin-right: -0.125rem;
    font-size: 0.85rem;
    &:first-child {
      border-radius: 1.5625rem 0 0 1.5625rem;
    }
    &:last-child {
      border-radius: 0 1.5625rem 1.5625rem 0;
    }
  `};
`

export const TabButton = ({ children, active, ...etc }) => (
  <ButtonTab {...etc} className={active && 'active'}>
    <ButtonBullet />
    {children}
  </ButtonTab>
)

export const PaymentButton = styled(GradientButton)`
  display: block;
  width: '100%';
  text-align: center;
  color: ${Colors.white};
  font-size: 0.9rem;
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const BlueButton = ({ children, ...etc }) => (
  <PaymentButton gradient='blue' {...etc}>
    {children}
  </PaymentButton>
)

export const SmallHeightButton = styled(ButtonRound)`
  padding: 0.3rem 1rem 0.32rem;
  font-size: 0.75rem;
  line-height: normal;
  color: ${props => props.color || Colors.purpleGrey};
  background-color: transparent;
  border-color: ${props => props.borderColor || Colors.grey1};

  &:hover {
    color: ${props => props.hoverTextColor || '#fff'};
    ${props =>
    props.hoverBgColor
      ? `
      border-color: ${props.hoverBgColor};
      background-color: ${props.hoverBgColor};
    `
      : `
      border-color: ${Color(Colors.purpleGrey)};
      background-color: ${Color(Colors.purpleGrey)};
    `};
  }
`
export const ShortButton = ({ children, ...etc }) => (
  <SmallHeightButton {...etc}>{children}</SmallHeightButton>
)

export const MainBlueButton = styled(GradientButton)`
  display: block;
  padding: 1rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1rem;
  color: ${Colors.white};
  text-align: center;
  background-image: ${Gradients.blue};
  box-sizing: border-box;
  cursor: pointer;
  ${props =>
    props.disabled
      ? `
    background-image: ${Gradients.blue};
    opacity: 0.4;
    cursor: default;
  `
      : ''};
`

export const SecondaryGrayButton = styled(RoundButton)`
  display: block;
  padding: 0.875rem 0.75rem;
  font-size:  0.875rem;
  line-height: 1rem;
  text-align: center;
  border-color: ${Colors.grey1};
  box-sizing: border-box;
  cursor: pointer;
`
