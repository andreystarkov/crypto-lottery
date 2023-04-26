import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import ModalActions from 'Redux/ModalRedux'
import { animateModalClose } from 'Animation'

const { resetModal, modalUpdate } = ModalActions

const duration = 350
let isClosing = false

export function * modalCloseAnimation () {
  isClosing = true
  animateModalClose(duration)
  yield call(delay, duration)
  isClosing = false
  yield put(resetModal())
}

export function * modalOpen ({ modalType, params }) {
  const duration = 350
  if (isClosing) {
    yield call(delay, duration)
  }
  yield put(modalUpdate({ isOpen: true, modalType, params }))
}
