import React, { Component } from 'react'

import { formatNumber } from 'Utils'
import { Row } from 'react-styled-flexboxgrid'
import { AccountCol, AccountStatusContainer, Avatar, Balance, LogoutButton, Transaction, TransactionText } from './AccountStatusStyles'

import EthConfig from 'Config/Eth'
const { addressUrl } = EthConfig

export default class AccountStatus extends Component {
  isProfile = (this.props.location.pathname === '/profile')

  onProfileClick = () => !this.isProfile && this.props.history.push('/profile')

  logout = () => {
    const { logout, history } = this.props
    if (this.isProfile) history.push('/')
    logout()
  }

  render () {
    const { user } = this.props
    const { openKey, balanceBET } = user

    const output = (
      <AccountStatusContainer id='account-status' disabled={this.isProfile}>
        <Row>
          <AccountCol
            xs={4}
            onClick={this.onProfileClick}>
            <Avatar disabled={this.isProfile} />
          </AccountCol>
          <AccountCol
            xs={5}
            style={{ display: 'block' }}
            className='xs-hide pl2'
            onClick={this.onProfileClick}>
            {this.isProfile ? <Transaction
              rel='noopener noreferrer'
              href={`${addressUrl}${openKey}`}
              target='_blank'>
              {openKey}
            </Transaction> : <TransactionText>{openKey}</TransactionText>}
            <Balance style={{ opacity: balanceBET !== null ? '1' : '0' }}>
              {formatNumber(balanceBET)} BET
            </Balance>
          </AccountCol>
          <AccountCol xs={3} style={{ textAlign: 'center' }}>
            <LogoutButton onClick={this.logout} />
          </AccountCol>
        </Row>
      </AccountStatusContainer>
    )

    return output
  }
}
