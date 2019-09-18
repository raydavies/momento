import React from 'react'

class AuthProvider extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export default AuthProvider
