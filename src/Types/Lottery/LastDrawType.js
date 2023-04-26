import { string, number, shape } from 'prop-types'

export const lastDrawType = {
  id: number,
  drawId: number,
  jackpot: number,
  timestamp: string,
  winNumbers: string,
  ticketsSold: number,
  winnersCount: number
}

export default shape(lastDrawType)
