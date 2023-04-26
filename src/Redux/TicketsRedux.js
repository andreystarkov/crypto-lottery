import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { reject, addIndex, update } from 'ramda'
import { randomHash } from 'Utils'

import { TICKETS_MIN, TICKETS_MAX, MULTIDRAWS_STEPS } from 'Constants/Tickets'

const rejectIndexed = addIndex(reject)

const { Types, Creators } = createActions({
  addTicket: ['params'],
  removeTicket: ['ticketId'],
  removeLastTicket: null,
  ticketUpdate: ['params'],
  updateTicket: ['ticket'],
  clearTicket: ['ticketId'],
  clearAllTickets: null,
  updateTicketParams: ['params'],
  ticketHistoryAdd: null,
  prevDraw: null,
  nextDraw: null
})

export const TicketsTypes = Types
export default Creators

const INITIAL_TICKET_STATE = {
  whiteSelected: [],
  powerSelected: null
}

export const createTicket = () => {
  return { ...INITIAL_TICKET_STATE, id: randomHash() }
}

export const INITIAL_STATE = Immutable({
  tickets: [
    createTicket(),
    createTicket(),
    createTicket()
  ],
  powerplay: false,
  multidraws: 0,
  dataDraws: {},
  ticketPrice: null,
  multiplier: null,
  dataPrize: {},
  dataPowerPlay: {},
  miltiDrawsTicketsLength: 0,
  ticketHistory: [],
  ticketsLength: 0,
  totalTicketsLength: 0
})

export const ticketUpdate = (state, action) => state.merge({ ...action.params })

export const nextDraw = (state, action) => {
  const currentIndex = MULTIDRAWS_STEPS.findIndex(f => f === state.multidraws)
  if (currentIndex < MULTIDRAWS_STEPS.length - 1 && state.tickets.length <= 5) {
    const nextDraw = MULTIDRAWS_STEPS[currentIndex + 1]
    return state.merge({ multidraws: nextDraw })
  }
  return state
}

export const prevDraw = (state, action) => {
  const currentIndex = MULTIDRAWS_STEPS.findIndex(f => f === state.multidraws)
  if (currentIndex > 0 && state.tickets.length <= 5) {
    const nextDraw = MULTIDRAWS_STEPS[currentIndex - 1]
    return state.merge({ multidraws: nextDraw })
  }
  return state
}

export const addTicket = (state, action) => {
  const { params } = action
  let maxTickets = TICKETS_MAX
  if (state.multidraws > 0) maxTickets = 5
  if (state.tickets.length < maxTickets) {
    const newTicket = { ...createTicket(), ...params }
    const tickets = [ ...state.tickets, newTicket ]
    return state.merge({ tickets })
  }
  return state
}

export const ticketHistoryAdd = (state) => {
  // const prevousHistory = state.ticketHistory
  // console.group('Add tickets to local history')
  // console.log({ prevousHistory, newTickets: state.tickets })
  const ticketHistory = [ ...state.ticketHistory, ...state.tickets ]
  // console.log({ ticketHistory })
  // console.groupEnd()
  return state.merge({
    ticketHistory,
    tickets: [
      createTicket(),
      createTicket(),
      createTicket()
    ]
  })
}

export const removeTicket = (state, action) => {
  const { ticketId } = action
  if (state.tickets.length > TICKETS_MIN) {
    const tickets = reject(({ id }) => id === ticketId, state.tickets)
    return state.merge({ tickets })
  }
  return state
}

export const removeLastTicket = (state) => {
  if (state.tickets.length > TICKETS_MIN) {
    const lastTicket = (e, i) => i === state.tickets.length - 1
    const tickets = rejectIndexed(lastTicket, state.tickets)
    return state.merge({ tickets })
  }
  return state
}

export const updateTicket = (state, action) => {
  const { ticket } = action
  const { id, whiteSelected } = ticket
  if (!whiteSelected || whiteSelected.length < 6) {
    const ticketIndex = state.tickets.findIndex(f => f.id === id)
    const replaceWith = { ...state.tickets[ticketIndex], ...ticket }
    const tickets = update(ticketIndex, replaceWith, state.tickets)
    return state.merge({ tickets })
  }
  return state
}

export const clearTicket = (state, action) => {
  const { ticketId } = action
  const ticketIndex = state.tickets.findIndex(f => f.id === ticketId)
  const replaceWith = { id: ticketId, ...INITIAL_TICKET_STATE }
  const tickets = update(ticketIndex, replaceWith, state.tickets)
  return state.merge({ tickets })
}

export const clearAllTickets = (state, action) => {
  const tickets = state.tickets.map(() => createTicket())
  return state.merge({ tickets })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TICKET]: addTicket,
  [Types.REMOVE_TICKET]: removeTicket,
  [Types.REMOVE_LAST_TICKET]: removeLastTicket,
  [Types.UPDATE_TICKET]: updateTicket,
  [Types.CLEAR_TICKET]: clearTicket,
  [Types.CLEAR_ALL_TICKETS]: clearAllTickets,
  [Types.TICKET_UPDATE]: ticketUpdate,
  [Types.TICKET_HISTORY_ADD]: ticketHistoryAdd,
  [Types.PREV_DRAW]: prevDraw,
  [Types.NEXT_DRAW]: nextDraw
})
