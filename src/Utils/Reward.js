import { prepareTicketNumbers } from './Tickets'
import { compareArrays } from 'Utils'

export const calcTotalWinAmount = ({ lottery, user, data }) => {
  const { currDraws } = user
  const { winNumbers, countOfDraws, isWinTicket, jackpot } = lottery

  let winAmount = 0

  data.map(({ numbers }) => {
    const combination = prepareTicketNumbers(numbers)
    const winCombination = prepareTicketNumbers(winNumbers)
    let powerplay = numbers.pp
    const amount = this.calcAmount(combination, winCombination, powerplay)
    const wins = compareArrays(combination, winCombination)
    const lotteryHasResult = (currDraws === countOfDraws && isWinTicket)
    let isWin = (amount > 0 && lotteryHasResult)
    let isJackpot = (wins.length === 6)
    if (isWin) {
      const wAmount = isJackpot ? jackpot : amount
      winAmount += wAmount
    }
  })
  return winAmount
}