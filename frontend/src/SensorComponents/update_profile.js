import React, {useState, useEffect} from "react";

function Update_profile(){

var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "profileid": 1,
    "profilename": "COOL",
    "threshold": 20
    });

    var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("/updateprofile", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export default Update_profile;