import React from 'react'

import { Col, Row } from 'react-styled-flexboxgrid'

import { SectionHeader } from 'Styles/CommonStyles'
import { TicketDrawContainer, TicketDrawName, TicketDivider } from 'Styles/ProfileStyles'
import { PaymentButton } from 'Styles/PaymentStyles'

import { getReward } from 'Services/Eth'
import { log } from 'Utils/Log'
export default class Reward extends React.Component {
  pickPrize = () => {
    const { refreshRewardTxStatus, openTransactionModal, closeModal, openAlert, user } = this.props
    const { openKey } = user
    const { totalWinAmount } = this.props.user.currentReward
    const winAmount = totalWinAmount
    getReward({
      openKey,
      onPending: (hash) => {
        refreshRewardTxStatus({ hash, winAmount })
        setTimeout(() => openTransactionModal({ type: 'reward', hash }), 510)
      },
      onError: err => {
        log({ err })
        closeModal()
        openAlert({
          type: 'error',
          title: 'Error getting reward'
        })
      }
    })
  }
  renderReward = () => {
    const { totalWinAmount } = this.props.user.currentReward
    return (
      <Col xs={3}>
        <TicketDrawContainer>
          <TicketDrawName color='#fff'>You reward is {totalWinAmount} BET</TicketDrawName>
          <TicketDivider />
          <PaymentButton gradient={'blue'} onClick={this.pickPrize}>
            Get reward
          </PaymentButton>
        </TicketDrawContainer>
      </Col>
    )
  }

  render = () => {
    const { winTicketsCount, isJackpot } = this.props.user.currentReward
    return (winTicketsCount && winTicketsCount > 0
      ? <div className='relative pb2 mb3'>
        <Row style={{ marginBottom: '1rem' }}>
          <Col xs={3}>
            <SectionHeader>
              You win a {isJackpot ? 'jackpot' : 'prize'}!
            </SectionHeader>
          </Col>
        </Row>
        <Row>
          {this.renderReward()}
        </Row>
      </div> : null
    )
  }
}
