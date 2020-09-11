import React from 'react';

const PaymentDetail = props => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="borrow__item mt-4">
                    <div className="borrow__title">
                        <span className="d-flex align-items-center text-uppercase borrow__top">
                            CHI TIẾT THANH TOÁN
        </span>
                    </div>
                    <div className="table_basic">
                        <div className="top_table">
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan={2} style={{ width: '20%' }}>
                                            KỲ TRẢ NỢ
                </th>
                                        <th style={{ width: '20%' }}>
                                            SỐ GỐC CÒN LẠI (VND)
                </th>
                                        <th style={{ width: '20%' }}>
                                            GỐC (VND)
                </th>
                                        <th style={{ width: '20%' }}>
                                            LÃI (VND)
                </th>
                                        <th style={{ width: '20%' }}>
                                            TỔNG GỐC + LÃI (VND)
                </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="body_table">
                            {'{'}% for i in 0..20 %{'}'}
                            {'{'}% endfor %{'}'}
                            <table>
                                <thead>
                                </thead>
                                <tbody><tr>
                                    <td style={{ width: '14%' }}>27/08/2020</td>
                                    <td style={{ width: '6%' }}>01</td>
                                    <td style={{ width: '20%' }}><span className="text_51c471">1.621.727.817 </span></td>
                                    <td style={{ width: '20%' }}>135.143.983</td>
                                    <td style={{ width: '20%' }}> <span className="color_e94c4c">10.135.799</span></td>
                                    <td style={{ width: '20%' }}> <span className="color_e94c4c">145.279.782</span></td>
                                </tr></tbody>
                            </table>
                        </div>
                        <div className="bottom_table">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ width: '40%' }} colSpan={3} className="text-left pl-5">TỔNG</th>
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