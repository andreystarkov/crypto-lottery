import React from 'react'
import styled from 'styled-components'
import { Colors, Images } from 'Themes'

import RoundButton from 'Components/RoundButton'

export const LoadMoreContainer = styled.div`
  margin: 2rem auto;
  width: 14rem;
  position: relative;
  z-index: 2;
`

export const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 95%;
`

export const ProgressContainer = styled.div`
  margin: 1rem auto;
  width: 95%;
`

export const TotalText = styled.div`
  color: ${Colors.purpleGrey};
  font-size: 0.8rem;
  text-align: center;
  word-wrap: none;
  display: block;
`

export const Button = styled(RoundButton)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 2px solid #313152;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  ${props => !props.disabled ? `
    cursor: pointer;
    &:hover {
      background-color: rgba(255,255,255,0);
      border: 2px solid ${Colors.purpleGrey};
    }
  ` : `
    cursor: default;
    &:hover {
      background-color: rgba(255,255,255,0);
      border: 2px solid #313152;
      color: ${Colors.purpleGrey};
    }
  `}
`
const btnIconStyles = {
  width: '1rem',
  height: '1rem',
  marginRight: '0.4rem'
}

export const MoreIcon = ({ loading, ...etc }) => (
  <img
    style={btnIconStyles}
    src={Images.icons.refresh}
    {...etc}
    className={loading ? 'animation-rotate' : 'animation-rotate-default-state'} />
)

export const MoreButton = ({ children, loading, ...etc }) => (
  <Button border color={Colors.purpleGrey} {...etc} loading={loading}><MoreIcon loading={loading} />{children}</Button>
)