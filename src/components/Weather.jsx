import React, { useEffect, useState } from 'react'
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FaWind } from 'react-icons/fa6';
import { IoWaterOutline } from 'react-icons/io5';

const Weather = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiCall = () => {
    setLoading(true);
    let data = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=f71484ac2667e042e42ac254bc4d74c4`
    fetch(data)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    location && apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const kelvinToCelsius = (kelvin) => {
    return parseInt((kelvin - 273.15).toFixed(2));
  };

  return (<>
    {loading ? <p>Loading...</p> :
      (
        <section className=' flex flex-col text-gray-800'>
          <div className=' flex justify-between gap-4'>
            <div className=' flex items-center flex-col gap-1'>
              <p className=' text-xl'><span className=' w-11 overflow-hidden'>{weather.name}</span>, {weather.sys.country}</p>
              <img className=' min-w-20 rounded-full shadow-inner' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather icon' />
            </div>
            <div>
              <p className=' text-5xl text-right tracking-wider'>{kelvinToCelsius(weather.main.temp)}°</p>
              <p className=' text-sm tracking-wide my-1 '> Feels Like {kelvinToCelsius(weather.main.feels_like)}°</p>
              <div className=' flex justify-between text-sm'>
                <div className=' relative flex items-center gap-2 '>
                  <FaArrowUp className=' text-red-800 h-full p-0.5' />
                  <p className=' ml-4'>{kelvinToCelsius(weather.main.temp_min)}°</p>
                </div>
                <div className=' relative flex gap-2 '>
                  <FaArrowDown className=' text-green-800 h-full p-0.5 ' />
                  <p className=' ml-4'>{kelvinToCelsius(weather.main.temp_max)}°</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className=' flex flex-col gap-2 mt-3'>
            <div className=' flex justify-between gap-3 text-lg '>
              <div>
                <div className=' relative flex items-center gap-2 '>
                  <FaWind size={20} className=' text-gray-500 h-full ' />
                  <p className=' ml-7 tracking-wider' >{weather.wind.speed} km/h</p>
                </div>
                <div className=' relative flex items-center gap-2 '>
                  <IoWaterOutline size={20} className=' text-gray-500 h-full ' />
                  <p className=' ml-7 tracking-wider' >{weather.main.humidity}</p>
                </div>
              </div>

              <div>
                <div className=' relative flex items-center gap-2 '>
                  <BsSunrise size={20} className=' text-gray-500 h-full ' />
                  <p className=' ml-7 tracking-wider' >{formatTime(weather.sys.sunrise)}</p>
                </div>
                <div className=' relative flex items-center gap-2 '>
                  <BsSunset size={20} className=' text-gray-500 h-full ' />
                  <p className=' ml-7 tracking-wider' >{formatTime(weather.sys.sunset)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
  </>

  )
}

export default Weather