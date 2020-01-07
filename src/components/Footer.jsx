import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.legal}>&copy; 2019 Grabit</span>{' '}
      <ul className={styles.list}>
        <li className={styles['list-item']}>Terms</li>
        <li className={styles['list-item']}>Privacy Policy</li>
      </ul>
    </footer>
  )
}

export default Footer
