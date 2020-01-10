/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
        <div>
          <span className={styles.userName}>{user.displayName}</span>
          <img src={user.photoURL} className={styles.userImage} alt="Avatar" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
