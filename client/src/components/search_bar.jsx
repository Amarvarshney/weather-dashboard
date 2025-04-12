import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '10px', fontSize: '18px', borderRadius: '5px', width: '30%' }}
      />
      <button type="submit" style={{ margin:'10px', padding: '10px', fontSize: '18px',border:'none', borderRadius: '5px', backgroundColor: '#4CAF50', color: '#fff', cursor: 'pointer' }}>Search</button>
    </form>
  );
};

export default SearchBar;
