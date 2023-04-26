import { string, number, shape, arrayOf } from 'prop-types'

export const ticketType = {
  id: string,
  whiteSelected: arrayOf(number),
  powerSelected: number
}

export default shape(ticketType)
