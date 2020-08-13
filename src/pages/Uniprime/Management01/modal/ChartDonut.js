import React, { useState, memo } from 'react';
import Chart from "react-apexcharts"


const ChartDonut = props => {
    const [state, setState] = useState({
        options: {
            labels: ["A", "B", "C", "D", "E"],
            legend: { show: true, horizontalAlign: 'center', position: 'bottom' }

        },
        series: [44, 55, 41, 17, 15],
    })
    return (
        <div className="donut">
            <Chart options={state.options} series={state.series} type="donut" />
        </div>
    )
}
export default memo(ChartDonut);