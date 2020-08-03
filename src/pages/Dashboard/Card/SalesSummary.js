import React, { Component } from 'react';

class SalesSummary extends Component {
    render() {
        return (
            <div className="row sales_summary">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_01 h-100">
                        <div className="image">
                            <i className="icon las la-store"></i>
                        </div>
                        <div className="text">
                            <div className="text-1">45</div>
                            <div className="text-2">Tổng số đại lý F1</div>
                            <div className="text-3">
                                {/* <span style="width: 20%;" className="done"></span> */}
                            </div>
                            <div className="text-4"><i className="las la-arrow-up fs-12"></i> 2</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalesSummary;