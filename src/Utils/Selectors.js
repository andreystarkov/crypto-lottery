import { prepareTickets, prepareByteTickets } from 'Utils/Tickets'

export const getWallet = () => window.web3.eth.accounts.wallet

export const getTransaction = state => state.eth.transaction
export const getTickets = state => state.tickets.tickets
export const getNumOfTickets = state => state.tickets.tickets.length
export const getTicketsArr = state => prepareTickets(state.tickets.tickets)
export const getOpenKey = state => state.user.openKey
export const getPowerPlay = state => state.tickets.powerplay
export const getMultiDraws = state => state.tickets.multidraws
export const selectCountOfDraws = state => state.lottery.countOfDraws
export const getTicketPrice = state => state.lottery.ticketPrice
export const selectTicketPrice = getTicketPrice
export const selectLotteryWinNumbers = state => state.lottery.winNumbers
export const selectIsWinTicket = state => state.lottery.isWinTicket
export const selectLotteryTickets = state => state.lottery.lotteryTickets
export const selectDrawsPage = state => state.lottery.lastDrawsPage
export const selectDrawsLoading = state => state.lottery.lastDrawsLoading
export const getCurrentDraw = state => state.lottery.currentDraw

export const getBuyTicketsParams = state => {
  let buyTicketParams = {
    numOfTickets: getNumOfTickets(state),
    ticketsArr: getTicketsArr(state),
    openKey: getOpenKey(state),
    powerPlay: getPowerPlay(state),
    byteTickets: prepareByteTickets(getCurrentDraw(state), getTickets(state))
  }
  const multidraws = getMultiDraws(state)
  if (multidraws > 0) buyTicketParams['multidraws'] = multidraws
  console.log({ ...buyTicketParams })
  return buyTicketParams
}
