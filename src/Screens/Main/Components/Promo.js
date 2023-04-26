import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { withRouter } from 'react-router-dom'

import { GradientButton, BlocksCounter } from 'Components'
import {
  BoxItem,
  PromoSlider,
  PromoSliderWrap,
  PromoSliderText,
  BoxTitle,
  JackpotTitle,
  JackpotCount,
  JackpotCurrency,
  JackpotCurrencyUSD,
  TimerItem,
  PromoCol,
  PromoBox,
  PromoRow
} from 'Styles/MainStyles'

import { checkLotteryStatus } from 'Utils'
import { SvgIcons } from 'Themes'

import l from 'Intl'

class Promo extends Component {
  renderJackpot = () => {
    const { jackpot, betValues } = this.props
    const jackpotUSD = Math.round(jackpot * betValues.USD.price)
    return jackpot || parseInt(jackpot) === 0 ? (
      <BoxItem style={{ minHeight: '5.1rem' }}>
        <div className='left-align mr3 animated zoomIn animation-default-config'>
          <SvgIcons.CashIcon />
        </div>
        <div className='flex flex-column'>
          <JackpotTitle className='animated fadeIn animation-default-config'>
            {l.t('main.promo.jackpot')}
          </JackpotTitle>
          <div className='animated fadeIn animation-default-config'>
            <JackpotCount>{jackpot}</JackpotCount>
            <JackpotCurrency>{l.t('main.bet')}</JackpotCurrency>
          </div>
          {betValues.USD.price && (
            <JackpotCurrencyUSD className='animated fadeIn animation-default-config'>
              USD {jackpotUSD}
            </JackpotCurrencyUSD>
          )}
        </div>
      </BoxItem>
    ) : (
      <BoxItem style={{ minHeight: '5.1rem' }} />
    )
  }

  renderBlocksLeft = () => {
    const { lottery } = this.props
    const isVisible = checkLotteryStatus(lottery)

    return (
      <TimerItem
        className='mt1 animated fadeIn'
        style={!isVisible ? { display: 'flex', animationDelay: '1.5s' } : {}}>
        {isVisible ? (
          <div className='left-align mr1 animated flipInX'>
            <SvgIcons.TimeIcon />
          </div>
        ) : null}
        <div className='pl2 flex flex-column animated fadeIn tutorial-step-2'>
          {!isVisible ? (
            <BoxTitle style={!isVisible ? { fontSize: '1.2rem' } : {}}>
              {l.t('main.blocksCounter.newdraw')}
            </BoxTitle>
          ) : (
            <BlocksCounter />
          )}
        </div>
      </TimerItem>
    )
  }

  renderPlaySlider = () => {
    const { lottery, history } = this.props
    return (
      <PromoSliderWrap className='tutorial-step-3'>
        <PromoSlider>
          {lottery.ticketPrice && (
            <PromoSliderText className='animated fadeIn animation-default-config'>
              {l.t('main.promo.cost') +
                ' ' +
                lottery.ticketPrice +
                ' ' +
                l.t('main.bets')}
            </PromoSliderText>
          )}
          {lottery.ticketPrice && (
            <GradientButton
              className='animated fadeInLeft animation-default-config promo-slider-play'
              onClick={() => history.push('/tickets')}
              gradient='yellow'
              color='white'>
              {l.t('main.promo.play')}
            </GradientButton>
          )}
        </PromoSlider>
      </PromoSliderWrap>
    )
  }

  render = () => {
    return (
      <Grid className='over-absolute'>
        <PromoBox>
          <Row>
            <PromoCol sm={12} md={8}>
              <PromoRow>
                <Col xs={12} sm={6}>
                  {this.renderJackpot()}
                </Col>
                <Col xs={12} sm={6} style={{ display: 'flex' }}>
                  {this.renderBlocksLeft()}
                </Col>
              </PromoRow>
            </PromoCol>
            <Col style={{ width: '100%' }} sm={12} md={4}>
              {this.renderPlaySlider()}
            </Col>
          </Row>
        </PromoBox>
      </Grid>
    )
  }
}

export default withRouter(Promo)
