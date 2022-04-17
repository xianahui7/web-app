import React, {useState, useEffect, Fragment} from "react";
import Add_profile from "./add_profile";
import Update_profile from "./update_profile";
import Remove_profile from "./remove_profile";
import ReadOnlyRow from "./table_functions/ReadOnlyRow";


function Get_profile(){
    const [profilename, setProfileName] = useState("");
    const [profilename_edit, setProfileNameEdit] = useState("");
    const [threshold, setThreshold] = useState("");
    const [threshold_edit, setThresholdEdit] = useState("");
    const [profile, setProfile] = useState("");
    const [editProfileID, setEditProfileID] = useState(null);

    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    async function fetchData(){
        try {
            const response = await fetch('/getprofile', requestOptions)
            let data = await response.json();
            let specificProfile =[];
            
            for (const row of data){
                specificProfile.push(row);
            }

            // console.log(specificProfile);
            setProfile(specificProfile); // Setting First Row ATM
        } catch (error) {
            console.log("error", error);
        }

        //console.log(profile);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddProfileSubmit = (event) => {
        console.log(`
          Profilename: ${profilename}
          threshold: ${threshold}
        `);
    
        if(threshold > 100 || threshold < 0){
          alert('Please enter a value from 0 - 100');
        }
        else{
          Add_profile(profilename, threshold);
        }
      }


    const handleEditClick = (event, profile) => {
        event.preventDefault();
        setEditProfileID(profile.profileid);
        setProfileNameEdit(profile.profilename);
    }

    const handleCancelClick = (event) => {
        setEditProfileID(null);
    }

    const handleDeleteClick = (event, profile) => {
        Remove_profile(profile.profilename);
        window.location.reload();

    }

    const handleEditProfileSubmit = (event) => {
        event.preventDefault();
    
        if(threshold > 100 || threshold < 0){
          alert('Please enter a value from 0 - 100');
        }
        else{
          Update_profile(profilename_edit, threshold_edit);
        }
      }


    // console.log(profile);

    return (
        
        <div>
            <form onSubmit={handleEditProfileSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Plant Profile</th>
                            <th>Moisture Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(profile).map((key, idx) => {
                            return(
                                <Fragment>
                                    {editProfileID === profile[idx].profileid ? (
                                        <tr>        
                                            <td>
                                                {profile[idx].profilename}
                                            </td>

                                            <td>
                                            <input
                                            type="threshold_edit"
                                            name="threshold_edit"
                                            required="requried"
                                            placeholder={profile[idx].threshold}
                                            onChange={e => setThresholdEdit(e.target.value)}
                                            ></input>
                                            </td>

                                            <td>
                                                <button type="submit">Save</button>
                                                <button type="submit" onClick={handleCancelClick}>Cancel</button>

                                            </td>
                                        </tr>
                                        ) : ( <ReadOnlyRow key={idx} 
                                                            profile={profile[idx]} 
                                                            handleEditClick={handleEditClick}
                                                            handleDeleteClick={handleDeleteClick} />
                                        )}
                                </Fragment>
                            )
                        })}
                    </tbody>
                </table>
            </form>

            <form onSubmit={handleAddProfileSubmit}>
              <input
              type="text"
              name="profilename"
              required="requried"
              placeholder="Profile Name"
              value={profilename}
              onChange={e => setProfileName(e.target.value)}
              />

              <input
              type="text"
              name="threshold"
              required="requried"
              placeholder="Moisture Threshold %"
              value={threshold}
              onChange={e => setThreshold(e.target.value)}
              />

              <button type="submit">Add Profile</button>
            </form>

        </div>
        )
}

export default Get_profile;