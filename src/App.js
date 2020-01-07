import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import './App.css'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
)

export default App
