/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../firebase'
import { UserContext } from '../contexts/UserProvider'
import { ReactComponent as Logo } from '../img/logo_white.svg'
import { ReactComponent as DropDown } from '../img/caret.svg'

const NavBar = () => {
  const user = useContext(UserContext)

  return (
    <nav className="navbar">
      <div className="container navbar__items">
        <Link to="/">
          <Logo className="navbar__logo" />
        </Link>
        <div className="drop-down">
          <span className="navbar__user-name">{user.displayName}</span>
          <img src={user.photoURL} className="navbar__user-image drop-down__button" alt="Avatar" />
          <DropDown className="drop-down__icon" />
          <div className="drop-down__content">
            <span className="drop-down__item" onClick={signOut}>
              Sign Out
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
