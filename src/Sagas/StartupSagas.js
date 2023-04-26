import { put, fork, call, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import EthActions from 'Redux/EthRedux'
import LotteryActions from 'Redux/LotteryRedux'

import { apolloTests } from './ApolloSagas'

import { createCoreObjects } from 'Services/Eth'

import { getBETValues } from './EthSagas'
import { watchCurrentBlockService, refreshLotteryService, watchLotteryStatusService } from './Lottery/LotteryServices'
import { getDataDraws } from './TicketSagas'
import { refreshUserService } from './User/UserServices'
import { createInitialAccount } from './AuthSagas'

const backgroundServices = [
  watchCurrentBlockService,
  watchLotteryStatusService,
  refreshLotteryService,
  refreshUserService
  // watchUserBalanceService
]

export function * startup (cmApi, client) {
  createCoreObjects()
  // yield call(apolloTests, client)
  yield call(createInitialAccount)
  yield all(backgroundServices.map(service => fork(service)))

  yield fork(getBETValues, cmApi)
  yield fork(getDataDraws)
  yield put(LotteryActions.lotteryPrizesRequest())

  yield delay(1000)
  yield put(EthActions.updateParams({ loading: false }))
}
