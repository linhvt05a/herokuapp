import React from 'react';
import { convertFloatToString, formatDate } from '../../../functions/Utils';

const PaymentDetail = props => {
    let { translate } = props
    const renderDate = (index) => {
        let newDate = null;
        if (props.date) {
            newDate = new Date(formatDate(props.date, "DD-MM-YYYY"));
        }
        else {
            newDate = new Date()
        }
        return `${(newDate).getDate()}/${(newDate).getMonth() + index + 2}/${(newDate).getFullYear()}`
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="borrow__item mt-4">
                    <div className="borrow__title">
                        <span className="d-flex align-items-center text-uppercase borrow__top">{translate("loan_payment_detail")}</span>
                    </div>
                    <div className="table_basic">
                        <div className="top_table">
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan={2} style={{ width: '20%' }}>  KỲ TRẢ NỢ </th>
                                        <th style={{ width: '20%' }}>SỐ GỐC CÒN LẠI (VND)  </th>
                                        <th style={{ width: '20%' }}>GỐC (VND)</th>
                                        <th style={{ width: '20%' }}>LÃI (VND) </th>
                                        <th style={{ width: '20%' }}>TỔNG GỐC + LÃI (VND) </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="body_table">
                            <table >
                                <thead>
                                </thead>
                                <tbody>
                                    {props.data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td style={{ width: '14%' }}>{renderDate(index)}</td>
                                                <td style={{ width: '6%' }}>{item}</td>
                                                <td style={{ width: '20%' }}><span className="text_51c471">1.621.727.817 </span></td>
                                                <td style={{ width: '20%' }}>{convertFloatToString(135143983)}</td>
                                                <td style={{ width: '20%' }}> <span className="color_e94c4c">10.135.799</span></td>
                                                <td style={{ width: '20%' }}> <span className="color_e94c4c">145.279.782</span></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="bottom_table">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ width: '40%' }} colSpan={3} className="text-left pl-5">{translate("total")}</th>
                                        <th style={{ width: '20%' }}>1.621.727.800</th>
                                        <th style={{ width: '20%' }}>121.629.585</th>
                                        <th style={{ width: '20%' }}>1.743.357.385</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PaymentDetail