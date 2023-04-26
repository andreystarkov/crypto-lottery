import React from 'react'
import Slider from 'react-slick'
import { Grid } from 'react-styled-flexboxgrid'

import { SectionHeader } from 'Components'
import { SectionWrapper } from 'Styles/CommonStyles'
import { RecentSliderWrapper, RecentItem } from 'Styles/MainStyles'

import DrawInfo from './DrawInfo'
import DrawInfoPlaceholder from './DrawInfoPlaceholder'

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

export default class RecentDraws extends React.Component {
  renderItem = (props, key) => {
    return (
      <RecentItem
        sm={4}
        md={4}
        lg={3}
        className='animated fadeIn'
        key={`rcd:${key}`}>
        <DrawInfo {...props} />
      </RecentItem>
    )
  }

  renderPlaceholder = (e, i) => {
    return (
      <RecentItem
        sm={4}
        md={4}
        lg={3}
        className='animated fadeIn'
        key={`rcdp:${i}`}>
        <DrawInfoPlaceholder />
      </RecentItem>
    )
  }

  renderPlaceholders = () => {
    const { lastDraws } = this.props
    const draws = lastDraws
    const elementsLeft = MAX_COUNT - draws.length
    const generateArray = n => [...Array(n)].map((_, index) => index + 1)
    if (elementsLeft > 0) {
      const arr = generateArray(elementsLeft)
      return arr.map(this.renderPlaceholder)
    }
    return null
  }

  render () {
    const { lastDraws, history } = this.props
    return (
      <SectionWrapper style={{ minHeight: '25rem' }} marginTop='0'>
        <div className='tutorial-step-4'>
          <Grid>
            <SectionHeader
              title={l.t('main.titles.recentdraws')}
              buttonText={l.t('main.all')}
              onButtonClick={() => history.push('/recentdraws')}
            />
            {/* <Row style={{flexWrap: 'nowrap' }}>
              {lastDraws.filter((f, i) => i < COUNT).map(this.renderItem)}
              {this.renderPlaceholders()}
            </Row> */}
            <RecentSliderWrapper>
              <Slider
                {...sliderSettings}
                ref={o => {
                  this.slider = o
                }}>
                {lastDraws.filter((f, i) => i < MAX_COUNT).map(this.renderItem)}
                {this.renderPlaceholders()}
              </Slider>
            </RecentSliderWrapper>
          </Grid>
        </div>
      </SectionWrapper>
    )
  }
}
