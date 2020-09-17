import React from 'react'
import { convertFloatToString } from '../../../functions/Utils';
import { ChartDonutText } from "../Layout"

const SidebarRight = props => {
    let { data } = props;
    const totalInterest = () => {
        let total = 0;
        if (data.tenor < data.preferential_term) {
            total = data.amountBorrow * ((data.post_preferential_interest_rate_percent / 12) * 100 * data.tenor) / 10000
        }
        else {
            total = data.amountBorrow * (((data.post_preferential_interest_rate_percent / 12) * data.preferential_term * 100) + ((data.preferential_interest_rate_percent / 12) * (data.tenor - data.preferential_term) * 100));
        }
        return parseFloat(total).toFixed(0)
    }
    return (
        <div className="col-12 col-sm-12 col-lg-4">
            <div className="sales_box">
                <div className="sales_heading">
                    <span className="text">{data ? "Tổng tiền phải trả (đồng)" : "NO DATA"}
                        <i className="icon_info fas fa-info-circle" />
                    </span>
                    <span className="number">{data ? convertFloatToString((data.amountBorrow) + parseInt(totalInterest())) : '-----'}</span>
                </div>
                <div className="borrow__calculator--result">
                    {data ? <ChartDonutText data={data} /> : <div className="graph_null">No data</div>}

                    <div id="graph01" className="graph" />
                    {data &&
                        <div className="details">
                            <div className="details__01">
                                <div className="chart-detail">
                                    <span className="status status01">
                                        Số tiền vay <b>{data ? convertFloatToString(data.amountBorrow) : 0}</b>
                                    </span>
                                    <span className="status status02">
                                        Tổng tiền lãi
                                    {/*<b>232.083.313</b>*/}
                                        <b className="null">{convertFloatToString(totalInterest())}</b>
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
                        </div>}
                    {data &&
                        <div className="list_button_02 flex-wrap">
                            <a href="#" className="btn btn_green text-uppercase">
                                MUA NGAY
                            </a>
                            <a href="#" className="btn btn_purple text-uppercase">
                                ĐẶT CHỔ
                            </a>
                        </div>}
                </div>
            </div>
        </div>
    )
}
export default React.memo(SidebarRight)
