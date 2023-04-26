import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Odometer from 'odometer'

import './Odometer.css'

export default class OdometerComponent extends PureComponent {
  // http://github.hubspot.com/odometer/
  static propTypes = {
    animation: PropTypes.bool,
    auto: PropTypes.bool,
    duration: PropTypes.number,
    format: PropTypes.string,
    selector: PropTypes.string,
    theme: PropTypes.string,
    value: PropTypes.number.isRequired
  }

  componentDidMount () {
    const { value, ...options } = this.props
    this.odometer = new Odometer({
      el: this.node,
      value,
      ...options
    })
  }

  componentDidUpdate () {
    const { value } = this.props
    this.odometer.update(value)
  }

  render () {
    return React.createElement('div', {
      ref: node => {
        this.node = node
      }
    })
  }
}

OdometerComponent.defaultProps = {
  theme: 'dao',
  format: 'dddddddd'
}
