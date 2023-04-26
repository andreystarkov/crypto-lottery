import React from 'react'
import Slider from 'react-slick'
import { Col } from 'react-styled-flexboxgrid'

import { BlocksCounter, Combination } from 'Components'
import { SectionHeader } from 'Styles/CommonStyles'
import { SliderControl } from 'Styles/Controls'
import {
  TicketDrawContainer,
  TicketDrawName,
  TicketDivider,
  ControlsContainer,
  MultiMark
} from 'Styles/ProfileStyles'
import { CustomSlider, SliderItem } from './ValuesGrid/ValuesGridStyles'
import { HeaderRow, HeaderCol, TimeIcon } from './UpcomingDrawStyles'
import { prepareTicketNumbers } from 'Utils/Tickets'
import { checkLotteryStatus } from 'Utils'

import l from 'Intl'

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  swipe: true
}

export default class TicketDraw extends React.Component {
  renderHeader = (isVisible, isUpcoming, isBlocksVisible, isTickets) => {
    return (
      <React.Fragment>
        <HeaderRow>
          {isVisible ? (
            <Col>
              <SectionHeader>
                {isUpcoming
                  ? l.t('profile.upcoming')
                  : l.t('profile.currentdraw')}
              </SectionHeader>
            </Col>
          ) : null}
          {isBlocksVisible && (
            <HeaderCol mobileHide>
              <TimeIcon />
              <BlocksCounter />
            </HeaderCol>
          )}
          {isTickets && (
            <Col>
              <ControlsContainer>
                <SliderControl onClick={this.prevPage} />
                <SliderControl onClick={this.nextPage} right />
              </ControlsContainer>
            </Col>
          )}
        </HeaderRow>
        {isBlocksVisible && (
          <HeaderRow mobileShow>
            <HeaderCol>
              <TimeIcon />
              <BlocksCounter />
            </HeaderCol>
          </HeaderRow>
        )}
      </React.Fragment>
    )
  }

  renderSliderItem = (item, key) => {
    return <SliderItem key={`su:${key}`}>{item}</SliderItem>
  }

  renderSlider = slides => {
    return (
      <CustomSlider>
        <Slider
          {...sliderSettings}
          ref={o => {
            this.slider = o
          }}>
          {slides.map(this.renderSliderItem)}
        </Slider>
      </CustomSlider>
    )
  }

  renderTicket = ({ numbers, multidraw }, i) => {
    const combination = prepareTicketNumbers(numbers)
    return (
      <TicketDrawContainer>
        {multidraw ? <MultiMark>M</MultiMark> : null}
        <TicketDrawName>
          {l.t('getTickets.ticket')} #{i + 1}
        </TicketDrawName>
        <TicketDivider />
        <Combination combination={combination} />
      </TicketDrawContainer>
    )
  }

  prevPage = () => this.slider.slickPrev()
  nextPage = () => this.slider.slickNext()

  renderWinNumbers = () => {
    const { lottery } = this.props
    const combination = prepareTicketNumbers(lottery.winNumbers)
    return (
      <TicketDrawContainer>
        <TicketDrawName>{l.t('profile.curdraw')}</TicketDrawName>
        <TicketDivider />
        <Combination combination={combination} />
      </TicketDrawContainer>
    )
  }

  // getReward = () => {}

  // renderReward = () => {
  //   const { winTicketsCount, totalWinAmount, isJackpot } = this.props.user.currentReward
  //   return (
  //     <Col xs={3}>
  //       <TicketDrawContainer>
  //         <TicketDrawName>You reward is 20 BET</TicketDrawName>
  //         <PaymentButton gradient={'blue'} onClick={this.getReward}>
  //           Get reward
  //         </PaymentButton>
  //       </TicketDrawContainer>
  //     </Col>
  //   )
  // }

  render = () => {
    const { user, lottery } = this.props
    const {
      userTicketsData,
      userLoading,
      currDraws,
      multidrawsTicketsData
    } = user
    const { isWinTicket, countOfDraws } = lottery
    let upcomingTicketsData = []
    if (currDraws === countOfDraws && !isWinTicket) {
      upcomingTicketsData = [...userTicketsData, ...multidrawsTicketsData]
    }
    // const tickets = chunk(upcomingTicketsData, 4) // TODO: ?
    const tickets = upcomingTicketsData
    const isBlocksVisible = checkLotteryStatus(lottery)
    const isUpcoming = upcomingTicketsData.length > 0 && !isWinTicket
    const isVisible =
      (isUpcoming || (isWinTicket && lottery.winNumbers)) && !userLoading
    const isTickets = tickets && tickets.length > 1
    return (
      <div className='relative pb2'>
        {this.renderHeader(isVisible, isUpcoming, isBlocksVisible, isTickets)}
        {isVisible
          ? this.renderSlider(
            isUpcoming
              ? tickets.map(this.renderTicket)
              : [this.renderWinNumbers()]
          )
          : null}
      </div>
    )
  }
}
