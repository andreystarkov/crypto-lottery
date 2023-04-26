import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import {
  SectionHeader,
  SectionWrapper,
  FlexRow,
  FlexHalf
} from 'Styles/CommonStyles'
import { SliderControl, SliderControlContainer } from 'Styles/Controls'
import { CustomSlider, NumbersContainerWrapper, NumbersContainer, TryButton } from './MostFrequentNumbersStyles'
import { Combination } from 'Components'
import { prepareCombination } from 'Utils/Tickets'
import { chunk } from 'Utils'
import { fakeCombinations } from 'FakeData'

import 'slick-carousel/slick/slick.css'

import l from 'Intl'

const combinationsData = fakeCombinations(12)

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '13%',
        centerMode: true,
        swipe: true
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '8%',
        centerMode: true,
        swipe: true
      }
    }
  ]
}

export default class MostFrequentNumbers extends Component {
  static propTypes = {
    addTicket: PropTypes.func
  }

  prevPage = () => {
    this.slider.slickPrev()
  }

  nextPage = () => {
    this.slider.slickNext()
  }

  tryCombination = combination => {
    const { addTicket } = this.props
    const params = prepareCombination(combination)
    addTicket(params)
  }

  renderCombination = (combination, key) => {
    return (
      <NumbersContainerWrapper key={`combination:${key}`}>
        <NumbersContainer>
          <Combination combination={combination} />
          <TryButton onClick={() => this.tryCombination(combination)} />
        </NumbersContainer>
      </NumbersContainerWrapper>
    )
  }

  renderPage = (combinations, key) => {
    return combinations.map(this.renderCombination)
  }

  renderPages = () => {
    const combinations = chunk(combinationsData, 3)
    return combinations.map(this.renderPage)
  }

  render () {
    return (
      <SectionWrapper marginTop='0'>
        <SectionHeader>
          <FlexRow>
            <FlexHalf alignItems='flex-start'>
              {l.t('getTickets.frequent')}
            </FlexHalf>
            <FlexHalf alignItems='flex-end'>
              <SliderControlContainer>
                <SliderControl onClick={this.prevPage} />
                <SliderControl onClick={this.nextPage} right />
              </SliderControlContainer>
            </FlexHalf>
          </FlexRow>
        </SectionHeader>
        <CustomSlider>
          <Slider
            {...sliderSettings}
            ref={o => {
              this.slider = o
            }}>
            {this.renderPages()}
          </Slider>
        </CustomSlider>
      </SectionWrapper>
    )
  }
}
