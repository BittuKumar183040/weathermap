import React, { useEffect, useState } from 'react'
// import Weather from './component/Weather'

import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './components/LocationMarker'
import { defautPos } from './config/config'

const App = () => {

  return (
    <MapContainer
      center={defautPos}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />

      {/*
        Data.data.map((val, idx) =>
          <Marker
            position={val.loc}
            key={idx}
          >
            <Popup>
              <h1 style={{ textAlign: "center", fontSize: "16px" }}>{`${val.city}`}</h1>
              <p className="preload">⚽</p>
              <hr />
              <table className="weatherInfo" width={108}>
                <tbody>
                  <tr>
                    <td style={{
                      fontSize: "40px",
                      textAlign: "center",
                      textShadow: "2px 2px 2px rgba(0,0,0,0.2)"
                    }}
                    >
                      {weather.temp} ℃
                    </td>
                  </tr>
                  <tr>
                    <td>Min = {weather.min} ℃</td>
                    <td>Max = {weather.max} ℃</td>
                  </tr>
                  <tr>
                    <td>Humidity = {weather.humidity}</td>
                  </tr>
                  <tr>
                    <td>Wind = {weather.wind}</td>
                  </tr>
                </tbody>
              </table>
              <button id={val.city} style={{
                display: "flex",
                margin: "5px 0",
                padding: "5px",
                width: "100%",
                textAlign: "center",
              }}
                onClick={showWeather}
              >Get weather</button>
            </Popup>
          </Marker>
        )
      */}
    </MapContainer>
  )
}

export default App;