import React from 'react';
import { Trans } from 'react-i18next';


const CardNoData = (props) => {

    return (
        <div className="card-body">
            <div className="no_data">
                <figure className="image">
                    <img src="/assets/images/no_data.png" />
                </figure>
                <span className="text"><Trans>no_data</Trans></span>
            </div>
        </div>
    )
}

export default CardNoData;
