import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import WeatherGrid from './components/WeatherGrid';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      cities: []
    }
  }

  componentWillMount() {
    this.getCityWeather("")
  }

  submitHandler(searchTerm) {
    this.getCityWeather(searchTerm)
  }

  getCityWeather(searchTerm) {
    fetch(new Request(`http://localhost:12345/weather?search=${searchTerm}`,
          {
            mode: 'cors',
            headers: new Headers({
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'})
          }))
      .then(response => response.json())
      .then(data => this.setState({cities: data}))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6">
              <SearchBox submitHandler={this.submitHandler}/>
            </div>
          </div>
        </div>

        <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <WeatherGrid cities={this.state.cities} />
              </div>
            </div>
        </div>

      </div>


    );
  }
}

export default App;
