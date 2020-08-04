import React, { Component } from 'react';
import InputDatePicker from '../../../components/input/InputDate';
import ApexChartsRevenue from 'react-apexcharts';

class ChartRevenue extends Component {
    constructor() {
        super();
        this.state = {
            series: [{
                name: 'Số sản phẩm bán ra',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
            }, {
                name: 'Doanh thu',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
            }],
            options: {
                chart: {
                    height: 500,
                    type: 'line',
                    stacked: false,
                },
                stroke: {
                    width: [0, 2, 5],
                    curve: 'smooth'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%'
                    }
                },
                legend: {
                    show: false,
                },
                fill: {
                    colors:['#9a59dc', '#6bbcd7'],
                    type: 'solid',
                    opacity: [1, 0.4, 1],
                    gradient: {
                        inverseColors: false,
                        shadeIntensity: 1,
                        type: "vertical",
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 90, 100]
                    }
                },
                labels: ['01/01/2019', '02/01/2019', '03/01/2019', '04/01/2019', '05/01/2019', '06/01/2019', '07/01/2019',
                    '08/01/2019', '09/01/2019', '10/01/2019', '11/01/2019'
                ],
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    title: {
                        // text: 'Sản phẩm',
                    },
                    min: 0
                },
                dataLabels: {
                    enabled: false
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy'
                    },
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function(y) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " Sản phẩm";
                            }
                            return y;
    
                        }
                    }
                },
                colors:['#9a59dc', '#6bbcd7'],
            },
        };
    }
    render() {
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex flex-column">
                <div className="m_heading">
                    <button className="m_button no-event"><span>Thống kê doanh thu</span></button>
                    <div className="dropdown m_select m_dropdown">
                        <button className=" m_select--label m_dropdown--label square  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            TẤT CẢ DỰ ÁN
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">TẤT CẢ DỰ ÁN 1</a>
                            <a className="dropdown-item" href="#">TẤT CẢ DỰ ÁN 1</a>
                            <a className="dropdown-item" href="#">TẤT CẢ DỰ ÁN 1</a>
                            <a className="dropdown-item" href="#">TẤT CẢ DỰ ÁN 1</a>
                        </div>
                    </div>
                </div>
                <div className="card h-100">
                    <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-start flex-sm-nowrap justify-content-sm-between">
                            <div className="sales_status">
                                <p className="title w-100 mb-2">Chú thích</p>
                                <p className="item">
                                    <span className="square sales_status_01_bg"></span>
                                    <span className="text sales_status_01_text">Số sản phẩm bán ra</span>
                                </p>
                                <p className="item">
                                    <span className="square sales_status_03_bg"></span>
                                    <span className="text sales_status_03_text">Doanh thu</span>
                                </p>
                            </div>
                            <div className="sales_select-dates">
                                <div className="item from">
                                    <div className="text">Từ</div>
                                    <InputDatePicker />
                                </div>
                                <div className="item to">
                                    <div className="text">Đến</div>
                                    <InputDatePicker />
                                </div>
                            </div>
                        </div>

                        <div id="revenueStatistics" className="chart">
                            <ApexChartsRevenue options={this.state.options} series={this.state.series} type="line" height="500" />
                            <div className="unit mt-3">Sản phẩm</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChartRevenue;