import { shape, bool, number, object, any, array } from 'prop-types'
import transactionsType from './TransactionsType'
import lastDrawsType from './LastDrawsType'
import lotteryTicketsType from './LotteryTicketsType'
import winNumbersType from './WinNumbersType'
import lotteryWinnersType from './LotteryWinnersType'

export const lotteryType = {
  isActive: bool,
  transactions: transactionsType,
  lotteryBalanceBET: any, // TODO: переделать
  sellOverBlock: number,
  currentBlock: number,
  blockForRandom: number,
  closeLotteryBlock: number,
  startLotteryBlock: number,
  stopLotteryBlock: number,
  winTicketDraws: array, // TODO: переделать
  countOfTickets: number,
  lastDraws: lastDrawsType,
  lastDrawsPage: number,
  lastDrawsLoading: bool,
  lotteryTickets: lotteryTicketsType,
  lotteryTicketsPage: number,
  lotteryTicketsLoading: bool,
  lotteryTicketsTotal: number,
  lotteryTicketsMap: object, // TODO: переделать
  countTicketSold: number,
  totalWinReward: number,
  winNumbers: winNumbersType,
  countOfDraws: number,
  prevCountOfDraws: number,
  isWinTicket: bool,
  ticketPrice: number,
  totalWinners: number,
  lotteryWinners: lotteryWinnersType,
  lotteryWinnersLoading: bool,
  totalNumberOfTickets: number,
  userRewards: array, // TODO: переделать
  jackpot: number
}

export default shape(lotteryType)
