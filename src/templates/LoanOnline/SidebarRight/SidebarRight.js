import React from 'react'
import { convertFloatToString } from '../../../functions/Utils';
import { ChartDonutText } from "../Layout"

export const SidebarRight = props => {
    let { data } = props;
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
                    <ChartDonutText />
                    {/* <div className="graph_null">No data</div> */}
                    <div id="graph01" className="graph" />
                    <div className="details">
                        <div className="details__01">
                            <div className="chart-detail">
                                <span className="status status01">
                                    Số tiền vay <b>{convertFloatToString(data.amountBorrow * data.unitPay)}</b>
                                </span>
                                <span className="status status02">
                                    Tổng tiền lãi
                                    {/*<b>232.083.313</b>*/}
                                    <b className="null">{convertFloatToString(data.amountBorrow * (data.interestIncentives * 100) * data.unitPay / 10000)}</b>
                                </span>
                            </div>
                        </div>
                        <div className="details__02">
                            <span className="text">
                                Số tiền TB hàng tháng trả (đồng)<b>{convertFloatToString(parseFloat(((data.amountBorrow * data.unitPay) + (data.amountBorrow * (data.interestIncentives * 100) * data.unitPay / 10000)) / (data.tenor * 12)).toFixed(0))}</b>
                            </span>
                            <a className="download"><i className="fas fa-download icon" /> Tải
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
                    </div>
                </div>
            </div>
        </div>
    )
}
