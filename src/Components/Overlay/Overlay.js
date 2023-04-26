import React, { Component } from 'react'
import { OverlayContainer } from './OverlayStyles'

export default class Overlay extends Component {
  render () {
    const { visible } = this.props
    return visible ? <OverlayContainer className='animated fadeIn' /> : null
  }
}
