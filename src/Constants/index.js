import { BET } from './Bet'
import l from 'Intl'

export const CONTRACT_ADDRESS_LOTTERY = '0xF65fa3d3c6Ac521d4aB8435f7432b92ccDFb3C31'

export const LOAD_MORE_STEP = 10
export const LOTTERY_DRAWS_PER_PAGE = 6
export const LOTTERY_TICKETS_PER_PAGE = 6

export const AUTH_TYPES = {
  1: l.t('signin.priv'),
  2: l.t('signin.mnem')
  // 3: 'Keystore / JSON',
  // 4: 'Metamask'
}

export {
  BET
}
