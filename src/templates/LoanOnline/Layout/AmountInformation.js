import React from 'react';
import { convertFloatToString } from '../../../functions/Utils';

const AmountInformation = props => {
    let { data, amountBorrow, pay, translate } = props;
    return (
        <div className="borrow__item">
            <div className="borrow__title text-uppercase">{translate("loan_information")}
                <i className="sub"> {translate("loan_text_1")} </i>
            </div>
            <div className="borrow__info">
                {data &&
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="form-group mb-3 mb-xl-0">
                                <label className="label">
                                    {translate("cart_product_price")} <span className="unit">({data.estimate_price_master_unit_name})</span>
                                </label>
                                <input type="text" placeholder="-" value={convertFloatToString(data.estimate_price)} readOnly className="form-control color_e94c4c" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="form-group mb-3 mb-xl-0">
                                <label className="label">
                                    {translate("loan")}
                                </label>
                                <input type="text" placeholder="-" value={amountBorrow > 0 ? convertFloatToString(amountBorrow) : 0} readOnly className="form-control" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="form-group mb-3 mb-xl-0">
                                <label className="label">
                                    {translate("cart_amount_paid")}
                                </label>
                                <input type="text" placeholder="-" value={amountBorrow > 0 ? convertFloatToString(pay) : convertFloatToString(data.estimate_price)} readOnly className="form-control" />
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}
export default React.memo(AmountInformation)