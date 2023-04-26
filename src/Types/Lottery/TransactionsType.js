import { shape, arrayOf } from 'prop-types'
import transactionType from './TransactionType'

export const transactionsType = {
  incoming: arrayOf(transactionType),
  outcoming: arrayOf(transactionType)
}

export default shape(transactionsType)
