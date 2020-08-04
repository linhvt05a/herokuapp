import React, { Component } from 'react';
import { Trans } from 'react-i18next';

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
                    <p>List - Maps</p>
                    {/* <CardCapital user={this.props.user} showToast={this.props.showToast} />
                    <CardCashFlow user={this.props.user} showToast={this.props.showToast} /> */}
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
