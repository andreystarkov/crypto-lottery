import React, { Component } from 'react'
import { Button } from './GradientBorderButtonStyles'

export default class GradientBorderButton extends Component {
  render () {
    const { children, ...etc } = this.props
    return <Button {...etc}>{children}</Button>
  }
}
