function Update_Profile(profileid, profilename, threshold){

var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "profileid": profileid,
    "profilename": profilename,
    "threshold": threshold
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

export default Update_Profile;