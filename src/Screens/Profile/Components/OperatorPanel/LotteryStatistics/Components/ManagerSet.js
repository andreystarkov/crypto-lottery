import React, { Component } from 'react'

import { ShortButton } from 'Styles/Buttons'
import { Colors } from 'Themes'

import l from 'Intl'
export default class ManagerSet extends Component {
  render = () => {
    return (
      <ShortButton hoverBgColor={Colors.lightOrange}>
        {l.t('operatorPanel.lotteryStatistics.manager.setButton')}
      </ShortButton>
    )
  }
}
