import React from 'react'
import { Link } from 'react-router-dom'
import edit from '../img/edit.svg'
import user from '../img/user.svg'
import bell from '../img/bell.svg'
import home from '../img/home.svg'
import faq from '../img/faq.svg'
import styles from '../styles/SideBar.module.css'

const SideBar = () => {
  return (
    <>
      <Link to="/" className={styles.requestButton}>
        <img src={edit} alt="edit" /> Request an Order
      </Link>
      <div className={styles.sideNav}>
        <nav>
          <ul>
            <li>
              <img src={user} alt="user settings" />
              Profile Settings
            </li>
            <li>
              <img src={bell} alt="user settings" /> Requests
            </li>
            <li>
              <img src={home} alt="user settings" /> Address
            </li>
            <li>
              <img src={faq} alt="user settings" /> FAQ
            </li>
          </ul>
        </nav>
        <div>
          <span className={styles.legal}>&copy; 2019 Grabit</span>{' '}
          <ul className={styles.list}>
            <li className={styles['list-item']}>Terms</li>
            <li className={styles['list-item']}>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar
