import React from 'react'
// THIS IS FORM COMPONENT
// IT RENDERS AN INPUT BOX FOR USER INPUT
const Form = (props) => {
    return(

            <form onSubmit={props.loadWeather}>
            <input type='text' name='city' placeholder="CITY / ZIPCODE" />
            </form>

    );
}

export default Form