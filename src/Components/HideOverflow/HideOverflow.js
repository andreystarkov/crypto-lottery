import React, { Component } from 'react'
import { HideWrapper } from './HideOverflowStyles'

export default class HideOverflow extends Component {
  constructor (props) {
    super(props)

    this.state = { width: '100%' }
    this.id = Math.random()
      .toString(36)
      .substring(7)
  }

  componentDidMount () {
    this.setOverflowState()
    window.addEventListener('resize', this.setOverflowState)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setOverflowState)
  }

  setOverflowState = () => {
    const { parent } = this.props
    const p = document.getElementById(parent || this.id)

    this.setState({ width: p.offsetWidth + 'px' })
  }

  render () {
    const { children } = this.props
    return (
      <HideWrapper id={this.id} {...this.state}>
        {children}
      </HideWrapper>
    )
  }
}
