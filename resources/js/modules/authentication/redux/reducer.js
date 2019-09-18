import { fromJS } from 'immutable'
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants'

const initialState = fromJS({
  error: null,
  isAuthenticated: false,
  isFetching: false,
  user: {},
})

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return state.merge({
        isAuthenticated: false,
        isFetching: true,
        user: {},
      })
    case REGISTER_SUCCESS:
      return state.merge({
        error: null,
        isAuthenticated: true,
        isFetching: false,
        user: action.payload.user,
      })
    case REGISTER_FAILURE:
      return state.merge({
        error: action.payload.error,
        isAuthenticated: false,
        isFetching: false,
      })
    default:
      return state
  }
}

export default authReducer
