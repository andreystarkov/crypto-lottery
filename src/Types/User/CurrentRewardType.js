import { number, bool, shape } from 'prop-types'

export const currentRewardType = {
  totalWinAmount: number,
  isJackpot: bool,
  winTicketsCount: number
}

export default shape(currentRewardType)
