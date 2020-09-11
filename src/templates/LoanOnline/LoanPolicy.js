import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeadingFilter from '../../components/common/HeadingLine';
import { SliderSimple } from '../../components/common/Sliders'

import { FloatingRates } from './FloatingRates';
import { InputLoanNumber } from './LoanContainer/InputLoanNumber';
import { InterestDebtForm } from './LoanContainer/InterestDebtForm';
import { SidebarRight } from './SidebarRight/SidebarRight';

const LoanPolicy = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    };
    const dataImgs = [
        {
            image_url: "../images/bank02.jpg"
        },
        {
            image_url: "../images/bank03.jpg"
        },
        {
            image_url: "../images/bank04.jpg"
        },
        {
            image_url: "../images/bank05.jpg"
        },
        {
            image_url: "../images/bank06.jpg"
        },
        {
            image_url: "../images/bank07.jpg"
        }
    ];

    const [state, setState] = useState({
        loanPolicyTabs: 0
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (window.location.pathname === "/loan-policy") {
            setState({
                loanPolicyTabs: 3
            })
            console.log('/loan-policy');
        } else {
            setState({
                loanPolicyTabs: 2
            })
        }
    }, []);

    const onStatusClick = (e) => {
        setState({
            loanPolicyTabs: parseInt(e.target.name)
        });
    }

    return (
        <div className="borrow bg_grey">
            <div className="container container-sm container-md">
                <HeadingFilter headerBodyClassName="borrow--heading" labelHeader="Chính sách cho vay" status onStatusClick={onStatusClick} loanPolicyTabs={state.loanPolicyTabs} />
                <div className="tab-content">
                    <div className="tab-pane fade active show" id="borrow01" role="tabpanel" aria-labelledby="borrow01-tab">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8">
                                <div className="borrow__wrap">
                                    <div className="borrow__item">
                                        <div className="borrow__title text-uppercase">THÔNG TIN SỐ TIỀN
                            <i className="sub">
                                                Nhập số tiền của sản phẩm dự án, chúng tôi sẽ đề nghị khoản vay cho ban.
                            </i>
                                        </div>
                                        <div className="borrow__info">
                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-xl-4">
                                                    <div className="form-group mb-3 mb-xl-0">
                                                        <label className="label">
                                                            Giá sản phẩm <span className="unit">(đồng)</span>
                                                        </label>
                                                        <input type="text" placeholder="-" defaultValue="3.000.000.000" readOnly className="form-control color_e94c4c" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-xl-4">
                                                    <div className="form-group mb-3 mb-xl-0">
                                                        <label className="label">
                                                            Số tiền trả trước <span className="unit">(đồng)</span>
                                                        </label>
                                                        <input type="text" placeholder="-" defaultValue="500.000.000" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-xl-4">
                                                    <div className="form-group mb-3 mb-xl-0">
                                                        <label className="label">
                                                            Số tiền còn lại <span className="unit">(đồng)</span>
                                                        </label>
                                                        <input type="text" placeholder="-" defaultValue="2.500.000.000" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="borrow__item">
                                        <div className="borrow__title text-uppercase">Chọn ngân hàng
                            <i className="sub">
                                                SCB ưu tiên hổ trợ mọi hình thức vay vốn
                            </i>
                                        </div>
                                        <div className="borrow__banks borrowBanks">
                                            <SliderSimple dataImgs={dataImgs} settings={settings} />
                                        </div>
                                    </div>
                                    <FloatingRates />
                                </div>
                            </div>
                            <SidebarRight />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="borrow02" role="tabpanel" aria-labelledby="borrow01-tab">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8">
                                <div className="borrow__wrap">
                                    <div className="borrow__item">
                                        <div className="borrow__title">Thông tin số tiền
                            <i className="sub">
                                                Nhập số tiền của sản phẩm dự án, chúng tôi sẽ đề nghị khoản vay cho ban.
                            </i>
                                        </div>
                                        <div className="borrow__info">
                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-xl-4">
                                                    <div className="form-group mb-3 mb-xl-0">
                                                        <label className="label">
                                                            Giá sản phẩm <span className="unit">(đồng)</span>
                                                        </label>
                                                        <input type="text" placeholder="-" defaultValue="3.000.000.000" readOnly className="form-control color_e94c4c" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-xl-4">
                                                    <div className="form-group mb-3 mb-xl-0">
                                                        <label className="label">
                                                            Số tiền trả trước <span className="unit">(đồng)</span>
                                                        </label>
                                                        <input type="text" placeholder="-" defaultValue="500.000.000" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-xl-4">
                                                    <div className="form-group mb-3 mb-xl-0">
                                                        <label className="label">
                                                            Số tiền còn lại <span className="unit">(đồng)</span>
                                                        </label>
                                                        <input type="text" placeholder="-" defaultValue="2.500.000.000" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="borrow__item">
                                        <div className="borrow__title">Chọn ngân hàng
                            <i className="sub">
                                                SCB ưu tiên hổ trợ mọi hình thức vay vốn
                            </i>
                                        </div>
                                        <div className="borrow__banks borrowBanks">
                                            <SliderSimple settings={settings} data={dataImgs} />
                                        </div>
                                    </div>
                                    <div className="borrow__item">
                                        <div className="borrow__title">
                                            <span className="d-flex align-items-center">
                                                Lãi thả nổi - Dư nợ giảm dần
                                <i className="icon_info fas fa-info-circle" />
                                            </span>
                                            <span className="sub">Nhập các thông tin cần thiết, bạn sẽ biết ngay số tiền lãi cần trả
                                hàng tháng.</span>
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
                                                            <input type="number" className="range range04" data-slider-id="range04" data-slider-min={0} data-slider-max={2000} data-slider-step={100} data-slider-value={500} />
                                                            <div className="input-group">
                                                                <input type="number" className="form-control rangeValue04" />
                                                                <div className="input-group-append">
                                                                    <span className="input-group-text">
                                                                        triệu
                                        </span>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                            <input type="number" className="range range02" data-slider-id="range02" data-slider-min={0} data-slider-max={50} data-slider-step={1} data-slider-value={0} />
                                                            <input type="number" className="form-control rangeValue02" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="label">Ngày trả lãi</label>
                                                        <div className="date-picker">
                                                            <input type="text" placeholder="--" className="form-control js-datepicker" />
                                                        </div>
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
                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <label className="label">Phí thanh toán trước hạn
                                    <span className="unit">(%)</span>
                                                        </label>
                                                        <input type="text" defaultValue={3.0} readOnly className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn_purple">Xem kết quả</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-4">
                                <div className="sales_box">
                                    <div className="sales_heading">
                                        <span className="text">Tổng tiền phải trả (đồng)
                            <i className="icon_info fas fa-info-circle" />
                                        </span>
                                        <span className="number">732.083.313</span>
                                    </div>
                                    <div className="borrow__calculator--result">
                                        <div id="graph02" className="graph" />
                                        <div className="details">
                                            <div className="details__01">
                                                <div className="chart-detail">
                                                    <span className="status status01">
                                                        Số tiền vay
                                    <b>500.000.000</b>
                                                    </span>
                                                    <span className="status status02">
                                                        Tổng tiền lãi
                                    {/*<b>232.083.313</b>*/}
                                                        <b className="null">--</b>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="details__02">
                                                <span className="text">
                                                    Số tiền trả kỳ đầu (vnd)
                                <b>6.666.667</b>
                                                </span>
                                                <span className="text">
                                                    Tiết kiệm trả nợ trước hạn (vnd)
                                <b className="null">--</b>
                                                </span>
                                                <span className="text">
                                                    Phí phạt trả nợ trước hạn (vnd)
                                <b className="null">--</b>
                                                </span>
                                                <a href="#" className="download"><i className="fas fa-download icon" /> Tải
                                bảng thanh toán từng tháng </a>
                                            </div>
                                        </div>
                                        <div className="list_button_02 flex-wrap">
                                            <a href="#" className="btn btn_green text-uppercase">
                                                MUA NGAY
                            </a>
                                            <a href="#" className="btn btn_purple text-uppercase">
                                                ĐẶT CHỔ
                            </a>
                                            <a href="#" className="btn mt-3 w-100 btn_red_outline text-uppercase">
                                                NỘP HỒ SƠ ONLINE
                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="borrow03" role="tabpanel" aria-labelledby="borrow01-tab">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8">
                                <div className="borrow__wrap">
                                    <InputLoanNumber />
                                    <div className="borrow__item">
                                        <div className="borrow__title">Chọn ngân hàng
                            <i className="sub">
                                                SCB ưu tiên hổ trợ mọi hình thức vay vốn
                            </i>
                                        </div>
                                        <div className="borrow__banks borrowBanks">
                                            <SliderSimple settings={settings} data={dataImgs} />
                                        </div>
                                    </div>
                                    <InterestDebtForm />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-4">
                                <div className="sales_box">
                                    <div className="sales_heading">
                                        <span className="text">Tổng tiền phải trả (đồng)
                            <i className="icon_info fas fa-info-circle" />
                                        </span>
                                        <span className="number">732.083.313</span>
                                    </div>
                                    <div className="borrow__calculator--result">
                                        <div id="graph03" className="graph" />
                                        <div className="details">
                                            <div className="details__01">
                                                <div className="chart-detail">
                                                    <span className="status status01">
                                                        Số tiền vay
                                    <b>500.000.000</b>
                                                    </span>
                                                    <span className="status status02">
                                                        Tổng tiền lãi
                                    {/*<b>232.083.313</b>*/}
                                                        <b className="null">--</b>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="details__02">
                                                <span className="text">
                                                    Số tiền trả kỳ đầu (vnd)
                                <b>6.666.667</b>
                                                </span>
                                                <span className="text">
                                                    Tiết kiệm trả nợ trước hạn (vnd)
                                <b className="null">--</b>
                                                </span>
                                                <span className="text">
                                                    Phí phạt trả nợ trước hạn (vnd)
                                <b className="null">--</b>
                                                </span>
                                                <a href="#" className="download"><i className="fas fa-download icon" /> Tải
                                bảng thanh toán từng tháng </a>
                                            </div>
                                        </div>
                                        <div className="list_button_02 flex-wrap">
                                            <a href="#" className="btn btn_green text-uppercase">
                                                MUA NGAY
                            </a>
                                            <a href="#" className="btn btn_purple text-uppercase">
                                                ĐẶT CHỔ
                            </a>
                                            <a href="#" className="btn mt-3 w-100 btn_red_outline text-uppercase">
                                                NỘP HỒ SƠ ONLINE
                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoanPolicy