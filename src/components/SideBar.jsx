import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/SideBar.module.scss'

const SideBar = () => {
  return (
    <>
      <Link to="/request" className={styles.requestButton}>
        <FontAwesomeIcon icon="edit" /> Request an Order
      </Link>
      <div className={styles.sideNav}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <FontAwesomeIcon icon="user" /> Profile Settings
            </li>
            <li className={styles.listItem}>
              <FontAwesomeIcon icon="bell" /> Requests
            </li>
            <li className={styles.listItem}>
              <FontAwesomeIcon icon="home" /> Address
            </li>
            <li className={styles.listItem}>
              <FontAwesomeIcon icon="comments" /> FAQ
            </li>
          </ul>
        </nav>
        <div>
          <span className={styles.legal}>&copy; 2019 Grabit</span>{' '}
          <ul className={styles.legalList}>
            <li className={styles.legalItem}>Terms</li>
            <li className={styles.legalItem}>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar
