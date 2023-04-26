import { shape, bool, number, string, objectOf } from 'prop-types'
import tickets from './TicketsType'
import dataDraws from './DataDrawsType'

export const ticketsType = {
  tickets: tickets,
  powerplay: bool,
  multidraws: number,
  ticketPrice: number,
  multiplier: string,
  miltiDrawsTicketsLength: number,
  ticketsLength: number,
  totalTicketsLength: number,
  dataPrize: objectOf(number),
  dataPowerPlay: objectOf(number),
  dataDraws: dataDraws
}

export default shape(ticketsType)
