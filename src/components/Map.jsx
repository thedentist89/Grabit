/* eslint-disable react/prop-types */
// AIzaSyDomGogRhIdJKCMLkOdWSOgODioOHM4KMw
import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import pin from '../img/marker.svg'

const Map = ({ location, height, width }) => {
  console.log(location)
  return (
    <LoadScript id="script-loader" googleMapsApiKey="AIzaSyDomGogRhIdJKCMLkOdWSOgODioOHM4KMw">
      <GoogleMap
        className="map"
        mapContainerStyle={{
          height,
          width,
          borderRadius: '6px',
          overflow: 'hidden'
        }}
        zoom={8}
        center={location}
      >
        <Marker position={location} icon={pin} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
