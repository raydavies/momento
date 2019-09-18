import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants'

const registrationRequest = () => {
  return {
    type: REGISTER_REQUEST,
    payload: {},
  }
}

const registrationSuccess = user => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      user,
    },
  }
}

const registrationFailure = error => {
  return {
    type: REGISTER_FAILURE,
    payload: {
      error,
    },
  }
}

export { registrationFailure, registrationRequest, registrationSuccess }
