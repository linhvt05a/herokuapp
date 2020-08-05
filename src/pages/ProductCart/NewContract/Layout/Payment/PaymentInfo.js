import React from 'react';

const PaymentInfo = () => {
    return (
        <div class="sales_policy--wrap">
            <div class="sales_policy--timeline mb-4 mb-lg-0">
                <div class="item deposits data_none">
                    <span class="text">Tổng tiền phải trả :
                                                <i class="deposits_number">10.400.000.000 (vnđ)</i>
                    </span>
                </div>

                <div class="data_null mt-2 mb-5">
                    <figure class="data_null--image">
                        <img src="../images/all/no_data.png" alt="" />
                        <span class="data_null--text text-uppercase">No data</span>
                    </figure>
                </div>
                <div class="item deposits">
                    <span class="text">Tổng tiền phải trả :
                                                <i class="deposits_number">10.400.000.000 (vnđ)</i>
                    </span>
                </div>
                <div class="item boxRight">
                    <div class="item--percent">15%</div>
                    <div class="item--content">
                        <div class="wrap">
                            <p class="title">Cọc lần 2 - <span class="percent">(15%)</span></p>
                            <p class="number">350.000.000 (vnd)</p>
                            <ul class="list">
                                <li>Tiến độ : <span class="value">10 ngày sau cọc, ký
                                                                HĐMB</span></li>
                                <li>Tiền đã thanh toán : <span class="value">450.000.000
                                                                (vnd)</span></li>
                                <li>Ghi chú : <span class="value">chưa VAT</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="item boxLeft">
                    <div class="item--percent">20%</div>
                    <div class="item--content">
                        <div class="wrap">
                            <p class="title">Cọc lần 3 - <span class="percent">(+5%)</span></p>
                            <p class="number">150.000.000 (vnd)</p>
                            <ul class="list">
                                <li>Tiến độ : <span class="value">30 ngày sau ký HĐMB</span>
                                </li>
                                <li>Tiền đã thanh toán : <span class="value">600.000.000
                                                                (vnd)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="item boxRight">
                    <div class="item--percent">
                        <span class="text-promo"><u>(Ưu đãi)</u> <i class="text-promo-number">30%</i></span>
                    </div>
                    <div class="item--content">
                        <div class="wrap">
                            <p class="title">Đợt 1 - <span class="percent">(+10%)</span></p>
                            <p class="number">150.000.000 (vnd)</p>
                            <ul class="list">
                                <li>Tiến độ : <span class="value">30 ngày sau ký HĐMB</span>
                                </li>
                                <li>Tiền đã thanh toán : <span class="value">600.000.000
                                                                (vnd)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="item boxLeft">
                    <div class="item--percent">
                        <span class="text-promo"><u>(Ưu đãi)</u> <i class="text-promo-number">30%</i></span>
                    </div>

                    <div class="item--content">
                        <div class="wrap">
                            <p class="title">Đợt 2 - <span class="percent">(+10%)</span></p>
                            <p class="number">150.000.000 (vnd)</p>
                            <ul class="list">
                                <li>Tiến độ : <span class="value">30 ngày sau ký HĐMB</span>
                                </li>
                                <li>Tiền đã thanh toán : <span class="value">600.000.000
                                                                (vnd)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="item boxRight last">
                    <div class="item--percent">
                        <span class="text-promo"><u>(Ưu đãi)</u> <i class="text-promo-number">30%</i></span>
                    </div>
                    <div class="item--content">
                        <div class="wrap">
                            <p class="title">Đợt 3 - <span class="percent">(+10%)</span></p>
                            <p class="number">150.000.000 (vnd)</p>
                            <ul class="list">
                                <li>Tiến độ : <span class="value">30 ngày sau ký HĐMB</span>
                                </li>
                                <li>Tiền đã thanh toán : <span class="value">600.000.000
                                                                (vnd)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default PaymentInfo;