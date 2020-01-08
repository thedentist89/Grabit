import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faUser, faHome, faBell, faComments } from '@fortawesome/free-solid-svg-icons'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import './App.css'

library.add(faUser, faEdit, faHome, faBell, faComments)

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
)

export default App
