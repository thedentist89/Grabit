/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { UserContext } from '../contexts/UserProvider'
import { signInWithFacebook } from '../firebase'
import logo from '../img/logo.svg'
import helmet from '../img/helmet.svg'
import userIcon from '../img/user.svg'
import arrow from '../img/arrow.svg'
import facebook from '../img/facebook.svg'

const Header = props => {
  const user = useContext(UserContext)

  const signIn = async () => {
    try {
      await signInWithFacebook()
      if (user !== null) {
        props.history.push('/dashboard')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const [showCustumerModal, setShowCustumerModal] = useState(false)
  const handleCustumerOpen = () => setShowCustumerModal(true)
  const handleCustumerClose = () => setShowCustumerModal(false)

  const [showDriverModal, setShowDriverModal] = useState(false)
  const handleDriverOpen = () => setShowDriverModal(true)
  const handleDriverClose = () => setShowDriverModal(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <img src={logo} alt="Grabit" className="header__logo" />
          <button type="button" className="button button__small button__primary">
            Sign In
          </button>
        </div>
        <div className="header__heading-wrapper">
          <h1 className="header__main-heading">
            we <span className="header__main-heading--italic">deliver</span> it to your{' '}
            <span className="header__main-heading--italic">door</span> within{' '}
            <span className="header__main-heading--italic">one hour</span>
          </h1>
        </div>
        <div className="header__sign-up">
          <button type="button" className="header__sign-up-button" onClick={handleDriverOpen}>
            <img src={helmet} alt="Grabit" className="header__sign-up-button-icon" />
            Sign Up as Driver{' '}
            <img src={arrow} alt="Grabit" className="header__sign-up-button-arrow" />
          </button>
          <button type="button" className="header__sign-up-button" onClick={handleCustumerOpen}>
            <img src={userIcon} alt="Grabit" className="header__sign-up-button-icon" />
            Sign Up as Custumer{' '}
            <img src={arrow} alt="Grabit" className="header__sign-up-button-arrow" />
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
        <Modal.Body style={{ padding: '2rem' }}>
          <h1 className="pb-5">Sign Up as a Custumer</h1>
          <button className="button button__secondary" type="button" onClick={signIn}>
            <img src={facebook} alt="facebook logo" /> Sign Up With Facebook
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
        <Modal.Body dialogClassName="modal-100w" style={{ height: 200, padding: '2rem' }}>
          <h1 className="pb-5">Sign Up as a Driver</h1>
          <button className="button button__secondary" type="button">
            <img src={facebook} alt="facebook logo" /> Sign Up With Facebook
          </button>
        </Modal.Body>
      </Modal>
    </header>
  )
}

export default withRouter(Header)
