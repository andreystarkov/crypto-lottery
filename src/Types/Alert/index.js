import { shape, bool } from 'prop-types'
import alert from './AlertType'

export const alertType = {
  isOpen: bool,
  alert: alert
}

export default shape(alertType)
