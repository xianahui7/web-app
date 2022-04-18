import React, {useState, useEffect} from "react";
import ReadOnlyRow_sensor from "./table_functions/ReadOnlyRow_sensor"


function Get_sensor_data(props){

    const [sensor, setSensor] = useState("");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    var url = '/getsensordata?' + 'plantid=' + props.plantid +'&onlylastrecord=True';
    //console.log(url);

    async function fetchData(){
        try {
            const response = await fetch(url, requestOptions)
            let data = await response.json();
            
            setSensor(data[0]);
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
                    <th>Time Stamp</th>
                </tr>
            </thead>
            <tbody>
                    <ReadOnlyRow_sensor sensor={sensor} />
            </tbody>
        </table>
    </div>
    )
}

export default Get_sensor_data;