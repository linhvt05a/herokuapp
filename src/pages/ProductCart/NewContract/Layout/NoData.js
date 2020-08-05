import React from 'react';
import noData from '../../../../../public/static/images/no_data.png';

const Nodata = (props) => {
    return (
        <div class="data_null mt-4 mb-4">
            <figure class="data_null--image">
                <img src={noData} alt="" />
                <span class="data_null--text text-uppercase">No data</span>
            </figure>
        </div>
    );
}

export default Nodata;