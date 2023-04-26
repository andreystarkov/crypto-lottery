import React from 'react'

import { Col } from 'react-styled-flexboxgrid'
import { withRouter } from 'react-router-dom'

import {
  ButtonMore,
  Tabs,
  TransactionsTable,
  SectionHeader,
  HideOverflow
} from 'Components'
import { SectionWrapper } from 'Styles/CommonStyles'
import {
  RightAlign,
  RecentTableSectionBox,
  RecentTableStatisticsGrid,
  RecentTableStatisticsRow,
  RecentTableStatisticsCol,
  RecentTableSectionHead,
  RecentTableSectionHeadRow,
  RecentTableSectionTitle
} from 'Styles/MainStyles'

import RecentBetsTable from './RecentBetsTable'

import l from 'Intl'

class RecentTable extends React.Component {
  render () {
    const { history, transactions, lotteryTickets } = this.props
    const { incoming, outcoming } = transactions
    return (
      <SectionWrapper>
        <RecentTableStatisticsGrid className='tutorial-step-5'>
          <SectionHeader
          // title={l.t('main.titles.statistics')}
          />
          <RecentTableStatisticsRow>
            <RecentTableStatisticsCol id='recentbets'>
              <RecentTableSectionBox>
                <RecentTableSectionHead>
                  <RecentTableSectionHeadRow className='section-row'>
                    <Col xs={6}>
                      <RecentTableSectionTitle>
                        {l.t('main.titles.recentbets')}
                      </RecentTableSectionTitle>
                    </Col>
                    <Col xs={6}>
                      <RightAlign>
                        <ButtonMore onClick={() => history.push('/results')}>
                          {l.t('main.all')}
                        </ButtonMore>
                      </RightAlign>
                    </Col>
                  </RecentTableSectionHeadRow>
                </RecentTableSectionHead>
                <HideOverflow parent='recentbets'>
                  <RecentBetsTable lotteryTickets={lotteryTickets} />
                </HideOverflow>
              </RecentTableSectionBox>
            </RecentTableStatisticsCol>
            <RecentTableStatisticsCol id='recenttx'>
              <RecentTableSectionBox>
                <RecentTableSectionHead paddingBottom='0rem'>
                  <RecentTableSectionHeadRow className='section-row'>
                    <Col xs={9}>
                      <RecentTableSectionTitle>
                        {l.t('main.titles.recenttx')}
                      </RecentTableSectionTitle>
                    </Col>
                    <Col xs={3}>
                      <RightAlign>
                        <ButtonMore
                          onClick={() => history.push('/transactions')}>
                          {l.t('main.all')}
                        </ButtonMore>
                      </RightAlign>
                    </Col>
                  </RecentTableSectionHeadRow>
                </RecentTableSectionHead>
                <HideOverflow parent='recenttx'>
                  <Tabs
                    tabs={[
                      {
                        name: l.t('main.tx.incoming'),
                        content: <TransactionsTable full data={incoming} />
                      },
                      {
                        name: l.t('main.tx.outcoming'),
                        content: <TransactionsTable full data={outcoming} />
                      }
                    ]}
                  />
                </HideOverflow>
              </RecentTableSectionBox>
            </RecentTableStatisticsCol>
          </RecentTableStatisticsRow>
        </RecentTableStatisticsGrid>
      </SectionWrapper>
    )
  }
}

export default withRouter(RecentTable)
