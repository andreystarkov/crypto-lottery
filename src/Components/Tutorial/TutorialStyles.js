import React from 'react'
import styled from 'styled-components'

import { RoundButton } from 'Components'
import { Colors } from 'Themes'

export const Button = ({ children, ...etc }) => {
  return (
    <RoundButton
      border={false}
      color={Colors.purpleGray}
      padding='0.5rem 1rem'
      {...etc}>
      {children}
    </RoundButton>
  )
}

export const ButtonNext = ({ children, ...etc }) => {
  return (
    <RoundButton
      border={false}
      color={Colors.purpleGray}
      padding='0.5rem 1rem'
      arrowRight
      {...etc}>
      {children}
    </RoundButton>
  )
}

export const ButtonPrev = ({ children, ...etc }) => {
  return (
    <RoundButton
      border={false}
      color={Colors.purpleGray}
      padding='0.5rem 1rem'
      arrowLeft
      {...etc}>
      {children}
    </RoundButton>
  )
}

export const FloaterFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  flex-direction: row;
`

export const TutorialTitle = styled.span`
  display: block;
  text-align: center;
  font-size: 1.2rem;
  color: '#fff';
  margin-bottom: 1rem;
  margin-top: 1rem;
`

export const TutorialText = styled.span`
  display: block;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.7rem;
  color: '#fff';
`

export const TutorialContent = ({ title, text }) => (
  <div>
    {title ? <TutorialTitle>{title}</TutorialTitle> : null}
    {text ? <TutorialText>{text}</TutorialText> : null}
  </div>
)

export const defaultStyles = {
  arrowColor: Colors.grey1,
  backgroundColor: Colors.grey1,
  beaconSize: 36,
  overlayColor: 'rgba(0, 0, 0, 0.4)',
  primaryColor: Colors.yellow,
  spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  textColor: '#fff',
  zIndex: 100
}
