import { shape, bool, number, string, object } from 'prop-types'
import transaction from './TransactionType'
import betValues from './BetValuesType'

export const ethType = {
  auth: bool,
  transaction: transaction,
  ethPriceUSD: number,
  valuesBET: object, // TODO: переделать
  priceBET: object, // TODO: переделать
  pendingTransaction: bool,
  multiplier: bool,
  loading: bool,
  betValues: betValues,
  openKey: string,
  privateKey: string
}

export default shape(ethType)
