
import styled from 'styled-components'
import { Colors, Images } from 'Themes'

export const SliderControlContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SliderControl = styled.div`
  border: 2px solid ${Colors.purpleGrey};
  width: 2.5rem;
  height: 2rem;
  opacity: 0.5;
  cursor: pointer;
  ${props => props.right ? `
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border-left-width: 1px;
    background: url(${Images.controls.angleRight}) center center no-repeat;
  ` : `
    border-right-width: 1px;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    background: url(${Images.controls.angleLeft}) center center no-repeat;
  `}
  transition: all 0.35s cubic-bezier(0.215, 0.610, 0.355, 1);
  &:hover {
    opacity: 1;
    background-color: rgba(255,255,255,0.1);
  }
`
