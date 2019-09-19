require('./bootstrap')

import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Provider } from 'react-redux'
import { Route } from 'react-router'

import configureStore, { history } from './setup/store'

import App from './modules/app/App'
import AuthProvider from './modules/authentication/AuthProvider'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={App} />
      </ConnectedRouter>
    </AuthProvider>
  </Provider>,
  document.getElementById('app')
)
