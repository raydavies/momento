require('./bootstrap')

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { applyMiddleware, compose, createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { combineReducers } from 'redux-immutable'
import { connect, Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { fromJS } from 'immutable'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import appReducer from './reducers/appReducer'

const history = createBrowserHistory()
const enhancer = compose(
  applyMiddleware(thunk, routerMiddleware(history)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const initialState = {
  app: {},
}
const rootReducer = combineReducers({
  app: appReducer,
  routing: routerReducer,
})
const store = createStore(rootReducer, fromJS(initialState), enhancer)

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={ReduxApp} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
