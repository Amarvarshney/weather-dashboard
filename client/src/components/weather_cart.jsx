import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
  <div className="weather-card" style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '35%', margin: '20px auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{weather.city}</h2>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>{weather.condition}</p>
      <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.condition} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>{weather.temperature}°C</p>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}> 💧 Humidity: {weather.humidity}%</p>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>💨 Wind: {weather.windSpeed} m/s</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '18px' }}>Feels like: {weather.feels_like}°C</p>
        <p style={{ fontSize: '18px' }}>High:😰 {weather.temp_max}°C</p>
        <p style={{ fontSize: '18px' }}>Low:⬇️ {weather.temp_min}°C</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '18px' }}>Sunrise🌇: {weather.sunrise}</p>
        <p style={{ fontSize: '18px' }}>Sunset🌅: {weather.sunset}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
