import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'

import appReducer from '../modules/app/redux/reducer'
import authReducer from '../modules/authentication/redux/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  routing: routerReducer,
})

export default rootReducer
