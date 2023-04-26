import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Tooltip } from 'Components'

import { Subtitle } from 'Styles/OperatorPanelStyles'

import {
  FormRow,
  FormTitle,
  FormInputWrapper,
  FormInput
} from './../LotteryFillingInfoStyles'

export default class InputRow extends Component {
  static propTypes = {
    title: PropTypes.string,
    defaultValue: PropTypes.number,
    tooltip: PropTypes.bool,
    tooltipId: PropTypes.string,
    tooltipText: PropTypes.string
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
    const { title, defaultValue } = this.props
    return (
      <FormRow>
        <FormTitle>
          <Subtitle>{title}</Subtitle>
          {this.renderTooltip()}
        </FormTitle>
        <FormInputWrapper>
          <FormInput type='text' defaultValue={defaultValue} />
        </FormInputWrapper>
      </FormRow>
    )
  }
}
