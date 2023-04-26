import React, { Component } from 'react'
import Slider from 'react-slick'
import { Grid } from 'react-styled-flexboxgrid'
import moment from 'moment'

import { SectionHeader } from 'Components'
import { SectionWrapper } from 'Styles/CommonStyles'
import {
  ShadowBox,
  WinDate,
  WinId,
  WinAmount,
  RecentSliderWrapper,
  RecentItem
} from 'Styles/MainStyles'

import { Images } from 'Themes'

import l from 'Intl'

const MAX_COUNT = 4
const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: MAX_COUNT,
  slidesToScroll: MAX_COUNT,
  responsive: [
    {
      breakpoint: 922, // Medium devices (tablets, less than 992px)
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 576, // Extra small devices (portrait phones, less than 576px)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const WinnerItem = ({ id, reward }) => {
  return (
    <ShadowBox>
      <div className='clearfix' style={{ width: '100%' }}>
        <div className='col col-8'>
          {/* <WinnerName>{name}</WinnerName> */}
          <WinDate>{moment().format('DD.MM.YYYY')}</WinDate>
        </div>
        <div className='col col-4 right-align right'>
          <WinId># {id}</WinId>
        </div>
      </div>
      <div className='clearfix mt2' style={{ width: '100%' }}>
        <div className='col col-8'>
          <WinAmount>
            {reward} {l.t('main.bet')}
          </WinAmount>
        </div>
        <div className='col col-4'>
          <img src={Images.icons.moneyGrey} className='right' />
        </div>
      </div>
    </ShadowBox>
  )
}

const WinnerItemPlaceholder = () => {
  return (
    <ShadowBox style={{ opacity: '0.5' }}>
      <div className='clearfix' style={{ width: '100%' }}>
        <div className='col col-8'>
          {/* <WinnerName>{name}</WinnerName> */}
          <WinDate>{l.t('main.recentwinners.shadowBoxText2')}</WinDate>
        </div>
        <div className='col col-4 right-align right'>
          <WinId />
        </div>
      </div>
      <div className='clearfix mt2' style={{ width: '100%' }}>
        <div className='col col-8'>
          <WinAmount>{l.t('main.recentwinners.shadowBoxText1')}</WinAmount>
        </div>
        <div className='col col-4'>
          <img src={Images.icons.moneyGrey} className='right' />
        </div>
      </div>
    </ShadowBox>
  )
}

export default class RecentWinners extends Component {
  renderWinner = (props, key) => {
    return (
      <RecentItem
        className='animated fadeIn'
        sm={4}
        md={4}
        lg={3}
        key={`rcwn:${key}`}>
        <WinnerItem {...props} />
      </RecentItem>
    )
  }

  renderPlaceholder = (e, i) => {
    return (
      <RecentItem
        className='animated fadeIn'
        sm={4}
        md={4}
        lg={3}
        key={`rcpl:${i}`}>
        <WinnerItemPlaceholder />
      </RecentItem>
    )
  }

  renderPlaceholders = () => {
    const { lotteryWinners } = this.props
    const elementsLeft = MAX_COUNT - lotteryWinners.length
    const generateArray = n => [...Array(n)].map((_, index) => index + 1)
    if (elementsLeft > 0) {
      const arr = generateArray(elementsLeft)
      return arr.map(this.renderPlaceholder)
    }
    return null
  }

  render () {
    const { lotteryWinners } = this.props
    return (
      <SectionWrapper>
        <Grid className='tutorial-step-6'>
          <SectionHeader
            title={l.t('main.titles.recentwinners')}
            buttonText={l.t('main.all')}
            href='/results'
          />
          <RecentSliderWrapper>
            <Slider
              {...sliderSettings}
              ref={o => {
                this.slider = o
              }}>
              {lotteryWinners
                .filter((f, i) => i < MAX_COUNT)
                .map(this.renderWinner)}
              {this.renderPlaceholders()}
            </Slider>
          </RecentSliderWrapper>
        </Grid>
      </SectionWrapper>
    )
  }
}
