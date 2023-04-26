import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { Logo } from 'Components'
import { routes } from 'Router/Router'

import { version } from '../../../package.json'

import './Footer.css'
import {
  FooterLink,
  FooterContainer,
  FooterText,
  SocialButtons,
  SocialButton,
  FooterRow,
  FooterCol,
  FooterMenu
} from './FooterStyles'

const currentYear = () => { return (new Date()).getFullYear() }
export default class Footer extends Component {
  renderLinks = (route, index) => {
    const { path, name } = route
    return (
      <FooterLink key={index} to={path}>
        {name}
      </FooterLink>
    )
  }
  render () {
    return (
      <FooterContainer id='footer' className='animation-delay over-absolute'>
        <Grid>
          <FooterRow className='footer-divider-bottom'>
            <FooterCol md={3} sm={6}>
              <a
                href='https://dao.casino/'
                target='_blank'
                rel='noopener noreferrer'>
                <Logo footer style={{ opacity: 0.5 }} />
              </a>
            </FooterCol>
            <Col md={6} className='center sm-hide xs-hide'>
              {routes.filter(f => f.footer).map(this.renderLinks)}
            </Col>
            <FooterCol md={3} sm={6}>
              <SocialButtons>
                <SocialButton
                  icon='facebook'
                  href='https://www.facebook.com/Dao.casino/'
                  target='_blank'
                />
                <SocialButton
                  icon='twitter'
                  href='https://twitter.com/daocasino'
                  target='_blank'
                />
                <SocialButton
                  icon='github'
                  href='https://github.com/DaoCasino'
                  target='_blank'
                />
                <SocialButton
                  icon='telegram'
                  href='https://t.me/daocasino'
                  target='_blank'
                />
              </SocialButtons>
            </FooterCol>
          </FooterRow>
          <FooterRow className='footer-divider-bottom md-hide lg-hide'>
            <FooterMenu>
              {routes.filter(f => f.footer).map(this.renderLinks)}
            </FooterMenu>
          </FooterRow>
          <FooterRow space>
            <Col xs={6}>
              <FooterText className='left'>&copy; DAO.Casino {currentYear()}</FooterText>
            </Col>
            <Col xs={6}>
              <FooterText className='right'>{version}</FooterText>
            </Col>
          </FooterRow>
        </Grid>
      </FooterContainer>
    )
  }
}
