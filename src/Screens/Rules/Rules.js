import React from 'react'
import {
  HeaderBack,
  Header,
  SectionDivider,
  Footer,
  MobileWrap
} from 'Components'
import { ScreenWrapper, ScreenTitle } from 'Styles/CommonStyles'
import {
  RuleCol,
  RuleBlock,
  IconWrap,
  RuleNumber,
  RuleIcon,
  RuleText,
  RulesGrid,
  ScreenText,
  MobileCol
} from 'Styles/RulesStyles'
import { H3 } from 'Styles/Typography'
import { Colors } from 'Themes'
import { Grid, Row } from 'react-styled-flexboxgrid'
import shortid from 'shortid'

import RulesTable from './RulesTable'
import l from 'Intl'

const rulesItems = [
  {
    icon: '3-4',
    text: l.t('main.howItWorks.cost')
  },
  {
    icon: '3-1',
    text: l.t('main.howItWorks.rule1')
  },
  {
    icon: '3-5',
    text: l.t('rules.txt1')
  },
  {
    icon: '1-7',
    text: l.t('rules.txt2')
  },
  {
    icon: '2-7',
    text: l.t('main.howItWorks.rule2')
  },
  {
    icon: '1-5',
    text: l.t('main.howItWorks.rule3')
  }
]

const renderRule = ({ icon, text }, key) => {
  return (
    <RuleCol xs={6} sm={4} key={shortid.generate()}>
      <RuleBlock>
        <RuleNumber number={key + 1} />
        <IconWrap>
          <RuleIcon icon={icon} />
        </IconWrap>
        <RuleText>{text}</RuleText>
      </RuleBlock>
    </RuleCol>
  )
}

const pureRules = (props) => {
  return (
    <ScreenWrapper backgroundColor={Colors.navyBlue}>
      <Header />
      <HeaderBack />
      <Grid>
        <ScreenTitle>{l.t('rules.txt3')}</ScreenTitle>
        <RulesGrid>
          <Row>{rulesItems.map(renderRule)}</Row>
        </RulesGrid>
        <SectionDivider />
        <ScreenTitle>{l.t('rules.txt4')}</ScreenTitle>
        <MobileWrap>
          <RulesTable {...props} />
        </MobileWrap>
        <ScreenText>{l.t('rules.txt5')}</ScreenText>
        <ScreenTitle>{l.t('rules.txt6')}</ScreenTitle>
        <Row className='mt2'>
          <MobileCol sm={4}>
            <H3>{l.t('rules.txt7')}</H3>
            <ScreenText>{l.t('rules.txt8')}</ScreenText>
          </MobileCol>
          <MobileCol sm={4}>
            <H3>{l.t('rules.txt9')}</H3>
            <ScreenText>{l.t('rules.txt10')}</ScreenText>
          </MobileCol>
          <MobileCol sm={4}>
            <H3>{l.t('rules.txt11')}</H3>
            <ScreenText>{l.t('rules.txt12')}</ScreenText>
          </MobileCol>
        </Row>
      </Grid>
      <Footer />
    </ScreenWrapper>
  )
}

export default pureRules
