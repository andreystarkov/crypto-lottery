import EthConfig from 'Config/Eth'

import { BET } from 'Constants/Bet'
import { big } from 'Utils'

export const transactionUrl = (openKey) => {
  return `${EthConfig.transactionUrl}${openKey}`
}

export const addressUrl = (address) => {
  return `${EthConfig.addressUrl}${address}`
}

export const toBET = (value) => {
  const bet = parseInt(value) / BET
  return Math.round(big(bet) * 100) / 100
}
