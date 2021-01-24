import React from 'react';
// RETURNS WEATHER PROPS AKA DETAILS
const Weather = ({location, temperature, humidity, conditions, conditionSummary}) => {
        return(
        <div className="dataOutput">
            <span>{location}</span>

            <div>
            Temperature: {temperature}
            </div>

            <span>
            Humidity: {humidity}
            </span>

            <div>
            Weather Condition: {conditionSummary}
            </div>
            
        </div>
        )
}

export default Weather;