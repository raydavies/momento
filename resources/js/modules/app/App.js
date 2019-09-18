import React from 'react'
import { connect } from 'react-redux'

import { registerUser } from '../authentication/thunks/registerUser'

class App extends React.Component {
  componentDidMount() {
    this.props.register({})
  }

  render() {
    return <div>Hello World!</div>
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  register: user => dispatch(registerUser(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
