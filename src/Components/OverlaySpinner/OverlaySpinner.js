import React, { Component } from 'react'
import Spinner from '../Spinner'
import { ViewportOverlay } from './OverlaySpinnerStyles'

export default class OverlaySpinner extends Component {
  render () {
    return (
      <ViewportOverlay className='animated fadeIn' {...this.props}>
        <Spinner />
      </ViewportOverlay>
    )
  }
}
