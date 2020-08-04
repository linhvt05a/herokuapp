import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class CardMap extends Component {
    render() {
        return (
            <div className="h-100">
                <div className="m_heading">
                    <button className="m_button no-event"><span>Bản Đồ</span></button>
                </div>
                <div className="card">
                    <div className="card-body p-0">
                        <div id="map" style={{height: '100% !important', minHeight: 715}} />
                    </div>
                    <div className="card-body d-none">
                        <div id="nodata" style={{height: '100% !important', minHeight: 675}} className="d-flex align-items-center">
                            <div className="data_null">
                            <figure className="data_null--image">
                                <img src="../images/all/no_data.png" alt="no data" />
                                <span className="data_null--text text-uppercase">No data</span>
                            </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardMap;
