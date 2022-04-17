import React, {useState, useEffect, Fragment} from "react";
import Add_plant from './add_plant';
import Update_plant from './update_plant';
import Remove_plant from './remove_plant';
import ReadOnlyRow_plant from "./table_functions/ReadOnlyRow_plant";


function Get_plant(){
    const [plant, setPlant] = useState("");
    
    const [plantname, setPlantName] = useState("");
    const [editplantname, setEditPlantName] = useState("");

    const [profilename, setProfileName] = useState("");
    const [profileID, setProfileID] = useState("");

    const [editprofilename, setEditProfileName] = useState("");
    const [editPlantID, seteditPlantID] = useState(null);

    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    async function fetchData(){
        try {
            const response = await fetch('/getplant', requestOptions)
            let data = await response.json();
            let specificPlant =[];
            
            console.log(data);

            for (const row of data){
                specificPlant.push(row);
            }

            // console.log(specificProfile);
            setPlant(specificPlant); // Setting First Row ATM
        } catch (error) {
            console.log("error", error);
        }

        //console.log(profile);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddPlantSubmit = (event) => {
        console.log(`
          Plant_Name: ${plantname}
          profile_name: ${profilename}
        `);

        Add_plant(plantname, profilename);
        
      }

    const handleEditClick = (event, plant) => {
        event.preventDefault();
        seteditPlantID(plant.plantid);
    }

    const handleCancelClick = (event) => {
        seteditPlantID(null);
    }

    const handleDeleteClick = (event, plant) => {
        Remove_plant(plant.plantid);
        window.location.reload();

    }

    const handleEditProfileSubmit = (event) => {
        event.preventDefault();
        Update_plant(plantname, profileID);
        
      }

    return (
        
        <div>
            <form onSubmit={handleEditProfileSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Plant Name</th>
                            <th>Profile ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(plant).map((key, idx) => {
                            return(
                                <Fragment>
                                    {editPlantID === plant[idx].plantid ? (
                                        <tr>        
                                            <td>
                                                {plant[idx].plantname}
                                            </td>

                                            <td>
                                            <input
                                            type="profile_name_edit"
                                            name="profile_name_edit"
                                            required="requried"
                                            placeholder={plant[idx].profileID}
                                            onChange={e => setProfileID(e.target.value)}
                                            ></input>
                                            </td>

                                            <td>
                                                <button type="submit">Save</button>
                                                <button type="submit" onClick={handleCancelClick}>Cancel</button>

                                            </td>
                                        </tr>
                                        ) : ( <ReadOnlyRow_plant key={idx} 
                                                                        plant={plant[idx]} 
                                                                        handleEditClick={handleEditClick}
                                                                        handleDeleteClick={handleDeleteClick} />
                                        )}
                                </Fragment>
                            )
                        })}
                    </tbody>
                </table>
            </form>

            <form onSubmit={handleAddPlantSubmit}>
              <input
              type="text"
              name="Plant_Name"
              required="requried"
              placeholder="Plant Name"
              value={plantname}
              onChange={e => setPlantName(e.target.value)}
              />

              <input
              type="text"
              name="profilename"
              required="requried"
              placeholder="Profile Name"
              value={profilename}
              onChange={e => setProfileName(e.target.value)}
              />

              <button type="submit">Add Plant</button>
            </form>

        </div>
        )
}

export default Get_plant;