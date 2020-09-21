import React, { useState } from 'react';
import InputDatePicker from '../../components/base/Input/InputDatePicker';
import { InputBase, InputSlider } from "./Layout"
import { SelectDefault } from '../../components/base';
import { useTranslation } from 'react-i18next';

const FloatingRates = props => {
    let { t } = useTranslation()
    let { data, setData, translate } = props
    const onChangeBorrow = value => {
        setData({ ...data, amountBorrow: value })
    };

    const onChangeLoanTerm = value => {
        setData({ ...data, tenor: value })
    };

    const onChangeDate = (name, value) => {
        setData({ ...data, datePick: value })
    }
    return (
        <div className="borrow__item">
            <div className="borrow__title">
                <span className="d-flex align-items-center text-uppercase borrow__top">
                    {translate("loan_debt_decreased")}
                    <SelectDefault
                        classNameGroup=" borrow__filter"
                        titleClassName="text uni-text-6d30ab w-100"
                        label={`${translate("loan_type", t)} :`}
                        defaultValue={1}
                        style={{ paddingRight: 0, fontSize: `14px` }}
                        onChange={e => console.log(e)}
                        trans
                        datas={[{ value: 1, label: "loan_debt_decreased" }, { value: 2, label: "Vay trả đều hàng tháng" }]}
                    />
                </span>
                <span className="sub">{translate("loan_text_3")}</span>
            </div>
            <div className="borrow__calculator">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <InputSlider
                            classNameGroupInput="input-group range-Value04"
                            label={translate("loan_amount_borrow", t)}
                            unit={data.maximum_loan_limit_money_master_unit_name}
                            titleClassName="label"
                            min={data.minimum_loan_limit_money}
                            max={data.maximum_loan_limit_money}
                            style={{ margin: '0 16px' }}
                            value={data.amountBorrow}
                            onChange={onChangeBorrow}
                            classNameInput="form-control"
                            classNameSlider="range range04"
                        // addonBefore={data.maximum_loan_limit_money_master_unit_name}
                        />
                        <InputBase
                            label={translate("loan_preferential_interest", t)}
                            titleClassName="label"
                            unit={data.post_preferential_interest_rate_percent_master_unit_name}
                            readOnly
                            type="text"
                            value={data.post_preferential_interest_rate_percent}
                            placeholder="--"
                            classNameInput="form-control hightlight"
                        />
                        <InputBase
                            label={translate("loan_affter_interest", t)}
                            titleClassName="label"
                            unit={data.preferential_interest_rate_percent_master_unit_name}
                            readOnly
                            type="text"
                            placeholder="--"
                            value={data.preferential_interest_rate_percent}
                            classNameInput="form-control hightlight"
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <InputSlider
                            titleClassName="label"
                            label={translate("loan_tenor", t)}
                            unit={data.minimum_loan_period_master_unit_name}
                            className="input-group"
                            min={data.minimum_loan_period}
                            max={data.maximum_loan_period}
                            style={{ margin: '0 16px' }}
                            value={data.tenor}
                            onChange={onChangeLoanTerm}
                        />
                        <InputSlider
                            titleClassName="label"
                            label={translate("loan_preferential_interest_rate", t)}
                            unit={data.preferential_term_master_unit_name}
                            className="input-group"
                            readOnly
                            min={0}
                            max={data.maximum_loan_period > data.preferential_term ? data.maximum_loan_period : data.preferential_term}
                            style={{ margin: '0 16px' }}
                            value={data.preferential_term}
                        // onChange={onChangeRateTerm}
                        />
                        <div className="form-group">
                            <label className="label">{translate("loan_interest_payment_date")}</label>
                            <InputDatePicker style={{ width: '100%', height: 48, marginBottom: 20 }} name="dateFrom" placeholder="From date" onChange={onChangeDate} />
                        </div>
                    </div>
                </div>
                <button className="btn btn_purple" onClick={props.onSubmit}>{translate("loan_results")}</button>
            </div>
        </div>
    )
}
export default FloatingRates
