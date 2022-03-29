import React from 'react'

function Get_sensor_data_helper(props){
    
    return(
        <p>
            Plant ID: {props.sensor.plantid} <br/>
            Moisture Sensor: {props.sensor.soilmoisture} <br/>
            Temperature Sensor: {props.sensor.temperature} <br/>
            Humidity Sensor: {props.sensor.humidity} <br/>
        </p>
    )
}

export default Get_sensor_data_helper;