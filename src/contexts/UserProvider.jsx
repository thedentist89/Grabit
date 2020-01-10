/* eslint-disable react/prop-types */
import React, { Component, createContext } from 'react'
import { auth } from '../firebase'

export const UserContext = createContext({ user: null })

class UserProvider extends Component {
  unsubscribeFromAuth = null

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  async componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  // handleSignIn = () => {
  //   const { user } = this.state
  //   signInWithFacebook()
  //   if (user !== null) {
  //     const { history } = this.props
  //     history.push('/dashboard')
  //   }
  // }

  render() {
    const { user } = this.state
    const { children } = this.props

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
  }
}

export default UserProvider
