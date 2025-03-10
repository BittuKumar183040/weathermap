import React from 'react'

const Overhead = () => {

  return (
    <div className=' leaflet-top w-screen h-screen'>
      <div className='absolute top-4 right-0 pr-4 p-2 bg-white bg-opacity-50 rounded-l-md shadow-md'>
        <p><span className=' pr-2 animate-ping'>🟢</span>Live</p>
      </div>
    </div>
  )
}

export default Overhead