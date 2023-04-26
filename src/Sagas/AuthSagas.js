import { put, call, select } from 'redux-saga/effects'

import { unlockPrivateKey, unlockMnemonic, unlockJson, unlockMetamask } from 'Services/Auth'

import { createAccount } from 'Services/Eth'

import EthActions from 'Redux/EthRedux'
import UserActions from 'Redux/UserRedux'
import AlertActions from 'Redux/AlertRedux'

import { log } from 'Utils/Log'
import { AUTH_TYPES } from 'Constants'

export function * getAuth () {
  const isAuth = yield select(state => state.eth.auth)
  return isAuth
}

export function * createInitialAccount () {
  const auth = yield select(state => state.eth.auth)
  if (!auth) {
    const { openKey, privateKey } = createAccount()
    yield put(EthActions.updateParams({ openKey, privateKey }))
    yield put(UserActions.userUpdate({ openKey }))
  }
}

export function * logout () {
  log('Logging out...')
  yield put(EthActions.updateParams({ auth: false, openKey: null, privateKey: null }))
  log('Resetting user..')
  yield put(UserActions.userReset())
  yield call(createInitialAccount)
}

export function * authPrivateKey (privateKey) {
  const { openKey } = unlockPrivateKey(privateKey)
  yield call(authSuccess, openKey, privateKey)
}

export function * authMnemonic (privateKey) {
  const { openKey } = unlockMnemonic(privateKey)
  yield call(authSuccess, openKey)
}

export function * authJson ({ jsonFileRaw, password }) {
  const { openKey } = unlockJson(jsonFileRaw, password)
  yield call(authSuccess, openKey)
}

export function * authRequest (action) {
  window.web3.eth.accounts.wallet.clear()

  const { privateKey, jsonFileRaw, password, mnemonicPhrase, type } = action.params

  console.group(`Auth: ${AUTH_TYPES[type]}`)
  try {
    if (type === 1) {
      // log({ privateKey })
      yield call(authPrivateKey, privateKey)
    }
    if (type === 2) {
      // log({ mnemonicPhrase })
      yield call(authMnemonic, mnemonicPhrase)
    }
    if (type === 3) {
      log({ jsonFileRaw, password })
      // yield call(authJson, { jsonFileRaw, password })
    }
    if (type === 4) {
      unlockMetamask()
    }
  } catch (err) {
    log({ err })
    yield put(AlertActions.openAlert({
      type: 'error',
      title: 'Auth error',
      message: err
    }))
  }
  console.groupEnd()
}

export function * authSuccess (openKey) {
  // const tutorialStepIndex = yield select(state => state.tutorial.stepIndex)
  // const isTutorial = yield select(state => state.tutorial.run)
  // const isTutorialStarted = yield select(state => state.tutorial.isStarted)
  // if (!isTutorial && tutorialStepIndex === 0 && isTutorialStarted) {
  //   yield put(TutorialActions.tutorialUpdate({
  //     run: true,
  //     isStarted: true,
  //     stepIndex: 1
  //   }))
  // }
  yield put(EthActions.updateParams({ openKey, auth: true }))
  yield put(UserActions.userUpdate({ openKey }))
  yield put(EthActions.authSuccess())
  yield put(UserActions.userRefresh(true))
}
