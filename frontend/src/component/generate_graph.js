import React, {useState, useEffect} from "react";
import Get_sensor_history_helper from "./helper_functions/get_sensor_history_helper";
import LineChart from "../Graphs/LineChart";

function parse_time(timestamp){

    let time = timestamp.slice(11,16);
    // console.log(time);

    let hour = parseFloat(time);
    //console.log(hour);

    let minute = parseFloat(time.slice(3,5))/100;
    //console.log(minute);

    return (hour + minute);

}

function Generate_graph(){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    const [sensor, setSensor] = useState("");
    var url = '/getsensordata?plantid=1';

    async function fetchData(){
        try {
            const response = await fetch(url, requestOptions)
            let data = await response.json();
            let specificPlant=[];
                        
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

    let sin = [],
        sin2 = [];

    for (const row of sensor) {
        sin.push({
            'x': parse_time(row.datetimestamp),
            'y': row.temperature,
        });

        sin2.push({
            'x': parse_time(row.datetimestamp),
            'y': row.humidity
        });
    }

    let data = [
        {
            values: sin,
            key: 'Temp',
            color: '#1de9b6',
            area: true
        },
        {
            values: sin2,
            key: 'Humidty',
            color: '#52796F',
            area: true
        }
    ];

    return (
        <LineChart datum={data}/>
    )
}

export default Generate_graph;