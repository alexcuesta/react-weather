import React from 'react';
import WeatherBox from './WeatherBox'

const WeatherGrid = ({cities}) => (

  <div className="weather-grid">

    {cities.map((city, index) =>
      <WeatherBox key={index} weather={city.Weather} city={city.City} icon={city.Icon}/>
    )}
  </div>

)

export default WeatherGrid;
