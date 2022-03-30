import React, {useState, useEffect} from "react";

function Delete_sensor_data(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "sensordataid": 2 // Currently need to modify this as user/form input to
                      // delete speciic rows
    });

    var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("/removesensordata", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return(
        <p>Sensor Data Deleted</p>
    )
}

export default Delete_sensor_data;