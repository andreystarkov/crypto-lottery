import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Row } from 'react-styled-flexboxgrid'

import { Odometer } from 'Components'

import { SvgIcons } from 'Themes'

import {
  Header,
  HeaderLinkWrapper,
  MobHeaderCol,
  OdometerWrapper,
  OdometerIcon,
  OdometerText,
  OdometerRefresh
} from './../LotteryStatisticsStyles'

import {
  Title,
  LinkText,
  LinkIcon
} from 'Styles/OperatorPanelStyles'

import l from 'Intl'
export default class StatisticsHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    openkey: PropTypes.string,
    link: PropTypes.string,
    currentBlock: PropTypes.number
  }
  render = () => {
    const { title, openkey, link, currentBlock } = this.props
    return (
      <Header>
        <Row>
          <MobHeaderCol sm={5} lg={6}>
            <Title>{title}</Title>
            <HeaderLinkWrapper>
              <LinkText>{openkey}</LinkText>
              <LinkIcon href={link} />
            </HeaderLinkWrapper>
          </MobHeaderCol>
          <MobHeaderCol sm={7} lg={6}>
            <OdometerWrapper className='odometer_mobile-small'>
              <OdometerIcon />
              <Odometer value={currentBlock} />
              <OdometerText>
                {l.t('operatorPanel.lotteryStatistics.headerText')}
              </OdometerText>
              <OdometerRefresh>
                <SvgIcons.RefreshIcon />
              </OdometerRefresh>
            </OdometerWrapper>
          </MobHeaderCol>
        </Row>
      </Header>
    )
  }
}
