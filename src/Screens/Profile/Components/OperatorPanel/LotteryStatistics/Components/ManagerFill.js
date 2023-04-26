import React, { Component, Fragment } from 'react'

import { SvgIcons } from 'Themes'
import {
  ManagerInput,
  ManagerResetButton,
  ManagerSaveButton
} from './../LotteryStatisticsStyles'

import l from 'Intl'

export default class ManagerFill extends Component {
  render = () => {
    return (
      <Fragment>
        <ManagerInput
          type='text'
          required
          pattern='.{3,}'
          placeholder={l.t(
            'operatorPanel.lotteryStatistics.manager.inputPlaceholder'
          )}
        />
        <ManagerResetButton>
          <SvgIcons.PlusIcon />
        </ManagerResetButton>
        <ManagerSaveButton />
      </Fragment>
    )
  }
}
