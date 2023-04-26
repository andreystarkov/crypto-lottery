import React, { Component } from 'react'

import EpicWin from 'Themes/Svg/EpicWin'
import {
  EpicWinBackground,
  WinWrapper,
  WinContent,
  WinHead,
  WinText,
  WinValue
} from './../ModalStyles'
import ModalContent from '../ModalContent'

import l from 'Intl'

export default class WinModal extends Component {
  render () {
    const { params } = this.props
    return (
      <ModalContent
        padding='0'
        width='33rem'
        height='22rem'
        animation='zoomIn'
        duration={0.4}
        easing='cubic-bezier(0.60, 0.80, 0.34, 0.86)'
        {...this.props}>
        <WinWrapper>
          <WinContent>
            <WinHead>{l.t('profile.congr')}</WinHead>
            <WinText>{l.t('profile.prizeOnAcc')}</WinText>
            <WinValue>{params} BET</WinValue>
          </WinContent>
        </WinWrapper>
        <EpicWinBackground>
          <EpicWin />
        </EpicWinBackground>
      </ModalContent>
    )
  }
}
