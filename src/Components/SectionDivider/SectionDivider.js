import React, { Component } from 'react'
import {
  DiceIconInner,
  Dice,
  DividerWrapper,
  AbsoluteWrap,
  DividerLine
} from './SectionDividerStyles'

export default class SectionDivider extends Component {
  render () {
    const { inner } = this.props
    return (
      <DividerWrapper className='container' {...this.props}>
        <AbsoluteWrap>{inner ? <DiceIconInner /> : <Dice />}</AbsoluteWrap>
        <DividerLine inner={inner} left />
        <DividerLine inner={inner} />
      </DividerWrapper>
    )
  }
}
