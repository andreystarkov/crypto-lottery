import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Col } from 'react-styled-flexboxgrid'
import { RoundButton } from 'Components'
import { MobileRow, DrawDescText, Head3, EraseIcon, RandomIcon, QuestionIcon, QuestionText, TabletRow } from './SectionHeaderStyles'
import moment from 'moment'
import l from 'Intl'

export default class GameScreen extends Component {
  static propTypes = {
    lastDraws: PropTypes.array,
    tickets: PropTypes.array,
    clearAllTickets: PropTypes.func,
    onFill: PropTypes.func.isRequired
  }

  clearAllTickets = () => {
    const { clearAllTickets } = this.props
    clearAllTickets()
  }

  render = () => {
    const { tickets, lastDraws, onFill } = this.props
    const drawDate = moment().format('DD MMMM')
    let drawNo = 1
    if (lastDraws && lastDraws[0]) drawNo = lastDraws[0].id

    return (
      <Grid className='mb2 over-absolute'>
        <MobileRow>
          <Col lg={9} md={8}>
            <MobileRow>
              <Col>
                <DrawDescText>{l.t('getTickets.draw')} №{drawNo}, {drawDate}</DrawDescText>
                <Head3>{l.t('getTickets.tickets2')} {tickets.length}</Head3>
              </Col>
              <Col className='sm-hide xs-hide right-align'>
                <RoundButton onClick={this.clearAllTickets} style={{ whiteSpace: 'nowrap' }}>
                  <div className='flex flex-center'>
                    <EraseIcon className='mr1' /> {l.t('getTickets.clearAll')}
                  </div>
                </RoundButton>
                <RoundButton onClick={onFill} style={{ whiteSpace: 'nowrap' }}>
                  <div className='flex flex-center'>
                    <RandomIcon className='mr1' /> {l.t('getTickets.auto')}
                  </div>
                </RoundButton>
              </Col>
            </MobileRow>
          </Col>
          <Col lg={3} md={4} className='right-align'>
            <RoundButton
              onClick={this.onHowToPlay}
              arrowRight
              style={{ marginRight: '-1.1rem' }}>
              <div className='flex flex-center'>
                <QuestionIcon className='mr1' /><QuestionText> {l.t('getTickets.howToPlay')}</QuestionText>
              </div>
            </RoundButton>
          </Col>
        </MobileRow>
        <TabletRow>
          <Col>
            <RoundButton onClick={this.clearAllTickets} className='btn-clear-all'>
              <div className='flex flex-center'>
                <EraseIcon className='mr1' /> {l.t('getTickets.clearAll')}
              </div>
            </RoundButton>
          </Col>
          <Col>
            <RoundButton onClick={onFill} className='btn-fill-all'>
              <div className='flex flex-center'>
                <RandomIcon className='mr1' /> {l.t('getTickets.auto')}
              </div>
            </RoundButton>
          </Col>
        </TabletRow>
      </Grid>
    )
  }
}
