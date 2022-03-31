import React from 'react'

function Get_plant_helper(props){
    
    //console.log(props);

    return(
        <p>
            Plant ID: {props.profile.plantid} <br/>
            Profile ID: {props.profile.profileid} <br/>
            Plant Name: {props.profile.plantname} <br/>
        </p>
    )
}

export default Get_plant_helper;