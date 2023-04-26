import React, { Component } from 'react'
import PropTypes from './ValuesGridTypes'
import Slider from 'react-slick'
import { Grid } from 'react-styled-flexboxgrid'
import { ScreenTitle } from 'Styles/CommonStyles'
import {
  CustomSlider,
  SliderItem,
  ValuesRow,
  ValuesCol
} from './ValuesGridStyles'
import ValueBlock from './../HeaderBlocks'
import { formatNumber } from 'Utils'

import l from 'Intl'

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  swipe: true
}

export default class ValuesGrid extends Component {
  static propTypes = PropTypes
  state = {
    isMobile: true
  }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({ isMobile: document.documentElement.clientWidth < 768.98 })
  }

  calcValueUSD = () => {
    const { betValues, balanceBET, balanceETH, ethPriceUSD } = this.props
    let valueUSD = balanceBET * betValues.USD.price + balanceETH * ethPriceUSD
    if (balanceBET || balanceETH) {
      valueUSD = valueUSD ? valueUSD.toFixed(2) : 0
    }

    return valueUSD
  }

  renderSlider = () => {
    const { balanceBET, totalTicketsLength, balanceETH } = this.props
    const valueUSD = this.calcValueUSD()

    return (
      <CustomSlider>
        <Slider
          {...sliderSettings}
          ref={o => {
            this.slider = o
          }}>
          <SliderItem>
            <ValueBlock
              title={l.t('profile.bets')}
              value={balanceBET && formatNumber(balanceBET)}
              currency='BET'
              icon='moneyGrey'
            />
          </SliderItem>
          <SliderItem>
            <ValueBlock
              title={l.t('profile.eth')}
              value={balanceETH && formatNumber(balanceETH)}
              currency='ETH'
              icon='ethGrey'
            />
          </SliderItem>
          <SliderItem>
            <ValueBlock
              title={l.t('profile.dollars')}
              value={valueUSD && formatNumber(valueUSD)}
              currency='USD'
              icon='cashGrey'
            />
          </SliderItem>
          <SliderItem>
            <ValueBlock
              title={l.t('profile.ticketsInGame')}
              value={totalTicketsLength}
              currency={l.t('profile.ticketsCurrency')}
              icon='ticketsGrey'
            />
          </SliderItem>
        </Slider>
      </CustomSlider>
    )
  }

  renderGrid = () => {
    const { balanceBET, totalTicketsLength, balanceETH } = this.props
    const valueUSD = this.calcValueUSD()

    return (
      <ValuesRow>
        <ValuesCol xs={6}>
          <ValueBlock
            title={l.t('profile.bets')}
            value={balanceBET && formatNumber(balanceBET)}
            currency='BET'
            icon='moneyGrey'
          />
        </ValuesCol>
        <ValuesCol xs={6}>
          <ValueBlock
            title={l.t('profile.eth')}
            value={balanceETH && formatNumber(balanceETH)}
            currency='ETH'
            icon='ethGrey'
          />
        </ValuesCol>
        <ValuesCol xs={6}>
          <ValueBlock
            title={l.t('profile.dollars')}
            value={valueUSD && formatNumber(valueUSD)}
            currency='USD'
            icon='cashGrey'
          />
        </ValuesCol>
        <ValuesCol xs={6}>
          <ValueBlock
            title={l.t('profile.ticketsInGame')}
            value={totalTicketsLength}
            currency={l.t('profile.ticketsCurrency')}
            icon='ticketsGrey'
          />
        </ValuesCol>
      </ValuesRow>
    )
  }

  render () {
    const { isMobile } = this.state
    return (
      <Grid>
        <ScreenTitle>Profile</ScreenTitle>
        {isMobile ? this.renderSlider() : this.renderGrid()}
      </Grid>
    )
  }
}
