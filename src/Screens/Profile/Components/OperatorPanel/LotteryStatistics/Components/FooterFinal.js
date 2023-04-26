import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Combination } from 'Components'
import { prepareTicketNumbers } from 'Utils/Tickets'
import { SecondaryGrayButton } from 'Styles/Buttons'
import { Footer } from 'Styles/OperatorPanelStyles'

import {
  WinnerTitle,
  FooterButtonLeft,
  FooterButtonRight,
  WinnerWrapper,
  FooterButtonWrapper,
  FooterActionButton,
  FooterCancelButton
} from '../LotteryStatisticsStyles'

import l from 'Intl'

export default class FooterFinal extends Component {
  static propTypes = {
    subtitle: PropTypes.string,
    combination: PropTypes.object.isRequired
  }
  render = () => {
    const { subtitle, combination } = this.props
    return (
      <Footer>
        <WinnerWrapper>
          <WinnerTitle align='center'>{subtitle}</WinnerTitle>
          <Combination combination={prepareTicketNumbers(combination)} />
        </WinnerWrapper>
        <FooterButtonWrapper>
          <FooterButtonLeft>
            <FooterCancelButton>
              {l.t('operatorPanel.lotteryStatistics.secondaryButton')}
            </FooterCancelButton>
          </FooterButtonLeft>
          <FooterButtonRight>
            <FooterActionButton
              backgroundColor='menuBlue'
              color='lightBlue'>
              {l.t('operatorPanel.lotteryStatistics.actionButton1')}
            </FooterActionButton>
          </FooterButtonRight>
        </FooterButtonWrapper>
      </Footer>
    )
  }
}
