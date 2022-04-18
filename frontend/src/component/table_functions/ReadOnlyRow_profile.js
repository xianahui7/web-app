import React from "react";

const ReadOnlyRow_profile = ({ profile, handleEditClick, handleDeleteClick}) => {
    return(
        <tr>        
            <td> {profile.profilename} </td>
            <td> {profile.threshold}%   </td>
            <td>
                <button 
                    type='button' 
                    onClick={(event)=> handleEditClick(event, profile)}
                >
                    Edit 
                </button>
                
                <button
                    type ='button'
                    onClick={(event) => handleDeleteClick(event, profile)}>
                    Delete
                </button>
            </td>
        </tr>
    );
    
}

export default ReadOnlyRow_profile;