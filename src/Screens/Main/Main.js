import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { TopLine, Header, SectionDivider, Footer, BackgroundImage } from 'Components'
import { ScreenWrapper, SectionHeaderCenter, SectionHeaderCenterContent, HeaderText1, AfterHeader, linkStyle } from 'Styles/CommonStyles'
import { Colors } from 'Themes'
import l from 'Intl'

import RecentDraws from './Components/RecentDraws'
import RecentTable from './Components/RecentTable'
import HowItWorks from './Components/HowItWorks'
import Promo from './Components/Promo'
import RecentWinners from './Components/RecentWinners'

import './Main.css'

export default class Main extends Component {
  // componentDidMount () {
  //   const { tutorial, openModal } = this.props
  //   const { run, isStarted } = tutorial
  //   if (!isStarted && !run) {
  //     openModal('tutorial')
  //   }
  // }
  render () {
    return (
      <ScreenWrapper backgroundColor={Colors.navyBlue}>
        <TopLine text={l.t('main.topline')} href='about' />
        <BackgroundImage offsetTop={'-15.5rem'} />
        <Header />
        <SectionHeaderCenter>
          <SectionHeaderCenterContent>
            <HeaderText1>{l.t('main.header')}</HeaderText1>
            <AfterHeader>
              {l.t('main.subheader.text')} <Link to='/about' style={linkStyle}>{l.t('main.subheader.link')}</Link>
            </AfterHeader>
          </SectionHeaderCenterContent>
        </SectionHeaderCenter>
        <Promo {...this.props} />
        <RecentDraws {...this.props} />
        <SectionDivider />
        <HowItWorks />
        <RecentTable {...this.props} />
        <RecentWinners {...this.props} />
        <Footer />
      </ScreenWrapper>
    )
  }
}
