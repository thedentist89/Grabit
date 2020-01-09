import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Edit } from '../img/edit.svg'
import { ReactComponent as User } from '../img/user.svg'
import { ReactComponent as Bell } from '../img/bell.svg'
import { ReactComponent as Faq } from '../img/faq.svg'
import { ReactComponent as Home } from '../img/home.svg'
import '../styles/SideBar.scss'

const SideBar = () => {
  return (
    <div className="mb-4">
      <Link to="/request" className="requestButton">
        <Edit />
        <span className="pl-3"> Request an Order</span>
      </Link>
      <div className="sideNav">
        <nav className="nav">
          <ul className="list">
            <NavLink to="/dashboard/profile" activeClassName="selected" className="listLink">
              <li className="listItem">
                <User className="listIcon" />
                <span className="listText">Profile Settings</span>
              </li>
            </NavLink>
            <NavLink to="/dashboard/requests" activeClassName="selected" className="listLink">
              <li className="listItem">
                <Bell className="listIcon" />
                <span className="listText">Requests</span>
              </li>
            </NavLink>
            <NavLink to="/dashboard/address" activeClassName="selected" className="listLink">
              <li className="listItem">
                <Home className="listIcon" />
                <span className="listText">Address</span>
              </li>
            </NavLink>
            <NavLink to="/dashboard/faq" activeClassName="selected" className="listLink">
              <li className="listItem">
                <Faq className="listIcon" />
                <span className="listText">FAQ</span>
              </li>
            </NavLink>
          </ul>
        </nav>
        <div className="footer">
          &copy; 2019 Grabit{' '}
          <ul className="legalList">
            <li className="legalItem">Terms</li>
            <li className="legalItem">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
