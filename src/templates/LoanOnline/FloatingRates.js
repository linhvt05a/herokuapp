import React, { useState } from 'react';
import { InputNumber, Slider, DatePicker } from 'antd';
import moment from 'moment';
import InputDatePicker from '../../components/base/Input/InputDatePicker';
const dateFormat = 'YYYY/MM/DD';

export const FloatingRates = () => {
    const [inputValue, setInputValue] = useState(5);
    const [loanTermTime, setLoanTermTime] = useState(10);
    const [inputBorrow, setInputBorrow] = useState(500);
    const [rateTerm, setRateTerm] = useState(24);

    const data = [20];

    const onChangeBorrow = value => {
        setInputBorrow(value)
    };

    const onChangeLoanTerm = value => {
        setLoanTermTime(value)

    };

    const onChangeRateTerm = value => {
        setRateTerm(value)
    };

    function convertDate(value){
        const date = moment(value).format('DD/MM/YYYY')
        setDateFrom(date)
        return date
    }

    const onChangeDate = (name, value) => {
        convertDate(value, name)
    }

    return (
        <div className="borrow__item aa">
            <div className="borrow__title">
                <span className="d-flex align-items-center text-uppercase">
                    Lãi thả nổi - Dư nợ giảm dần<i className="icon_info fas fa-info-circle" />
                </span>
                <span className="sub">Nhập các thông tin cần thiết, bạn sẽ biết ngay số tiền lãi cần trả hàng tháng.</span>
            </div>
            <div className="borrow__calculator">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                            <label className="label">
                                Số tiền cần vay
                                    <span className="unit">(triệu vnd)</span>
                            </label>
                            <div className="pull-range">
                                <div className="slider-wrapper">
                                    <Slider
                                        defaultValue={inputBorrow}
                                        min={0} max={2000}
                                        onChange={onChangeBorrow}
                                        value={typeof inputBorrow === 'number' ? inputBorrow : 0} />
                                </div>
                                <div className="input-group range-Value04">
                                    <InputNumber
                                        min={0}
                                        max={2000}
                                        style={{ margin: '0 16px' }}
                                        value={inputBorrow}
                                        onChange={onChangeBorrow}
                                        className="form-control"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            triệu
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label">Lãi suất ưu đãi
                                    <span className="unit">(%/năm)</span>
                            </label>
                            <input type="text" readonly className="form-control hightlight" value="6.00" placeholder="--" />
                        </div>
                        <div className="form-group">
                            <label className="label">Lãi suất sau ưu đãi
                                    <span className="unit">(%/năm)</span>
                            </label>
                            <input type="text" readOnly className="form-control hightlight" placeholder="--" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                            <label className="label">Thời hạn vay
                                    <span className="unit">(năm)</span>
                            </label>
                            <div className="pull-range">
                                <div className="slider-wrapper">
                                    <Slider
                                        tipFormatter={null}
                                        min={1}
                                        max={100}
                                        onChange={onChangeLoanTerm}
                                        value={typeof loanTermTime === 'number' ? loanTermTime : 0}
                                    />
                                </div>
                                <div className="input-group">
                                    <InputNumber
                                        min={1}
                                        max={100}
                                        style={{ margin: '0 16px' }}
                                        value={loanTermTime}
                                        onChange={onChangeLoanTerm}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label">Thời hạn lãi suất ưu đãi
                                    <span className="unit">(tháng)</span>
                            </label>
                            <div className="pull-range">
                                <div className="slider-wrapper">
                                <Slider
                                    defaultValue={40}
                                    displayBox="on"
                                    min={0}
                                    max={50}
                                    onChange={onChangeRateTerm}
                                    value={typeof rateTerm === 'number' ? rateTerm : 0} />
                                </div>
                                <div className="input-group">
                                    <InputNumber
                                        min={0}
                                        max={50}
                                        style={{ margin: '0 16px' }}
                                        value={rateTerm}
                                        onChange={onChangeRateTerm}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label">Ngày trả lãi</label>
                            <InputDatePicker style={{width: '100%', height: 48, marginBottom: 20}} name="dateFrom" placeholder="From date" onChange={onChangeDate}/>
                        </div>
                    </div>
                </div>
                <div className="checkbox-paymentBeforeDeadline">
                    <label className="checkbox-inline">
                        <input name="checkbox-2" type="checkbox" className="checkbox-custom" />
                        <span className="checkbox-custom-dummy" />
                                Thanh toán trước hạn ?
                                </label>
                </div>
                <div className="row paymentBeforeDeadline_01 d-none">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                            <label className="label">Thời gian dự tính thanh toán
                                    <span className="unit">(tháng)</span>
                            </label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    {/* <div class="col-sm-12 col-md-6 col-lg-6">
                                                <div class="form-group">
                                                    <label class="label">Phí thanh toán trước hạn
                                                        <span class="unit">(%)</span>
                                                    </label>
                                                    <input type="text" value="3.0" readonly class="form-control">
                                                </div>
                                            </div> */}
                </div>
                <button className="btn btn_purple">Xem kết quả</button>
            </div>
        </div>
    )
}
