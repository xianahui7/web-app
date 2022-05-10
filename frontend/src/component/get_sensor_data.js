import React, {useState, useEffect} from "react";
import ReadOnlyRow_sensor from "./table_functions/ReadOnlyRow_sensor"


function Get_sensor_data(props){

    const [sensor, setSensor] = useState(null);

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

            console.log(sensor);
        } catch (error) {
            console.log("error", error);
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    function data_present(){
        console.log(sensor);

        if(sensor != null){
            console.log("Returning True");
            return true;
        }
        else{
            console.log("Returning False");
            return false;
        }
    }

    return (
    
    <div className = "most_recent_data">
        <h1>Most Recent Data</h1><br/>
        {data_present() == true ?
         (
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
         ):
         (
             <h1>No Data is Present</h1>
         )
        }
    </div>
    )
}

export default Get_sensor_data;