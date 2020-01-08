import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/SideBar.module.scss'

const SideBar = () => {
  return (
    <div className="mb-4">
      <Link to="/request" className={styles.requestButton}>
        <FontAwesomeIcon icon="edit" />
        <span> Request an Order</span>
      </Link>
      <div className={styles.sideNav}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <NavLink to="/dashboard/profile" activeClassName="selected" className={styles.listLink}>
              <li className={styles.listItem}>
                <FontAwesomeIcon icon="user" />
                <span className={styles.listText}>Profile Settings</span>
              </li>
            </NavLink>
            <NavLink
              to="/dashboard/requests"
              activeClassName="selected"
              className={styles.listLink}
            >
              <li className={styles.listItem}>
                <FontAwesomeIcon icon="bell" />
                <span className={styles.listText}>Requests</span>
              </li>
            </NavLink>
            <NavLink to="/dashboard/address" activeClassName="selected" className={styles.listLink}>
              <li className={styles.listItem}>
                <FontAwesomeIcon icon="home" />
                <span className={styles.listText}>Address</span>
              </li>
            </NavLink>
            <NavLink to="/dashboard/faq" activeClassName="selected" className={styles.listLink}>
              <li className={styles.listItem}>
                <FontAwesomeIcon icon="comments" />
                <span className={styles.listText}>FAQ</span>
              </li>
            </NavLink>
          </ul>
        </nav>
        <div className={styles.footer}>
          &copy; 2019 Grabit{' '}
          <ul className={styles.legalList}>
            <li className={styles.legalItem}>Terms</li>
            <li className={styles.legalItem}>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
