import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Tooltip } from 'Components'

import { Subtitle } from 'Styles/OperatorPanelStyles'

import Odometer from './Odometer'

import { FormRow, FormTitle } from './../LotteryFillingInfoStyles'

export default class OdometerRow extends Component {
  static propTypes = {
    title: PropTypes.string,
    tooltip: PropTypes.bool,
    tooltipId: PropTypes.string,
    tooltipText: PropTypes.string,
    defaultValue: PropTypes.number,
    value: PropTypes.string,
    field: PropTypes.string,
    onChange: PropTypes.func,
    onControlClick: PropTypes.func
  }
  renderTooltip = () => {
    const { tooltip, tooltipId, tooltipText } = this.props
    if (tooltip) {
      return (
        <Tooltip
          tooltipID={tooltipId}
          marginLeft='0.3rem'
          place='top'
          tooltipText={tooltipText}
        />
      )
    }
  }
  render () {
    const {
      title,
      defaultValue,
      value,
      onChange,
      field,
      onControlClick
    } = this.props
    return (
      <FormRow>
        <FormTitle>
          <Subtitle>{title}</Subtitle>
          {this.renderTooltip()}
        </FormTitle>
        <Odometer
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onControlClick={onControlClick}
          field={field}
        />
      </FormRow>
    )
  }
}
