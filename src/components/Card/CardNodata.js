import React, { Component } from 'react';
import { Trans } from 'react-i18next';


class CardNodata extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="no_data">
                    <figure className="image">
                        <img src="/static/images/no_data.png" alt="No Data"/>
                    </figure>
                    <span className="text"><Trans>No Data</Trans></span>
                </div>
            </div>
        )
    }
}

export default CardNodata;
