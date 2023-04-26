// https://api.trustwalletapp.com/transactions?address=0x9f8284ce2cf0c8ce10685f537b1fff418104a317&limit=5
// http://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=0x749b07dec89F9771307830191d8E3997eb9D0AcA&startblock=0&endblock=999999999
import apisauce from 'apisauce'
import ApiConfig from 'Config/Api'

const create = () => {
  const config = {
    baseURL: ApiConfig.etherscanUrl,
    headers: {
      // 'Cache-Control': 'no-cache'
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      // 'Access-Control-Allow-Headers': 'Content-Type'
    },
    timeout: 10000
  }

  const api = apisauce.create(config)

  // configuration methods

  const setHeader = (name, value) => api.setHeader(name, value)

  // get methods

  const getTransactions = (account) => api.get(`api?module=account&action=tokentx&address=${account}&startblock=0&endblock=999999999`)

  return {
    setHeader,
    getTransactions
  }
}

export default {
  create
}
