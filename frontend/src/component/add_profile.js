import React, {useState, useEffect} from "react";

function Add_profile(profilename, smthres){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "profilename": profilename, 
    "threshold": smthres,
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("/addprofile", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return <p>Data sent to DB</p>
}

export default Add_profile;