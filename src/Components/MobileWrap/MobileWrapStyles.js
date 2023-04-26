import styled, { css } from 'styled-components'
import { media } from 'Utils/Media'

const shadow = css`
&::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 20%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(26, 26, 61, 0) 0%,
    #1a1a3d 100%
  );
}
`

export const Wrapper = styled.div`
  overflow-x: hidden;
  tap-highlight-color: transparent;
  position: relative;

  ${props =>
    props.nosm
      ? css`${media.lessThan('xs')`${shadow}`}`
      : css`${media.lessThan('sm')`${shadow}`}`}
`

export const Slider = styled.div`
  transition: transform 0.5s ease-out;
  transform: translateX(0);
`
