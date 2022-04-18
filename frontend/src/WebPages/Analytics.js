import React from "react";
import Get_sensor_data from "../component/get_sensor_data";
import Generate_graph from "../component/generate_graph";
import Add_sensor_data from "../component/testing_functions/add_sensor_data";


function Analytics() {
      return (
        <div class="container-fluid display_analytics">
        <div class = 'row'>
            <Get_sensor_data plantid={1}/>
        </div>
        <div class = 'row'>
          <Generate_graph/>
        </div>
      </div>
      );
    }
    
    export default Analytics;