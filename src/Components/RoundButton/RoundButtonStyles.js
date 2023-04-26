import styled from 'styled-components'

import Color from 'color'

import { Colors, Images, Metrics } from 'Themes'

export const Button = styled.span`
  display: inline-block;
  padding: ${props => props.padding || Metrics.roundButton.paddingBorder};
  border-radius: ${props => props.borderRadius || Metrics.roundButton.borderRadius};
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  box-sizing: border-box;
  border: 2px solid rgba(0,0,0,0);
  ${props => props.color && props.border ? `
    border-color: ${props.color};
    color: ${props.color};
    border-width: 2px;
    border-style: solid;
  ` : `
    color: ${Colors.purpleGrey}
  `};
  ${props => props.textColor ? `
    color: ${props.textColor};
  ` : ``}
  font-size: ${props => props.fontSize || '0.9rem'};
  line-height: ${props => props.lineHeight || '1rem'};
  transition: 0.4s cubic-bezier(0.68, -0.65, 0.365, 1.55);
  ${props => props.style ? props.style : ''}
  ${props => props.arrowRight ? `
    background: url(${Images.buttonArrowRight}) right 1rem center no-repeat;
    padding-right: 2rem;
  ` : ''}
  ${props => props.arrowLeft ? `
    background: url(${Images.icons.angleLeft}) left 1rem center no-repeat;
    padding-left: 2rem;
    text-align: left;
  ` : ''}
  &:hover {
    ${props => props.color ? `
      background-color: ${props.color};
      color: ${props.hoverTextColor || '#fff'};
    ` : `
      color: ${Color(Colors.purpleGrey).lighten(0.4)};
      border: 2px solid ${Color(Colors.purpleGrey).lighten(0.4)}
    `}
  }
`
