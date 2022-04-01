import React from "react";
import LineChart from "../Graphs/LineChart";
import PieChart from "../Graphs/PieChart";
import BarChart from "../Graphs/BarChart";
import "../Styling/index.css";

function Home() {
  return (

    <div className="home">
      <div class="container-fluid">
        <div class="row align-items-center my-5">
          <div class="col">
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