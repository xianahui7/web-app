import React, {useState, useEffect} from "react";


function Get_sensor_data(props){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    const [sensor, setSensor] = useState("");

    async function fetchData(){
        try {
            const response = await fetch('/getsensordata', requestOptions)
            let data = await response.json();
            // console.log(data);
            let specificPlant=[];

            for (const row of data) {

                if (row.plantid === props.plantid) {
                    specificPlant.push(row);
                }
            }
          
            setSensor(specificPlant[(specificPlant.length-1)]); // Fetching 1st Row ATM.
            console.log(specificPlant)
        } catch (error) {
            console.log("error", error);
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(sensor)

    return (

    <div>
        <p>
            Moisture Sensor: {sensor.soilmoisture} <br/>
            Temperature Sensor: {sensor.temperature} <br/>
            Humidity Sensor: {sensor.humidity} <br/>
        </p>
    </div>
    )
}

export default Get_sensor_data;