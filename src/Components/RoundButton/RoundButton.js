import React, { Component } from 'react'
import { Button } from './RoundButtonStyles'
import './RoundButton.css'

export default class RoundButton extends Component {
  render () {
    const { children, ...etc } = this.props
    return <Button {...etc}>{children}</Button>
  }
}
