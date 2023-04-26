import { call, put } from 'redux-saga/effects'

import TicketsActions from 'Redux/TicketsRedux'

import { callContract } from 'Services/Eth'

export function * getTicketPrice () {
  const ticketPrice = yield call(callContract, 'priceTicket', 'bet')
  yield put(TicketsActions.ticketUpdate({ ticketPrice }))
}

export function * getDataDraws () {
  let dataDraws = {}

  dataDraws[5] = yield call(callContract, 'dataDraws', false, 5)
  dataDraws[10] = yield call(callContract, 'dataDraws', false, 10)
  dataDraws[25] = yield call(callContract, 'dataDraws', false, 25)
  dataDraws[52] = yield yield call(callContract, 'dataDraws', false, 52)

  Object.keys(dataDraws).map(e => {
    dataDraws[e] = {
      value: parseInt(dataDraws[e]),
      discount: parseInt(dataDraws[e]) / 10
    }
  })
  yield put(TicketsActions.ticketUpdate({ dataDraws }))
}
