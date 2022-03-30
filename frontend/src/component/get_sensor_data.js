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

    <div>
        <p>
            Moisture Sensor: {sensor.soilmoisture} <br/>
            Temperature Sensor: {sensor.temperature} <br/>
            Humidity Sensor: {sensor.humidity} <br/>
            Date Time Stamp: {sensor.datetimestamp}<br/>
        </p>
    </div>
    )
}

export default Get_sensor_data;