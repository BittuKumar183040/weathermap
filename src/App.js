import React, {useState } from 'react'
import Data from './city.json'
// import Weather from './component/Weather'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const App = () => {
  const [weather, setWeather] = useState({})
  const position=[28.6667, 77.2167]
  const apiCall=(city)=>{




    let data=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f71484ac2667e042e42ac254bc4d74c4`
    fetch(data)
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          "temp":Math.floor(data.main.temp-273.15),
          "min":Math.floor(data.main.temp_min-273.15),
          "max":Math.floor(data.main.temp_max-273.15),
          "humidity":data.main.humidity,
          "wind":data.wind.speed,
          "icon":data.weather.icon
        })
        document.querySelector(".preload").style.display="none";
        document.querySelector(".weatherInfo").style.display="block";
      });
    }
  const showWeather=(e)=>{
    document.querySelector(".preload").style.display="block";
    document.querySelector(".weatherInfo").style.display="none";
    apiCall(e.target.id)
  }
  
  window.document.addEventListener("click",()=>{
    document.querySelector(".weatherInfo").style.display="none";
  })
  return (
    <MapContainer
      center={position}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        Data.data.map((val,idx)=>
            <Marker 
              position={val.loc} 
              key={idx} 
            >
              <Popup>
                <h1 style={{textAlign:"center",fontSize:"16px"}}>{`${val.city}`}</h1>
                <p className="preload">⚽</p>
                <hr/>
                <table className="weatherInfo" width={108}>
                  <tbody>
                  <tr>
                    <td style={{
                      fontSize:"40px",
                      textAlign:"center",
                      textShadow:"2px 2px 2px rgba(0,0,0,0.2)"}}
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
                  display:"flex",
                  margin:"5px 0",
                  padding:"5px",
                  width:"100%",
                  textAlign:"center",
                }}
                  onClick={showWeather}
                  >Get weather</button>
              </Popup>
            </Marker>
        )
      }
    </MapContainer>
  )
}

export default App;