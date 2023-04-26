import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import FooterShowCombination from './FooterShowCombination'
import FooterFinal from './FooterFinal'

export default class StatisticsFooter extends Component {
  static propTypes = {
    subtitle: PropTypes.string,
    combination: PropTypes.object.isRequired
  }
  render = () => {
    const { subtitle, combination } = this.props
    return (
      <Fragment>
        <FooterShowCombination />
        <FooterFinal subtitle={subtitle} combination={combination} />
      </Fragment>
    )
  }
}
