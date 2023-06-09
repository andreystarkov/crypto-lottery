import ReduxPersist from '../Config/ReduxPersist'
import { persistStore } from 'redux-persist'
import StartupActions from '../Redux/StartupRedux'
import AppConfig from '../Config/AppConfig'
import { log } from 'Utils/Log'
const updateReducers = (store) => {
  const reducerVersion = ReduxPersist.reducerVersion
  const startup = () => store.dispatch(StartupActions.startup())

  const localVersion = localStorage.getItem('reducerVersion')
  if (localVersion) {
    if (localVersion !== reducerVersion) {
      if (AppConfig.debug) {
        log('Reducer Version Change Detected', {
          old: localVersion,
          new: reducerVersion
        })
      }
      persistStore(store, null, startup).purge()
      localStorage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, null, startup)
    }
  } else {
    persistStore(store, null, startup)
    localStorage.setItem('reducerVersion', reducerVersion)
  }
}

export default { updateReducers }
