import { number, object, func } from 'prop-types'
import { ticketsType } from 'Types/Tickets'
import user, { userType } from 'Types/User'
import eth, { ethType } from 'Types/Eth'

// TODO: доделать state.lottery
const mapStape = {
  tickets: ticketsType.tickets,
  ticketsLength: ticketsType.ticketsLength,
  multidraws: ticketsType.multidraws,
  powerplay: ticketsType.powerplay,
  dataDraws: ticketsType.dataDraws,
  // ticketPrice: state.lottery.ticketPrice,
  transaction: ethType.transaction,
  eth: eth,
  buyTicketsParams: object, // TODO: переделать
  // isLotteryActive: state.lottery.isActive,
  multiDrawsTicketsLength: userType.multiDrawsTicketsLength,
  // numEndDraws: state.lottery.numEndDraws,
  // countOfDraws: state.lottery.countOfDraws,
  // sellOverBlock: state.lottery.sellOverBlock,
  // currentBlock: state.lottery.currentBlock,
  // lastDraws: state.lottery.lastDraws,
  totalTicketsLength: userType.totalTicketsLength,
  upcomingTicketsLength: number,
  user: user
}

const mapDispatch = {
  addTicket: func,
  removeTicket: func,
  removeLastTicket: func,
  updateTicket: func,
  clearTicket: func,
  clearAllTickets: func,
  openModal: func,
  openTransactionModal: func,
  closeModal: func,
  openAlert: func,
  closeAlert: func,
  refreshTransactionStatus: func,
  buyTickets: func,
  updateTicketParams: func
}

const propTypes = {}

export default {
  ...mapStape,
  ...mapDispatch,
  ...propTypes
}
