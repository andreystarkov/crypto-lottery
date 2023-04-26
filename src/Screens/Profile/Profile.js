import React, { Component } from 'react'

import {
  Header,
  Footer,
  HeaderBack,
  Tabs,
  LoadMore,
  TxTable,
  BackgroundImage
} from 'Components'

import { Colors } from 'Themes'
import { ScreenWrapper } from 'Styles/CommonStyles'
import { ProfileTabs, ProfileGrid } from 'Styles/ProfileStyles'

import {
  getNextLimit,
  configMore,
  getInitialLimits,
  limitArr
} from 'Utils/LoadMore'

import ValuesGrid from './Components/ValuesGrid'
import MyTickets from './Components/MyTickets'

import l from 'Intl'
// import ReferralProgram from './Components/ReferralProgram'
import OperatorPanel from './Components/OperatorPanel'

const pages = {
  0: { field: 'transactions', text: l.t('profile.transactions') },
  1: { field: 'pastDraws', text: l.t('profile.pastdraw') }
}

export default class Profile extends Component {
  state = { tab: 1, ...getInitialLimits(pages) }

  componentDidMount () {
    // TODO: Раскоментировать !!!! перед pull
    const { eth, history } = this.props
    if (!eth.auth) history.push('/')
  }

  loadMore = props => this.setState(getNextLimit(props, this.state))

  renderLoadMore = () => {
    const { tab } = this.state
    const { transactions } = this.props
    let pastDraws = this.getPastDraws()
    const data = { transactions, pastDraws }
    const page = pages && pages[tab]
    return (
      page && (
        <LoadMore
          {...configMore(page, this.state, data[page.field])}
          onMore={this.loadMore}
        />
      )
    )
  }

  getPastDraws = () => {
    const { user, lottery } = this.props
    const { isWinTicket, countOfDraws } = lottery
    const { pastTicketsData, userTicketsData, currDraws } = user
    let tData = []
    const is = currDraws === countOfDraws && isWinTicket
    if (is) {
      tData = userTicketsData
    }
    return [...tData, ...pastTicketsData]
  }

  render () {
    const { transactions, totalTicketsLength } = this.props
    const { transactionsLimit, pastDrawsLimit, tab } = this.state

    let pastDraws = this.getPastDraws()
    const pdData = limitArr(pastDraws, pastDrawsLimit)

    return (
      <ScreenWrapper backgroundColor={Colors.navyBlue}>
        {/* <BackgroundImage name='about' /> */}
        <Header />
        <HeaderBack />
        <div style={{ minHeight: '56vh' }}>
          <div className='over-absolute'>
            <ValuesGrid {...this.props} />
            <ProfileGrid>
              <ProfileTabs>
                <Tabs
                  initialIndex={tab}
                  onTabChange={tab => this.setState({ tab })}
                  tabs={[
                    {
                      name: l.t('main.routes.transactions'),
                      content: (
                        <TxTable
                          data={limitArr(transactions, transactionsLimit)}
                          full
                        />
                      )
                    },
                    {
                      name: l.t('profile.mytickets'),
                      count:
                        totalTicketsLength > 0 ? totalTicketsLength : false,
                      content: <MyTickets pastDraws={pdData} {...this.props} />
                    },
                    // {
                    //   name: 'Referral program',
                    //   content: <ReferralProgram />
                    // },
                    {
                      name: l.t('operatorPanel.tabName'),
                      content: <OperatorPanel />
                    }
                  ]}
                />
              </ProfileTabs>
            </ProfileGrid>
          </div>
          {this.renderLoadMore()}
        </div>
        <Footer />
      </ScreenWrapper>
    )
  }
}
