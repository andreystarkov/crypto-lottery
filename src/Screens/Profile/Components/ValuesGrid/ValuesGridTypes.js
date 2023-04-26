import { number } from 'prop-types'
import { userType } from 'Types/User'
import { ethType } from 'Types/Eth'

const propTypes = {
  betValues: ethType.betValues,
  ethPriceUSD: ethType.ethPriceUSD,
  balanceETH: userType.balanceBET,
  balanceBET: userType.balanceBET,
  totalTicketsLength: number
}

export default {
  ...propTypes
}