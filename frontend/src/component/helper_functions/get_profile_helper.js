import React, { Fragment } from 'react'

function Get_profile_helper(props){
    
    console.log(props);

    return(
        <tr>        
            <td className = 'td'> {props.profile.profilename} </td>
            <td className = 'td'> {props.profile.threshold}   </td>
        </tr>
    )
}

export default Get_profile_helper;