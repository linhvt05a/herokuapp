import React, { useRef } from 'react';


const ChartDonutText = props => {
    let chartRef = useRef();
    // React.useEffect(() => {
    //     var chart = am4core.create("myChart", am4charts.PieChart);

    //     // Add data
    //     chart.data = [{
    //         "country": "Lithuania",
    //         "value": 501.9
    //     }, {
    //         "country": "Czechia",
    //         "value": 301.9
    //     }, {
    //         "country": "Ireland",
    //         "value": 201.1
    //     }, {
    //         "country": "Germany",
    //         "value": 165.8
    //     }, {
    //         "country": "Australia",
    //         "value": 139.9
    //     }, {
    //         "country": "Austria",
    //         "value": 128.3
    //     }];

    //     // Add and configure Series
    //     var pieSeries = chart.series.push(new am4charts.PieSeries());
    //     pieSeries.dataFields.value = "value";
    //     pieSeries.dataFields.category = "country";
    //     pieSeries.labels.template.disabled = true;
    //     pieSeries.ticks.template.disabled = true;

    //     chart.legend = new am4charts.Legend();
    //     chart.legend.position = "right";

    //     chart.innerRadius = am4core.percent(60);

    //     // var label = pieSeries.createChild(am4core.Label);
    //     // label.text = "${values.value.sum}";
    //     // label.horizontalCenter = "middle";
    //     // label.verticalCenter = "middle";
    //     // label.fontSize = 40;
    // }, [chartRef])

    return (
        <canvas id="myChart" ref={chartRef} height="250" className="my-chart" />
    )
}
export default ChartDonutText