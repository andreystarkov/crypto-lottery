import bip39 from 'bip39'
import ethWallet from 'ethereumjs-wallet'
import hdkey from 'ethereumjs-wallet/hdkey'

import Web3 from 'web3'
import { log } from 'Utils/Log'
export const unlockPrivateKey = (privateKey) => {
  window.web3.eth.accounts.wallet.add(privateKey)
  const openKey = window.web3.eth.accounts.wallet[0].address
  console.groupCollapsed('Unlocking account')
  log({ privateKey, openKey })
  console.groupEnd()
  return {
    openKey
  }
}

export function unlockMnemonic (phrase) {
  let hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(phrase))
  let hdpath = "m/44'/60'/0'/0/"
  let wallet = hdwallet.derivePath(hdpath + 0).getWallet()
  let openKey = '0x' + wallet.getAddress().toString('hex')
  let privateKey = '0x' + wallet.getPrivateKey().toString('hex')
  window.web3.eth.accounts.wallet.add(privateKey)
  const output = {
    openKey,
    privateKey
  }
  console.group('Unlock mnemonic')
  log({ phrase, hdpath, wallet, hdwallet })
  log(output)
  log(window.web3.eth.accounts)
  console.groupEnd()
  return output
}

export function unlockJson (string, password) {
  log({ string, password })
  // string = JSON.parse(string)
  // console.log({ string })
  let v3 = ethWallet.fromV3(string, password)
  let openKey = '0x' + v3.getAddress().toString('hex')
  let privateKey = '0x' + v3.getPrivateKey().toString('hex')
  window.web3.eth.accounts.wallet.add(privateKey)
  const output = {
    openKey,
    privateKey
  }
  console.group('Unlock JSON')
  log({ string, password, v3, accounts: window.web3.eth.accounts })
  log(output)
  console.groupEnd()
  return output
}

export function unlockMetamask () {
  // eslint-disable-next-line
  web3.eth.getAccounts((error, accounts) => {
    console.group('Unlock Metamask')
    log({ error, accounts })
    console.groupEnd()
  })
}
