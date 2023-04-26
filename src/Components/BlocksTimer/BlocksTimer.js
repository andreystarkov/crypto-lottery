import React, { Component } from 'react'
import { Odometer } from 'Components'
import { FlexCenter } from 'Styles/CommonStyles'
import { LeftToPlay } from 'Styles/MainStyles'
import { log } from 'Utils/Log'
import l from 'Intl'

export const secondsToTime = (input, separator) => {
  const pad = input => {
    return input < 10 ? '0' + input : input
  }
  return [
    pad(Math.floor(input / 3600)),
    pad(Math.floor((input % 3600) / 60)),
    pad(Math.floor(input % 60))
  ].join(typeof separator !== 'undefined' ? separator : ':')
}

export default class BlocksCounter extends Component {
  state = {
    seconds: null
  }

  componentDidMount = () => {
    this.initTimer()
  }

  componentDidUpdate (nextProps) {
    const { currentBlock } = this.props.lottery
    if (currentBlock && !nextProps.lottery.currentBlock) {
      setTimeout(this.initTimer(), 1000)
    }
  }

  componentWillUnmount () {
    this.stopTimer()
  }

  timer = null

  initTimer = () => {
    const {
      isActive,
      currentBlock,
      closeLotteryBlock,
      sellOverBlock,
      startLotteryBlock
    } = this.props.lottery // startLotteryBlock

    if (currentBlock) {
      const getValue = () => {
        if (isActive && sellOverBlock > currentBlock) {
          return sellOverBlock - currentBlock
        } else if (isActive && closeLotteryBlock > currentBlock) {
          return closeLotteryBlock - currentBlock
        } else if (!isActive && startLotteryBlock > currentBlock) {
          return startLotteryBlock - currentBlock
        }
      }

      let seconds = getValue() * 15
      log({ seconds, value: getValue() })
      this.startTimer()
      this.setState({ seconds })
    }
  }

  tick = () => {
    const { seconds } = this.state
    if (seconds > 0) {
      this.setState({ seconds: seconds - 1 })
    } else {
      this.stopTimer()
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
    this.timer = null
  }

  render () {
    const {
      isActive,
      currentBlock,
      closeLotteryBlock,
      blockForRandom,
      isWinTicket,
      sellOverBlock,
      startLotteryBlock
    } = this.props.lottery // startLotteryBlock

    const isVisible =
      (isActive && closeLotteryBlock > currentBlock) || // блок, после которого можно закрыть лоттерею
      (isActive && blockForRandom > currentBlock && !isWinTicket) // блок, после которого можно разыграть лоттерею
    // (!isActive && startLotteryBlock > currentBlock) // блок, после которого можно начать лоттерею

    // console.log({ isActive, currentBlock, closeLotteryBlock, blockForRandom, isWinTicket, sellOverBlock })

    const getTitle = () => {
      if (isActive) {
        if (sellOverBlock > currentBlock) {
          // Показываем блоки (sellOverBlock - currentBlock)
          return (
            <LeftToPlay>
              {l.t('main.blocksCounter.ticketsale')}
              <br /> {l.t('main.blocksCounter.inprogress')}{' '}
            </LeftToPlay>
          )
        }
        if (isWinTicket) {
          if (currentBlock < closeLotteryBlock) {
            // Показываем блоки (closeLotteryBlock - currentBlock)
            return (
              <LeftToPlay>
                {l.t('main.blocksCounter.getting')}
                <br /> {l.t('main.blocksCounter.profits')}
              </LeftToPlay>
            )
          } else {
            // The draw will be finished soon
          }
        } else {
          if (currentBlock >= blockForRandom) {
            // Показываем блоки (blockForRandom - currentBlock)
            return <LeftToPlay>{l.t('main.blocksCounter.raffle')}</LeftToPlay>
          }
        }
      } else {
        if (startLotteryBlock > currentBlock) {
          return (
            <LeftToPlay>
              {l.t('main.blocksCounter.tillnext')}
              <br /> {l.t('main.blocksCounter.draw')}
            </LeftToPlay>
          )
        }
        // New draw will start soon
      }
    }

    return (
      isVisible && (
        <FlexCenter>
          <div className='relative inline-block mr1'>
            {this.state.seconds ? (
              <Odometer value={secondsToTime(this.state.seconds, '')} />
            ) : null}
          </div>
          {getTitle()}
        </FlexCenter>
      )
    )
  }
}
