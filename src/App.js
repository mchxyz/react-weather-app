import React from "react";
import Weather from "./Weather";
import './App.css';
import WeatherSearch from "./WeatherSearch";
import Time from "./Time";

export default function App() {
  return (
    <div className="App-Container">
      <header className="Weather-Container">
        {/* <h1>
        Hello from React
        </h1>
       <Weather city="Tokyo" /> */}
       <Time />
       <WeatherSearch />
      </header>
    </div>
  );
}

