import React, { Component } from 'react'
import { Textarea, ModalButton } from '../ModalStyles'
import ModalContent from '../ModalContent'

import { copyToClipboard } from 'Utils'
import l from 'Intl'

export default class SaveYourKeyModal extends Component {
  handleSaveKey = (shouldCopy = true) => {
    const { privateKey, closeModal, openModal } = this.props
    if (shouldCopy) copyToClipboard(privateKey)
    closeModal()
    openModal('signIn')
  }

  render () {
    const { privateKey } = this.props
    return (
      <ModalContent
        icon='auth'
        title={l.t('signin.save')}
        message={l.t('signin.info')}
        buttonText={l.t('signin.confirm')}
        animation={'zoomIn'}
        duration={0.4}
        easing='ease-in-out-expo'
        onButtonPress={this.handleSaveKey}
        after={
          <ModalButton
            gradient='grey'
            onClick={() => this.handleSaveKey(false)}>
            {l.t('signin.another')}
          </ModalButton>
        }
        {...this.props}>
        <div className='mt3'>
          <Textarea color='#fff' resize='vertical' defaultValue={privateKey} />
        </div>
      </ModalContent>
    )
  }
}
