import apisauce from 'apisauce'
import ApiConfig from 'Config/Api'

const create = () => {
  const config = {
    baseURL: ApiConfig.coinmarketUrl,
    timeout: 10000
  }

  const api = apisauce.create(config)

  // configuration methods

  const setHeader = (name, value) => api.setHeader(name, value)

  // get methods
  // https://api.coinmarketcap.com/v2/ticker/?convert=BET&limit=10
  const getBETValues = () => api.get('v2/ticker/1771/?convert=ETH')
  const getETHValues = () => api.get('v1/ticker/ethereum/?convert=USD')

  return {
    setHeader,
    getBETValues,
    getETHValues
  }
}

export default {
  create
}
