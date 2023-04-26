import { put, call, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { log } from 'Utils/Log'

import { refreshUserState } from 'Sagas/User/UserData'

export const REFRESH_USER_INTERVAL = 20000

export function * refreshUserService () {
  while (true) {
    log('User service: refreshing user')
    yield call(refreshUserState)
    yield delay(REFRESH_USER_INTERVAL)
  }
}
