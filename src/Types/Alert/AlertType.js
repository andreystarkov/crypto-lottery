import { string, shape } from 'prop-types'

export const alert = {
  title: string,
  type: string,
  message: string
}

export default shape(alert)
