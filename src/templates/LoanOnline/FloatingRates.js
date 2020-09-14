import React, { useState } from 'react';
import moment from 'moment';
import InputDatePicker from '../../components/base/Input/InputDatePicker';
import { InputBase, InputSlider } from "./Layout"
import { SelectDefault } from '../../components/base';
import { useTranslation } from 'react-i18next';
import { translate } from '../../functions/Utils';

const FloatingRates = props => {
    let { t } = useTranslation()
    let { data, setData } = props
    const onChangeBorrow = value => {
        setData({ ...data, amountBorrow: value })
    };

    const onChangeLoanTerm = value => {
        setData({ ...data, tenor: value })
    };


    function convertDate(value) {
        const date = moment(value).format('DD/MM/YYYY')
        setDateFrom(date)
        return date
    }

    const onChangeDate = (name, value) => {
        convertDate(value, name)
    }

    return (
        <div className="borrow__item">
            <div className="borrow__title">
                <span className="d-flex align-items-center text-uppercase borrow__top">
                    Vay Dư nợ giảm dần
                    <SelectDefault
                        classNameGroup=" borrow__filter"
                        titleClassName="text uni-text-6d30ab w-100"
                        label={`${translate("loan_type", t)} :`}
                        defaultValue={1}
                        onChange={e => console.log(e)}
                        datas={[{ value: 1, label: "Vay dư nợ giảm dần" }, { value: 2, label: "Vay trả đều hàng tháng" }]}
                    />
                </span>
                <span className="sub">Nhập các thông tin cần thiết, bạn sẽ biết ngay số tiền lãi cần trả hàng tháng.</span>
            </div>
            <div className="borrow__calculator">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <InputSlider
                            className="input-group range-Value04"
                            label={translate("loan_amount_borrow", t)}
                            unit="triệu vnd"
                            titleClassName="label"
                            min={0}
                            max={data.amount / data.unitPay}
                            style={{ margin: '0 16px' }}
                            value={data.amountBorrow}
                            onChange={onChangeBorrow}
                            classNameInput="form-control"
                            classNameSlider="range range04"
                            addonBefore=" triệu"
                        />
                        <InputBase
                            label={translate("loan_preferential_interest", t)}
                            titleClassName="label"
                            unit="%/năm"
                            readOnly
                            type="text"
                            value={data.interestIncentives}
                            placeholder="--"
                            classNameInput="form-control hightlight"
                        />
                        <InputBase
                            label={translate("loan_affter_interest", t)}
                            titleClassName="label"
                            unit="%/năm"
                            readOnly
                            type="text"
                            placeholder="--"
                            value={data.affterIncentives}
                            classNameInput="form-control hightlight"
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <InputSlider
                            titleClassName="label"
                            label={translate("loan_tenor", t)}
                            unit="năm"
                            className="input-group"
                            min={1}
                            max={data.maxTennor}
                            style={{ margin: '0 16px' }}
                            value={data.tenor}
                            onChange={onChangeLoanTerm}
                        />
                        <InputSlider
                            titleClassName="label"
                            label={translate("loan_preferential_interest_rate", t)}
                            unit="tháng"
                            className="input-group"
                            readOnly
                            min={0}
                            max={data.maxTennor * 12}
                            style={{ margin: '0 16px' }}
                            value={data.preferentialTerm}
                        // onChange={onChangeRateTerm}
                        />
                        <div className="form-group">
                            <label className="label">{translate("loan_interest_payment_date")}</label>
                            <InputDatePicker style={{ width: '100%', height: 48, marginBottom: 20 }} name="dateFrom" placeholder="From date" onChange={onChangeDate} />
                        </div>
                    </div>
                </div>
                <button className="btn btn_purple" onClick={props.onSubmit}>Xem kết quả</button>
            </div>
        </div>
    )
}
export default React.memo(FloatingRates)
