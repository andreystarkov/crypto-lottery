import { LOAD_MORE_STEP } from 'Constants'

export const getNextLimit = ({ total, field }, state) => {
  const x = `${field}Limit`
  let next = state[x] + LOAD_MORE_STEP
  if (next > total) next = total
  return { [x]: next }
}

export const limitArr = (arr, limit) => arr.filter((f, i) => i < limit)

export const configMore = ({ field, text }, state, arr) => ({
  limit: state[`${field}Limit`],
  name: `${text}`,
  field: field,
  total: arr.length
})

export const getInitialLimits = (pages) => {
  const state = {}
  Object.keys(pages).map((key, i) => { state[`${pages[key].field}Limit`] = LOAD_MORE_STEP })
  return state
}
