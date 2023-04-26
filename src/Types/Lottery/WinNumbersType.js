import { shape, string, bool } from 'prop-types'

export const winNumbersType = {
  0: string,
  1: string,
  2: string,
  3: string,
  4: string,
  5: string,
  6: bool,
  wb1: string,
  wb2: string,
  wb3: string,
  wb4: string,
  wb5: string,
  rb: string,
  pp: bool
}

export default shape(winNumbersType)
