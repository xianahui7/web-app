import React from "react";
import LineChart from "../Graphs/LineChart";
import PieChart from "../Graphs/PieChart";
import BarChart from "../Graphs/BarChart";
import "../Styling/index.css";

function Home() {
  return (

    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
         
            <p>
              Graph of current plant
            </p>
            <LineChart/>
            <BarChart/>
            <PieChart/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;