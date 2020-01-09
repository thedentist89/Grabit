/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { signInWithFacebook, auth } from './firebase'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import './App.css'

class App extends Component {
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

  handleSignIn = () => {
    const { user } = this.state
    signInWithFacebook()
    if (user !== null) {
      const { history } = this.props
      history.push('/dashboard')
    }
  }

  render() {
    const { user } = this.state
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Landing {...this.props} signIn={this.handleSignIn} />
          </Route>
          <Route path="/dashboard">
            {user !== null ? <Dashboard {...this.props} user={user} /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
