import React, { useEffect, useState } from 'react'

const initialValue = {
  "coord": {
    "lon": 4.55,
    "lat": 52.27
  },
  "weather": [
    {
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 275.39,
    "feels_like": 270.33,
    "temp_min": 275.39,
    "temp_max": 275.39,
    "pressure": 1016,
    "humidity": 97,
    "sea_level": 1016,
    "grnd_level": 1016
  },
  "wind": {
    "speed": 6.48,
    "deg": 79,
    "gust": 13.29
  },
  "rain": {
    "1h": 0.12
  },
  "clouds": {
    "all": 100
  },
  "dt": 1739242964,
  "sys": {
    "country": "NL",
    "sunrise": 1739257514,
    "sunset": 1739292420
  },
  "timezone": 3600,
  "id": 2751547,
  "name": "Lisse",
  "cod": 200
}

const Weather = ({ location }) => {
  const [weather, setWeather] = useState(initialValue)
  const [isLoading, setIsLoading] = useState(false)
  const apiCall = () => {
    setIsLoading(true)
    let data = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=f71484ac2667e042e42ac254bc4d74c4`
    fetch(data)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    // apiCall()
  }, [location])

  return (<>
    {isLoading ? <p>Loading...</p> : (
      <div>
        <h1>{weather.name}</h1>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather icon' />
        <h2>{weather.weather[0].main}</h2>
        <p>{weather.weather[0].description}</p>
        <p>Temperature: {weather.main.temp} ℃</p>
        <p>Min: {weather.main.temp_min} ℃</p>
        <p>Max: {weather.main.temp_max} ℃</p>
        <p>Humidity: {weather.main.humidity}</p>
        <p>Wind: {weather.wind.speed} km/h</p>
      </div>
    )}
  </>

  )
}

export default Weather