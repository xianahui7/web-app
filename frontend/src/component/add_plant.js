import React, {useState, useEffect} from "react";

function Add_plant(plantname, profileid){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "plantname": plantname,
        "profileid": profileid
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("/addplant", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return <p>Plant Added to DB</p>
}

export default Add_plant;