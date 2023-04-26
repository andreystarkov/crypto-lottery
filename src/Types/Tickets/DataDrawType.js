import { shape, number } from 'prop-types'

export const dataDrawType = {
  value: number,
  discount: number
}

export default shape(dataDrawType)
