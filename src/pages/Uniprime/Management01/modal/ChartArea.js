import React, { useState, memo } from 'react';
import Chart from "react-apexcharts"


const ChartArea = props => {
    const [state, setState] = useState({
        options: {
            labels: ["A", "B", "C", "D", "E"],
            legend: {
                show: false,
                showForNullSeries: false,
                showForZeroSeries: false,
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            chart: {
                toolbar: {
                    show: false,
                }
            }
        },
        series: [{
            name: 'south',
            data: [
                {
                    x: 1996,
                    y: 162
                },
                {
                    x: 1997,
                    y: 90
                },
                {
                    x: 1998,
                    y: 50
                },
                {
                    x: 1999,
                    y: 77
                },
                {
                    x: 2000,
                    y: 35
                },
                {
                    x: 2001,
                    y: -45
                },
                {
                    x: 2002,
                    y: -88
                },
                {
                    x: 2003,
                    y: -120
                },
                {
                    x: 2004,
                    y: -156
                },
                {
                    x: 2005,
                    y: -123
                },
                {
                    x: 2006,
                    y: -88
                },
                {
                    x: 2007,
                    y: -66
                },
                {
                    x: 2008,
                    y: -45
                },
                {
                    x: 2009,
                    y: -29
                },
                {
                    x: 2010,
                    y: -45
                },
                {
                    x: 2011,
                    y: -88
                },
                {
                    x: 2012,
                    y: -132
                },
                {
                    x: 2013,
                    y: -146
                },
                {
                    x: 2014,
                    y: -169
                },
                {
                    x: 2015,
                    y: -184
                }
            ]
        }],

    })
    return (
        <Chart className="w-100" options={state.options} series={state.series} type="area" />
    )
}
export default memo(ChartArea);