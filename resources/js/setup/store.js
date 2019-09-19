import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { fromJS } from 'immutable'
import { routerMiddleware } from 'connected-react-router/immutable'
import thunk from 'redux-thunk'

import createRootReducer from './rootReducer'

export const history = createBrowserHistory()

const configureStore = (initialState = {}) => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))

  return createStore(createRootReducer(history), fromJS(initialState), enhancer)
}

export default configureStore
