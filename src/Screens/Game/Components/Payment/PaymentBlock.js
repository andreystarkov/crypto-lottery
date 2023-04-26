import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getOffset, getMeasuresById, rem } from 'Utils'
import AddTickets from '../AddTickets'

export default class PaymentBlock extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  state = {
    scrollTop: null,
    isDesktop: true
  }

  componentDidMount () {
    const me = document.getElementById('payment')
    const offsets = getOffset(me)
    const { width } = getMeasuresById('payment')
    this.paymentOffsetTop = offsets.top - rem * 4.2
    this.paymentWidth = width

    this.handleResize()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  paymentWidth = null
  paymentOffsetTop = null

  handleScroll = event => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    this.setState({ scrollTop })
  }

  handleResize = event => {
    this.setState({ isDesktop: document.documentElement.clientWidth > 1200 })
  }

  renderDesktop = () => {
    const { scrollTop } = this.state
    const { children } = this.props
    const isFixed = scrollTop > this.paymentOffsetTop
    return (
      <div
        id='payment'
        style={
          isFixed
            ? {
              top: `${4 * rem}px`,
              width: `${this.paymentWidth}px`,
              position: 'fixed'
            }
            : {}
        }>
        {children}
        <AddTickets />
      </div>
    )
  }

  renderMobile = () => {
    const { children } = this.props
    return children
  }

  render () {
    const { isDesktop } = this.state
    return isDesktop ? this.renderDesktop() : this.renderMobile()
  }
}
