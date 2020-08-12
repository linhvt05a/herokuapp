import React, { Component } from 'react';
import Highcharts from 'highcharts'
import { Trans, withTranslation } from "react-i18next";

class CardColumnChart extends Component {
    componentDidUpdate() {
        this.handelColumnChart()
    }
    handelColumnChart() {
        const { t, data } = this.props
        var categories = []
        if (data.year_from && data.year_to) {
            for (var i = data.year_from; i <= data.year_to; i++) {
                categories.push(i)
            }
        }
        var negativeData = []
        var positiveData = []
        if (data.profit_data) {
            for (var i = 0; i < data.profit_data.length; i++) {
                var model = data.profit_data[i]
                if (model < 0) {
                    negativeData.push(model)
                    positiveData.push(0)
                } else {
                    negativeData.push(0)
                    positiveData.push(model)
                }
            }
        }
        var subtitle = t(data.project_status_name + " " + data.currency_unit_name)
        Highcharts.chart('columnChart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: data.project_name
            },
            subtitle: {
                text: subtitle
            },
            accessibility: {
                point: {
                    descriptionFormatter: function (point) {
                        var index = point.index + 1,
                            category = point.category,
                            val = Math.abs(point.y),
                            series = point.series.name;
                        return index + ', Age ' + category + ', ' + val + '%. ' + series + '.';
                    }
                }
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                },
                accessibility: {
                    description: ''
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                },
                accessibility: {
                    description: ''
                }
            }],
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000000;
                    }
                },
                accessibility: {
                    description: '',
                    rangeDescription: ''
                }
            },
            // tooltip: {
            //     formatter: function () {
            //         return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
            //             'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
            //     }
            // },
            series: [{
                name: 'Negative cash flows',
                data: negativeData,
                color: '#fb9334'
            }, {
                name: 'Positive cash flows',
                data: positiveData,
                color: '#51c471'
            }]
        });

    }
    render() {
        return (<figure className="highcharts-figure">
            <div id="columnChart"></div>
        </figure>)
    }
}
export default withTranslation()(CardColumnChart)