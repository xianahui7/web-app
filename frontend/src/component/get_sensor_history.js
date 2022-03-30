import React, {useState, useEffect} from "react";
import Get_sensor_history_helper from "./helper_functions/get_sensor_history_helper";


function Get_sensor_history(props){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    const [sensor, setSensor] = useState("");
    var url = '/getsensordata?plantid=' + props.plantid;

    async function fetchData(){
        try {
            const response = await fetch(url, requestOptions)
            let data = await response.json();
            let specificPlant=[];
            
            // console.log(data);

            for (const row of data) {
                    specificPlant.push(row);
            }
          
            setSensor(specificPlant); // Fetching 1st Row ATM.

        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
    <div>
        {Object.keys(sensor).map((key, idx) => {
            return( <Get_sensor_history_helper key={idx} sensor={sensor[idx]} />)
        })}
    </div>
    )
}

export default Get_sensor_history;