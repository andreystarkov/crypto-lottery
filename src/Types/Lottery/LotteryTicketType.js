import { string, number, shape } from 'prop-types'

export const lotteryTicketType = {
  id: number,
  ticketId: number,
  timestamp: string,
  openkey: string,
  numbers: string
}

export default shape(lotteryTicketType)
