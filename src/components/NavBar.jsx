import React from 'react'
import logo from '../img/logo_white.svg'
import avatar from '../img/avatar.jpg'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navItems}`}>
        <img src={logo} className={styles.logo} alt="Grabit" />
        <div className={styles.avatar}>
          <span className={styles.userName}>Mourad Aouinat</span>
          <img src={avatar} className={styles.userImage} alt="Avatar" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
