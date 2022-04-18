import React, {useState, useEffect} from "react";


function Get_sensor_data(props){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    var url = '/getsensordata?' + 'plantid=' + props.plantid +'&onlylastrecord=True';
    // console.log(url);
    const [sensor, setSensor] = useState("");

    async function fetchData(){
        try {
            const response = await fetch(url, requestOptions)
            let data = await response.json();
            
            // console.log(data);

            let specificPlant=[];

            for (const row of data) {
                    specificPlant.push(row);
            }
          
            setSensor(specificPlant[0]); // Fetching 1st Row ATM.
        } catch (error) {
            console.log("error", error);
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(sensor)

    return (

    <div className = "most_recent_data">
        <h1 class='title'>Most Recent Data</h1><br/>

         <table className="table2">
            <thead>
                <tr>
                    <th>Moisture</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Light</th>
                </tr>
            </thead>
            <tbody>
                {/* {Object.keys(profile).map((key, idx) => {
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
                                ) : ( <ReadOnlyRow_profile key={idx} 
                                                    profile={profile[idx]} 
                                                    handleEditClick={handleEditClick}
                                                    handleDeleteClick={handleDeleteClick} />
                                )}
                        </Fragment>
                    )
                })} */}
            </tbody>
        </table>
    </div>
    )
}

export default Get_sensor_data;