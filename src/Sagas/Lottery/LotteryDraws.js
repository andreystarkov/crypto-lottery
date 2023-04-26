import { put, call, select } from 'redux-saga/effects'
import LotteryActions from 'Redux/LotteryRedux'

import { callContract, callStorage } from 'Services/Eth'
import { log } from 'Utils/Log'
import { selectCountOfDraws, selectDrawsPage, selectDrawsLoading } from 'Utils/Selectors'
import { prepareTicketNumbers } from 'Utils/Tickets'
import { formatUnixHuman } from 'Utils/Date'

import { LOTTERY_DRAWS_PER_PAGE } from 'Constants'

export function * getLotteryDraw (drawId) {
  // let winTicketDraws = yield call(callContract, 'listWinTicketDraws', false, drawId)
  // let jackpotDraws = yield call(callStorage, 'listJackpotDraws', 'bet', drawId) // джекпот каждого розыгрыша
  // let ticketsDraws = yield call(callStorage, 'listTicketsDraws', 'int', drawId) // кол-во проданных билетов каждого розыгрыша
  // let winnersDraws = yield call(callStorage, 'listWinnersDraws', 'int', drawId) // выигрышные билеты каждого розыгрыша
  // let blockDraws = yield call(callStorage, 'dateDraws', 'int', drawId)
  // const block = yield call(window.web3.eth.getBlock, blockDraws)
  // const draw = {
  //   id: drawId + 1,
  //   drawId: drawId + 1,
  //   winTicketDraws,
  //   combination: prepareTicketNumbers(winTicketDraws),
  //   jackpotDraws,
  //   winnersDraws,
  //   ticketsDraws,
  //   date: formatUnixHuman(block.timestamp)
  // }
  // log('getLotteryDraw', { draw })
  // yield put(LotteryActions.lotteryDrawsAdd(draw))
  // return draw
}

export function * getLastLotteryDraws () {
  const isLoading = yield select(selectDrawsLoading)
  const prevCountOfDraws = yield select(state => state.lottery.prevCountOfDraws)
  const countOfDraws = yield call(callContract, 'countOfDraws', 'int')
  const lastDraws = yield select(state => state.lottery.lastDraws)
  let countDraws = lastDraws.length > 0 ? countOfDraws - prevCountOfDraws : countOfDraws - 7
  if (countDraws < 1) countDraws = 1
  const isLoaded = lastDraws.length === countOfDraws
  const shouldUpdate = countOfDraws > 0 && !isLoading && !isLoaded && prevCountOfDraws !== countOfDraws
  log('getLastLotteryDraws', { shouldUpdate, isLoaded, isLoading, prevCountOfDraws, countOfDraws })
  if (shouldUpdate) {
    yield put(LotteryActions.lotteryUpdate({ lastDrawsLoading: true }))
    for (let drawId = countOfDraws - 1; drawId >= countDraws; drawId--) {
      yield call(getLotteryDraw, drawId + 1)
    }
    yield put(LotteryActions.lotteryUpdate({ lastDrawsLoading: false, countOfDraws, prevCountOfDraws: countOfDraws }))
  }
}

export function * getLotteryDrawsPage () {
  const countOfDraws = yield select(selectCountOfDraws)
  const page = yield select(selectDrawsPage)
  const isLoading = yield select(selectDrawsLoading)
  log('getLotteryDrawsPage', { countOfDraws, page, isLoading })
  if (countOfDraws > 0 && !isLoading) {
    yield put(LotteryActions.lotteryUpdate({ lastDrawsLoading: true }))
    let startId = countOfDraws - (LOTTERY_DRAWS_PER_PAGE * page)
    if (startId < 1) startId = 1
    let endId = startId - LOTTERY_DRAWS_PER_PAGE + 1
    if (endId < 1) endId = 1
    for (let drawId = startId; drawId >= endId; drawId--) {
      let winTicketDraws = yield call(callContract, 'listWinTicketDraws', false, drawId)
      let jackpotDraws = yield call(callStorage, 'listJackpotDraws', 'bet', drawId) // джекпот каждого розыгрыша
      let ticketsDraws = yield call(callStorage, 'listTicketsDraws', 'int', drawId) // кол-во проданных билетов каждого розыгрыша
      let winnersDraws = yield call(callStorage, 'listWinnersDraws', 'int', drawId) // выигрышные билеты каждого розыгрыша
      let blockDraws = yield call(callStorage, 'dateDraws', 'int', drawId)
      const block = yield call(window.web3.eth.getBlock, blockDraws)
      const draw = {
        drawId,
        winTicketDraws,
        combination: prepareTicketNumbers(winTicketDraws),
        jackpotDraws,
        winnersDraws,
        ticketsDraws,
        date: formatUnixHuman(block.timestamp)
      }
      log('getLotteryDrawsPage', { draw })
      yield put(LotteryActions.lotteryDrawsAdd(draw))
    }
    const status = { lastDrawsPage: page + 1, lastDrawsLoading: false }
    yield put(LotteryActions.lotteryUpdate(status))
  }
}
