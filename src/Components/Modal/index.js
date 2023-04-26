
import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'

import ModalActions from 'Redux/ModalRedux'
import EthActions from 'Redux/EthRedux'
import AlertActions from 'Redux/AlertRedux'
import TutorialActions from 'Redux/TutorialRedux'

const ModalContainer = (props) => <Modal {...props} />

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.isOpen,
    modalType: state.modal.modalType,
    auth: state.eth.auth,
    privateKey: state.eth.privateKey,
    openKey: state.user.openKey,
    transaction: state.eth.transaction,
    params: state.modal.params
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: modalType => dispatch(ModalActions.openModal(modalType)),
    closeModal: () => dispatch(ModalActions.closeModal()),
    authSuccess: () => dispatch(EthActions.authSuccess()),
    updateEthField: params => dispatch(EthActions.updateParams(params)),
    refreshTransactionStatus: hash => dispatch(EthActions.refreshTransactionStatus(hash)),
    getBalance: () => dispatch(EthActions.getBalance()),
    authRequest: (privateKey) => dispatch(EthActions.authRequest(privateKey)),
    openAlert: (params) => dispatch(AlertActions.openAlert(params)),
    tutorialStart: () => dispatch(TutorialActions.tutorialStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
