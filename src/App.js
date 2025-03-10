import React, { useState } from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './components/LocationMarker'
import Overhead from './components/Overhead'
import Search from './components/Search'

const App = () => {

  const [city, setCity] = useState(null);
  return (<>
    <MapContainer
      center={[21.5348, 85.166]}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker city={city} setCity={setCity} />
      <Overhead />
      <Search onSearch={(searchFiled) => setCity(searchFiled)} />

    </MapContainer>
  </>
  )
}

export default App;