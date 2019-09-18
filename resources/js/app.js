require('./bootstrap')

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { buildStore } from './setup/store'
import rootReducer from './setup/rootReducer'

import App from './modules/app/App'
import AuthProvider from './modules/authentication/AuthProvider'

const store = buildStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById('app')
)
