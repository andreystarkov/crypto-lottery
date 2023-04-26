import React, { Component } from 'react'
import { GradientButton } from 'Components'
import {
  GradientButtonWrapper,
  GradientButtonImage
} from './TicketButtonStyles'

export default class TicketButton extends Component {
  render () {
    const { children, ...etc } = this.props
    return (
      <React.Fragment>
        <GradientButton className='xs-hide' {...etc}>
          {children}
        </GradientButton>
        <GradientButtonWrapper {...etc}>
          <GradientButtonImage />
        </GradientButtonWrapper>
      </React.Fragment>
    )
  }
}
