import styled from 'styled-components'
import { Images } from 'Themes'

export const FadeInWrapper = styled.div`
  animation-delay: 0.2s;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

export const BackgroundIllustration = styled.div`
  background-image: url(${props => props.name ? Images.illustrations[props.name] : Images.illustrations.main});
  background-position: top ${props => props.offsetTop || '-20em'} center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
`
