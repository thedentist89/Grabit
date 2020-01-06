import React from 'react'
import styles from '../styles/Header.module.css'
import logo from '../img/logo.svg'
import helmet from '../img/helmet.svg'
import user from '../img/user.svg'
import arrow from '../img/arrow.svg'

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.nav}>
        <img src={logo} alt="Grabit" className={styles.logo} />
        <button type="button" className={styles.button}>
          Sign In
        </button>
      </div>
      <div className={styles.mainHeadingWrapper}>
        <h1 className={styles.mainHeading}>
          we <span className={styles.italic}>deliver</span> it to your{' '}
          <span className={styles.italic}>door</span> within{' '}
          <span className={styles.italic}>one hour</span>
        </h1>
      </div>
      <div className={styles.signUp}>
        <button type="button" className={styles.signUpButton}>
          <img src={helmet} alt="Grabit" className={styles.icon} />
          Sign Up as Driver <img src={arrow} alt="Grabit" className={styles.arrow} />
        </button>
        <button type="button" className={styles.signUpButton}>
          <img src={user} alt="Grabit" className={styles.icon} />
          Sign Up as Custumer <img src={arrow} alt="Grabit" className={styles.arrow} />
        </button>
      </div>
    </div>
  </header>
)

export default Header
