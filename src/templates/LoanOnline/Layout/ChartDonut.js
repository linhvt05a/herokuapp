import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const DonutChart = props => {
    const halfsize = (props.size * 0.5);
    const radius = halfsize - (props.strokewidth * 0.5) - 5;
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = { strokeWidth: props.strokewidth - 10 };
    const indicatorstyle = { strokeWidth: props.strokewidth, strokeDasharray: dashval }
    const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')';

    return (
        <svg width={props.size} height={props.size} className="donutchart">
            <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track" />
            <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator" />
            <text className="donutchart-text" x={halfsize} y={halfsize} style={{ textAnchor: 'middle' }} >
                <tspan className="donutchart-text-label" >Chiếm </tspan>
                <tspan className="donutchart-text-percent">{props.value}</tspan>
                <tspan className="donutchart-text-percent">%</tspan>
                <tspan className="donutchart-text-label" x={halfsize} y={halfsize + 10}>số tiền trả</tspan>
            </text>
        </svg>
    );
}
DonutChart.prototype = {
    value: PropTypes.number,        // value the chart should show
    valuelabel: PropTypes.string,   // label for the chart
    size: PropTypes.number,         // diameter of chart
    strokewidth: PropTypes.number   // width of chart line
}
const ChartDonutText = props => {
    return (
        <DonutChart value={99} size={166} strokewidth={26} />
    )

}
export default ChartDonutText