import React, { Component } from 'react'
import './ContentSpinner.css'
import { SpinnerContainer } from './ContentSpinnerStyles'

export default class ContentSpinner extends Component {
  render () {
    return (
      <SpinnerContainer>
        <div className='spinner-container animated fadeIn'>
          <div className='content-loader'>
            <div className='spinner-box' />
            <div className='spinner-box' />
          </div>
        </div>
        {/* <div className='centered'>
          <div className='blob-1'></div>
          <div className='blob-2'></div>
        </div> */}
      </SpinnerContainer>
    )
  }
}
