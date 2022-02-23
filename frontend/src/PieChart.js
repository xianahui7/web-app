import React from 'react';
import NVD3Chart from 'react-nvd3';
import "./index.css";
import "./NVD3.css"


const datum = [
    {key: "One", y: 29, color: "#98fb98"},
    {key: "Two", y: 0, color: "#f4c22b"},
    {key: "Three", y: 32, color: "#04a9f5"},
    {key: "Four", y: 196, color: "#ffff66"},
    {key: "Five", y: 2, color: "#1C39BB"},
    {key: "Six", y: 98, color: "#1de9b6"},
    {key: "Seven", y: 13, color: "#00a877"},
    {key: "Eight", y: 5, color: "#50c878"}
];

class PieChart extends React.Component {

    render() {
        
        return  <div className="piechart">
        <div class="container">
      <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" donut labelType='percent' />
      </div>
      </div>
    }
}

export default PieChart;