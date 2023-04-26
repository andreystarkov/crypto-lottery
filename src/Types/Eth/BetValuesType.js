import { shape } from 'prop-types'
import betValue from './BetValueType'

export const betValuesType = {
  ETH: betValue,
  USD: betValue
}

export default shape(betValuesType)
