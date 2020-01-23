import React from 'react'
import Map from './Map'
import avatar from '../img/avatar_pic.png'
import { ReactComponent as Pin } from '../img/pin.svg'

const Requests = () => {
  return (
    <>
      <h1 className="settings__heading">Requests</h1>
      <div className="request">
        <h2 className="request__heading">Request #1</h2>
        <Map height="300px" width="100%" lat={3} lng={55} />
        <div className="row mt-5">
          <div className="col-lg-7">
            <p className="request__info">21 Jan 2020, 10:30am</p>
            <p className="request__info">Price : 100dh- 200dh</p>
            <div className="request__address">
              <Pin className="request__address--icon" />
              <p className="request__address--text">
                3416 Tenmile Road, Waltham, Massachusetts, 3 floor
              </p>
            </div>
            <p className="request__description">
              I Need you to super market and bring me this thing quickly
            </p>
            <ul className="request__list">
              <li className="request__list--item">2Kg Potatos</li>
              <li className="request__list--item">1L Milk</li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="request__driver-card">
              <img className="request__driver-card--avatar" src={avatar} alt="avatar" />
              <div>
                <p className="request__driver-card--name">Hamid lmardi</p>
                <p className="request__driver-card--phone">+2126874565</p>
              </div>
            </div>
          </div>
        </div>
        <div className="request__details">
          <div>
            <p className="request__details__price">Estimated Price</p>
            <p className="request__details__distance">Estimated time and distance</p>
          </div>
          <div>
            <p className="request__details__price--right">120DH</p>
            <p className="request__details__distance--right">-25m/5km</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Requests
