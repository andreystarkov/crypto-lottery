import React, { Component } from 'react'

import styled from 'styled-components'

import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { withRouter } from 'react-router-dom'

import { ButtonMore } from 'Components'
import { SectionHeader, SectionWrapper } from 'Styles/CommonStyles'
import { DescText, RightAlign, HowList, HowItem } from 'Styles/MainStyles'

import l from 'Intl'

export const BigIcon = styled.img`
  display: block;
  margin-bottom: 1.5rem;
  height: 3rem;
`

class HowItWorks extends Component {
  toRules = () => {
    const { history } = this.props
    history.push('/rules')
  }
  render () {
    return (
      <SectionWrapper marginTop='0'>
        <Grid>
          <Row style={{ marginBottom: '3.5rem' }}>
            <Col xs={12} sm={8}>
              <SectionHeader
                fontSize={'2rem'}
                style={{ marginTop: 0, marginBottom: 0 }}>
                {l.t('main.howItWorks.part1')}
                <br />
                {l.t('main.howItWorks.part2')}
              </SectionHeader>
            </Col>
            <Col xs={6} sm={4} className='xs-hide'>
              <RightAlign>
                <ButtonMore onClick={this.toRules}>
                  {l.t('main.readmore')}
                </ButtonMore>
              </RightAlign>
            </Col>
          </Row>
          <HowList>
            <HowItem>
              <BigIcon src={require('Images/BigIcons/3-4.png')} />
              <DescText>{l.t('main.howItWorks.cost')}</DescText>
            </HowItem>
            <HowItem>
              <BigIcon src={require('Images/BigIcons/3-1.png')} />
              <DescText>{l.t('main.howItWorks.rule1')}</DescText>
            </HowItem>
            <HowItem>
              <BigIcon src={require('Images/BigIcons/2-7.png')} />
              <DescText>{l.t('main.howItWorks.rule2')}</DescText>
            </HowItem>
            <HowItem>
              <BigIcon src={require('Images/BigIcons/1-5.png')} />
              <DescText>{l.t('main.howItWorks.rule3')}</DescText>
            </HowItem>
          </HowList>
          <ButtonMore
            className='sm-hide md-hide lg-hide'
            style={{ display: 'block', marginTop: '15px' }}
            onClick={this.toRules}>
            {l.t('main.readmore')}
          </ButtonMore>
        </Grid>
      </SectionWrapper>
    )
  }
}

export default withRouter(HowItWorks)
