import React from 'react';
// RETURNS WEATHER PROPS AKA DETAILS
const Weather = ({location, temperature, humidity, conditions, conditionSummary}) => {
        return(
        <div>
            <h1>{location}</h1>
            <h3>Temperature: {temperature}</h3>
            <h3>Humidity: {humidity}</h3>
            <h4>Weather Condition: {conditionSummary}</h4>
        </div>
        )
}

export default Weather;