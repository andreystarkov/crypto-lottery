import { shape, number } from 'prop-types'

export const betValueType = {
  market_cap: number,
  percent_change_1hp: number,
  percent_change_7dp: number,
  percent_change_24hp: number,
  price: number,
  volume_24hp: number
}

export default shape(betValueType)
