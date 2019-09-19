import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import appReducer from '../modules/app/redux/reducer'
import authReducer from '../modules/authentication/redux/reducer'

const createRootReducer = history =>
  combineReducers({
    app: appReducer,
    auth: authReducer,
    router: connectRouter(history),
  })

export default createRootReducer
