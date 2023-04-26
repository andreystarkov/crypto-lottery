import React, { Component } from 'react'
import { Grid } from 'react-styled-flexboxgrid'

import {
  Header,
  Footer,
  HeaderBack,
  LoadMore,
  BackgroundImage,
  Tabs,
  MobileWrap
} from 'Components'
import { ScreenWrapper, ScreenTitle, TabsContainer } from 'Styles/CommonStyles'
import { Colors } from 'Themes'

// import { getNextLimit, configMore, getInitialLimits, limitArr } from 'Utils/LoadMore'

import RecentBetsTable from './Components/RecentBetsTable'
import RecentWinnersTable from './Components/RecentWinnersTable'
import l from 'Intl'

export const LOAD_MORE_STEP = 10

export default class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: 0
    }
  }

  tabsConfig = () => {
    const { lotteryTickets, lotteryWinners } = this.props
    return [
      {
        name: l.t('main.titles.recentbets'),
        content: (
          <MobileWrap nosm={true}>
            <RecentBetsTable full data={lotteryTickets} />
          </MobileWrap>
        )
      },
      {
        name: l.t('main.titles.recentwinners'),
        content: (
          <MobileWrap nosm={true}>
            <RecentWinnersTable full data={lotteryWinners} />
          </MobileWrap>
        )
      }
    ]
  }

  loadMore = () => {
    const { lotteryTicketsLoading, lotteryTicketsRequest } = this.props
    if (!lotteryTicketsLoading) lotteryTicketsRequest()
  }

  renderLoadMore = () => {
    const {
      lotteryTickets,
      lotteryTicketsTotal,
      lotteryTicketsLoading
    } = this.props
    const config = {
      limit: lotteryTickets.length,
      name: l.t('main.tx.lotterytickets'),
      total: lotteryTicketsTotal,
      field: ''
    }
    return (
      <LoadMore
        {...config}
        loading={lotteryTicketsLoading}
        onMore={this.loadMore}
      />
    )
  }

  render () {
    const { tab } = this.state
    return (
      <ScreenWrapper backgroundColor={Colors.navyBlue}>
        <BackgroundImage name='about' />
        <Header />
        <HeaderBack />
        <Grid className='over-absolute' style={{ minHeight: '56vh' }}>
          <ScreenTitle>{l.t('main.routes.results')}</ScreenTitle>
          <TabsContainer>
            <Tabs
              initialIndex={tab}
              onTabChange={tab => this.setState({ tab })}
              tabs={this.tabsConfig()}
            />
          </TabsContainer>
          {tab === 0 && this.renderLoadMore()}
        </Grid>
        <Footer />
      </ScreenWrapper>
    )
  }
}
