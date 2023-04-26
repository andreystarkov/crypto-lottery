import { takeLatest, all } from 'redux-saga/effects'
// import ApolloClient from 'apollo-boost'

import CMApi from 'Services/CoinmarketApi'
import ESApi from 'Services/EtherscanApi'

import { createApolloClient } from 'Services/ApolloClient'

import { StartupTypes } from 'Redux/StartupRedux'
import { EthTypes } from 'Redux/EthRedux'
import { LotteryTypes } from 'Redux/LotteryRedux'
import { UserTypes } from 'Redux/UserRedux'
import { ModalTypes } from 'Redux/ModalRedux'
import { AlertTypes } from 'Redux/AlertRedux'

import { startup } from './StartupSagas'
import { getUserBalance, getUserTransactions, refreshUserState, getUserTickets } from './User/UserData'
import { authRequest, logout } from './AuthSagas'
import { getTransactionStatus, getRewardTransactionStatus } from './EthSagas'
import { getLotteryTransactions, getPrizes } from './Lottery/LotteryData'
import { getLotteryDrawsPage } from './Lottery/LotteryDraws'
import { loadNextLotteryTickets } from './Lottery/LotteryTickets'
import { modalCloseAnimation, modalOpen } from './ModalSagas'
import { alertCloseAnimation, alertOpen } from './AlertSagas'

const cmApi = CMApi.create()
const esApi = ESApi.create()

// const client = createApolloClient()

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup, cmApi),
    takeLatest(EthTypes.AUTH_REQUEST, authRequest),
    takeLatest(EthTypes.RESET_AUTH, logout),
    takeLatest(EthTypes.REFRESH_TRANSACTION_STATUS, getTransactionStatus),
    takeLatest(EthTypes.REFRESH_REWARD_TRANSACTION_STATUS, getRewardTransactionStatus),
    takeLatest(UserTypes.USER_TICKETS_REQUEST, getUserTickets),
    takeLatest(UserTypes.USER_TRANSACTIONS_REQUEST, getUserTransactions, esApi),
    takeLatest(UserTypes.USER_BALANCE_REQUEST, getUserBalance),
    takeLatest(UserTypes.USER_REFRESH, refreshUserState),
    // takeLatest(UserTypes.USER_BALANCE_WATCH, watchUserBalance),
    takeLatest(ModalTypes.CLOSE_MODAL, modalCloseAnimation),
    takeLatest(ModalTypes.OPEN_MODAL, modalOpen),
    takeLatest(AlertTypes.CLOSE_ALERT, alertCloseAnimation),
    takeLatest(AlertTypes.OPEN_ALERT, alertOpen),
    takeLatest(LotteryTypes.LOTTERY_TRANSACTIONS_REQUEST, getLotteryTransactions, esApi),
    takeLatest(LotteryTypes.LOTTERY_TICKETS_REQUEST, loadNextLotteryTickets),
    takeLatest(LotteryTypes.LOTTERY_PRIZES_REQUEST, getPrizes),
    takeLatest(LotteryTypes.LOTTERY_DRAWS_REQUEST, getLotteryDrawsPage)
  ])
}
