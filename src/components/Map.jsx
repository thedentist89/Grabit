/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component, createRef } from 'react'
import marker from '../img/marker.svg'

class Map extends Component {
  googleMapRef = createRef()

  googleScript = document.createElement('script')

  componentDidMount() {
    this.googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${'AIzaSyDomGogRhIdJKCMLkOdWSOgODioOHM4KMw'}&libraries=places`
    window.document.body.appendChild(this.googleScript)

    this.googleScript.addEventListener('load', () => {
      this.googleMap = this.createGoogleMap()
      this.marker = this.createMarker()
    })
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.googleScript)
  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: this.props.location,
      disableDefaultUI: false
    })

  createMarker = () =>
    new window.google.maps.Marker({
      position: this.props.location,
      icon: marker,
      map: this.googleMap
    })

  render() {
    return (
      <div id="google-map" ref={this.googleMapRef} style={{ width: '100%', height: '350px' }} />
    )
  }
}

export default Map
