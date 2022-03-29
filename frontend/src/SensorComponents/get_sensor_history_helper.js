import React from 'react'

function Get_sensor_sensor_helper(props){
    
    return(
        <p>
            Moisture Sensor{props.sensor.soilmoisture} <br/>
            Temperature Sensor: {props.sensor.temperature} <br/>
            Humidity Sensor: {props.sensor.humidity} <br/>
        </p>
    )
}

export default Get_sensor_sensor_helper;