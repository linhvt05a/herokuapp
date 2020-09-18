import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ButtonBuyNow, SelectCustom } from "../../../components/base"
import { convertFloatToString, translate } from '../../../functions/Utils';
import { useTranslation } from 'react-i18next';

const PropertyFilter = (props) => {
    let { t } = useTranslation()
    const [progress, setProgress] = useState({
        idProcess: 1,
        idPolicy: 1,
        discount: 0,
        discountAmount: 0,
        totalPayment: 3000000000
    });
    let paymentPolicy = [
        { value: 1, label: "Chính sách thanh toán A" },
        { value: 2, label: "Chính sách thanh toán B" },
        { value: 3, label: "Chính sách thanh toán C" },
        { value: 4, label: "Chính sách thanh toán D" }
    ]
    let paymentProress = [
        { value: 1, label: "Tiến độ chuẩn" },
        { value: 2, label: "Thanh toán sớm 10%" },
        { value: 3, label: "Thanh toán sớm 20%" },
        { value: 4, label: "Thanh toán sớm 30%" },
        { value: 5, label: "Thanh toán sớm 40%" }
    ]

    const onProgressChange = (value) => {
        switch (value) {
            case 2:
                setProgress({ ...progress, idProcess: value, discount: 5, discountAmount: 10000000, totalPayment: 50000000 });
                break;
            case 3:
                setProgress({ ...progress, idProcess: value, discount: 10, discountAmount: 15000000, totalPayment: 45000000 });
                break;
            case 4:
                setProgress({ ...progress, idProcess: value, discount: 15, discountAmount: 20000000, totalPayment: 40000000 });
                break;
            case 5:
                setProgress({ ...progress, idProcess: value, discount: 20, discountAmount: 25000000, totalPayment: 35000000 });
                break;
            default:
                setProgress({ ...progress, idProcess: value, discount: 0, discountAmount: 0, totalPayment: 3000000000 });
                break;
        }
    };



    return (
        <div className="sales_box">
            <div className="sales_heading">
                <span className="text">{translate("cart_listed_price")} ({translate("cart_dong")})
                    <i className="icon_info fas fa-info-circle" />
                </span>
                <span className="number">3.000.000.000</span>
            </div>
            <div className="sales_policy--calculator">

                <SelectCustom
                    label={`${translate("cart_payment_policy", t)}:`}
                    titleClassName="label"
                    classNameSelect="select2 js-select2 form-control"
                    value={progress.idPolicy}
                    datas={paymentPolicy}
                    onChange={(value) => setProgress({ ...progress, idPolicy: value })}
                />
                <SelectCustom
                    label={`${translate("cart_payment_progress", t)}:`}
                    titleClassName="label"
                    classNameSelect="select2 js-select2 form-control"
                    value={progress.idProcess}
                    datas={paymentProress}
                    onChange={onProgressChange}
                />
                {
                    progress.idProcess > 1 &&
                    [<div className="form-group" key={1}  >
                        <label className="label">{translate("cart_discount")}</label>
                        <div className="input-group">
                            <input type="text" value={progress.discount} readOnly className="form-control " placeholder="-" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">%</span>
                            </div>
                        </div>
                    </div>,
                    <div className="form-group" key={2} >
                        <label className="label">{translate("cart_discount_amount_1")} <span className="unit">({translate("cart_dong")})</span>
                        </label>
                        <input type="text" value={convertFloatToString(progress.discountAmount)} readOnly className="form-control color_e94c4c" placeholder="-" />
                    </div>]
                }

                <div className="form-group">
                    <label className="label">{translate("cart_payment_amount")} <span className="unit">({translate("cart_dong")})</span>
                    </label>
                    <input type="text" name="totalPayment" readOnly className="form-control color_e94c4c" value={convertFloatToString(progress.totalPayment)} />
                </div>
                <div className="sales_box--list_button">
                    <Link to="/" className="btn btn_green text-uppercase">{translate("product_buy_now")}</Link>
                    {/* <ButtonBuyNow data={props.data} /> */}
                    <span className="btn btn_purple text-uppercase" onClick={props.onNext}>{translate("heading_banking_policy")}</span>
                </div>
            </div>
        </div>
    )
}
export default PropertyFilter