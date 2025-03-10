import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    e.stopPropagation();
    setCity(e.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
    setCity('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className=' leaflet-control leaflet-pane left-1/2 -translate-x-1/2 p-2'>
      <input
        id='searchBar'
        type="text"
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className='p-2 rounded-md shadow-md w-96'
        placeholder="Search city"
      />
      <button className=' relative' onClick={handleSearch} disabled={city.trim() === ''}>
        <BiSearch className=' absolute -left-5 -top-2 ' />
      </button>
    </div>
  );
};

export default Search;