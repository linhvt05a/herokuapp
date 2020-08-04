import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import CardSummary from "./Card/CardSummary";
import CardFilter from "./Card/CardFilter";
import CardTable from "./Card/CardTable";
import CardMap from "./Card/CardMap";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <CardSummary />
                <div className="row">

                    {/* filter  */}
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                        <div className="h-100">
                            <CardFilter/>
                            <CardTable/>
                        </div>
                    </div>

                    {/* map  */}
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12  mt-lg-0 mt-5  d-flex flex-column">
                        <CardMap />
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard;
