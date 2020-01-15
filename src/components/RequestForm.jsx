/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, createRef } from 'react'
import uuid from 'uuid'
import Map from './Map'
import { ReactComponent as Add } from '../img/add.svg'
import { ReactComponent as Text } from '../img/text.svg'
import { ReactComponent as Calendar } from '../img/calendar.svg'
import { ReactComponent as Clock } from '../img/clock.svg'
import { ReactComponent as Dollar } from '../img/dollar.svg'
import { ReactComponent as Box } from '../img/box.svg'

class RequestForm extends Component {
  constructor(props) {
    super(props)
    this.addInput = createRef()
    this.state = {
      item: '',
      items: [],
      location: {},
      description: '',
      date: '',
      schedule: '',
      cost: ''
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
      console.log(`there's no geolocator`)
    }
  }

  handleAddItem = () => {
    const { value: item } = this.addInput.current
    const newItems = [{ id: uuid(), value: item }, ...this.state.items]
    this.setState({ items: newItems, item: '' })
  }

  handleRemoveItem = id => {
    const oldItems = [...this.state.items]
    const flitered = oldItems.filter(item => item.id !== id)
    this.setState({ items: flitered })
  }

  handleChange = e => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({ description: '', date: '', schedule: '', cost: '' })
  }

  render() {
    const { item, items, location, description, date, schedule, cost } = this.state
    return (
      <>
        <h1 className="settings__heading">Request</h1>
        <div className="row p-5">
          <div className="col-lg-6">
            <form className="request-form" onSubmit={this.handleSubmit}>
              <div className="request-form__group">
                <label className="request-form__group__label" htmlFor="details">
                  <Text className="request-form__group__label--icon" /> Describe your Order
                </label>
                <textarea
                  className="request-form__group__textaria form-control"
                  id="details"
                  rows="3"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
              <label className="request-form__group__label  mt-5" htmlFor="details">
                <Box className="request-form__group__label--icon" /> Order Items List
              </label>
              <div className="request-form__add-item">
                <div>
                  <Add className="request-form__add-item__icon" />
                  <input
                    type="text"
                    ref={this.addInput}
                    placeholder="Add Item"
                    className="request-form__add-item__input"
                    name="item"
                    value={item}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="button"
                  className="request-form__add-item__button"
                  onClick={this.handleAddItem}
                >
                  Add
                </button>
              </div>
              <div className="mt-4">
                {items.map(singleItem => (
                  <div key={singleItem.id} className="request-form__item">
                    <p>{singleItem.value}</p>
                    <div>
                      <button
                        type="button"
                        className="request-form__item__button"
                        onClick={() => this.handleRemoveItem(singleItem.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row my-5">
                <div className="request-form__group col-lg-6">
                  <label htmlFor="text" className="request-form__group__label">
                    <Clock className="request-form__group__label--icon" /> Date
                  </label>
                  <input
                    type="text"
                    className="form-control request-form__group__input"
                    id="date"
                    name="date"
                    placeholder="ASAP"
                    value={date}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="request-form__group col-lg-6">
                  <label htmlFor="text" className="request-form__group__label">
                    <Calendar className="request-form__group__label--icon" /> Schedule
                  </label>
                  <input
                    type="date"
                    className="form-control request-form__group__input"
                    id="schedulle"
                    name="schedulle"
                    value={schedule}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="request-form__group">
                <label htmlFor="text" className="request-form__group__label">
                  <Dollar className="request-form__group__label--icon" /> Order Cost
                </label>
                <input
                  type="text"
                  className="form-control request-form__group__input"
                  id="cost"
                  name="cost"
                  placeholder="$50 - $60"
                  value={cost}
                  onChange={this.handleChange}
                />
              </div>
              <input
                type="submit"
                value="Request"
                className="button button__primary button__block mt-5"
              />
            </form>
          </div>
          <div className="col-lg-6">
            <Map location={location} />
          </div>
        </div>
      </>
    )
  }
}

export default RequestForm
