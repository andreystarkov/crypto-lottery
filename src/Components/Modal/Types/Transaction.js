import React, { Component } from 'react'

import { secondsToTime } from 'Utils/Time'
import l from 'Intl'

import ModalContent from '../ModalContent'
import { TxLink, FlexRow } from 'Styles/CommonStyles'
import { TransactionTxText, TransactionTimer } from './../ModalStyles'

export default class Transaction extends Component {
  constructor (props) {
    super(props)
    this.timer = null
    this.state = {
      elapsedSeconds: null
    }
  }

  componentDidMount () {
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    this.clearTimer()
  }

  clearTimer = () => {
    clearInterval(this.timer)
  }

  tick = t => {
    const { elapsedSeconds } = this.state
    this.setState({ elapsedSeconds: elapsedSeconds + 1 })
  }

  handleChange = e => {
    const privateKey = e.target.value
    this.setState({ privateKey })
  }

  renderTransactionStatus = () => {
    const { elapsedSeconds } = this.state
    const { params } = this.props
    return (
      <div className='mb2'>
        <FlexRow
          alignItems='center'
          justifyContent='center'
          paddingVertical='1rem'>
          <TransactionTxText>TX:</TransactionTxText>{' '}
          <TxLink width='15rem' hash={params.hash} />
        </FlexRow>
        <div className='center'>
          <TransactionTimer>{secondsToTime(elapsedSeconds)}</TransactionTimer>
        </div>
      </div>
    )
  }

  getTitle = () => {
    const { params } = this.props
    const { type } = params
    if (type === 'approve') {
      return l.t('modals.tx.approving_contract')
    }
    if (type === 'reset') {
      return l.t('modals.tx.resetting_contract')
    }
    if (type === 'purchase') {
      return l.t('modals.tx.puchasing_tickets')
    }
    if (type === 'reward') {
      return l.t('modals.tx.receiving_reward')
    }
    if (type === 'initial-balance-eth') {
      return l.t('modals.tx.receiving_first_eth')
    }
    if (type === 'initial-balance-bet') {
      return l.t('modals.tx.receiving_first_bet')
    }
  }

  render () {
    const title = this.getTitle()
    return (
      <ModalContent
        disableClose
        icon='auth'
        title={title}
        message={
          <div>
            {l.t('modals.tx.it_may_take_several_minutes')}
            <br />
            {l.t('modals.tx.cannot_be_cancelled')}
          </div>
        }
        animation='zoomIn'
        duration={0.5}
        easing='ease-in-out-quint'
        {...this.props}>
        {this.renderTransactionStatus()}
      </ModalContent>
    )
  }
}
