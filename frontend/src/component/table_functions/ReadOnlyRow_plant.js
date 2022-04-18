import React from "react";

const ReadOnlyRow_plant = ({ plant, handleEditClick, handleDeleteClick, profilename}) => {
    return(
        <tr>        
            <td> {plant.plantname} </td>
            <td> {profilename} </td>
            <td>
                <button 
                    type='button' 
                    onClick={(event)=> handleEditClick(event, plant)}
                >
                    Edit 
                </button>
                
                <button
                    type ='button'
                    onClick={(event) => handleDeleteClick(event, plant)}>
                    Delete
                </button>
            </td>
        </tr>
    );
    
}

export default ReadOnlyRow_plant;