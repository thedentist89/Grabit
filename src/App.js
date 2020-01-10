import React, { useContext } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { UserContext } from './contexts/UserProvider'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import './App.css'

function App() {
  const user = useContext(UserContext)

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard">{user !== null ? <Dashboard /> : <Redirect to="/" />}</Route>
      </Switch>
    </div>
  )
}

export default withRouter(App)
