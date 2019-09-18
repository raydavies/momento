import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { fromJS } from 'immutable'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

const buildStore = (rootReducer, initialState = fromJS({})) => {
  const history = createBrowserHistory()

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))

  return createStore(rootReducer, initialState, enhancer)
}

export { buildStore }
