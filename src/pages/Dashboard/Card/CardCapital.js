import React, { Component } from "react";
import { Trans, withTranslation } from "react-i18next";
import ReactApexChart from "react-apexcharts";

import { CardHeader, CardNodata, Spinner } from "../../../components/common";
import { dashboardService } from "../../../services/index";

class CardCapital extends Component {
  constructor(props) {
    super(props);
    const { t } = this.props
    this.state = {
      loading: false,
      series: [],
      chartOptions: {
        colors: ["#63dcd2", "#67a0f5"],
        labels: ["Funds", "Loan"],
        chart: {
          type: "donut",
          width: 400,
          height: 800,
        },
        plotOptions: {
          pie: {
            // customScale: 1.2,
            expandOnClick: true,
            dataLabels: {
              show: false,
              offset: 0,
              minAngleToShowLabel: 10,
            },
            donut: {
              size: "65%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "25px",
                  color: "#000000",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  offsetY: -10,
                  formatter: function (val) {
                    return t(val);
                  },
                },
                value: {
                  show: true,
                  fontSize: "20px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  offsetY: 16,
                  formatter: function (val) {
                    return val + " (USD)";
                  },
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: "Total",
                  fontSize: "22px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  color: "#373d3f",
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                  },
                },
              },
              onItemHover: {
                highlightDataSeries: true,
              },
            },
          },
        },
        legend: {
          show: true,
          showForSingleSeries: false,
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "14px",
          fontFamily: "Helvetica, Arial",
          fontWeight: 400,
          offsetX: 0,
          offsetY: 10,
          labels: {

            useSeriesColors: false,
            name: {
              colors: "#999999",
            },
            value: {
              color: "#000000",
            },
          },

          formatter: function (series, opts) {
            return [
              t(series) + ":",
              "</br>",
              opts.w.globals.series[opts.seriesIndex] + " (USD)",
            ];
          },

          //css for markers
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: "#fff",
            radius: 12,
            offsetX: "-5px",
            offsetY: "-8px",
          },
          itemBorder: {
            horizontal: 1,
          },
          //margin for menu series bottom
          itemMargin: {
            horizontal: 20,
            vertical: 5,
          },
          onItemClick: {
            toggleDataSeries: true,
          },
        },
        responsive: [
          {
            options: {
              chart: {
                width: 200,
                height: 400,
              },
              legend: {
                show: false,
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  componentDidMount() {
    this.getCharData()
  }
  getCharData = () => {
    this.setState({ loading: true }, () => {
      dashboardService.capitalStructure(this.props.user.token, this.props.project_id).then(
        (res) => {
          const { t } = this.props
          var chartOptions = this.state.chartOptions
          var detail = res['detail']
          var series = []
          if (!(detail.equity == 0 && detail.debt == 0)) {
            series.push(detail['equity'])
            series.push(detail['debt'])
          }
          chartOptions.plotOptions.pie.donut.labels.value.formatter = function (val) {
            return val + ` (${detail['currency_unit_code']})`;
          }
          chartOptions.plotOptions.pie.donut.labels.total.formatter = function (w) {
            return w.globals.seriesTotals.reduce((a, b) => {
              return a + b;
            }, 0) + ` (${detail['currency_unit_code']})`;
          }
          chartOptions.legend.formatter = function (series, opts) {
            return [
              t(series) + ":",
              "</br>",
              opts.w.globals.series[opts.seriesIndex] + ` (${detail['currency_unit_code']})`,
            ];
          }
          this.setState(
            {
              series,
              chartOptions,
              loading: false,
            },
            () => this.forceUpdate()
          );
        },
        (err) => {
          this.setState({ loading: false });
          this.props.showToast("error", err);
        }
      );
    })
  }
  render() {
    return (
      <div className="col-12 col-md-12 col-xl-4" >
        <CardHeader label="home_map_information_on_capital_structure" />
        <div className="card square" style={{ height:"459px" }}  ref="equalHeights" >
          {
            (this.state.loading === false ? (
              (this.state.series != null && this.state.series.length > 0) ? (
                <ReactApexChart
                  className="card-body pt-3 m-0"
                  options={this.state.chartOptions}
                  series={this.state.series}
                  type="donut"
                  height="400"
                />
              ) : (
                  <CardNodata />
                )
            ) : (
                <Spinner />
              ))
          }
        </div>
      </div>
    );
  }
}

export default withTranslation()(CardCapital);
