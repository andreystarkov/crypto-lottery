import { shape, bool, string, оbject } from 'prop-types'

export const modalType = {
  isOpen: bool,
  modalType: string,
  params: оbject
}

export default shape(modalType)
