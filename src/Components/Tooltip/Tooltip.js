import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

import './Tooltip.css'

import { TooltipWrapper, TooltipButton } from './TooltipStyles'

import { SvgIcons } from 'Themes'

export default class Tooltip extends Component {
  static propTypes = {
    tooltipID: PropTypes.string,
    maxWidth: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    position: PropTypes.string,
    tooltipText: PropTypes.string
  }
  render () {
    const {
      tooltipID,
      maxWidth,
      marginLeft,
      marginRight,
      place,
      tooltipText
    } = this.props
    return (
      <TooltipWrapper maxWidth={maxWidth} className='tooltip-wrapper'>
        <TooltipButton
          data-tip
          data-for={tooltipID}
          marginLeft={marginLeft}
          marginRight={marginRight}>
          <SvgIcons.QuestionIcon />
        </TooltipButton>
        <ReactTooltip
          id={tooltipID}
          place={place || 'top'}
          type='dark'
          effect='solid'>
          {tooltipText}
        </ReactTooltip>
      </TooltipWrapper>
    )
  }
}
