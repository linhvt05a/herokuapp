import React from 'react'

const PropertyContain = (props) => {
    return (
        <div className="sales_policy--wrap">
            <div className="sales_policy--timeline mb-4 mb-lg-0">
                <div className="item deposits">
                    <span className="text">Tiền cọc : <i className="deposits_number">100.000.000</i></span>
                </div>
                <div className="item boxRight">
                    <div className="item--percent">15%</div>
                    <div className="item--content">
                        <div className="wrap">
                            <p className="title">Cọc lần 2 - <span className="percent">(15%)</span></p>
                            <p className="number">350.000.000 (vnd)</p>
                            <ul className="list">
                                <li>Tiến độ : <span className="value">10 ngày sau cọc, ký
                                HĐMB</span></li>
                                <li>Tiền đã thanh toán : <span className="value">450.000.000
                                (vnd)</span></li>
                                <li>Ghi chú : <span className="value">chưa VAT</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item boxLeft">
                    <div className="item--percent">20%</div>
                    <div className="item--content">
                        <div className="wrap">
                            <p className="title">Cọc lần 3 - <span className="percent">(+5%)</span></p>
                            <p className="number">150.000.000 (vnd)</p>
                            <ul className="list">
                                <li>Tiến độ : <span className="value">30 ngày sau ký HĐMB</span>
                                </li>
                                <li>Tiền đã thanh toán : <span className="value">600.000.000
                                (vnd)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item boxRight">
                    <div className="item--percent">
                        <span className="text-promo"><u>(Ưu đãi)</u> <i className="text-promo-number">30%</i></span>
                    </div>
                    <div className="item--content">
                        <div className="wrap">
                            <p className="title">Đợt 1 - <span className="percent">(+10%)</span></p>
                            <p className="number">150.000.000 (vnd)</p>
                            <ul className="list">
                                <li>Tiến độ : <span className="value">30 ngày sau ký HĐMB</span>
                                </li>
                                <li>Tiền đã thanh toán : <span className="value">600.000.000
                                (vnd)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item boxLeft">
                    <div className="item--percent">
                        <span className="text-promo"><u>(Ưu đãi)</u> <i className="text-promo-number">30%</i></span>
                    </div>
                    <div className="item--content">
                        <div className="wrap">
                            <p className="title">Đợt 2 - <span className="percent">(+10%)</span></p>
                            <p className="number">150.000.000 (vnd)</p>
                            <ul className="list">
                                <li>Tiến độ : <span className="value">30 ngày sau ký HĐMB</span>
                                </li>
                                <li>Tiền đã thanh toán : <span className="value">600.000.000
                                (vnd)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item boxRight">
                    <div className="item--percent">
                        <span className="text-promo"><u>(Ưu đãi)</u> <i className="text-promo-number">30%</i></span>
                    </div>
                    <div className="item--content">
                        <div className="wrap">
                            <p className="title">Đợt 3 - <span className="percent">(+10%)</span></p>
                            <p className="number">150.000.000 (vnd)</p>
                            <ul className="list">
                                <li>Tiến độ : <span className="value">30 ngày sau ký HĐMB</span>
                                </li>
                                <li>Tiền đã thanh toán : <span className="value">600.000.000
                                (vnd)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="boxEnd">
                    <span className="text">Thanh toán xong</span>
                </div>
            </div>
        </div>
    )
}
export default PropertyContain