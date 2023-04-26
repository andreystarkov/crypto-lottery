import styled from 'styled-components'

import { Colors } from 'Themes'

import { media } from 'Utils/Media'

export const TooltipWrapper = styled.div`
  & .__react_component_tooltip.type-dark {
    max-width: ${props => props.maxWidth || '16.25rem'};
    ${media.lessThan('sm')`
      max-width: 10rem;
    `};
  }
`

export const TooltipButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
  border-radius: 50%;
  cursor: pointer;

  .question-icon {
    width: 100%;
    height: 100%;
    fill: ${Colors.purpleGrey};
    transition: opacity 0.2s;
  }

  &:hover {
    .question-icon {
      opacity: 0.5;
    }
  }
`
