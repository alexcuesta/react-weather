import React from 'react';
import Weather from './Weather'

const WeatherBox = ({weather, city, temperature, precipitations}) => (
  <div className="weather-box">
    <p className="weather"><i className={"wi "+ getWeatherIcon(weather)} /></p>
    <p className="city">{city}</p>
    <p className="temperature">max {temperature.min} min {temperature.max}</p>
    <p className="precipitations">{precipitations}</p>
  </div>
)

function getWeatherIcon(weather) {
  switch (weather) {
    case Weather.SUNNY:
      return "wi-day-sunny";

    case Weather.RAINY:
      return "wi-day-rain";

    default:
      return "whatever";
  }
}

export default WeatherBox;
