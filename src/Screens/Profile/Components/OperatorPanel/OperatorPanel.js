import React, { Component, Fragment } from 'react'

import LotteryCreation from './LotteryCreation'
import LotteryFillingInfo from './LotteryFillingInfo'
import LotteryStatistics from './LotteryStatistics'
import { log } from 'Utils/Log'
export default class OperatorPanel extends Component {
  state = {
    referrerAddress: null,
    createButtonsType: 0
  }
  createLottery = () => {
    log(this.state)
  }
  handleCreateLotteryInput = e => {
    this.setState({ referrerAddress: e.target.value })
  }
  toggleCreateLotteryButtons = number => {
    this.setState({ createButtonsType: number })
  }
  render () {
    const { createButtonsType } = this.state
    return (
      <Fragment>
        <LotteryCreation
          handleCreateLotteryInput={this.handleCreateLotteryInput}
          createLottery={this.createLottery}
          toggleCreateLotteryButtons={this.toggleCreateLotteryButtons}
          createButtonsType={createButtonsType}
        />

        <LotteryFillingInfo />

        <LotteryStatistics />
      </Fragment>
    )
  }
}
