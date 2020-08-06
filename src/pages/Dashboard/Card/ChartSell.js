import React, { Component, memo } from 'react';
import InputDatePicker from '../../../components/input/InputDate';
import ApexCharts from 'react-apexcharts';

class ChartSell extends Component {
    constructor() {
        super();
        this.state = {
            series: [{
                data: [44, 55, 41, 64, 22, 43, 21]
            }, {
                data: [53, 32, 33, 52, 13, 44, 32]
            }, {
                data: [53, 32, 33, 52, 13, 44, 20]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 500
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%',
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ['Sunrise City', 'Sunrise City', 'Adora Garden', 'Royal City', 'Luxury Palace']
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: '#000000',
                            fontSize: '12px',
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 500,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                },
                legend: {
                    show: false,
                },
                fill: {
                    colors: ['#6bbcd7', '#d8d8d8', '#9a59dc']
                },
                colors: ['#6bbcd7', '#d8d8d8', '#9a59dc'],
            },
        };
    }
    render() {
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex flex-column">
                <div className="m_heading">
                    <button className="m_button no-event"><span>Thống kê số lượng bán </span></button>
                </div>
                <div className="card h-100">
                    <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-start flex-sm-nowrap justify-content-sm-between">
                            <div className="sales_status">
                                <p className="title w-100 mb-2">Chú thích</p>
                                <p className="item">
                                    <span className="square sales_status_01_bg"></span>
                                    <span className="text sales_status_01_text">Đang bán</span>
                                </p>
                                <p className="item">
                                    <span className="square sales_status_02_bg"></span>
                                    <span className="text sales_status_02_text">Đặt chỗ</span>
                                </p>
                                <p className="item">
                                    <span className="square sales_status_03_bg"></span>
                                    <span className="text sales_status_03_text">Đã bán</span>
                                </p>
                            </div>
                            <div className="sales_select-dates">
                                <div className="item from">
                                    <div className="text">Từ</div>
                                    {/* <div className="m_datepicker">
                                        <input type="text" className="form-control js-datepicker" placeholder="-" />
                                    </div> */}
                                    <InputDatePicker />
                                </div>
                                {/* <InputDatePicker /> */}
                                <div className="item to">
                                    <div className="text">Đến</div>
                                    <InputDatePicker />
                                    {/* <div className="m_datepicker">
                                        <input type="text" className="form-control js-datepicker" placeholder="-" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div id="quantityStatistics" className="chart">
                            <ApexCharts options={this.state.options} series={this.state.series} type="bar" height="500" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default memo(ChartSell);