import React, { Component } from 'react'

import Floater from 'react-floater'
import styles from './FloaterStyles'

export default class FloaterComponent extends Component {
  render () {
    const { open, target, content, ...etc } = this.props
    return (
      <Floater
        placement='bottom'
        disableFlip
        styles={styles}
        content={content}
        open={open}
        target={target}
        {...etc}
      />
    )
  }
}
