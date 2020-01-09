/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Profile from '../components/Profile'
import Address from '../components/Address'
import Requests from '../components/Requests'
import Faq from '../components/Faq'

const Dashboard = ({ user }) => {
  return (
    <div className="grey">
      <Navbar user={user} />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <SideBar />
          </div>
          <div className="col-lg-8">
            <Switch>
              <Route exact path="/dashboard/profile" component={Profile} />
              <Route exact path="/dashboard/requests" component={Requests} />
              <Route exact path="/dashboard/address" component={Address} />
              <Route exact path="/dashboard/faq" component={Faq} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
}

export default Dashboard
