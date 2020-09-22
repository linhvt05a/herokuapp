import React from 'react';

const SidebarLeft = ({ status }) => {
    return (
        <div className="col-12 col-sm-12 col-lg-4">
            <div className="loan_online--process">
                <div className="heading">
                    <span className="number">Bước tạo hồ sơ vay vốn<i className="icon_info fas fa-info-circle" />
                    </span>
                </div>
                <div className="graph_info">
                    <div id="graph01" className="graph" />
                    <div className="graph_status row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-6">
                            <span className="status status01">
                                Số tiền vay<b>732.083.313</b>
                            </span>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-6">
                            <span className="status status02">
                                Tổng tiền lãi<b>732.083.313</b>
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-6">
                            <span className="status status03">
                                Tổng tiền phải trả<b>732.083.313</b>
                            </span>
                        </div>
                    </div>
                    <div className="loan_online--step">
                        <div className={`step step_1 ${status == 1 ? "active" : status > 1 && "done"}`}>
                            <span className="symbol">
                                <i className="icon las la-address-card" />
                            </span>
                            <span className="text">Thông tin chung</span>
                        </div>
                        <div className={`step step_2 ${status == 2 ? "active" : status > 2 && "done"}`}>
                            <span className="symbol">
                                <i className="icon las la-building" />
                            </span>
                            <span className="text">Công tác và thu nhập</span>
                        </div>
                        <div className={`step step_3 ${status == 3 ? "active" : status > 3 && "done"}`}>
                            <span className="symbol">
                                <i className="icon las la-money-check-alt" />
                            </span>
                            <span className="text">Tài sản và khoản đã vay</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(SidebarLeft)