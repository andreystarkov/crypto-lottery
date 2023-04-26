import React from 'react'

import { ContentSpinner } from 'Components'
import { SectionHeader, Content } from 'Styles/CommonStyles'
import { MyTicketsSection } from 'Styles/ProfileStyles'

import UpcomingDraw from './UpcomingDraw'
import PastDraws from './PastDraws'
import Reward from './Reward'

import l from 'Intl'

export default class MyTickets extends React.Component {
  render () {
    const { user, pastDraws } = this.props
    const { isUserLoading } = user

    return (
      <div>
        <Content paddingBottom='0'>
          <MyTicketsSection>
            <UpcomingDraw {...this.props} />
          </MyTicketsSection>
          <Reward {...this.props} />
          <SectionHeader>{l.t('profile.pastdraws')}</SectionHeader>
        </Content>
        {isUserLoading && pastDraws.length === 0 ? (
          <ContentSpinner />
        ) : (
          <PastDraws {...this.props} data={pastDraws} />
        )}
      </div>
    )
  }
}
