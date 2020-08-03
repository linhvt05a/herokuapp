 $(document).ready(function () {
    //Select 2 auto call
    $('.select2').select2({
        width: 'resolve'
    });

//Column chart start
//Get the context of the Chart canvas element we want to select
var ctx = $("#column-chart");

// Chart Options
var chartOptions = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each bar to be 2px wide and green
    elements: {
        rectangle: {
            borderColor: 'rgb(0, 255, 0)',
            borderSkipped: 'bottom'
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
        position: 'top',
    },
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                color: "#f3f3f3",
                drawTicks: false,
            },
            scaleLabel: {
                display: true,
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                color: "#f3f3f3",
                drawTicks: false,
            },
            scaleLabel: {
                display: true,
            }
        }]
    },
};

//Start Map




//Dùng để add control--> Mục đích: để tìm lat lon, center, get codinate.
// L.control.layers({
//     'osm': layer_base,
//     "google": L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
//         attribution: 'google'
//     })
// }, {'drawlayer': drawnItems}, {position: 'topleft', collapsed: false}).addTo(map);
// map.addControl(new L.Control.Draw({
//     edit: {
//         featureGroup: drawnItems,
//         poly: {
//             allowIntersection: false
//         }
//     },
//     draw: {
//         polygon: {
//             allowIntersection: false,
//             showArea: true
//         }
//     }
// }));
//
// map.on(L.Draw.Event.CREATED, function (event) {
//     var layer = event.layer;
//
//     drawnItems.addLayer(layer);
// });
//End map

// Start Char bar
//Detect check exist data
data_doughnut = true;
if (!data_doughnut) {
    backgroundColor = ["#e7e7e7", "#606060"];
    datasets = [18, 82];
} else {
    backgroundColor = ["#5ebfff", "#fcbb2c"];
    datasets = [18, 82];
}

Chart.defaults.hitRateDoughnut = Chart.defaults.doughnut;
n = Chart.controllers.doughnut.prototype.draw;
var a = Chart.controllers.doughnut.extend({
    draw: function () {
        n.apply(this, arguments);
        var t = this.chart.chart.ctx
            , e = t.fill
            , o = this.chart.width
            , a = this.chart.height
            , r = (a / 114).toFixed(2);
        if (!data_doughnut) {
            this.chart.ctx.font = "italic 18px  Lato",
                this.chart.ctx.textBaseline = "middle";
            var i = Math.round((o - this.chart.ctx.measureText("No Data").width) / 2)
                , l = a / 2;
            this.chart.ctx.fillText("No Data", i, l),
                this.chart.ctx.fillStyle = '#e7e7e7'
        } else {
            this.chart.ctx.font = "italic 16px  Lato",
                this.chart.ctx.fillStyle = "black",
                this.chart.ctx.textBaseline = "middle";
            var i = Math.round((o - this.chart.ctx.measureText("No Data").width) / 2)
                , l = a / 2;
            this.chart.ctx.fillText("Tổng vốn đầu tư", i - 30, l - 30),
                this.chart.ctx.font = "bold 18px  Lato",
                this.chart.ctx.fillStyle = "black",
                this.chart.ctx.fillText("63.94%", i, l - 10),
                this.chart.ctx.font = "normal 16px  Lato",
                this.chart.ctx.fillStyle = "black",
                this.chart.ctx.fillText("triệu (USD)", i - 20, l + 10)
        }

        t.fill = function () {
            t.save(),
                t.shadowColor = "white",
                t.shadowBlur = 30,
                t.shadowOffsetX = 0,
                t.shadowOffsetY = 12,
                e.apply(this, arguments),
                t.restore()
        }
    }
});
Chart.controllers.hitRateDoughnut = a;

//End char bar

//Start Bar Multi Axis Chart

var dom = document.getElementById("bar-multi-axis");
var myChart = echarts.init(dom);
var app = {};
option_echar = null;
app.title = '';

$.get('get_cashflow_data/', function(data) {
    negative_data   = data['negative_data'];
    positive_data   = data['positive_data'];
    year_list       = data['year_list'];

    flag_nodata     = false;
    //Check show text "no data"
    if (!negative_data || !positive_data) {
        flag_nodata = true;
    }

    option_echar = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            show: false
        },
        legend: {
            data: []
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        //Show no data
        title: {
            show: flag_nodata,
            textStyle: {
                color: "grey",
                fontFamily: 'Lato',
                fontStyle: 'italic',
                fontWeight: 'normal',
                fontSize: 30
            },
            text: "No data",
            left: "center",
            top: "center"
        },
        xAxis: [
            {
                type: 'value',
                axisTick: {show: true},
                splitLine: {
                    show: false,
                    length: 30,
                    lineStyle: {
                        color: '#eee',
                        width: 2,
                        type: 'solid'
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'category',
                splitLine: {
                    show: true,
                    length: 30,
                    alignWithLabel: true,
                    lineStyle: {
                        color: '#eee',
                        width: 1,
                        type: 'dashed'
                    }
                },
                data: year_list,
            }
        ],
        series: [
            {
                name: 'Negative cashflows',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                itemStyle: {color: '#93aa00'},
                // data: []
                data: negative_data
            },
            {
                name: 'Positive cashflows',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                itemStyle: {color: '#fe7448'},
                data: positive_data
                // data: []
            }
        ]
    };
    if (option_echar && typeof option_echar === "object") {
        myChart.setOption(option_echar, true);
    }


});
// negative_data   = ['-', '-', '-', '300', '400', '450', '800'];
// positive_data   = ['-100', '-200', '-300', '-', '-', '-', '-'];
// year_list       = [ '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', 
//                     '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038'
//                   ]


//End Bar Multi Axis Chart

//Start function step

//End function step
///////
//END FUNCTION
//////
});
