import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        if (!res.data) {
          setData({});
        } else {
          setData(res.data);
          console.log(res.data);
        }
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter the location"
          type="text"
        />
      </div>
      {data.main ? (
        <div className="container">
          <div className="top">
            <div className="location">
              <h1>City: {data.name}</h1>
            </div>
            <div className="temp">
              <h1>Temperature: {Math.round(data.main.temp - 273.15)}°C</h1>
            </div>
            <div className="desc">
              <h2>Wind Speed: {data.wind.speed} m/s</h2>
            </div>
          </div>
          <div className="bottom">
            <div className="humitidy">
              <h2>Humidity: {data.main.humidity}%</h2>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Enter the city name</h1>
        </div>
      )}
    </div>
  );
}

export default App;
