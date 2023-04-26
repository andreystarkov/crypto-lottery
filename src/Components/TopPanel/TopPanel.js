/* eslint react/prop-types: 0 */

import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { HeaderWrapper } from './TopPanelStyles'

export default class TopPanel extends Component {
  render () {
    const { left, right, children, style } = this.props
    return (
      <HeaderWrapper style={style}>
        {left || right ? (
          <Grid>
            <Row>
              <Col xs={6} className='left-align'>
                {left}
              </Col>
              <Col xs={6} className='right-align'>
                {right}
              </Col>
            </Row>
          </Grid>
        ) : (
          ''
        )}
        {children}
      </HeaderWrapper>
    )
  }
}
