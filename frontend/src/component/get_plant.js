import React, {useState, useEffect} from "react";
import Get_plant_helper from "./helper_functions/get_plant_helper";

function Get_plant(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    const [plant, setPlant] = useState("");

    async function fetchData(){
        try {
            const response = await fetch('/getplant', requestOptions)
            let data = await response.json();
            let specificPlant =[];
            
            for (const row of data){
                specificPlant.push(row);
            }

            console.log(specificPlant);
            setPlant(specificPlant); // Setting First Row ATM
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <p>
            {Object.keys(plant).map((key, idx) => {
            return( <Get_plant_helper key={idx} profile={plant[idx]} />)
            })
            }
            </p> 
        </div>
        )
}

export default Get_plant;