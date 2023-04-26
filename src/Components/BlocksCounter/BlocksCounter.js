import React, { Component } from 'react'
import { Odometer } from 'Components'
import { FlexCenter } from 'Styles/CommonStyles'
import { LeftToPlay } from 'Styles/MainStyles'
import { log } from 'Utils/Log'
import l from 'Intl'

export default class BlocksCounter extends Component {
  getValue = () => {
    const { isActive, currentBlock, closeLotteryBlock, sellOverBlock, startLotteryBlock } = this.props.lottery // startLotteryBlock
    if (isActive && sellOverBlock > currentBlock) {
      return sellOverBlock - currentBlock
    } else if (isActive && closeLotteryBlock > currentBlock) {
      return closeLotteryBlock - currentBlock
    } else if (!isActive && startLotteryBlock > currentBlock) {
      return startLotteryBlock - currentBlock
    }
  }

  getTitle = () => {
    const { isActive, currentBlock, closeLotteryBlock, isWinTicket, sellOverBlock, startLotteryBlock } = this.props.lottery // startLotteryBlock
    if (isActive) {
      if (sellOverBlock > currentBlock) {
        // Показываем блоки (sellOverBlock - currentBlock)
        return <LeftToPlay>{l.t('main.blocksCounter.ticketsale')}<br /> {l.t('main.blocksCounter.inprogress')} </LeftToPlay>
      }
      if (isWinTicket) {
        if (currentBlock < closeLotteryBlock) {
          // Показываем блоки (closeLotteryBlock - currentBlock)
          return <LeftToPlay>{l.t('main.blocksCounter.getting')}<br /> {l.t('main.blocksCounter.profits')}</LeftToPlay>
        } else {
          // The draw will be finished soon
        }
      } else {
        if (currentBlock > sellOverBlock) {
          // Показываем блоки (blockForRandom - currentBlock)
          return <LeftToPlay>{l.t('main.blocksCounter.raffle')}</LeftToPlay>
        }
      }
    } else {
      if (startLotteryBlock > currentBlock) {
        return <LeftToPlay>{l.t('main.blocksCounter.tillnext')}<br /> {l.t('main.blocksCounter.draw')}</LeftToPlay>
      }
      // New draw will start soon
    }
  }

  isVisible = () => {
    const { isActive, currentBlock, closeLotteryBlock, blockForRandom, isWinTicket, startLotteryBlock } = this.props.lottery // startLotteryBlock
    log('>>', (isActive && closeLotteryBlock > currentBlock))
    log('>>', (isActive && blockForRandom > currentBlock && !isWinTicket))
    log('>>', (!isActive && startLotteryBlock > currentBlock))

    const _isVisible = (isActive && closeLotteryBlock > currentBlock) || // блок, после которого можно закрыть лоттерею
                      (isActive && blockForRandom > currentBlock && !isWinTicket) || // блок, после которого можно разыграть лоттерею
                      (!isActive && startLotteryBlock > currentBlock) // блок, после которого можно начать лоттерею
    log('isVisible', _isVisible)
    return _isVisible
  }

  render () {
    return (this.isVisible() && <FlexCenter>
      <div className='relative inline-block mr1'>
        <Odometer value={this.getValue()} />
      </div>
      {this.getTitle()}
    </FlexCenter>
    )
  }
}
