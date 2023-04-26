import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Tutorial from './Tutorial'

import TutorialActions from 'Redux/TutorialRedux'
import ModalActions from 'Redux/ModalRedux'

const TutorialContainer = (props) => <Tutorial {...props} />

const mapStateToProps = (state) => {
  return {
    tutorial: state.tutorial,
    lottery: state.lottery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tutorialOpen: () => dispatch(TutorialActions.tutorialOpen()),
    tutorialClose: () => dispatch(TutorialActions.tutorialClose()),
    tutorialNext: () => dispatch(TutorialActions.tutorialNext()),
    tutorialPrev: () => dispatch(TutorialActions.tutorialPrev()),
    tutorialUpdate: params => dispatch(TutorialActions.tutorialUpdate(params)),
    openModal: modalType => dispatch(ModalActions.openModal(modalType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TutorialContainer))
