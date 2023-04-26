import styled from 'styled-components'

import { Colors, Gradients, Metrics } from 'Themes'

import { media } from 'Utils/Media'

export const Button = styled.span`
  position: relative;
  ${props =>
    props.fullWidth
      ? `
    display: block;
    width: 100%;
  `
      : `
    display: inline-block;
  `}
  padding: ${props => props.padding || Metrics.roundButton.padding};
  font-size: ${props => props.fontSize || '1rem'};
  line-height: ${props => props.lineHeight || props.fontSize || '1rem'};
  font-weight: 600;
  color: ${props => Colors[props.color] || props.color || Colors.yellow};
  text-transform: uppercase;
  border: none;
  border-radius: ${props =>
    props.borderRadius || Metrics.roundButton.borderRadius};
  background-color: transparent;
  cursor: ${props => !props.disabled && 'pointer'};
  box-sizing: border-box;
  overflow: hidden;
  z-index: 2;
  transition: all 0.4s cubic-bezier(.17,.77,.68,.44), color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    background-image:  ${props =>
    Gradients[props.gradient] ||
      props.gradient ||
      'linear-gradient(90deg, #008cff 0%, #6942ef 100%)'};
    transform-origin: center;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.4s cubic-bezier(.17,.77,.68,.44);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-width: ${props => props.borderWidth || '0.125rem'};
    border-style: solid;
    border-color: transparent;
    background-image: 
      linear-gradient(${props =>
    Colors[props.backgroundColor] || props.backgroundColor},
                      ${props =>
    Colors[props.backgroundColor] ||
                        props.backgroundColor}),
                      ${props =>
    Gradients[props.gradient] ||
                        props.gradient ||
                        'linear-gradient(90deg, #008cff 0%, #6942ef 100%)'};
    background-clip: padding-box, border-box;
    background-repeat: repeat-x;
    background-size:
      calc(100% + ${props => props.borderWidth || '0.125rem'} * 2)
      calc(100% + ${props => props.borderWidth || '0.125rem'} * 2);
    background-position: center;
    border-radius: ${props =>
    props.borderRadius || Metrics.roundButton.borderRadius};
    z-index: -2;
  }

  &:hover {
    color: ${props =>
    Colors[props.hoverColor] || props.hoverColor || Colors.white};
    &::before {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  ${media.lessThan('lg')`
    &::before {
      width: 40vw;
      height: 40vw;
    }
  `};
  ${media.lessThan('xs')`
    &::before {
      width: 100vw;
      height: 100vw;
    }
  `};
`
