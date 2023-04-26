import React, { Component } from 'react'
import Modal from 'react-modal'
import AlertModal from '../Modal/Types/Alert'
import modalConfig from '../Modal/ModalConfig'

export default class Alert extends Component {
  onClose = () => {
    const { closeAlert } = this.props
    closeAlert()
  }
  render () {
    const { isOpen, alert } = this.props
    return (
      <Modal
        ariaHideApp={false}
        style={{
          overlay: modalConfig.overlayStyles,
          content: modalConfig.contentStyles }}
        isOpen={isOpen}
        onRequestClose={this.onClose}>
        <AlertModal
          onClose={this.onClose}
          {...alert} />
      </Modal>
    )
  }
}
