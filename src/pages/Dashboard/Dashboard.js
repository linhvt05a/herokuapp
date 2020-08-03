import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { CardCapital, CardCashFlow, CardMap, CardTimeline } from "./Card";
import SalesSummary from './Card/SalesSummary';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <SalesSummary />
                </div>
                <div className="row">
                    <CardMap user={this.props.user} showToast={this.props.showToast} search={this.props.search} updateLocation={this.props.updateLocation} />
                </div>

                <div className="row">
                    <CardCapital user={this.props.user} showToast={this.props.showToast} />
                    <CardCashFlow user={this.props.user} showToast={this.props.showToast} />
                </div>

                <div className="row">
                    <CardTimeline user={this.props.user} showToast={this.props.showToast} search={this.props.search} updateLocation={this.props.updateLocation}/>
                </div>
            </div>
        )
    }
}

export default Dashboard;
