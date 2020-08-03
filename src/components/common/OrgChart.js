import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js/orgchart';

// template
//ana
//ula
//olivia
//belinda
//rony *
//mery
//polina
//mila
//diva
//luba
//derek
//base

export default class extends Component {

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        OrgChart.templates.ula.field_0 = '<text class="field_0" style="font-size: 12px;" fill="#000000" x="125" y="30" text-anchor="middle" width="200">{val}</text>';
        OrgChart.templates.ula.field_1 = '<text class="field_1" style="font-size: 18px;" fill="#000000" x="125" y="60" text-anchor="middle" width="200">{val}</text>';
        OrgChart.templates.ula.field_2 = '<text class="field_2" style="font-size: 12px;" fill="#000000" x="125" y="80" text-anchor="middle" width="200">{val}</text>';

        this.chart = new OrgChart(this.refs.tree , {
            collapse: {
                level: 3,
                allChildren: true
            },
            enableSearch: false,
            nodes: this.props.nodes,
            template: "ula",
            nodeBinding: {
                field_0: "department",
                field_1: "name",
                field_2: "position"
            }
        });

    }

    render() {
        return (
             <div id="tree" ref="tree"></div>
        );
    }
}
