import React, { Component } from 'react'
import { Grid } from 'react-styled-flexboxgrid'

import { Header, Footer, HeaderBack, Tabs, LoadMore, TxTable, BackgroundImage } from 'Components'
import { ScreenWrapper, ScreenTitle, TabsContainer } from 'Styles/CommonStyles'
import { Colors } from 'Themes'

import { getNextLimit, configMore, getInitialLimits, limitArr } from 'Utils/LoadMore'
import l from 'Intl'
import { log } from 'Utils/Log'
const tabs = [
  'Incoming',
  'Outcoming'
]

const pages = {
  0: { field: 'incoming', text: l.t('main.tx.transactions') },
  1: { field: 'outcoming', text: l.t('main.tx.transactions') }
}

export default class Transactions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: 1,
      ...getInitialLimits(pages)
    }
  }

  loadMore = props => this.setState(getNextLimit(props, this.state))

  renderLoadMore = () => {
    const { tab } = this.state
    const { transactions } = this.props
    const page = pages[tab]
    return (
      <LoadMore
        {...configMore(page, this.state, transactions[page.field])}
        onMore={this.loadMore} />
    )
  }

  getTabConfig = (name) => {
    const { transactions } = this.props
    const field = name.toLowerCase()
    log('!', field)
    let data = transactions[field]
    if (data.length > 0) data = limitArr(data, this.state[`${field}Limit`])
    const content = <TxTable full data={data} placeholder={l.t('main.tx.notx')} />
    return { name, content }
  }

  render () {
    return (
      <ScreenWrapper backgroundColor={Colors.navyBlue}>
        <BackgroundImage name='about' />
        <Header />
        <HeaderBack />
        <Grid className='over-absolute'>
          <ScreenTitle>{l.t('main.routes.transactions')}</ScreenTitle>
          <TabsContainer>
            <Tabs
              initialIndex={this.state.tab}
              onTabChange={tab => this.setState({ tab })}
              tabs={tabs.map(this.getTabConfig)} />
          </TabsContainer>
          {this.renderLoadMore()}
        </Grid>
        <Footer />
      </ScreenWrapper>
    )
  }
}
