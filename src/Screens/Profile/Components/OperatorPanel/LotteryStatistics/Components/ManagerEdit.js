import React, { Component, Fragment } from 'react'

import { ShortButton } from 'Styles/Buttons'

import { LinkIcon } from 'Styles/OperatorPanelStyles'

import { ManagerLinkWrapper, ManagerLinkText } from './../LotteryStatisticsStyles'

import l from 'Intl'

export default class ManagerEdit extends Component {
  render = () => {
    return (
      <Fragment>
        <ManagerLinkWrapper>
          <ManagerLinkText>
            dsdhsjdhsjkdhsjkdhjskdsdsdsdsgggggggggggggggggfffffffffff
          </ManagerLinkText>
          <LinkIcon href='' />
        </ManagerLinkWrapper>
        <ShortButton>
          {l.t('operatorPanel.lotteryStatistics.manager.editButton')}
        </ShortButton>
      </Fragment>
    )
  }
}
