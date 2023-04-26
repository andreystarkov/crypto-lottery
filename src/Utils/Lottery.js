export const getLotteryBlocksStatus = (lottery) => {
  const { isActive, currentBlock, closeLotteryBlock, blockForRandom, isWinTicket, sellOverBlock, startLotteryBlock } = lottery

  if (isActive && sellOverBlock > currentBlock) {
    return {
      stage: 'sale',
      blocksLeft: sellOverBlock - currentBlock
    }
  } else if (isActive && isWinTicket && currentBlock < closeLotteryBlock) {
    return {
      stage: 'profits',
      blocksLeft: closeLotteryBlock - currentBlock
    }
  } else if (isActive && !isWinTicket && currentBlock >= blockForRandom) {
    return {
      stage: 'raffle',
      blocksLeft: currentBlock - blockForRandom
    }
  } else {
    return {
      stage: 'next',
      blocksLeft: startLotteryBlock - currentBlock
    }
  }
}
