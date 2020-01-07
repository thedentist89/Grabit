import React from 'react'
import Navbar from '../components/NavBar'
import SideBar from '../components/SideBar'

const Dashboard = () => {
  return (
    <div className="grey">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4">
            <SideBar />
          </div>
          <div className="col-lg-8">main content goes here</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
