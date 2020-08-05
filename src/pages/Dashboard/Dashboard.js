import React, { Component } from 'react';

import { CardHeader } from '../../components/common';
import { CardFilter } from './Card/index';
import { CardCapital, CardCashFlow, CardMap, CardTimeline, ChartSell, ChartRevenua } from "./Card";
import SalesSummary from './Card/SalesSummary';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <SalesSummary />
                {/* <div className="row">
                    <CardMap user={this.props.user} showToast={this.props.showToast} search={this.props.search} updateLocation={this.props.updateLocation} />
                </div> */}

                <div className="row">
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                        <CardHeader label="ProjectFilterTitle" />
                        <CardFilter token="MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx" />
                    </div>
                </div>

                {/* <div className="row">
                    <CardTimeline user={this.props.user} showToast={this.props.showToast} search={this.props.search} updateLocation={this.props.updateLocation}/>
                </div> */}
                <div className="row mt-2">
                    <ChartSell />
                    <ChartRevenua />
                </div>
            </div>
        )
    }
}

export default Dashboard;
