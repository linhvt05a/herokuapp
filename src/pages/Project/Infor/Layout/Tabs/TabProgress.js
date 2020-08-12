import React from 'react';

const TabProgress = () => {
    return (
        <div className="data_null">
            <figure class="data_null--image">
                <img src={require('../../../../../../public/static/images/no_data.png')} alt=""/>
                <span class="data_null--text text-uppercase">No data</span>
            </figure>
        </div>
    )
}

export default TabProgress;