import { shape, any } from 'prop-types'

export const transactionType = {
  type: any, // TODO: переделать
  done: any, // TODO: переделать
  success: any, // TODO: переделать
  failure: any // TODO: переделать
}

export default shape(transactionType)
