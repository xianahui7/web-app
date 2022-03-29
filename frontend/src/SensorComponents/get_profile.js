import React, {useState, useEffect} from "react";

function Get_profile(arg){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    const [profile, setProfile] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/getprofile', requestOptions)
                let data = await response.json();
                setProfile(data[0]); // Setting First Row ATM
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    console.log(profile)
    return (
        <div>
            <p>
                Profile ID: {profile.profileid} <br/>
                Profile Name: {profile.profilename} <br/>
                Threshold: {profile.threshold} <br/>
            </p> 
        </div>
        )
}

export default Get_profile;