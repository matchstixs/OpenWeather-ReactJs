import React from 'react'
// THIS IS FORM COMPONENT
// IT RENDERS AN INPUT BOX FOR USER INPUT
const Form = (props) => {
    return(
        <div>
            <form onSubmit={props.loadWeather}>
            <input type='text' name='city' placeholder="CITY" />
            </form>
        </div>
    );
}

export default Form