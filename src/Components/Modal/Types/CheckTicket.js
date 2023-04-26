import React, { Component } from 'react'
import {
  SubTitle,
  SecondTitle,
  TicketsResults,
  Divider,
  Preloader
} from '../ModalStyles'
import { MaterialWrapper, MaterialInput, MaterialLabel } from 'Styles/Inputs'
import ModalContent from '../ModalContent'

import { Combination } from 'Components'
import { prepareTicketNumbers } from 'Utils/Tickets'
import { SvgIcons } from 'Themes'

import l from 'Intl'

export default class CheckTicketModal extends Component {
  handleClick = () => {
  }

  render () {
    return (
      <ModalContent
        icon='tickets'
        title={l.t('checkTicket.title')}
        message={l.t('checkTicket.message')}
        buttonText={l.t('checkTicket.buttonText1')} // второй текст кнопки - {l.t('checkTicket.buttonText1')}
        animation={'zoomIn'}
        duration={0.4}
        easing='ease-in-out-expo'
        onButtonPress={this.handleClick}
        {...this.props}>
        <div className='mt3'>
          <MaterialWrapper>
            <MaterialInput required id='modalAddress' top type='text' />
            <MaterialLabel for='modalAddress'>
              {l.t('checkTicket.inputPlaceholder1')}
            </MaterialLabel>
          </MaterialWrapper>

          <MaterialWrapper>
            <MaterialInput required id='modalTickets' bottom type='text' />
            <MaterialLabel for='modalTickets'>
              {l.t('checkTicket.inputPlaceholder2')}
            </MaterialLabel>
          </MaterialWrapper>

          <TicketsResults>
            <Divider name='coinsGrey' />
            <SecondTitle>{l.t('checkTicket.subtitle1')}</SecondTitle>
            <SubTitle>{l.t('checkTicket.description')}</SubTitle>
          </TicketsResults>

          <TicketsResults>
            <Divider name='moneyColored' />
            <SecondTitle>{l.t('checkTicket.subtitle2')}</SecondTitle>
            <Combination
              combination={prepareTicketNumbers([1, 2, 3, 4, 5, 6])}
              winNumbers={prepareTicketNumbers([7, 2, 2, 4, 5, 9])}
            />
          </TicketsResults>

          <Preloader>
            <SvgIcons.RefreshIcon />
          </Preloader>
        </div>
      </ModalContent>
    )
  }
}
