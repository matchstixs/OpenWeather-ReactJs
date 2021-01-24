import React, { Component } from 'react';
import Axios from 'axios';
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
    // AXIOS AUTOMATICALLY RETURNS A PROMISE IN JSON FORMAT
    await Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
        .then(response => {
          // parse data into main info
          const forecast = response.data
          console.log(forecast)
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
      <h2 className="App-title">Weather App</h2>
        <div className="input">
        < Form loadWeather={this.getWeather} />
        </div>
        <div className="dataOutput">
          < Weather 
            location = {this.state.location}
            temperature = {this.state.temperature}
            humidity = {this.state.humidity}
            conditions = {this.state.conditions}
            conditionSummary = {this.state.conditionSummary}
          />
        </div>
        <div className="foot">    
          <i>Powered by OpenWeatherMap</i>
        </div>
      </div>
    )};

}

export default App;
