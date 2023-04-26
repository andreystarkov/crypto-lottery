import { put, call, select, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { log } from 'Utils/Log'

import LotteryActions from 'Redux/LotteryRedux'

import { callContract, callERC20 } from 'Services/Eth'
import { getLotteryStatus, getSellOverBlock, getWinTicketChoosen, refreshLottery } from './LotteryData'

import { CONTRACT_ADDRESS } from 'Constants/Eth'

const lotteryStatusSagas = [
  getLotteryStatus,
  getSellOverBlock,
  getWinTicketChoosen,
  getCurrentDraw
]

export const LOTTERY_STATUS_INTERVAL = 15000
export const LOTTERY_BALANCE_INTERVAL = 18000
export const LOTTERY_REFRESH_INTERVAL = 30000
export const LOTTERY_BLOCKS_INTERVAL = 15000

export function * getCurrentDraw () {
  const currentDraw = yield call(callContract, 'currentDraw', 'int')
  console.log({ currentDraw })
  yield put(LotteryActions.lotteryUpdate({ currentDraw }))
}

export function * watchLotteryStatusService () {
  while (true) {
    log('Refreshing lottery status...')
    yield all(lotteryStatusSagas.map(saga => call(saga)))
    yield delay(LOTTERY_STATUS_INTERVAL)
  }
}

export function * watchLotteryBalanceService () {
  while (true) {
    const prevousBalanceBET = yield select(state => state.lottery.lotteryBalanceBET)
    const lotteryBalanceBET = yield call(callERC20, 'balanceOf', 'bet', CONTRACT_ADDRESS)
    const shouldUpdate = prevousBalanceBET !== lotteryBalanceBET
    log('watchLotteryBalanceService', { shouldUpdate, prevousBalanceBET, lotteryBalanceBET })
    if (shouldUpdate) {
      yield put(LotteryActions.lotteryUpdate({ lotteryBalanceBET }))
      yield call(refreshLottery)
    }
    yield delay(LOTTERY_BALANCE_INTERVAL)
  }
}

export function * refreshLotteryService () {
  while (true) {
    log('refreshLotteryService: refreshing lottery')
    yield call(refreshLottery)
    yield delay(LOTTERY_REFRESH_INTERVAL)
  }
}

export function * watchCurrentBlockService () {
  while (true) {
    const closeLotteryBlock = yield call(callContract, 'closeLotteryBlock', 'int')
    const blockForRandom = yield call(callContract, 'blockForRandom', 'int')
    const startLotteryBlock = yield call(callContract, 'startLotteryBlock', 'int')
    let currentBlock = yield call(window.web3.eth.getBlockNumber)
    currentBlock = parseInt(currentBlock)
    const blocks = { currentBlock, closeLotteryBlock, blockForRandom, startLotteryBlock }
    log('watchCurrentBlockService', { ...blocks })
    yield put(LotteryActions.lotteryUpdate(blocks))
    yield delay(LOTTERY_BLOCKS_INTERVAL)
  }
}
