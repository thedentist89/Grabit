/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { signOut } from '../firebase'
import { UserContext } from '../contexts/UserProvider'
import { ReactComponent as Logo } from '../img/logo_white.svg'

const NavBar = () => {
  const user = useContext(UserContext)

  return (
    <nav className="navbar">
      <div className="container navbar__items">
        <Link to="/">
          <Logo className="navbar__logo" />
        </Link>
        <Dropdown>
          <Dropdown.Toggle variant="transparent">
            <span className="navbar__user-name">{user.displayName}</span>
            <img src={user.photoURL} className="navbar__user-image" alt="Avatar" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <span className="dropdown-item" onClick={signOut}>
              Sign Out
            </span>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}

export default NavBar
