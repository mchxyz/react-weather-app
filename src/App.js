import React from "react";
import './App.css';
import WeatherSearch from "./WeatherSearch";
// import Time from "./Time";

export default function App() {
  return (
    <div className="App-Container">
      <header className="Weather-Container">
       {/* <Time /> */}
       <WeatherSearch />
      </header>
    </div>
  );
}

