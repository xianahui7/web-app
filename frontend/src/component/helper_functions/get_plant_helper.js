import React from 'react'

function Get_plant_helper(props){
    
    //console.log(props);

    return(
        <p>
            Plant Name: {props.profile.plantname} <br/>
            Profile ID: {props.profile.profileid} <br/>
        </p>
    )
}

export default Get_plant_helper;