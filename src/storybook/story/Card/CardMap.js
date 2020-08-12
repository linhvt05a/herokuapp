import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { MapBox, CardHeader } from '../common';

class CardMap extends Component {
    render() {
        return (
            <div className={this.props.className ? this.props.className : ""}>
                <CardHeader label="map"/>
                <MapBox />
            </div>
        )
    }
}
export default CardMap;
