import styled from 'styled-components'
import { media } from 'Utils/Media'
import { Images, Gradients } from 'Themes'

export const GradientButtonWrapper = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  ${props => props.gradient && !props.disabled ? `background-image: ${Gradients[props.gradient]};` : ''}
  border-radius: 50%;

  ${media.greaterThan('xs')`
    display: none;
  `}
`

export const GradientButtonImage = styled.div`
  background-image: url(${Images.icons.tickets});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
`
