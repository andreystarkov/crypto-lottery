import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

import {
  MainBlueButton,
  SecondaryGrayButton
} from 'Styles/Buttons'

import { ButtonWrapper, FooterWrapper, ButtonCol } from './../LotteryFillingInfoStyles'

import l from 'Intl'

export default class FillingFooter extends Component {
  render () {
    return (
      <FooterWrapper border>
        <ButtonWrapper className='tooltip-wrapper'>
          <ButtonCol xs>
            <SecondaryGrayButton>
              {l.t('operatorPanel.lotteryFillingInfo.secondaryButton')}
            </SecondaryGrayButton>
          </ButtonCol>
          <ButtonCol xs>
            <MainBlueButton
              disabled
              data-tip
              data-for='fillingDisabled'>
              {l.t('operatorPanel.lotteryFillingInfo.actionButton')}
            </MainBlueButton>
          </ButtonCol>
          <ReactTooltip
            id='fillingDisabled'
            place='right'
            type='dark'
            effect='solid'>
            {l.t('operatorPanel.lotteryFillingInfo.buttonTooltip')}
          </ReactTooltip>
        </ButtonWrapper>
      </FooterWrapper>
    )
  }
}
