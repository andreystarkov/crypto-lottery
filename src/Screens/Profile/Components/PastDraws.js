import React, { Component } from 'react'

import { Td, Tbody, Tr, Thead } from 'Styles/TableStyles'
import {
  TransactionsTable,
  Head,
  TableLink,
  JackpotButtonContainer,
  PrizeButtonContainer
} from './PastDrawsStyles'
import { DrawCombination, Placeholder } from 'Components'

import { Colors } from 'Themes'
import { compareArrays, formatNumber } from 'Utils'
import { prepareTicketNumbers } from 'Utils/Tickets'

import { getReward } from 'Services/Eth'
import l from 'Intl'
import { log } from 'Utils/Log'

export const JackpotButton = props => (
  <JackpotButtonContainer {...props}>
    {l.t('profile.winJackpot')}
  </JackpotButtonContainer>
)
export const PrizeButton = props => (
  <PrizeButtonContainer {...props}>
    {l.t('profile.pickPrize')}
  </PrizeButtonContainer>
)

export default class PastDraws extends Component {
  pickPrize = draw => {
    const {
      refreshRewardTxStatus,
      openTransactionModal,
      closeModal,
      openAlert,
      user
    } = this.props
    const { openKey } = user
    const winAmount = this.calcTotalWinAmount()
    getReward({
      openKey,
      onPending: hash => {
        refreshRewardTxStatus({ hash, winAmount })
        setTimeout(() => openTransactionModal({ type: 'reward', hash }), 510)
      },
      onError: err => {
        log({ err })
        closeModal()
        openAlert({
          type: 'error',
          title: 'Error getting reward'
        })
      }
    })
  }

  calcTotalWinAmount () {
    const { lottery, user, data } = this.props
    const { currDraws, currentReward } = user
    const { winNumbers, countOfDraws, isWinTicket, jackpot } = lottery
    const { winTicketsCount } = currentReward
    let winAmount = 0

    data.map(({ numbers, draw }) => {
      const combination = prepareTicketNumbers(numbers)
      const winCombination = prepareTicketNumbers(winNumbers)
      let powerplay = numbers.pp
      const amount = this.calcAmount(combination, winCombination, powerplay)
      const wins = compareArrays(combination, winCombination)
      const lotteryHasResult =
        currDraws === countOfDraws && isWinTicket && countOfDraws === draw
      let isWin = amount > 0 && lotteryHasResult
      let isJackpot = wins.length === 6
      if (isWin) {
        const wAmount = isJackpot ? jackpot : amount
        winAmount += wAmount
      }
    })
    return winAmount
  }

  calcAmount = (combination, winCombination, powerplay) => {
    const { dataPrize, dataPowerPlay, multiplier } = this.props
    const cutWb = (f, i) => i < 5
    const isPb = combination[5] === winCombination[5]
    const wbWins = compareArrays(combination.filter(cutWb), winCombination)
    let value = wbWins.length * 10 + (isPb ? 1 : 0)
    let prize = dataPrize[value] || 0
    if (powerplay) prize *= dataPowerPlay[multiplier]
    return prize
  }

  renderTable = ({ numbers, draw, id }, key) => {
    const { lottery, user } = this.props
    const { currDraws, currentReward } = user
    const {
      closeLotteryBlock,
      currentBlock,
      winNumbers,
      countOfDraws,
      isWinTicket,
      jackpot
    } = lottery
    const { winTicketsCount } = currentReward
    const combination = prepareTicketNumbers(numbers)
    const winCombination = prepareTicketNumbers(winNumbers)

    let powerplay = numbers.pp
    let drawId = 10 + key
    let winAmount = `-`
    const amount = this.calcAmount(combination, winCombination, powerplay)
    const wins = compareArrays(combination, winCombination)
    const lotteryHasResult =
      currDraws === countOfDraws && isWinTicket && countOfDraws === draw
    let isWin = amount > 0 && lotteryHasResult
    let isJackpot = wins.length === 6
    if (isWin) {
      const wAmount = isJackpot ? jackpot : amount
      winAmount = `${wAmount} BET`
    }
    const renderPrizeButton = () => {
      let isButton = isWin && currentBlock < closeLotteryBlock
      if (!isJackpot && isButton && winTicketsCount > 0) { return <PrizeButton onClick={() => this.pickPrize(drawId)} /> }
      if (isJackpot) {
        return (
          <JackpotButtonContainer>{l.t('profile.wait')}</JackpotButtonContainer>
        )
      }
    }
    return (
      <Tr key={key}>
        <Td>{draw}</Td>
        <Td>{id}</Td>
        <Td>
          <DrawCombination
            combination={combination}
            winNumbers={winCombination}
            showWinNumbers={lotteryHasResult}
          />
        </Td>
        <Td>{isJackpot && <JackpotButton />}</Td>
        <Td>{renderPrizeButton()}</Td>
        <Td right color={Colors.lightGrey}>
          {isJackpot ? `${formatNumber(jackpot)} BET` : winAmount}
        </Td>
      </Tr>
    )
  }

  render () {
    const { data, full } = this.props
    return data && data.length > 0 ? (
      <TransactionsTable className='animated fadeIn'>
        <Tbody>
          <Thead full={full}>
            <Head width='10%'>{l.t('profile.draw')}</Head>
            <Head width='10%'>{l.t('profile.ticket')}</Head>
            {/* <Head width='10%'>Date</Head> */}
            <Head width='25%'>{l.t('profile.results')}</Head>
            <Head width='15%' />
            <Head width='15%' />
            <Head width='10%' right>
              {l.t('profile.prize')}
            </Head>
          </Thead>
          {data.map(this.renderTable)}
        </Tbody>
      </TransactionsTable>
    ) : (
      <Placeholder
        title={l.t('profile.nodraws')}
        text={l.t('profile.buytickets')}
      />
    )
  }
}
