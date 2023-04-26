import React from 'react'
import styled from 'styled-components'

import { FlexRow } from 'Styles/CommonStyles'
import { Colors, Images } from 'Themes'

export const PlusIcon = (props) => <img src={Images.controls.plus} {...props} />
export const MinusIcon = (props) => <img src={Images.controls.minus} {...props} />

export const ControlContainer = styled(FlexRow)`
  width: 4.2rem;
  justify-content: flex-end;
`

export const ControlButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  ${props => props.disabled ? `
    opacity: 0.4;
  ` : `
    cursor: pointer;
    &:hover {
      opacity: 0.4;
    }
  `}
`

export const PlusButton = ({ iconProps, ...etc }) => (
  <ControlButton {...etc}>
    <PlusIcon />
  </ControlButton>
)

export const MinusButton = ({ iconProps, ...etc }) => (
  <ControlButton {...etc}>
    <MinusIcon />
  </ControlButton>
)

export const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent || 'center'};
  width: 33%;
  text-align: center;
`

export const Value = styled.span`
  display: block;
  color: ${Colors.white};
  font-size: 1.1rem;
  line-height: 0.98rem;
`
