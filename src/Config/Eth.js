export const isRopsten = true

const x = isRopsten && 'ropsten.'
export const y = `https://${x}etherscan.io`

const EthConfig = {
  providerUrl: `https://${x}infura.io/JCnK5ifEPH9qcQkX0Ahl'`,
  transactionUrl: `${y}/tx/`,
  addressUrl: `${y}/address/`
}

export default EthConfig
