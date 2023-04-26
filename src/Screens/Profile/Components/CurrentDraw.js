import React from 'react'

import Slider from 'react-slick'
import { Col, Row } from 'react-styled-flexboxgrid'

import { BlocksCounter, Combination } from 'Components'
import { SectionHeader, FlexRight } from 'Styles/CommonStyles'
import {
  TicketDrawContainer,
  TicketDrawName,
  TicketDivider,
  TimeIcon
} from 'Styles/ProfileStyles'
import { prepareTicketNumbers } from 'Utils/Tickets'
import { checkLotteryStatus } from 'Utils'

import l from 'Intl'

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default class CurrentDraw extends React.Component {
  renderWinNumbers = () => {
    const { lottery } = this.props
    const combination = prepareTicketNumbers(lottery.winNumbers)
    return (
      <Row>
        <Col xs={3}>
          <TicketDrawContainer>
            <TicketDrawName>{l.t('profile.curdraw')}</TicketDrawName>
            <TicketDivider />
            <Combination combination={combination} />
          </TicketDrawContainer>
        </Col>
      </Row>
    )
  }

  getReward = () => {}

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
    const { userLoading } = user
    const { isWinTicket } = lottery

    const isBlocksVisible = checkLotteryStatus(lottery)
    const isVisible = isWinTicket && lottery.winNumbers && !userLoading
    return (
      <div className='relative pb2'>
        <Row style={{ marginBottom: '1rem' }}>
          <Col xs={6}>
            {isVisible ? (
              <SectionHeader>{l.t('profile.currentdraw')}</SectionHeader>
            ) : null}
          </Col>
          <Col xs={6}>
            {isBlocksVisible && (
              <FlexRight>
                <TimeIcon />
                <BlocksCounter />
              </FlexRight>
            )}
          </Col>
        </Row>
        {isVisible ? (
          <Slider
            {...sliderSettings}
            ref={o => {
              this.slider = o
            }}>
            {this.renderWinNumbers()}
          </Slider>
        ) : null}
      </div>
    )
  }
}
