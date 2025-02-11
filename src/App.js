import React from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './components/LocationMarker'

const App = () => {

  return (
    <MapContainer
      center={[21.5348, 85.166]}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  )
}

export default App;