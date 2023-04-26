import { shape, bool, number, string, array } from 'prop-types'
import transactions from './TransactionsType'
import currentReward from './CurrentRewardType'
// TODO: не должно быть параметров array
export const userType = {
  auth: bool,
  openKey: string,
  balanceETH: number,
  balanceBET: number,
  ticketsLength: number,
  multiDrawsTicketsLength: number,
  totalTicketsLength: number,
  ticketsData: array, // TODO: переделать
  pastTicketsData: array, // TODO: переделать
  numEndDraws: number,
  countOfDraws: number,
  currDraws: number,
  isWinTicket: bool,
  winNumbers: array, // TODO: переделать
  multidrawsTicketsData: array, // TODO: переделать
  upcomingTicketsData: array, // TODO: переделать
  userTicketsData: array, // TODO: переделать
  winTicketDraws: array, // TODO: переделать
  userLoading: bool,
  userRewards: array, // TODO: переделать
  allTicketsLength: number,
  transactions: transactions,
  currentReward: currentReward
}

export default shape(userType)
