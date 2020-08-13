import React from 'react';
import { Modal } from "antd";
import Chart from "react-apexcharts"

const Image = props => {
    const [state, setState] = React.useState({
        options: {
            labels: ["test"],
            legend: { show: false, showForNullSeries: false, }
        },
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    })
    return (
        <Modal
            visible={true}>
            <div className="donut">
                <Chart options={state.options} series={state.series} type="donut" width="380" />
            </div>
        </Modal>
    )
}

export default React.memo(Image)