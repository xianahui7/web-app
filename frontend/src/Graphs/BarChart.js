import React from 'react';
import NVD3Chart from 'react-nvd3';
import "../Styling/index.css";
import "../Styling/NVD3.css";

class BarChart extends React.Component {

    render() {
        const data = this.props.datum;
        return <div className="barchart">
        <div class="container">
        <NVD3Chart type="multiBarChart" datum={data} x="x" y="y" height={300} showValues groupSpacing={0.2} />

        </div>
      </div>
    }
}

export default BarChart;