import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class CardSummary extends Component {
    render() {
        return (
            <div className="row sales_summary">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_01 h-100">
                    <div className="image">
                        <i className="icon las la-store" />
                    </div>
                    <div className="text">
                        <div className="text-1">45</div>
                        <div className="text-2">Tổng số đại lý F1</div>
                        <div className="text-3">
                        <span style={{width: '20%'}} className="done" />
                        </div>
                        <div className="text-4"><i className="las la-arrow-up fs-12" /> 2</div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_02 h-100">
                    <div className="image">
                        <i className="icon las la-store" />
                    </div>
                    <div className="text">
                        <div className="text-1">119</div>
                        <div className="text-2">Tổng số sales</div>
                        <div className="text-3">
                        <span style={{width: '20%'}} className="done" />
                        </div>
                        <div className="text-4"><i className="las la-arrow-up fs-12" /> 15</div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_03 h-100">
                    <div className="image">
                        <i className="icon las la-building" />
                    </div>
                    <div className="text">
                        <div className="text-1">58</div>
                        <div className="text-2">Tổng số dự án </div>
                        <div className="text-3">
                        <span style={{width: '20%'}} className="done" />
                        </div>
                        <div className="text-4"><i className="las la-arrow-up fs-12" /> 2</div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_04 h-100">
                    <div className="image">
                        <i className="icon las la-hotel" />
                    </div>
                    <div className="text">
                        <div className="text-1">152</div>
                        <div className="text-2">Tổng sản phẩm đang bán</div>
                        <div className="text-3">
                        <span style={{width: '20%'}} className="done" />
                        </div>
                        <div className="text-4"><i className="las la-arrow-up fs-12" /> 45</div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CardSummary;
