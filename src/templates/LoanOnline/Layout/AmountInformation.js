import React from 'react';
import { convertFloatToString } from '../../../functions/Utils';

const AmountInformation = props => {
    let { data } = props;
    return (
        <div className="borrow__item">
            <div className="borrow__title text-uppercase">THÔNG TIN VAY   <i className="sub"> Nhập số tiền của sản phẩm dự án, chúng tôi sẽ đề nghị khoản vay cho ban. </i>
            </div>
            <div className="borrow__info">
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-4">
                        <div className="form-group mb-3 mb-xl-0">
                            <label className="label">
                                Giá sản phẩm <span className="unit">(đồng)</span>
                            </label>
                            <input type="text" placeholder="-" value={convertFloatToString(data.amount)} readOnly className="form-control color_e94c4c" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <div className="form-group mb-3 mb-xl-0">
                            <label className="label">
                                Số tiền vay
                            </label>
                            <input type="text" placeholder="-" value={convertFloatToString(data.amountBorrow * data.unitPay)} readOnly className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <div className="form-group mb-3 mb-xl-0">
                            <label className="label">
                                Số tiền thanh toán
                            </label>
                            <input type="text" placeholder="-" value={convertFloatToString(data.pay)} readOnly className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(AmountInformation)