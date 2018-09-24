import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

// COMPONENTS GO HERE
// STATE ALSO LIVES HERE
// ALONG WITH API CALL, PARSE, ETC

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: undefined,
      temperature: undefined,
      humidity: undefined,
      conditions: undefined,
      conditionSummary: undefined
    }

    this.getWeather = this.getWeather.bind(this);
    // METHODS NEEDS TO BE BINDED INORDER TO WORK
  }

  getWeather = async (e) => {
    console.log(e)
    // SHOWS DYNAMIC EVENT BEING RAN
    e.preventDefault()
    // PREVENTS BROWSER REFRESH INORDER TO KEEP USER INPUT DATA
    const city = e.target.elements.city.value
    const apiKey = '3288cf10f92e639d55bc53454df165a0'
    await Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
        .then(response => {
          // parse data into main info
          const forecast = response.data
          this.setState({
            location: forecast.city.name,
            temperature: forecast.list[0].main.temp,
            humidity: forecast.list[0].main.humidity,
            conditions: forecast.list[0].weather[0].main,
            conditionSummary: forecast.list[0].weather[0].description
          })
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
          <h3>Uses React and Open Weather Api</h3>
          <h5>To display the weather forecast for a particular city</h5>
        </header>
          < Form loadWeather={this.getWeather} />
          < Weather 
            location = {this.state.location}
            temperature = {this.state.temperature}
            humidity = {this.state.humidity}
            conditions = {this.state.conditions}
            conditionSummary = {this.state.conditionSummary}
          />
      </div>
    );
  };

}

export default App;
