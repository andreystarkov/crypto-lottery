import React, { Component } from 'react'
import { LogoImage } from './LogoStyles'

export default class Logo extends Component {
  render () {
    return <LogoImage {...this.props} />
  }
}
