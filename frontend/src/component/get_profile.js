import React, {useState, useEffect} from "react";
import Get_profile_helper from "./helper_functions/get_profile_helper";

function Get_profile(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    const [profile, setProfile] = useState("");

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
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(profile);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Plant Profile</th>
                        <th>Moisture Level</th>
                    </tr>
                </thead>
                <tbody>
                        {Object.keys(profile).map((key, idx) => {
                            return(<Get_profile_helper key={idx} profile={profile[idx]} />)
                        })}
                </tbody>
            </table>
        </div>
        )
}

export default Get_profile;