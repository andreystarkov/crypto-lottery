import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { TabButton, MainBlueButton } from 'Styles/Buttons'
import { RoundInput } from 'Styles/Inputs'

import { ButtonWrapper } from './LotteryCreationStyles'

import {
  PanelWrapper,
  CenteredContent,
  PanelRow,
  CenteredTitle,
  Description
} from 'Styles/OperatorPanelStyles'

import l from 'Intl'

export default class LotteryCreation extends Component {
  static propTypes = {
    createButtonsType: PropTypes.number,
    toggleCreateLotteryButtons: PropTypes.func,
    handleCreateLotteryInput: PropTypes.func,
    createLottery: PropTypes.func
  }
  render () {
    const {
      createButtonsType,
      toggleCreateLotteryButtons,
      handleCreateLotteryInput,
      createLottery
    } = this.props
    return (
      <PanelWrapper>
        <CenteredContent>
          <CenteredTitle>
            {l.t('operatorPanel.lotteryCreation.title')}
          </CenteredTitle>
          <Description>
            {l.t('operatorPanel.lotteryCreation.description')}
          </Description>
          <PanelRow>
            <ButtonWrapper>
              <TabButton
                active={createButtonsType === 0}
                onClick={() => toggleCreateLotteryButtons(0)}>
                {l.t('operatorPanel.lotteryCreation.buttonTab1')}
              </TabButton>
              <TabButton
                active={createButtonsType === 1}
                onClick={() => toggleCreateLotteryButtons(1)}>
                {l.t('operatorPanel.lotteryCreation.buttonTab2')}
              </TabButton>
            </ButtonWrapper>
          </PanelRow>
          <RoundInput
            onChange={handleCreateLotteryInput}
            placeholder={l.t('operatorPanel.lotteryCreation.inputPlaceholder')}
          />
          <PanelRow>
            <MainBlueButton onClick={createLottery}>
              {l.t('operatorPanel.lotteryCreation.actionButton')}
            </MainBlueButton>
          </PanelRow>
        </CenteredContent>
      </PanelWrapper>
    )
  }
}
