
import { isRopsten } from './Eth'

const ApiConfig = {
  baseUrl: 'https://api.github.com/',
  coinmarketUrl: 'https://api.coinmarketcap.com/',
  etherscanUrl: `https://api${isRopsten && '-ropsten'}.etherscan.io/`,
  trustwalletUrl: 'https://api.trustwalletapp.com/'
}

export default ApiConfig
