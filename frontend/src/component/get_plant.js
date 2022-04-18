import React, {useState, useEffect, Fragment} from "react";
import Add_plant from './add_plant';
import Update_plant from './update_plant';
import Remove_plant from './remove_plant';
import ReadOnlyRow_plant from "./table_functions/ReadOnlyRow_plant";


function Get_plant(){
    // Holds array of plant objects from API
    const [plant, setPlant] = useState("");
    
    const [plantname, setPlantName] = useState("");
    const [editPlantID, setEditPlantID] = useState(null);

    // Holds array of profile objects from API
    const [profile, setProfile] = useState("");
    const [profilename, setProfileName] = useState("");
    const [editprofilename, setEditProfileName] = useState("");

    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    async function fetchData(){
        try {
            // Getting PLant Data
            const response = await fetch('/getplant', requestOptions)
            let plantdata = await response.json();
            let specificPlant =[];
            
            // console.log(plantdata);

            for (const row of plantdata){
                specificPlant.push(row);
            }

            // console.log(specificProfile);
            setPlant(specificPlant); // Setting First Row ATM

        } catch (error) {
            console.log("error", error);
        }

        try {
            // Getting PLant Data
            const response = await fetch('/getprofile', requestOptions)
            let profiledata = await response.json();
            let specificProfile =[];
            
            // console.log(profiledata);

            for (const row of profiledata){
                specificProfile.push(row);
            }

            // console.log(specificProfile);
            setProfile(specificProfile); 

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
        setEditPlantID(plant.plantid);
        
    }

    const handleCancelClick = (event) => {
        setEditPlantID(null);
    }

    const handleDeleteClick = (event, plant) => {
        Remove_plant(plant.plantid);
        window.location.reload();

    }

    const handleEditPlantSubmit = (event) => {
        Update_plant(editPlantID, editprofilename);        
      }

    function getProfileName(profileid){

        for(const row of profile){
            if(profileid === row.profileid){
                return (row.profilename);
            }
        }
    }

    return (
        
        <div>
            <form onSubmit={handleEditPlantSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Plant Name</th>
                            <th>Profile Name</th>
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
                                            onChange={e => setEditProfileName(e.target.value)}
                                            ></input>
                                            </td>

                                            <td>
                                                <button type="submit">Save</button>
                                                <button type="submit" onClick={handleCancelClick}>Cancel</button>

                                            </td>
                                        </tr>
                                        ) : ( <ReadOnlyRow_plant key={idx} 
                                                                        plant={plant[idx]} 
                                                                        profilename={getProfileName(plant[idx].profileid)}
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