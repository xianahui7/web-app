import React from "react";
import { render } from "react-dom";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
function MyPlants() {
      return (
        <div className="myplants">
          <div class="container">
            <div class="row align-items-center my-5">
              <div class="col-lg-7">
             
              </div>
              <div class="col-lg-5">
                <h1 class="font-weight-light">My Plants</h1>
                <LineChart/>
                <BarChart/>
                </div>
              </div>
            </div>
          </div>
      );
    }
    
    export default MyPlants;