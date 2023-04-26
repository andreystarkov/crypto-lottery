import React, { Component } from 'react'

import Form from './Components/Form'
import Footer from './Components/Footer'

import {
  PanelWrapper,
  CenteredContent,
  CenteredTitle,
  CenteredDescription
} from 'Styles/OperatorPanelStyles'

import l from 'Intl'
export default class LotteryFillingInfo extends Component {
  constructor (props) {
    super(props)
    const { sellOverBlock, stopLotteryBlock, closeLotteryBlock } = props.lottery
    this.state = {
      sellOverBlock: sellOverBlock ? sellOverBlock.toString() : null,
      stopLotteryBlock: stopLotteryBlock ? stopLotteryBlock.toString() : null,
      closeLotteryBlock: closeLotteryBlock
        ? closeLotteryBlock.toString()
        : null
    }
  }
  handleChange = (value, field) => this.setState({ [field]: value })
  handleControlClick = (field, action) => {
    if (action === 'increment') {
      this.setState(prevState => ({
        [field]: `${parseInt(prevState[field]) + 1}`
      }))
    } else {
      this.setState(prevState => ({
        [field]: `${parseInt(prevState[field]) - 1}`
      }))
    }
  }
  render () {
    const { lottery } = this.props
    const { sellOverBlock, stopLotteryBlock, closeLotteryBlock } = this.state
    return (
      <PanelWrapper>
        <CenteredContent wide>
          <CenteredTitle>
            {l.t('operatorPanel.lotteryFillingInfo.title')}
          </CenteredTitle>
          <CenteredDescription>
            {l.t('operatorPanel.lotteryFillingInfo.description')}
          </CenteredDescription>
          <Form
            inputsInfo={[
              {
                title: l.t('operatorPanel.lotteryFillingInfo.subtitle1'),
                defaultValue: lottery.ticketPrice,
                tooltip: false
              },
              {
                title: l.t('operatorPanel.lotteryFillingInfo.subtitle2'),
                defaultValue: 250000,
                tooltip: true,
                tooltipId: 'dataPrizeTooltip',
                tooltipText: l.t('operatorPanel.lotteryFillingInfo.tooltip2')
              }
            ]}
            odometerInfo={[
              {
                title: l.t('operatorPanel.lotteryFillingInfo.subtitle3'),
                defaultValue: lottery.sellOverBlock,
                value: sellOverBlock,
                tooltip: true,
                tooltipId: 'sellOverTooltip',
                tooltipText: l.t('operatorPanel.lotteryFillingInfo.tooltip3'),
                field: 'sellOverBlock',
                onChange: this.handleChange,
                onControlClick: this.handleControlClick
              },
              {
                title: l.t('operatorPanel.lotteryFillingInfo.subtitle4'),
                defaultValue: lottery.stopLotteryBlock,
                value: stopLotteryBlock,
                tooltip: true,
                tooltipId: 'stopLotteryTooltip',
                tooltipText: l.t('operatorPanel.lotteryFillingInfo.tooltip4'),
                field: 'stopLotteryBlock',
                onChange: this.handleChange,
                onControlClick: this.handleControlClick
              },
              {
                title: l.t('operatorPanel.lotteryFillingInfo.subtitle5'),
                defaultValue: lottery.closeLotteryBlock,
                value: closeLotteryBlock,
                tooltip: true,
                tooltipId: 'closeLotteryTooltip',
                tooltipText: l.t('operatorPanel.lotteryFillingInfo.tooltip5'),
                field: 'closeLotteryBlock',
                onChange: this.handleChange,
                onControlClick: this.handleControlClick
              }
            ]}
          />
        </CenteredContent>
        <Footer />
      </PanelWrapper>
    )
  }
}
