import React from "react";
import './App.css';
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App-Container">
      <header className="Weather-Container">
       <WeatherSearch />
      </header>
    </div>
  );
}

