import React, { Component } from 'react'
import PropTypes from './PaymentTypes'

import { FlexRow, FlexHalf } from 'Styles/CommonStyles'
import { Images } from 'Themes'
import { log } from 'Utils/Log'

import {
  PaymentContainer, DiscountValueFlag, PaymentSection, PaymentTitle,
  PaymentDesc, PaymentButton, Label, Subscript, Value, TotalValue, TotalLabel,
  SubtotalValue, DiscountValue, PaymentFixedContainer, PaymentPanel, PaymentPanelCol, PaymentPanelButton } from 'Styles/PaymentStyles'

import { checkMultiplierStatus } from 'Utils'

import { Checkbox } from 'Styles/Inputs'
import { DrawsCountControl, OverlaySpinner } from 'Components'

import { TICKETS_MAX } from 'Constants/Tickets'
import { CONTRACT_ADDRESS } from 'Constants/Eth'
import { approveContract, buyTickets } from 'Services/Eth'
import { getFilledTicketsCount, calculateTotals, calculateDiscount } from 'Utils/Tickets'

import l from 'Intl'

export default class Payment extends Component {
  static propTypes = PropTypes

  state = {
    loading: false,
    collapsed: true
  }

  onBuyClick = () => {
    const { tickets, openAlert, eth, multiDrawsTicketsLength, multidraws,
      openModal, numEndDraws, countOfDraws, user, upcomingTicketsLength, ticketsLength } = this.props
    const { balanceETH, balanceBET } = user
    const { total } = this.calculateTotals()
    const filledCount = getFilledTicketsCount(tickets)

    if (this.isValid()) {
      if (eth.auth) {
        if (filledCount === tickets.length) {
          if (balanceETH > 0) {
            if (balanceBET >= parseFloat(total)) {
              if (multidraws > 0 && multiDrawsTicketsLength > 0 && numEndDraws > countOfDraws) {
                openAlert({
                  title: l.t('getTickets.error_multidraws'),
                  type: 'error'
                })
              } else {
                if (upcomingTicketsLength + ticketsLength <= 25) {
                  this.setState({ loading: true })
                  this.buyTickets()
                } else {
                  openAlert({
                    title: l.t('getTickets.error_more25'),
                    type: 'error'
                  })
                }
              }
            } else {
              openAlert({
                title: l.t('getTickets.error_balance'),
                message: l.t('getTickets.error_bet'),
                type: 'error'
              })
            }
          } else {
            openAlert({
              title: l.t('getTickets.error_balance'),
              message: l.t('getTickets.error_eth'),
              type: 'error'
            })
          }
        } else {
          openAlert({
            title: l.t('getTickets.error_fill'),
            message: l.t('getTickets.error_auto'),
            type: 'error'
          })
        }
      } else {
        openModal('signIn')
      }
    }
  }

  buyTickets = () => {
    const { closeModal, openTransactionModal, openAlert, user, ticketPrice,
      tickets, buyTicketsParams, refreshTransactionStatus, multidraws, powerplay } = this.props
    const { openKey } = user

    const ticketsCount = tickets.length
    let amount = ticketPrice * ticketsCount * 10 ** 18 * (powerplay ? 1.5 : 1)

    if (multidraws > 0) amount *= multidraws

    console.log({ amount, ticketPrice })

    approveContract({
      contractAddress: CONTRACT_ADDRESS,
      amount,
      openKey,
      onPending: (hash, isResetting) => {
        console.log('pending')
        this.setState({ loading: false, error: false })
        openTransactionModal({ type: isResetting ? 'reset' : 'approve', hash })
      },
      onSuccess: (allowance, isResetting) => {
        console.log('success')
        if (isResetting) {
          closeModal()
          this.buyTickets()
        } else {
          closeModal()
          buyTickets({
            ...buyTicketsParams,
            onPending: (hash) => {
              this.setState({ loading: false })
              refreshTransactionStatus({ hash })
              setTimeout(() => openTransactionModal({ type: 'purchase', hash }), 510)
            },
            onError: (err) => {
              closeModal()
              log('buyTickets err', err)
              this.setState({ loading: false, error: true })
              openAlert({
                title: l.t('getTickets.error_purchasing'),
                message: err.message,
                type: 'error'
              })
            }
          })
        }
      },
      onError: (err) => {
        closeModal()
        this.setState({ loading: false })
        openAlert({
          title: l.t('getTickets.error_approve'),
          message: err.message,
          type: 'error'
        })
      }
    })
  }

  calculateDiscount = () => {
    const { multidraws, dataDraws } = this.props
    return calculateDiscount({ multidraws, dataDraws })
  }

  calculateTotals = () => {
    const { multidraws, powerplay, ticketPrice, tickets, dataDraws } = this.props
    return calculateTotals({ multidraws, powerplay, ticketPrice, tickets, dataDraws })
  }

  renderMultiplier = () => {
    const { updateTicketParams, powerplay } = this.props
    return (
      <FlexRow marginTop={'1rem'}>
        <FlexHalf alignItems='flex-start'>
          <Label>
            {l.t('getTickets.multiplier')}
          </Label>
        </FlexHalf>
        <FlexHalf alignItems='flex-end'>
          <Checkbox
            onClick={() => updateTicketParams({ powerplay: !powerplay })}
            checked={powerplay} />
        </FlexHalf>
      </FlexRow>
    )
  }

  renderTotals = () => {
    const { total, subtotal, discount, difference } = this.calculateTotals()
    return (
      <PaymentSection noBorder>
        <FlexRow>
          <FlexHalf alignItems='flex-start'>
            <Label>
              {l.t('getTickets.subtotal')}
            </Label>
            <Subscript cyan>
              {l.t('getTickets.discount') + ' ' + discount + '%:'}
            </Subscript>
          </FlexHalf>
          <FlexHalf alignItems='flex-end'>
            <SubtotalValue>{subtotal + ' ' + l.t('main.bet')}</SubtotalValue>
            <DiscountValue>{difference + ' ' + l.t('main.bet')}</DiscountValue>
          </FlexHalf>
        </FlexRow>
        <FlexRow marginTop='1rem'>
          <FlexHalf alignItems='flex-start'>
            <TotalLabel>
              {l.t('getTickets.total')}
            </TotalLabel>
          </FlexHalf>
          <FlexHalf alignItems='flex-end'>
            <TotalValue>{total + ' ' + l.t('main.bet')}</TotalValue>
          </FlexHalf>
        </FlexRow>
      </PaymentSection>
    )
  }

  isValid = () => {
    return true
    // const { eth, isLotteryActive, multidraws, currentBlock, sellOverBlock, countOfDraws, upcomingTicketsLength, ticketsLength } = this.props
    // const { user } = this.props

    // let isValid = !eth.auth || (eth.auth && isLotteryActive) || (!isLotteryActive && multidraws > 0)
    // if (eth.auth && isLotteryActive && (currentBlock > sellOverBlock - 5)) isValid = false
    // if (eth.auth && multidraws > 0) {
    //   const allowMultiplier = checkMultiplierStatus(user, countOfDraws)
    //   if (allowMultiplier) {
    //     isValid = true
    //   } else {
    //     isValid = false
    //   }
    // }
    // if (upcomingTicketsLength + ticketsLength > 25) return false
    // return isValid
  }

  renderPayment = () => {
    const { tickets, eth, isLotteryActive, multidraws, currentBlock, sellOverBlock, upcomingTicketsLength, ticketsLength } = this.props
    const { loading } = this.state

    const filledCount = getFilledTicketsCount(tickets)
    const discount = this.calculateDiscount()

    const isValid = this.isValid()

    const getButtonText = () => {
      if (!eth.auth) return l.t('getTickets.signIn')
      if (!isLotteryActive && multidraws === 0) return l.t('getTickets.drawNotStarted')
      if (eth.auth && isLotteryActive && (currentBlock > sellOverBlock - 5) && multidraws === 0) return l.t('getTickets.drawFinished')
      if (eth.auth && multidraws > 0 && !isValid) return l.t('getTickets.wait')
      if (upcomingTicketsLength + ticketsLength > 25) return l.t('getTickets.max') + ' ' + TICKETS_MAX + ' ' + l.t('getTickets.tickets')
      return l.t('getTickets.purchase')
    }

    return (
      <PaymentContainer>
        {loading && <OverlaySpinner onClick={() => this.setState({ loading: false })} />}
        <DiscountValueFlag>{discount} %</DiscountValueFlag>
        <PaymentSection marginTop={'0rem'}>
          <PaymentTitle>{l.t('getTickets.payment')}</PaymentTitle>
          <PaymentDesc>{l.t('getTickets.chance')}<br />
            {l.t('getTickets.more')}</PaymentDesc>
        </PaymentSection>
        <PaymentSection marginTop={'0rem'}>
          <FlexRow>
            <FlexHalf alignItems='flex-start'>
              <Label>
                {l.t('getTickets.filledOut')}
              </Label>
            </FlexHalf>
            <FlexHalf alignItems='flex-end'>
              <Value>{filledCount}</Value>
            </FlexHalf>
          </FlexRow>
          <FlexRow marginTop={'1rem'}>
            <FlexHalf alignItems='flex-start'>
              <Label>
                {l.t('getTickets.numOfDraws')}
              </Label>
              <Subscript>
                ({discount}% {l.t('getTickets.discount')})
              </Subscript>
            </FlexHalf>
            <FlexHalf alignItems='flex-end'>
              <DrawsCountControl />
            </FlexHalf>
          </FlexRow>
          {this.renderMultiplier()}
        </PaymentSection>
        {this.renderTotals()}
        <PaymentButton disabled={!isValid} gradient={'blue'} onClick={this.onBuyClick}>
          {getButtonText()}
        </PaymentButton>
      </PaymentContainer>
    )
  }

  hideOnClickOutside = () => {
    const element = document.getElementById('payment-container')
    const outsideClickListener = event => {
      if (!element.contains(event.target)) { // or use: event.target.closest(selector) === null
        this.setState({ collapsed: true })
        removeClickListener()
      }
    }
    const removeClickListener = () => {
      document.removeEventListener('click', outsideClickListener)
    }

    document.addEventListener('click', outsideClickListener)
  }

  handleTogglePanel = (e) => {
    e.stopPropagation()

    let { collapsed } = this.state
    collapsed = !collapsed

    this.setState({ collapsed: collapsed })

    if (!collapsed) {
      this.hideOnClickOutside()
    }
  }

  renderPaymentPanel = () => {
    const { total } = this.calculateTotals()
    const { ticketsLength } = this.props
    const { collapsed } = this.state

    return (
      <PaymentPanel onClick={this.handleTogglePanel}>
        <PaymentPanelCol><PaymentPanelButton><img src={Images.icons.ticketsBig}/>{ticketsLength}</PaymentPanelButton></PaymentPanelCol>
        <PaymentPanelCol>{l.t('getTickets.buyTickets') + ' ' + total + ' ' + l.t('main.bet')}</PaymentPanelCol>
        <PaymentPanelCol><img src={collapsed ? Images.arrowUp : Images.arrowDown } /></PaymentPanelCol>
      </PaymentPanel>
    )
  }

  render () {
    const { collapsed } = this.state
    return (
      <PaymentFixedContainer id='payment-container' collapsed={!!collapsed}>
        {this.renderPayment()}
        {this.renderPaymentPanel()}
      </PaymentFixedContainer>
    )
  }
}
