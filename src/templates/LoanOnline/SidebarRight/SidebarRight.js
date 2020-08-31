import React from 'react'

export const SidebarRight = () => {
    return (
        <div className="col-12 col-sm-12 col-lg-4">
            <div className="sales_box">
                <div className="sales_heading">
                    <span className="text">Tổng tiền phải trả (đồng)
                            <i className="icon_info fas fa-info-circle" />
                    </span>
                    <span className="number">732.083.313</span>
                </div>
                <div className="borrow__calculator--result">
                    <div className="graph_null">No data</div>
                    <div id="graph01" className="graph" />
                    <div className="details">
                        <div className="details__01">
                            <div className="chart-detail">
                                <span className="status status01">
                                    Số tiền vay
                                    <b>500.000.000</b>
                                </span>
                                <span className="status status02">
                                    Tổng tiền lãi
                                    {/*<b>232.083.313</b>*/}
                                    <b className="null">--</b>
                                </span>
                            </div>
                        </div>
                        <div className="details__02">
                            <span className="text">
                                Số tiền trả kỳ đầu (vnd)
                                <b>6.666.667</b>
                            </span>
                            <span className="text">
                                Tiết kiệm trả nợ trước hạn (vnd)
                                <b className="null">--</b>
                            </span>
                            <span className="text">
                                Phí phạt trả nợ trước hạn (vnd)
                                <b className="null">--</b>
                            </span>
                            <a href="#" className="download"><i className="fas fa-download icon" /> Tải
                                bảng thanh toán từng tháng </a>
                        </div>
                    </div>
                    <div className="list_button_02 flex-wrap">
                        <a href="#" className="btn btn_green text-uppercase">
                            MUA NGAY
                            </a>
                        <a href="#" className="btn btn_purple text-uppercase">
                            ĐẶT CHỔ
                            </a>
                        <a href="#" className="btn mt-3 w-100 btn_red_outline text-uppercase">
                            NỘP HỒ SƠ ONLINE
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
