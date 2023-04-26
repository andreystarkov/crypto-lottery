import React from 'react'
import Modal from 'react-modal'
import modalConfig from './ModalConfig'

import SignIn from './Types/SignIn'
import SaveYourKey from './Types/SaveYourKey'
import Transaction from './Types/Transaction'
import Tutorial from './Types/Tutorial'
import Win from './Types/Win'
import CheckTicket from './Types/CheckTicket'

import './Modal.css'

export default class ModalComponent extends React.Component {
  requestClose = event => {
    const { modalType } = this.props
    if (!modalType !== 'transaction') {
      this.close()
    }
  }

  close = () => {
    const { closeModal } = this.props
    closeModal()
  }

  render () {
    const { children, isOpen, onClose, modalType, ...etc } = this.props
    const modalTypes = {
      signIn: <SignIn {...this.props} onClose={this.close} />,
      saveYourKey: <SaveYourKey {...this.props} onClose={this.close} />,
      transaction: <Transaction {...this.props} onComplete={this.close} />,
      win: <Win {...this.props} onClose={this.close} />,
      tutorial: <Tutorial {...this.props} onClose={this.close} />,
      checkTicket: <CheckTicket {...this.props} onClose={this.close} />
    }

    return (
      <Modal
        ariaHideApp={false}
        style={{
          overlay: { ...modalConfig.overlayStyles },
          content: modalConfig.contentStyles
        }}
        isOpen={isOpen}
        onRequestClose={this.closeModal}
        {...etc}>
        <div id='modal-content'>{modalTypes[modalType]}</div>
      </Modal>
    )
  }
}
