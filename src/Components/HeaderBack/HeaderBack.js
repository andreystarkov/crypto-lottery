import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { withRouter } from 'react-router-dom'

import { RoundButton } from 'Components'
import { FlexLeft } from 'Styles/CommonStyles'

class HeaderBack extends Component {
  render () {
    const { history } = this.props
    return (
      <div>
        <Grid className='mb2 over-absolute'>
          <Row>
            <Col xs={12}>
              <FlexLeft className='mt1'>
                <RoundButton onClick={() => history.go(-1)} arrowLeft style={{ marginLeft: '-1.1rem' }}>
                  <div className='flex flex-left'>
                    Back
                  </div>
                </RoundButton>
              </FlexLeft>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default withRouter(HeaderBack)
