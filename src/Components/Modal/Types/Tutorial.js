import React, { Component } from 'react'
import { ModalButton } from '../ModalStyles'
import ModalContent from '../ModalContent'
import l from 'Intl'

export default class TutorialModal extends Component {
  startTutorial = () => {
    const { closeModal, tutorialStart } = this.props
    closeModal()
    setTimeout(() => tutorialStart(), 500)
  }

  render () {
    const { closeModal } = this.props
    return (
      <ModalContent
        icon='auth'
        title={l.t('tutorial.title')}
        message={l.t('tutorial.message')}
        buttonText={l.t('tutorial.buttonText1')}
        animation={'zoomIn'}
        duration={0.4}
        easing='ease-in-out-expo'
        onButtonPress={this.startTutorial}
        after={
          <ModalButton gradient='grey' onClick={() => closeModal()}>
            {l.t('tutorial.buttonText2')}
          </ModalButton>
        }
        {...this.props}
      />
    )
  }
}
