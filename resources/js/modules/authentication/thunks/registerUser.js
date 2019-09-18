import config from '@/setup/config'
import { registrationRequest, registrationFailure, registrationSuccess } from '../redux/actions'

const registerUser = user => dispatch => {
  dispatch(registrationRequest())
  window
    .axios({
      method: 'POST',
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${config.api.url}/register`,
      body: JSON.stringify(user),
    })
    .then(
      response => {
        dispatch(registrationSuccess(response.data))
      },
      error => {
        dispatch(registrationFailure(error))
      }
    )
}

export { registerUser }
