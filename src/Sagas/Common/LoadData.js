import { call, select, put } from 'redux-saga/effects'
import { log } from 'Utils/Log'

export function * loadNextItems (loadFn, {
  loadingSelector,
  prevSelector,
  total,
  perPage,
  name,
  actionBefore,
  actionAfter
}) {
  let counter = 0
  const isLoading = yield select(loadingSelector)
  const prevItems = yield select(prevSelector)
  const lastItem = prevItems && prevItems[prevItems.length - 1]
  let lastItemId = lastItem ? lastItem.id : 0
  let loadLimit = lastItemId - perPage
  if (loadLimit < 0) loadLimit = 0
  const isLoaded = prevItems.length === total
  const shouldLoad = total > 0 && !isLoading && !isLoaded
  log(`loadNextItems: ${name}`, { shouldLoad, name, total, prevItems, lastItem, lastItemId, loadLimit, isLoading, perPage })
  if (shouldLoad) {
    if (actionBefore) yield put(actionBefore)
    for (let id = lastItemId - 1; id >= loadLimit; id--) {
      yield call(loadFn, id)
      counter++
    }
    if (actionAfter) yield put(actionAfter)
  }
  log(`loadNextItems: Loaded ${counter} new ${name} items`)
}

export function * loadPrevItems (loadFn, {
  loadingSelector,
  prevSelector,
  total,
  perPage,
  name
}) {
  let counter = 0
  const isLoading = yield select(loadingSelector)
  const prevItems = yield select(prevSelector)
  if (prevItems && prevItems.length > 0) {
    const ids = prevItems.map((e, i) => e.id)
    const minId = Array.min(...ids)
    let loadTo = minId - perPage
    if (loadTo < 0) loadTo = 0
    const isLoaded = prevItems.length === total
    // console.log(`Loading prevous ${perPage} items of ${name}...`, { total, prevItems, isLoading, perPage })
    if (total > 0 && !isLoading && !isLoaded) {
      for (let id = minId - 1; id <= loadTo; id--) {
        yield call(loadFn, id)
        counter++
      }
    }
    log(`Loaded ${counter} prev ${name} items`)
  }
}

export function * loadLastItems (loadFn, {
  loadingSelector,
  prevSelector,
  total,
  perPage,
  name
}) {
  let counter = 0
  const isLoading = yield select(loadingSelector)
  let to = total - perPage
  if (to < 0) to = 0
  if (!isLoading) {
    // console.log(`Loading last ${perPage} items of ${name}...`, { total, prevItems, isLoading, perPage })
    for (let id = total - 1; id >= to; id--) {
      yield call(loadFn, id)
      counter++
    }
  }
  log(`Loaded ${counter} last ${name} items`)
}
