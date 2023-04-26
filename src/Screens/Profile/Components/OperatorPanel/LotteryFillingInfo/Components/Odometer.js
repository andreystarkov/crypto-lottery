import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SvgIcons } from 'Themes'

import {
  FormInputWrapper,
  FormInput,
  SingleInput,
  MinusButton,
  PlusButton
} from './../LotteryFillingInfoStyles'

function replaceChar (string, char, index) {
  let a = string.split('')
  a[index] = char
  return a.join('')
}

export default class Odometer extends Component {
  static propTypes = {
    value: PropTypes.string,
    field: PropTypes.string,
    onChange: PropTypes.func,
    onControlClick: PropTypes.func
  }
  handleCellChange = (cellValue, index) => {
    const { onChange, value, field } = this.props

    if (parseInt(cellValue) >= 0 && parseInt(cellValue) < 10) {
      let prevValue = value
      const nextValue = replaceChar(prevValue, cellValue[0], index)
      if (onChange) onChange(nextValue, field)
    }
  }
  handleControlClick = action => {
    const { onControlClick, field } = this.props
    if (onControlClick) onControlClick(field, action)
  }
  renderInputs = (digit, index) => {
    const { value } = this.props
    const valueArray = `${value}`.split('')
    return (
      <SingleInput
        key={`${index}digit${digit}`}
        value={digit}
        width={valueArray.length}
        onChange={e => this.handleCellChange(e.target.value, index)}
      />
    )
  }
  renderForm = () => {
    const { value } = this.props
    const valueArray = `${value}`.split('')
    return (
      <FormInputWrapper>
        <MinusButton onClick={() => this.handleControlClick('decrement')}>
          <SvgIcons.MinusIcon />
        </MinusButton>
        <FormInput type='number' hidden value={value} />
        {valueArray.map((digit, index) => this.renderInputs(digit, index))}
        <PlusButton onClick={() => this.handleControlClick('increment')}>
          <SvgIcons.PlusIcon />
        </PlusButton>
      </FormInputWrapper>
    )
  }
  render () {
    const { value } = this.props
    return value ? this.renderForm() : null
  }
}
