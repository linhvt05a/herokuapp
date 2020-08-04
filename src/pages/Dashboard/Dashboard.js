import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { CardCapital, CardCashFlow, CardMap, CardTimeline, ChartSell, ChartRevenua } from "./Card";
import SalesSummary from './Card/SalesSummary';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <SalesSummary />
                <div className="row">
                    <p>List - Maps</p>
                </div>
                <div className="row mt-2">
                    <ChartSell />
                    <ChartRevenua />
                </div>
            </div>
        )
    }
}

export default Dashboard;
