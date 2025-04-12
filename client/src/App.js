import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/search_bar';
import WeatherCard from './components/weather_cart';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError('');
      // const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/weather?city=${city}`);
      setWeather({ ...response.data, city });
    } catch (err) {
      setError('Could not fetch weather. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="App" style={{ backgroundImage: 'url(https://picsum.photos/2000/1000)',color: '#fff', backgroundPosition: 'center', animation: 'fadeIn 2s' }}>
      <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',animation: 'fadeIn 2s', color:'blue' }}>🌦️Real-Time Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      <button className="toggle-button" onClick={toggleDarkMode}>
        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {loading && <p style={{ animation: 'fadeIn 2s' }}>Loading...</p>}
      {error && <p style={{color:'red',font:'bold', animation: 'fadeIn 2s' }}>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      
      <footer>
        <p>&copy; 2025 Weather Dashboard</p>
      </footer>
    </div>
  );
}

export default App;
