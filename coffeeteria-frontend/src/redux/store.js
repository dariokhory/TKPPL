// pkgs: redux
import { createStore, applyMiddleware, compose } from 'redux'
// pkgs: redux-middleware
import promiseMiddleware from 'redux-promise-middleware'
// pkgs: redux-persist
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// modules: redux-reducer
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistCombineReducers(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configuredStore() {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(promiseMiddleware))
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
