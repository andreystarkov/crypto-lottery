import WEB3 from 'web3'

import moment from 'moment'
import { ABI_ERC20, ERC20_ADDRESS } from 'Constants/ERC20'
import { CONTRACT_ADDRESS_LOTTERY } from 'Constants'
import { BET } from 'Constants/Bet'
import { toBET } from 'Utils/Eth'
import { isEmpty } from 'Utils'

import EthConfig from 'Config/Eth'
import abiLottery from 'Abi/Lottery.json'

export const createWeb3 = () => {
  window.web3 = new WEB3(new WEB3.providers.HttpProvider(EthConfig.providerUrl))
  console.groupEnd()
}

export const createERC20 = () => {
  window.erc20 = new window.web3.eth.Contract(ABI_ERC20, ERC20_ADDRESS)
}

export const createContractLottery = () => {
  window.contractLottery = new window.web3.eth.Contract(abiLottery.abi, CONTRACT_ADDRESS_LOTTERY)
}

export const createCoreObjects = () => {
  createWeb3()
  createERC20()
  createContractLottery()
}

export const createAccount = () => {
  const account = window.web3.eth.accounts.create()
  const openKey = account.address
  const privateKey = account.privateKey
  window.web3.eth.accounts.wallet.add(privateKey)
  return {
    openKey,
    privateKey
  }
}

const convertFromBig = (number) => parseInt(number) / 10 ** 18

export async function getTicket (addressPlayer, val) {
  try {
    const value = await window.contractLottery.methods.usersTickets(addressPlayer, val).call()
    return value
  } catch (err) {
    console.log('getTicket error', { addressPlayer, val, err })
    return 0
  }
}

export async function getMultiDrawsTicket (addressPlayer, val) {
  const value = await window.contractLottery.methods.multiDrawsTickets(addressPlayer, val).call()
  return value
}

export async function checkMyTicket (addressPlayer) {
  try {
    let reward = await window.contractLottery.methods.checkMyTicket(addressPlayer).call()
    let jackpotReward = parseInt(reward[1] / BET)
    reward = [parseInt(reward[0] / BET), jackpotReward]
    reward = convertFromBig(reward)
    jackpotReward = convertFromBig(jackpotReward)
    return { reward, jackpotReward }
  } catch (err) {
    console.log('checkMyTicket error', err)
    return { reward: 0, jackpotReward: 0 }
  }
}

export async function callEth (method, type, param1, param2) {
  return callMethod(window.web3.eth, 'web3.eth', method, type, param1, param2)
}

export async function callContract (method, type, param1, param2) {
  return callMethod(window.contractLottery.methods, 'contract', method, type, param1, param2)
}

export async function callStorage (method, type, param1, param2) {
  return false
  // return callMethod(window.contractStorage.methods, 'contractStorage', method, type, param1, param2)
}

export async function callWeb3 (method, type, param1, param2) {
  return callMethod(window.web3.eth.methods, 'web3.eth.methods', method, type, param1, param2)
}

export async function callERC20 (method, type, param1, param2) {
  return callMethod(window.erc20.methods, 'ERC20', method, type, param1, param2)
}

export async function callMethod (obj, name, method, type, param1, param2) {
  const log = false
  let result
  try {
    const methodFn = obj[method]
    if (!isEmpty(param1) && isEmpty(param2)) {
      result = await methodFn(param1).call()
    } else if (!isEmpty(param1) && !isEmpty(param2)) {
      result = await methodFn(param1, param2).call()
    } else {
      result = await methodFn().call()
    }
    if (type) {
      if (type === 'int') result = parseInt(result)
      if (type === 'fixed') result = result.toFixed(2)
      if (type === 'bet') result = toBET(result)
      if (type === 'float') result = parseFloat(result)
    }
    log && console.groupCollapsed(`[${moment().format('hh:mm:ss')}] Calling ${name} method ${method}`)
    if (log && param1) console.log('Parameter 1:', param1)
    if (log && param2) console.log('Parameter 2:', param2)
    log && console.log(`Result${type ? ` typed as "${type}"` : ''}:`, result)
    log && console.groupEnd()
    return result
  } catch (errorLog) {
    log && console.group(`Error calling method "${method}"`)
    if (log && param1) console.log('With params:', param1, param2)
    log && console.log('Log:', errorLog)
    log && console.groupEnd()
    return false
  }
}

export const approveContract = ({ contractAddress, amount, openKey, onSuccess, onError, onPending }) => {
  console.log('approveContract', { contractAddress, amount, openKey })
  return new Promise(async (resolve, reject) => {
    let allowance = await window.erc20.methods.allowance(openKey, contractAddress).call()
    console.log('💸 allowance:', allowance)

    let isError = false
    const isReset = parseInt(allowance) < parseInt(amount) && parseInt(allowance) !== 0
    const shouldSkipApprove = parseInt(allowance) >= parseInt(amount)
    const approveAmount = isReset ? 0 : `${amount}`

    console.log('approveContract', { isReset, approveAmount, shouldSkipApprove })
    if (shouldSkipApprove) {
      if (onSuccess) onSuccess(allowance, false)
    } else {
      try {
        const gasLimit = await window.erc20.methods.approve(contractAddress, approveAmount).estimateGas({
          from: openKey
        })
        console.log('approveContract', { gasLimit })
        await window.erc20.methods.approve(contractAddress, approveAmount)
          .send({
            from: openKey,
            gasPrice: 10 * 10 ** 9,
            gas: gasLimit
          })
          .on('transactionHash', transactionHash => {
            console.log('# approve TX pending', transactionHash)
            console.log('https://ropsten.etherscan.io/tx/' + transactionHash)
            if (onPending) onPending(transactionHash, isReset)
          })
          .catch(err => {
            if (onError) onError(err, isReset)
            isError = true
            console.groupEnd()
          })

        if (!isError) {
          if (onSuccess) onSuccess(allowance, isReset)
          allowance = await window.erc20.methods.allowance(openKey, contractAddress).call()
          console.log('💸💸💸 allowance:', allowance)
          console.groupEnd()
        } else {
          // ...
        }
      } catch (err) {
        console.log('ERROR', { err })
        onError(err, isReset)
        console.groupEnd()
      }
    }
    resolve()
  })
}

export async function allowance ({ openKey, addressLottery }) {
  let allowance = await window.erc20.methods.allowance(openKey, addressLottery).call()
  allowance /= 10 ** 18
  console.log('allowance', parseInt(allowance))
  return parseInt(allowance)
}

export const buyTickets = ({ byteTickets, ticketsArr, powerPlay, openKey, onError, onPending, multidraws }) => {
  console.log('buyTickets', { byteTickets, ticketsArr, powerPlay, openKey, multidraws })
  return new Promise(async (resolve, reject) => {
    const methodName = byteTickets.length > 1 ? 'buyFewTickets' : 'buyTicket'
    const data = byteTickets.length > 1 ? byteTickets : byteTickets[0]
    const contractMethod = window.contractLottery.methods[methodName]
    let methodWithParams = contractMethod(data)

    console.log({ methodWithParams, contractMethod, data, methodName })

    try {
      const gasLimit = await methodWithParams.estimateGas({
        from: openKey
      })
      console.log('buyTickets gasLimit', { gasLimit })
      const receipt = await methodWithParams.send({
        from: openKey,
        gas: gasLimit,
        gasPrice: 10 * 10 ** 9
      }).on('transactionHash', transactionHash => {
        console.log('# buyTicket TX pending', transactionHash)
        console.log('https://ropsten.etherscan.io/tx/' + transactionHash)
        if (onPending) onPending(transactionHash)
      }).catch(err => onError(err))
      console.log('contract.buyTicket receipt:', { receipt })
    } catch (err) {
      console.log('buyTickets error: ', err)
    }
    resolve()
  })
}

export const getReward = ({ openKey, onPending, onError }) => {
  // console.log('getReward', { openKey })
  return new Promise(async (resolve, reject) => {
    // const gasLimit = await window.contractLottery.methods.getReward().estimateGas({
    //   from: openKey
    // })
    // console.log({ gasLimit })
    const receipt = await window.contractLottery.methods.getReward().send({
      from: openKey,
      gas: 4700000,
      gasPrice: 10 * 10 ** 9
    }).on('transactionHash', transactionHash => {
      console.log('# getReward TX pending', transactionHash)
      console.log('https://ropsten.etherscan.io/tx/' + transactionHash)
      if (onPending) onPending(transactionHash)
    }).catch(err => onError(err))
    console.log('contract.getReward receipt:', { receipt })
    resolve()
  })
}

export const faucetToAddress = ({ openKey, onPending, onError }) => {
  return new Promise(async (resolve, reject) => {
    await window.erc20.methods.faucetTo(openKey, 60 * 10 ** 18).send({
      from: openKey,
      gas: 4500000,
      gasPrice: 20 * 10 ** 9
    }).on('transactionHash', transactionHash => {
      console.log('# get test bet TX pending', transactionHash)
      console.log('https://ropsten.etherscan.io/tx/' + transactionHash)
      if (onPending) onPending(transactionHash)
    }).on('error', error => {
      console.log('faucetToAddress error', { error })
      if (onError) onError(error)
    })
    resolve()
  })
}
