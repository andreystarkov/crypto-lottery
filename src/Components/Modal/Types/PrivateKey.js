import React, { Component } from 'react'

import { Textarea } from '../ModalStyles'
import ModalContent from '../ModalContent'

export default class SignInModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      privateKey: '0x45d090a0ca46a6bd3df07923fbeb6631b1c257112e0047c2140b0d2fa5039c89'
    }
  }

  handleSignIn = () => {
    const { privateKey } = this.state
    const { closeModal, authRequest } = this.props

    if (privateKey && privateKey.includes('0x')) {
      authRequest(privateKey)
      closeModal()
    }
  }

  handleChange = (e) => {
    const privateKey = e.target.value
    this.setState({ privateKey })
  }

  render () {
    return (
      <ModalContent
        icon='auth'
        title='Sign In'
        message='You must log in to continue.'
        buttonText={`Sign In`}
        onButtonPress={this.handleSignIn}
        animation='zoomIn'
        duration={0.3}
        easing='cubic-bezier(0.60, 0.30, 0.14, 0.86)'
        {...this.props}>
        <div className='mt3'>
          <Textarea placeholder='Paste your private key' onChange={this.handleChange} />
        </div>
      </ModalContent>
    )
  }
}
