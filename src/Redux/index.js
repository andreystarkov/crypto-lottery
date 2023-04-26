import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from 'Sagas'
import ReduxPersist from 'Config/ReduxPersist'

export const reducers = combineReducers({
  tickets: require('./TicketsRedux').reducer,
  alert: require('./AlertRedux').reducer,
  sidebar: require('./SidebarRedux').reducer,
  modal: require('./ModalRedux').reducer,
  eth: require('./EthRedux').reducer,
  lottery: require('./LotteryRedux').reducer,
  user: require('./UserRedux').reducer,
  tutorial: require('./TutorialRedux').reducer
})

export default () => {
  let finalReducers = reducers

  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
