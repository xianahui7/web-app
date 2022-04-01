import React, {useState, useEffect} from "react";

function Add_sensor_data(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "plantid": 1, 
    "soilmoisture": 1,
    "temperature": 45,
    "humidity": 40
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("/addsensordata", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return <p>Data sent to DB</p>
}

export default Add_sensor_data;