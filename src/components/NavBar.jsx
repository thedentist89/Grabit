import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo_white.svg'
import avatar from '../img/avatar.jpg'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navItems}`}>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="Grabit" />
        </Link>
        <div>
          <span className={styles.userName}>Mourad Aouinat</span>
          <img src={avatar} className={styles.userImage} alt="Avatar" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
