# 🌦️ Real-Time Weather Dashboard

A full-stack web app built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to search for any city and view current weather data in real-time using the OpenWeatherMap API. The app features a clean, responsive UI with dark/light mode support.

---

## 🔗 Live Demo

- **Frontend** (React) ➡️ [https://your-frontend.vercel.app](https://weather-dashboard-one-flame.vercel.app/)  
- **Backend** (Express) ➡️ [https://your-backend.onrender.com](https://weather-dashboard-lood.onrender.com)

---

## ✨ Features

- 🌍 Search weather by city name  
- 📡 Real-time data using OpenWeatherMap API  
- 🌡️ Shows temperature, weather condition, humidity, wind speed, and icon  
- 🌗 Dark / Light mode toggle  
- 📱 Fully responsive UI  
- ⚠️ Handles invalid city inputs and loading states

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Axios
- CSS (or Bootstrap)

**Backend:**
- Node.js
- Express.js
- Axios
- dotenv
- cors

**API:**
- [OpenWeatherMap](https://openweathermap.org/api)

---

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Amarvarshney/weather-dashboard.git
cd weather-dashboard

2. Setup Backend
bash
cd server
npm install
Create a .env file in the /server directory and add your API key:

env
WEATHER_API_KEY=your_openweathermap_api_key
Start the backend server:

bash
node server.js

3.Setup Frontend
bash

cd ../client
npm install
Create a .env file in the /client directory and add your backend URL:

env
REACT_APP_API_URL=http://localhost:5000 or
Start the frontend:

bash
npm start

📦 Deployment
Frontend: Deploy on Vercel or Netlify

Backend: Deploy on Render or Railway

Make sure to set environment variables in the respective dashboards:

REACT_APP_API_URL for frontend

WEATHER_API_KEY for backend
