import React, { Component } from 'react';

import { CardHeader } from '../../components/common';
import { CardFilter } from './Card/index';

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                    <CardHeader label="ProjectFilterTitle" />
                    <CardFilter token="MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx" />
                </div>
            </div>
        )
    }
}

export default Dashboard;
