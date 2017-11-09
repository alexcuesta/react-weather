import React from 'react';

const WeatherBox = ({weather, city, icon}) => (
  <div className="weather-box">
    <p className="weather"><img src={icon} alt={weather} /></p>
    <p className="city">{city}</p>
  </div>
)


export default WeatherBox;
