import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormInputRow from './InputRow'
import OdometerRow from './OdometerRow'

import { FormWrapper } from './../LotteryFillingInfoStyles'

export default class Form extends Component {
  static propTypes = {
    inputsInfo: PropTypes.array,
    odometerInfo: PropTypes.array
  }
  renderInputRows = () => {
    const { inputsInfo } = this.props
    return inputsInfo.map(item => (
      <FormInputRow key={item.title} {...item} />
    ))
  }
  renderOdometerRows = () => {
    const { odometerInfo } = this.props
    return odometerInfo.map(item => (
      <OdometerRow key={item.title} {...item} />
    ))
  }
  render () {
    return (
      <FormWrapper>
        {this.renderInputRows()}
        {this.renderOdometerRows()}
      </FormWrapper>
    )
  }
}
