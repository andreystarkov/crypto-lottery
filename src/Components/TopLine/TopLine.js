import React, { Component } from 'react'

import {
  TopLineWrapper,
  TopLineBackrgound,
  TopLink,
  Arrow
} from './TopLineStyles'
import './TopLine.css'

export default class TopLine extends Component {
  render () {
    const { text, href } = this.props
    return (
      <TopLineBackrgound>
        <TopLineWrapper>
          <TopLink to={href || '#'}>{text}</TopLink>
          <Arrow />
        </TopLineWrapper>
      </TopLineBackrgound>
    )
  }
}
