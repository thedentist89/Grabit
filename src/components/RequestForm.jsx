/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, createRef } from 'react'
import uuid from 'uuid'
import { ReactComponent as Add } from '../img/add.svg'

class RequestForm extends Component {
  constructor(props) {
    super(props)
    this.addInput = createRef()
    this.state = {
      items: [],
      location: {}
    }
  }

  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude } = position.coords
        const { longitude } = position.coords

        const currentPosition = { lat: latitude, lng: longitude }

        this.setState({ location: currentPosition })
      })
    } else {
      console.log('theres no geolocator')
    }
  }

  handleAddItem = () => {
    const { value: item } = this.addInput.current
    const { items } = this.state
    items.unshift({ id: uuid(), value: item })
    this.setState({ items })
  }

  handleRemoveItem = id => {
    const { items } = this.state
    const flitered = items.filter(item => item.id !== id)
    this.setState({ items: flitered })
  }

  render() {
    const { items, location } = this.state

    console.log(this.latitude, this.longtitude)
    return (
      <>
        <h1 className="settings__heading">Request</h1>
        <div className="row p-5">
          <div className="col-lg-6">
            <form className="request-form">
              <div className="request-form__group">
                <label htmlFor="details">Describe your Order</label>
                <textarea className="form-control" id="details" rows="3" />
              </div>
              <div className="request-form__add-item">
                <div>
                  <Add className="request-form__add-item-icon" />
                  <input
                    type="text"
                    ref={this.addInput}
                    placeholder="Add Item"
                    className="request-form__add-item-input"
                  />
                </div>
                <button
                  type="button"
                  className="request-form__add-item-button"
                  onClick={this.handleAddItem}
                >
                  Add
                </button>
              </div>
              <div className="mt-4">
                {items.map(item => (
                  <div key={item.id} className="request-form__item">
                    <p>{item.value}</p>
                    <div>
                      <button type="button" onClick={() => this.handleRemoveItem(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row my-5">
                <div className="request-form__group col-lg-6">
                  <label htmlFor="text">Date</label>
                  <input type="text" className="form-control" id="text" placeholder="dd/mm/yyyy" />
                </div>
                <div className="request-form__group col-lg-6">
                  <label htmlFor="text">Schedule</label>
                  <input type="date" className="form-control" id="text" placeholder="" />
                </div>
              </div>
              <div className="request-form__group">
                <label htmlFor="text">Order Cost</label>
                <input type="text" className="form-control" id="text" placeholder="$50 - $60" />
              </div>
              <input
                type="submit"
                value="Request"
                className="button button__primary button__block mt-5"
              />
            </form>
          </div>
          <div className="col-lg-6">
            {`${location.lat} ${location.lng}`}
            <iframe
              title="map"
              url={`https://www.openstreetmap.org/#map=11/${location.lat}/${location.lng}`}
            />
          </div>
        </div>
      </>
    )
  }
}

export default RequestForm
