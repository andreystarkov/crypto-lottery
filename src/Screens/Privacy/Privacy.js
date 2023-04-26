import React, { Component } from 'react'

import { HeaderBack, Header, Footer } from 'Components'
import { ScreenWrapper } from 'Styles/CommonStyles'
import { P, PH, H2, TextSection } from 'Styles/Typography'

import { Colors } from 'Themes'

export default class Privacy extends Component {
  render () {
    return (
      <ScreenWrapper backgroundColor={Colors.navyBlue}>
        <Header className='over-absolute' />
        <TextSection className='over-absolute' style={{ minHeight: '63vh' }}>
          <HeaderBack />
          <H2 margin className='mt1'>Privacy policy</H2>
          <PH>Sorry, privacy policy is in development</PH>
        </TextSection>
        <Footer />
      </ScreenWrapper>
    )
  }
}
