import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import ReactApexChart from "react-apexcharts";

import { CardHeader, CardNodata, Spinner } from '../../../components/common';
import { dashboardService } from "../../../services/index";

class CardCashFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: null,
            options: {
                chart: {
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    categories: []
                },
                grid: {
                    yaxis: {
                        lines: {
                            offsetX: -30
                        }
                    },
                    padding: {
                        left: 20
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    floating: false,

                    labels: {
                        style: {
                            colors: '#8e8da4',
                        },
                        offsetY: -7,
                        offsetX: 0,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    }
                },
                legend:{
                    show: true,
                    showForSingleSeries: true,
                },
                title: {
                    text: 'Area with Negative Values',
                    align: 'center',
                    style: {
                        fontSize: '18px',
                        color:'#333333'
                    }
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy'
                    },
                },
            },
        };
    }

    converSeries = (data) => {
        var series = [{
            name: 'Total Project Cash flow',
            data: []
        }]
        if (data) {
            for (var key in data) {
                var x = key
                var y = data[key]
                var model = { x, y }
                series[0].data.push(model)
            }
        }
        return {
            series
        }
    }
    componentDidMount() {
        this.setState({ loading: true });
        dashboardService.cashFlow(this.props.user.token).then(
            res => {
                const { series } = this.converSeries(res['detail']['profit_data'])
                this.setState({ loading: false, series: series });
                this.forceUpdate();
            },
            err => {
                this.setState({ loading: false });
                this.props.showToast('error', err);
            }
        );
    }

    render() {
        return (
            <div className="col-12 col-md-12 col-xl-8" >
                <CardHeader label="home_map_project_cash_flow" />
                <div className="card square">
                    <div className="card-body p-0 m-0">
                        {
                            this.state.loading = true ?
                                (
                                    this.state.series != null ?
                                        (
                                            <ReactApexChart className="card-body pt-3 m-0" options={this.state.options} series={this.state.series} type="area" height="300" />
                                        ) :
                                        (<CardNodata />)
                                ) :
                                (<Spinner />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}



export default CardCashFlow;
