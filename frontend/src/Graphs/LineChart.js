import React from 'react';
import NVD3Chart from 'react-nvd3';
import "../Styling/index.css";
import "../Styling/NVD3.css"

function getDatum() {
    var sin = [],
        sin2 = [],
        cos = [];
    for (var i = 0; i < 100; i++) {
        sin.push({
            'x': i,
            'y': Math.sin(i / 10)
        });
        sin2.push({
            'x': i,
            'y': Math.sin(i / 10) * 0.25 + 0.5
        });
        cos.push({
            'x': i,
            'y': .5 * Math.cos(i / 10)
        });
    }
    return [
        {
            values: sin,
            key: 'Sine Wave',
            color: '#000080'
        },
        {
            values: cos,
            key: 'Cosine Wave',
            color: '#04a9f5'
        },
        {
            values: sin2,
            key: 'Another sine wave',
            color: '#1de9b6',
            area: true
        }
    ];
}

class LineChart extends React.Component {

    render() {
        const data = getDatum();
        return (
          <div className="linechart">
          <div class="container">
        
                {
                    React.createElement(NVD3Chart, {
                        xAxis: {
                            tickFormat: function(d){ return d; },
                            axisLabel: 'Time (ms)'
                        },
                        yAxis: {
                            axisLabel: 'Voltage (v)',
                            tickFormat: function(d) {return parseFloat(d).toFixed(2); }
                        },
                        type:'lineChart',
                        datum: data,
                        x: 'x',
                        y: 'y',
                        height: 500,
                        width: 500,
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientToOpacity: 0,
                        renderEnd: function(){
                            console.log('renderEnd');
                        }
                    })
                }
               
            </div>
            </div>
        )
    }
}

export default LineChart;