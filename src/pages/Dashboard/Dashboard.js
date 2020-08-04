import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { CardFilter } from './Card/index';

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <CardFilter token="MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx" className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column" />
            </div>
        )
    }
}

export default Dashboard;
