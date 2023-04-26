import React, { Component } from 'react'
import './GradientButton.css'
import { Button } from './GradientButtonStyles'

export default class GradientButton extends Component {
  render () {
    const { children, ...etc } = this.props
    return <Button {...etc}>{children}</Button>
  }
}
