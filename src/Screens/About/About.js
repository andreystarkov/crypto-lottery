import React, { Component } from 'react'
import { Grid, Col } from 'react-styled-flexboxgrid'

import { HeaderBack, Header, Footer, SectionDivider, BackgroundImage } from 'Components'
import { ScreenWrapper } from 'Styles/CommonStyles'
import { P1, H1, H2, H4 } from 'Styles/Typography'
import { AboutHeader, Cell, Num, P, NumbersBlock, GradientBlock,
  NumbersTitle, BlockValue, BlockText, AboutRow, AboutBox } from 'Styles/AboutStyles'

import { Colors } from 'Themes'
import l from 'Intl'

export default class Rules extends Component {
  renderNumbers () {
    const { lottery } = this.props
    const { totalWinners, countTicketSold, totalWinReward } = lottery
    return (
      <NumbersBlock>
        <NumbersTitle>{l.t('about.innums')}</NumbersTitle>
        {/* <NumbersText></NumbersText> */}
        <GradientBlock>
          <AboutRow>
            <Col xs={4}>
              <BlockValue>{totalWinners}</BlockValue>
              <BlockText>{l.t('about.totalwinners')}</BlockText>
            </Col>
            <Col xs={4}>
              <BlockValue>{totalWinReward} BET</BlockValue>
              <BlockText>{l.t('about.payouts')}</BlockText>
            </Col>
            <Col xs={4}>
              <BlockValue>{countTicketSold}</BlockValue>
              <BlockText last>{l.t('about.sold')}</BlockText>
            </Col>
          </AboutRow>
        </GradientBlock>
      </NumbersBlock>
    )
  }
  render () {
    return (
      <ScreenWrapper backgroundColor={Colors.navyBlue}>
        <BackgroundImage name='about' />
        <Header className='over-absolute' />
        <HeaderBack className='over-absolute' />
        <Grid className='over-absolute'>
          <AboutHeader>
            <H1 align='center'>{l.t('about.about')}</H1>
          </AboutHeader>
          <AboutBox>
            <AboutRow>
              <Cell xs={6}>
                <H2>{l.t('about.why')}<br /> {l.t('about.choose')}</H2>
              </Cell>
              <Cell xs={6} right>
                <P1>{l.t('about.txt0')}</P1>
              </Cell>
            </AboutRow>
            <AboutRow>
              <Cell xs={6}>
                <Num>01 —</Num>
                <H4>{l.t('about.title1')}</H4>
                <P>{l.t('about.txt1')}</P>
              </Cell>
              <Cell xs={6}>
                <Num>02 —</Num>
                <H4>{l.t('about.title2')}</H4>
                <P>{l.t('about.txt2')}</P>
              </Cell>
            </AboutRow>
            <AboutRow>
              <Cell xs={6}>
                <Num>03 —</Num>
                <H4>{l.t('about.title3')}</H4>
                <P>{l.t('about.txt3')}</P>
              </Cell>
              <Cell xs={6}>
                <Num>04 —</Num>
                <H4>{l.t('about.title4')}</H4>
                <P>{l.t('about.txt4')}</P>
              </Cell>
            </AboutRow>
            <AboutRow>
              <Cell xs={6}>
                <Num>05 —</Num>
                <H4>{l.t('about.title5')}</H4>
                <P>{l.t('about.txt5')}</P>
              </Cell>
            </AboutRow>
            <SectionDivider inner marginTop='1rem' marginBottom='1rem' />
            {this.renderNumbers()}
          </AboutBox>
        </Grid>
        <Footer />
      </ScreenWrapper>
    )
  }
}
