import React, { Component } from 'react'
import { Grid } from 'react-styled-flexboxgrid'

import { Header, Footer, HeaderBack, LoadMore, DrawsTable, BackgroundImage } from 'Components'
import { ScreenWrapper, ScreenTitle, FlatBox } from 'Styles/CommonStyles'
import { Colors } from 'Themes'
import { log } from 'Utils/Log'
export const LOAD_MORE_STEP = 10

export default class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: 0,
      lastDrawsLimit: 10
    }
  }

  loadMore = props => {
    log({ props })
  }

  renderLoadMore = () => {
    const { lastDrawsLoading, lastDraws } = this.props
    const countOfDraws = lastDraws.length
    const config = {
      limit: lastDraws.length,
      name: `past draws`,
      field: 'lastDrawsLimit',
      total: countOfDraws
    }
    return (
      <LoadMore
        {...config}
        loading={lastDrawsLoading}
        onMore={this.loadMore} />
    )
  }

  render () {
    const { lastDraws } = this.props
    return (
      <ScreenWrapper backgroundColor={Colors.navyBlue}>
        <BackgroundImage name='about' />
        <Header />
        <HeaderBack />
        <Grid className='over-absolute'>
          <ScreenTitle>Recent Draws</ScreenTitle>
          <div style={{ minHeight: '49vh' }}>
            <FlatBox>
              <DrawsTable full data={lastDraws} />
            </FlatBox>
            {this.renderLoadMore()}
          </div>
        </Grid>
        <Footer />
      </ScreenWrapper>
    )
  }
}
