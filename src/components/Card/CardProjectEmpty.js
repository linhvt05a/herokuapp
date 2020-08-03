import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class CardProjectEmpty extends Component{
    render(){
        return(
            <div className="card h-100">
                <div className="card-body">
                    <div className="m_chart--donut">
                        <div id="donut-chart" />
                        <div className="no_data">
                            <figure className="image"><img src="/static/img/no_data.png" alt="No Data" /></figure>
                            <span className="text">Không có dữ liệu</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardProjectEmpty
