/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { signOut } from '../firebase'
import { UserContext } from '../contexts/UserProvider'
import logo from '../img/logo_white.svg'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
  const user = useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navItems}`}>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="Grabit" />
        </Link>
        <Dropdown>
          <Dropdown.Toggle variant="transparent">
            <span className={styles.userName}>{user.displayName}</span>
            <img src={user.photoURL} className={styles.userImage} alt="Avatar" />
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
