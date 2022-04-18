import React from "react";

function parse_time(datetime){

    if(datetime != null){
        let time = datetime.slice(0,16);
        return time;
    }
    else{
        return 0;
    }
    // console.log(time);
}

function two_decimal(value){

    if(value != null){
        return value.toFixed(2);
    }
    else{
        return 0;
    }
    // console.log(time);
}

const ReadOnlyRow_sensor = ({sensor}) => {
    let datetime = parse_time(sensor.datetimestamp);
    let moisture = two_decimal(sensor.soilmoisture);
    let temperature = two_decimal(sensor.temperature);
    let humidity = two_decimal(sensor.humidity);

    return(
        <tr>        
            <td> {moisture} </td>
            <td> {temperature}  </td>
            <td> {humidity}     </td>
            <td> {datetime}</td>
        </tr>
    );
    
}

export default ReadOnlyRow_sensor;