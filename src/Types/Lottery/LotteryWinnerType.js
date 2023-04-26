import { shape, number, string } from 'prop-types'

export const lotteryWinnerType = {
  id: number,
  reward: number,
  openkey: string,
  timestamp: string,
  drawId: number,
  countWinTickets: number
}

export default shape(lotteryWinnerType)
