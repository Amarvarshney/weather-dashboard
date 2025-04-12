const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const { data } = await axios.get(url);

    const weather = {
      temperature: data.main.temp,
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      feels_like: data.main.feels_like,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    };

    res.json(weather);
  } catch (err) {
    res.status(404).json({ error: 'City not found' });
  }
});

module.exports = router;
