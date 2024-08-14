import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("London"); // City to fetch weather for
  const [searchTerm, setSearchTerm] = useState(""); // Input field state
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  // Memoize fetchWeather using useCallback
  const fetchWeather = useCallback((city) => {
    let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather)
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []); // No dependencies mean fetchWeather is stable

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
    setCity(searchTerm); // Update city to the search term
    fetchWeather(searchTerm); // Fetch weather data for the new city
  }

  // Function to handle input changes
  function updateCity(event) {
    setSearchTerm(event.target.value); // Update searchTerm instead of city
  }

  // Fetch weather data for the default city when the component mounts
  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]); // Include city and fetchWeather

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity} // Update searchTerm on change
        value={searchTerm} // Control the input value
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
