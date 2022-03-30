import React from 'react'

function Get_profile_helper(props){
    
    //console.log(props);

    return(
        <p>
            Profile ID: {props.profile.profileid} <br/>
            Profile Name: {props.profile.profilename} <br/>
            Moisture Threshold: {props.profile.threshold} <br/>
        </p>
    )
}

export default Get_profile_helper;