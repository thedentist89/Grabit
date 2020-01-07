import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import styles from '../styles/Header.module.css'
import logo from '../img/logo.svg'
import helmet from '../img/helmet.svg'
import user from '../img/user.svg'
import arrow from '../img/arrow.svg'
import facebook from '../img/facebook.svg'

const Header = () => {
  const [showCustumerModal, setShowCustumerModal] = useState(false)
  const handleCustumerOpen = () => setShowCustumerModal(true)
  const handleCustumerClose = () => setShowCustumerModal(false)

  const [showDriverModal, setShowDriverModal] = useState(false)
  const handleDriverOpen = () => setShowDriverModal(true)
  const handleDriverClose = () => setShowDriverModal(false)

  return (
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
          <button type="button" className={styles.signUpButton} onClick={handleDriverOpen}>
            <img src={helmet} alt="Grabit" className={styles.icon} />
            Sign Up as Driver <img src={arrow} alt="Grabit" className={styles.arrow} />
          </button>
          <button type="button" className={styles.signUpButton} onClick={handleCustumerOpen}>
            <img src={user} alt="Grabit" className={styles.icon} />
            Sign Up as Custumer <img src={arrow} alt="Grabit" className={styles.arrow} />
          </button>
        </div>
      </div>
      <Modal
        show={showCustumerModal}
        onHide={handleCustumerClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body style={{ padding: '4rem' }}>
          <h1 className="pb-5">Sign Up as a Custumer</h1>
          <button className={styles['button-blue']} type="button">
            <img src={facebook} alt="facebook logo"></img> Sign Up With Facebook
          </button>
        </Modal.Body>
      </Modal>
      <Modal
        show={showDriverModal}
        onHide={handleDriverClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body style={{ height: 200, padding: '4rem' }}>
          <h1 className="pb-5">Sign Up as a Driver</h1>
          <button className={styles['button-blue']} type="button">
            <img src={facebook} alt="facebook logo"></img> Sign Up With Facebook
          </button>
        </Modal.Body>
      </Modal>
    </header>
  )
}

export default Header
