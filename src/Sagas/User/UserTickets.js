import { put, call, select } from 'redux-saga/effects'

import { equals } from 'ramda'

import { log } from 'Utils/Log'
import { prepareTicketNumbers } from 'Utils/Tickets'
import { getOpenKey, selectCountOfDraws } from 'Utils/Selectors'

import { callStorage, callContract } from 'Services/Eth'

import UserActions from 'Redux/UserRedux'

export async function getTicketNumbers (id) {
  try {
    const value = await window.contractLottery.methods.ticketNumbers(id).call()
    return value
  } catch (err) {
    log('getTicketNumbers error', { id })
    return 0
  }
}

export function * getPastUserTicket (i) {
  // const countOfDraws = yield select(selectCountOfDraws)
  // const openKey = yield select(getOpenKey)
  // const id = yield call(callContract, 'usersAllTickets', 'int', openKey, i)
  // const draw = yield call(callStorage, 'ticketDraws', 'int', id)
  // log('getPastUserTicket', { i, countOfDraws, openKey, id, draw })
  // if (draw < countOfDraws) {
  //   const numbers = yield call(getTicketNumbers, id)
  //   return {
  //     id,
  //     draw,
  //     combination: prepareTicketNumbers(numbers),
  //     numbers
  //   }
  // }
  return false
}

export function * getUserTicket (i) {
  const countOfDraws = yield select(selectCountOfDraws)
  const openKey = yield select(getOpenKey)
  const id = yield call(callContract, 'usersTickets', 'int', openKey, i)
  const draw = yield call(callStorage, 'ticketDraws', 'int', id)
  if (draw === countOfDraws) {
    const numbers = yield call(getTicketNumbers, id)
    return {
      id,
      draw,
      combination: prepareTicketNumbers(numbers),
      numbers
    }
  }
  return false
}

export function * getMultiDrawTicket (i) {
  const openKey = yield select(getOpenKey)
  const id = yield call(callContract, 'multiDrawsTickets', 'int', openKey, i)
  const draw = yield call(callStorage, 'ticketDraws', 'int', id)
  const numbers = yield call(getTicketNumbers, id)
  if (draw !== false) {
    return {
      numbers,
      draw,
      multidraw: true,
      id
    }
  }
  return false
}

export function * getCurrentReward () {
  const isAuth = yield select(state => state.eth.auth)
  if (isAuth) {
    const openKey = yield select(getOpenKey)
    const prevReward = yield select(state => state.user.currentReward)
    const userRewards = yield call(callContract, 'checkMyTicket', false, openKey)
    let currentReward = {
      totalWinAmount: parseInt(userRewards[0]) / 10 ** 18,
      isJackpot: parseInt(userRewards[1]) === 1,
      winTicketsCount: parseInt(userRewards[2])
    }
    const shouldUpdate = !equals(currentReward, prevReward)
    log('getCurrentReward', { shouldUpdate, currentReward, prevReward, userRewards, openKey })
    if (shouldUpdate) {
      const isWon = (!prevReward.totalWinAmount || prevReward.totalWinAmount === 0) && currentReward.totalWinAmount > 0
      if (isWon) {
        log('!!!!!!!!!!!!!!!1 yyehaa! we won something')
      }
      yield put(UserActions.userUpdate({ currentReward }))
    }
  }
}

export function * getUserPastTickets () {
  const openKey = yield select(getOpenKey)
  const tickets = yield select(state => state.user.pastTicketsData)
  const lastTicket = tickets[tickets.length - 1]
  const prevAllTicketLength = yield select(state => state.user.allTicketsLength)
  const allTicketsLength = yield call(callContract, 'getLengthAllTickets', 'int', openKey)
  const shouldUpdate = prevAllTicketLength !== allTicketsLength
  log('getUserPastTickets', { shouldUpdate, lastTicket, tickets, prevAllTicketLength, allTicketsLength })
  if (shouldUpdate) {
    yield put(UserActions.userUpdate({ allTicketsLength }))
    if (allTicketsLength > 0) {
      let atLimit = allTicketsLength - 30
      if (atLimit < 0) atLimit = 0
      for (let i = allTicketsLength - 1; i >= atLimit; i--) {
        const ticket = yield call(getPastUserTicket, i)
        log('getUserPastTickets', { i, ticket })
        if (ticket) {
          yield put(UserActions.userPastTicketAdd(ticket))
        }
      }
    }
  }
}

export function * getCurrentUserTickets () {
  const openKey = yield select(getOpenKey)
  const tickets = yield select(state => state.user.userTicketsData)
  const lastTicket = tickets[tickets.length - 1]
  const prevTicketsLength = yield select(state => state.user.ticketsLength)
  const ticketsLength = yield call(callContract, 'getLengthTickets', 'int', openKey)
  const shouldUpdate = prevTicketsLength !== ticketsLength

  log('getUserTickets', { shouldUpdate, lastTicket, tickets, prevTicketsLength, ticketsLength })

  if (shouldUpdate) {
    yield put(UserActions.userUpdate({ ticketsLength }))
    if (ticketsLength > 0) {
      let tLimit = ticketsLength - 30
      if (tLimit < 0) tLimit = 0
      for (let i = ticketsLength - 1; i >= tLimit; i--) {
        const ticket = yield call(getUserTicket, i)
        if (ticket) {
          log('getUserTickets', { i, ticket })
          yield put(UserActions.userTicketAdd(ticket))
        }
      }
    }
  }
}

export function * getMultiDrawTickets () {
  const openKey = yield select(getOpenKey)
  const tickets = yield select(state => state.user.multidrawsTicketsData)
  const lastTicket = tickets[tickets.length - 1]
  const prevMultiTicketsLength = yield select(state => state.user.multiDrawsTicketsLength)
  const multiDrawsTicketsLength = yield call(callContract, 'getLengthMultiDrawsTickets', 'int', openKey)
  const shouldUpdate = prevMultiTicketsLength !== multiDrawsTicketsLength
  log('getMultiDrawTickets', { shouldUpdate, lastTicket, tickets, prevMultiTicketsLength, multiDrawsTicketsLength })
  if (shouldUpdate) {
    yield put(UserActions.userUpdate({ multiDrawsTicketsLength }))
    if (multiDrawsTicketsLength > 0) {
      for (let i = multiDrawsTicketsLength; i >= 0; i--) {
        const ticket = yield call(getMultiDrawTicket, i)
        if (ticket) {
          log('getMultiDrawTickets', { i, ticket })
          yield put(UserActions.userMultidrawTicketAdd(ticket))
        }
      }
    }
  }
}

// getLengthTickets -- метод который принимает опенкей юзера, вернет билеты которые участвуют в текущем розыгрыше.
// getLengthAllTickets -- так же по опенкею но вернет билеты которые за все время покупались этим игроком
// оба не включают в себя мультидрав
