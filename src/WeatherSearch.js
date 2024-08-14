import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Fixed the import path

export default function WeatherSearch() {
  const [city, setCity] = useState("London"); // Set default city
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  // Function to fetch weather data
  function fetchWeather(city) {
    let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  // Function to handle API response
  function displayWeather(response) { 
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather(city);
  }

  // Function to handle input changes
  function updateCity(event) {
    setCity(event.target.value);
  }

  // Fetch weather data for the default city when the component mounts
  useEffect(() => {
    fetchWeather(city);
  }, []); // Empty dependency array means this effect runs once on mount

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="WeatherInfo">
          <li>{weather.city}</li>
          <li>Temperature: {Math.round(weather.temperature)} ºC</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/mchxyz" target="_blank" rel="noopener noreferrer">
            MA
          </a>{" "}
          and is{" "}
          <a href="https://github.com/mchxyz/react-weather-app" target="_blank" rel="noopener noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://she-codes-react-weather-app.netlify.app/" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    return form;
  }
}
