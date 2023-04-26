import { arrayOf, shape } from 'prop-types'
import transactionType from './../Lottery/TransactionType'

export const transactionsType = {
  incoming: arrayOf(transactionType),
  outcoming: arrayOf(transactionType)
}

export default shape(transactionsType)
