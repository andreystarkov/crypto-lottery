import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import AlertActions from 'Redux/AlertRedux'
import { animateModalClose } from 'Animation'

const { alertReset, alertUpdate } = AlertActions

const duration = 350
let isClosing = false

export function * alertCloseAnimation () {
  isClosing = true
  animateModalClose(duration)
  yield call(delay, duration)
  isClosing = false
  yield put(alertReset())
}

export function * alertOpen (action) {
  const { title, type, message } = action.params
  const duration = 350
  if (isClosing) {
    yield call(delay, duration)
  }
  yield put(alertUpdate({ isOpen: true, alert: { title, type, message } }))
}
