import { randomLcg } from "d3";
import React, {useState, useEffect} from "react";

function Add_sensor_data(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "plantid": 1, 
    "soilmoisture": Math.random()*100,
    "temperature": Math.random()*100,
    "humidity": Math.random()*100
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