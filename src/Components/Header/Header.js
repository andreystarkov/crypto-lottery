/* eslint react/prop-types: 0 */

import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Grid, Row } from 'react-styled-flexboxgrid'
import { Burger } from 'Styles/SidebarStyles'
import { HeaderCol } from 'Styles/HeaderStyles'
import './Header.css'

import { getOffset } from 'Utils'
import { configureAnimations } from 'Utils/Animations'

import { RoundButton, Logo, AccountStatus, LangSelector } from 'Components'
import TicketButton from './Components/TicketButton'
import { Colors } from 'Themes'

import l from 'Intl'

const HEADER_APPEAR_BREAKPOINT = 1

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollTop: 0,
      breakpoint: HEADER_APPEAR_BREAKPOINT
    }
    this.fixed = false
  }

  componentDidMount () {
    const me = document.getElementById('main-header')
    const offsets = getOffset(me)
    this.setState({ breakpoint: offsets.top })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    this.setState({ scrollTop })
  }

  toggleSidebar = () => {
    const { toggleSidebar } = this.props
    toggleSidebar()
  }

  renderButtons = () => {
    const { openModal, auth, history, location } = this.props
    return (
      <div className='flex flex-row items-center justify-end'>
        {auth && <AccountStatus />}
        <div className='tutorial-step-1 xs-hide sm-hide'>
          {!auth && (
            <RoundButton onClick={() => openModal('signIn')} className='mr2'>
              {l.t('main.buttons.signin')}
            </RoundButton>
          )}
          {!auth && (
            <RoundButton
              onClick={() => openModal('saveYourKey')}
              className='mr2'
              color={Colors.blue}
              border>
              {l.t('main.buttons.signup')}
            </RoundButton>
          )}
        </div>
        {location.pathname !== '/tickets' && (
          <TicketButton
            id='tickets-button'
            onClick={() => history.push('/tickets')}
            gradient='blue'
            color='white'>
            {l.t('main.buttons.getTickets')}
          </TicketButton>
        )}
      </div>
    )
  }

  render () {
    const { isOpen } = this.props
    const { scrollTop, breakpoint } = this.state
    const isFixed = scrollTop > breakpoint
    return (
      <div
        className='header-wrapper over-absolute'
        style={{ zIndex: 5555 }}
        id='main-header'>
        <Grid
          style={configureAnimations({
            duration: 0.35,
            easing: 'cubic-bezier(0.885, 0.435, 0.715, 0.86)'
          })}
          className={`top-header ${
            isFixed || isOpen
              ? `animated header-fixed ${isOpen && 'no-background'}`
              : 'header-relative'
          }`}>
          <Row
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'nowrap'
            }}>
            <HeaderCol>
              <Burger onClick={this.toggleSidebar} isOpen={isOpen} />
              <Link to='/'>
                <Logo />
              </Link>
            </HeaderCol>
            <HeaderCol>
              {this.renderButtons()}
              <div className='ml2'>
                <LangSelector />
              </div>
            </HeaderCol>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default withRouter(Header)
