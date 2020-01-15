import React, { Component } from 'react'
import Map from './Map'
import { ReactComponent as Trash } from '../img/trash.svg'
import { ReactComponent as Pin } from '../img/pin.svg'

class Address extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addresses: [
        {
          id: 1,
          name: '47, Avenue Atlas, Agdal, Morocco',
          position: { lat: '33.5928', lng: '-7.6192' }
        },
        {
          id: 2,
          name: 'Else where in  Morocco',
          position: { lat: '33.5928', lng: '-7.6192' }
        }
      ]
    }
  }

  render() {
    const { addresses } = this.state
    return (
      <>
        <h1 className="settings__heading">Address</h1>
        {addresses.map(address => (
          <div key={address.id} className="address">
            <h1 className="address__heading">Address #{address.id}</h1>
            <div className="address__content">
              <div className="address__banner">
                <div className="address__container">
                  <Pin className="address__pin" />
                  <h2 className="address__name">{address.name}</h2>
                </div>
                <button type="button" className="address__delete-button">
                  <Trash />
                </button>
              </div>
              <Map location={addresses.position} width="100%" height="12rem" />
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default Address
