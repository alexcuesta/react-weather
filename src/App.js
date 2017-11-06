import React, { Component } from 'react';
import WeatherBox from './components/WeatherBox';
import Weather from './components/Weather';
import Temperature from './components/Temperature';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6">
              <input type="text" name="searchbox" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-3">
              <WeatherBox weather={Weather.SUNNY} city="Madrid" temperature={new Temperature(14, 25)} precipitations="20%" />
            </div>

            <div className="col-sm-3">
              <WeatherBox weather={Weather.RAINY} city="Oviedo" temperature={new Temperature(10, 15)} precipitations="90%" />
            </div>

          </div>

        </div>

      </div>


    );
  }
}

export default App;
