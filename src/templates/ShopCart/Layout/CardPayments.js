import React from 'react';
import { Trans } from 'react-i18next';
import { InputRadioViolet } from '../../../components/base'
import { DatePicker } from 'antd';
import { RULES } from '../../../contant';
import { datePichkerLocation, translate } from "../../../functions/Utils"

const CardPayments = (props) => {
    let { checked, setChecked, Item } = props;

    const onChangeCredit = (check) => {
        setChecked({
            ...check,
            credit: check,
            debit: false,
            transfer: false
        })
    }
    const onChangeDebit = (check) => {
        setChecked({
            ...check,
            credit: false,
            debit: check,
            transfer: false
        })
    }
    const onChangeTransfer = (check) => {
        setChecked({
            ...check,
            credit: false,
            debit: false,
            transfer: check
        })
    }
    return (
        <div className="block block__01">
            <div className="noted">
                <Trans>cart_note_9</Trans>
                <span className="highlight"> đặt cọc 50.000.000đ </span>
                <Trans>cart_note_10</Trans>
            </div>
            <div className="payment-opts">
                <InputRadioViolet label="cart_payment_via_credit_card" checked={checked.credit} onChange={onChangeCredit} />
                <div className="payment-opts__wrap">
                    <div className="payment-opts__credit">
                        <figure className="img">
                            <img src="../images/credit01.png" alt="Thanh toán qua thẻ tín dụng" />
                        </figure>
                        <figure className="img">
                            <img src="../images/credit02.png" alt="Thanh toán qua thẻ tín dụng" />
                        </figure>
                        <figure className="img">
                            <img src="../images/credit03.png" alt="Thanh toán qua thẻ tín dụng" />
                        </figure>
                        <figure className="img">
                            <img src="../images/credit04.png" alt="Thanh toán qua thẻ tín dụng" />
                        </figure>
                    </div>
                    {checked.credit &&
                        <div className="info-buyer__change">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label className="label">Số thẻ
                                        <span className="star">*</span>
                                        </label>
                                        <Item name="cardNumber" rules={RULES.number.form}>
                                            <input type={RULES.number.type} placeholder={translate("card_input_number", "t")} className="form-control" />
                                        </Item>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label className="label">Tên in trên thẻ
                                        <span className="star">*</span>
                                        </label>
                                        <Item name="cardName" rules={RULES.text.form}>
                                            <input type={RULES.text.type} placeholder="Vd: Trần Thị Thu Hoài" className="form-control" />
                                        </Item>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label className="label">Ngày hết hạn
                                        <span className="star">*</span>
                                        </label>
                                        <div className="date-picker">
                                            <Item name="cardDate" rules={RULES.text.form}>
                                                {/* <input type="text" placeholder="--/--" className="form-control js-datepicker" /> */}
                                                <DatePicker locale={datePichkerLocation()} showToday={false} className="form-control js-datepicker" placeholder="10/12" format="DD/MM" />
                                            </Item>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label className="label">Mã bảo mật
                                        <span className="star">*</span>
                                        </label>
                                        <Item name="cardCode" rules={RULES.number.form}>
                                            <input type={RULES.number.type} placeholder={translate("card_input_number", "t")} className="form-control" />
                                        </Item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="payment-opts mb-3">
                <InputRadioViolet label="cart_payment_via_ATM_card" checked={checked.debit} onChange={onChangeDebit} />
                <div className="payment-opts__wrap payment-opts__local-card">
                    <figure className="img">
                        <img src="../images/bank02.jpg" alt="Thanh toán qua thẻ ATM nội địa" />
                    </figure>
                    <figure className="img">
                        <img src="../images/bank03.jpg" alt="Thanh toán qua thẻ ATM nội địa" />
                    </figure>
                    <figure className="img">
                        <img src="../images/bank04.jpg" alt="Thanh toán qua thẻ ATM nội địa" />
                    </figure>
                    <figure className="img">
                        <img src="../images/bank05.jpg" alt="Thanh toán qua thẻ ATM nội địa" />
                    </figure>
                    <figure className="img">
                        <img src="../images/bank06.jpg" alt="Thanh toán qua thẻ ATM nội địa" />
                    </figure>
                    <figure className="img">
                        <img src="../images/bank07.jpg" alt="Thanh toán qua thẻ ATM nội địa" />
                    </figure>
                </div>
            </div>
            <div className="payment-opts">
                <InputRadioViolet label="cart_payment_via_bank_transfer" checked={checked.transfer} onChange={onChangeTransfer} />
                <div className="payment-opts__wrap" />
            </div>
        </div>
    )
}
export default CardPayments;
