import React from 'react';
import { Trans } from 'react-i18next';
import { IMAGE_URL } from '../../contant';

const CardNoData = (props) => {

    return (
        <div className="card-body">
            <div className="card-nodata-alert">
                <img className="w-100 img-fluid" src={`${IMAGE_URL}images/no_data.png`} alt="No Data" />
            </div>
        </div>
    )
}

export default CardNoData;
