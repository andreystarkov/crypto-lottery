import React, { Component } from 'react'
import { ProgressContainer, ProgressLine } from './ProgressStyles'

export default class Progress extends Component {
  render () {
    const { percents } = this.props
    return (
      <ProgressContainer>
        <ProgressLine width={percents + '%'} />
      </ProgressContainer>
    )
  }
}
