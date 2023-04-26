import React, { Component } from 'react'

import { Textarea, ModalButton, BackButton } from '../ModalStyles'
import ModalContent from '../ModalContent'

import { AUTH_TYPES } from 'Constants'
import l from 'Intl'

// let privatekey
// try {
//   privatekey = require('../../../secrets.json').privatekey
// } catch (err) {
//   console.error(err)
// }

export default class SignInModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: props.initialType || null,
      privateKey: '28547B75FC793FA6164524121526B7483737B1996C939D77428EB81930083A19', // privatekey,
      mnemonicPhrase: '',
      jsonFile: null,
      jsonFileRaw: null,
      password: ''
    }

    this.fileReader = new FileReader()
    this.fileReader.onload = (event) => {
      this.setState({ jsonFileRaw: JSON.parse(event.target.result) })
    }
  }

  authRequest (params) {
    const { closeModal, authRequest } = this.props
    authRequest(params)
    closeModal()
  }

  signIn = () => {
    const { openAlert, closeModal } = this.props
    const { privateKey, type, mnemonicPhrase, password, jsonFileRaw, jsonFile } = this.state

    let params = { type }

    if (type === 1) {
      let privKey = privateKey
      if (privateKey) privKey = '0x' + privKey
      if (privKey && privKey.length === 66 && privKey.match(/0x[0-9A-Fa-f]{64}/)) {
        params.privateKey = privKey
        this.authRequest(params)
      } else {
        closeModal()
        openAlert({
          type: 'error',
          title: l.t('signin.wrongPriv'),
          message: l.t('signin.makeSure')
        })
      }
    }
    if (type === 2) {
      if (mnemonicPhrase.trim().length && (mnemonicPhrase.split(' ').length - 1) === 11) {
        params.mnemonicPhrase = mnemonicPhrase
        this.authRequest(params)
      } else {
        closeModal()
        openAlert({
          type: 'error',
          title: l.t('signin.wrongMnem'),
          message: l.t('signin.makeSure')
        })
      }
    }
    if (type === 3) {
      if (jsonFile && jsonFileRaw) {
        params.jsonFile = jsonFile
        params.jsonFileRaw = jsonFileRaw
        params.password = password
        this.authRequest(params)
      }
    }
  }

  handleChange = e => {
    let privateKey = e.target.value
    if (privateKey.includes('0x')) privateKey = privateKey.slice(2)
    this.setState({ privateKey })
  }

  handleFileChange = e => {
    this.fileReader.readAsText(e.target.files[0])
    this.setState({ jsonFile: e.target.files[0] })
  }

  renderKeystore = () => {
    const { jsonFile } = this.state
    return (
      <div className='mt1'>
        <input
          type='file'
          className='animated fadeInLeft animation-default-config'
          ref={o => { this.jsonFile = o }}
          accept='.json,.JSON'
          onChange={this.handleFileChange}
          style={{ display: 'none' }}/>
        <ModalButton
          gradient='blue'
          delay={'0.03s'}
          className='animated fadeInRight animation-default-config'
          onClick={() => this.jsonFile.click()}>
          {jsonFile ? jsonFile.name : 'Select wallet file'}
        </ModalButton>
        <ModalButton
          className='animated fadeInLeft animation-default-config'
          gradient='blue'
          delay={'0.08s'}
          disabled={!jsonFile}
          onClick={this.signIn}>{l.t('main.buttons.signin')}</ModalButton>
      </div>
    )
  }

  renderMnemonicPhrase = () => {
    const { mnemonicPhrase } = this.state
    return (
      <div className='mt3'>
        <Textarea
          className='animated fadeInLeft animation-default-config'
          value={mnemonicPhrase}
          placeholder={l.t('signin.pasteMnem')}
          onChange={e => this.setState({ mnemonicPhrase: e.target.value })} />
        <ModalButton
          className='animated fadeInRight animation-default-config'
          disabled={mnemonicPhrase === ''}
          gradient='blue'
          delay={'0.1s'}
          onClick={this.signIn}>{l.t('main.buttons.signin')}</ModalButton>
      </div>
    )
  }

  renderPrivateKey = () => {
    const { privateKey } = this.state
    return (
      <div className='mt3'>
        <Textarea
          className='animated fadeInRight animation-default-config'
          placeholder={l.t('signin.pastePriv')}
          value={privateKey}
          onChange={this.handleChange} />
        <ModalButton
          className='animated fadeInLeft animation-default-config'
          gradient='blue'
          delay={'0.1s'}
          onClick={this.signIn}>{l.t('main.buttons.signin')}</ModalButton>
      </div>
    )
  }

  setType = (type) => {
    this.setState({ type })
  }

  renderOption = (x, i) => {
    return (
      <ModalButton
        gradient='blue'
        key={`mb:${i}`}
        className={`animated fadeIn animation-default-config`}
        delay={`${parseFloat(i * 0.048)}s`}
        onClick={() => this.setType(parseInt(x))}>
        {AUTH_TYPES[x]}
      </ModalButton>
    ) // `animated fadeIn${i % 2 === 0 ? 'Left' : 'Right'} animation-default-config`
  }

  renderOptions = () => {
    return (
      <div className='mt1 animated'>
        {Object.keys(AUTH_TYPES).map(this.renderOption)}
      </div>
    )
  }

  getContent = () => {
    const { type } = this.state
    if (type === 1) {
      return {
        props: {
          title: l.t('signin.priv'),
          message: l.t('signin.signPriv')
        },
        content: this.renderPrivateKey()
      }
    }
    if (type === 2) {
      return {
        props: {
          title: l.t('signin.mnem'),
          message: l.t('signin.signMnem')
        },
        content: this.renderMnemonicPhrase()
      }
    }
    if (type === 3) {
      return {
        props: {
          title: l.t('signin.keyJSON'),
          message: l.t('signin.upKey')
        },
        content: this.renderKeystore()
      }
    }
    return {
      props: {
        title: l.t('main.buttons.signin'),
        message: l.t('signin.choose')
      },
      content: this.renderOptions()
    }
  }

  goBack = () => this.setState({ type: null })

  toSignUp = () => {
    const { openModal, closeModal } = this.props
    closeModal()
    setTimeout(() => openModal('saveYourKey'), 500)
  }
  render () {
    const { type } = this.state
    const { props, content } = this.getContent()

    return (
      <ModalContent
        {...props}
        icon='auth'
        animation='zoomIn'
        duration={0.3}
        easing='cubic-bezier(0.60, 0.30, 0.14, 0.86)'
        {...this.props}>
        <div className='overflow-hidden'>
          {type ? <BackButton
            className='animated zoomIn animation-default-config'
            onClick={this.goBack} /> : null}
          {content}
          {!type ? <ModalButton
            gradient='grey'
            className={`animated fadeIn animation-default-config`}
            delay={`0.13s`}
            onClick={this.toSignUp}>
            {l.t('main.buttons.signup')}
          </ModalButton> : null}
        </div>
      </ModalContent>
    )
  }
}
