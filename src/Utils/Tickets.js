// import moment from 'moment'
import { big, limitArr } from './'
import { WHITE_BALLS_LIMIT, POWER_BALLS_LIMIT, WHITE_BALLS_MAX_SELECT } from 'Constants/Tickets'

import { add0, to16x } from 'Utils'

export const filledTickets = f => f.whiteSelected.length === 5 && f.powerSelected !== null

export const getFilledTickets = tickets => tickets.filter(filledTickets)

export const getFilledTicketsCount = tickets => getFilledTickets(tickets).length

export const getWhiteNumbers = () => [...Array(WHITE_BALLS_LIMIT)].map((e, i) => i + 1)
export const getPowerNumbers = () => [...Array(POWER_BALLS_LIMIT)].map((e, i) => i + 1)

export const powerNumbers = getPowerNumbers()
export const whiteNumbers = getWhiteNumbers()

export const randomWhiteNumbers = () => {
  var arr = []
  while (arr.length < WHITE_BALLS_MAX_SELECT) {
    var randomnumber = Math.floor(Math.random() * WHITE_BALLS_LIMIT) + 1
    if (arr.indexOf(randomnumber) > -1) continue
    arr[arr.length] = randomnumber
  }
  return arr
}

export const prepareCombination = (combination) => {
  let whiteSelected = []
  let powerSelected = null
  combination.map((e, i) => {
    if (i === 5) {
      powerSelected = e
    } else {
      whiteSelected.push(e)
    }
  })
  return {
    whiteSelected,
    powerSelected
  }
}

export const prepareTickets = (tickets) => {
  let output = []
  // reduce ?
  tickets.map(e => {
    e.whiteSelected.map(el => output.push(el))
    output.push(e.powerSelected)
  })
  return output
}

export const calculateAmount = (ticketsLength) => 2 * ticketsLength * 10 ** 18

export const calculateTotals = ({ multidraws, powerplay, ticketPrice, tickets, dataDraws }) => {
  let discount = 0
  let total = ticketPrice * tickets.length
  let subtotal = total
  if (powerplay) {
    total *= 1.5
    subtotal = total
  }
  if (multidraws) {
    discount = calculateDiscount({ multidraws, dataDraws }) / 100
    subtotal = total * multidraws
    total = total * multidraws * (1 - discount)
  }
  discount *= 100
  const difference = total - subtotal
  const output = {
    total: big(total),
    subtotal: big(subtotal),
    discount: big(discount),
    difference: big(difference)
  }
  return output
}

export const calculateDiscount = ({ multidraws, dataDraws }) => {
  let discount = 0
  if (multidraws > 0 && dataDraws && dataDraws[multidraws]) {
    discount = dataDraws[multidraws].discount
  }
  return big(discount)
}

export const prepareLotteryTickets = (lotteryTickets, limit) => {
  let bets = lotteryTickets
  if (limit) bets = limitArr(bets, limit)
  return bets
}

export const prepareTicketNumbers = e => e ? Object.keys(e).filter(f => f < 6).map((t, i) => i < 6 ? parseInt(e[t]) : e[t]) : []
export const prepareTicketsData = (ticketsData) => ticketsData.map(prepareTicketNumbers)

export const prepareByteTickets = (currentDraw, tickets) => tickets.map(ticket => ([
  '0x',
  ...ticket.whiteSelected.map(to16x),
  ticket.powerSelected ? add0(ticket.powerSelected.toString(16)) : '00'
].join('') + '01' + '00'))
