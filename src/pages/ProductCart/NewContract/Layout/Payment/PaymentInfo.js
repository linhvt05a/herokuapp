import React from 'react';

const PaymentInfo = (props) => {
    const { datas } = props;
    return (
        <div class="sales_policy--wrap">
            <div class="sales_policy--timeline mb-4 mb-lg-0">
                <div class="item deposits">
                    <span class="text">Tổng tiền phải trả :
                        <i class="deposits_number"> {datas[0].totalAmount}(vnđ)</i>
                    </span>
                </div>
                {datas.map((item, key) => {
                    let boxPositionClass = "";
                    if (key % 2 === 0) {
                        boxPositionClass = "boxRight"
                    } else {
                        boxPositionClass = "boxLeft";
                    }
                    if (key + 1 === datas.length) {
                        boxPositionClass += " last"
                    }
                    return (
                        <div class={`item ${boxPositionClass}`}>
                            <div class="item--percent">
                                <span class="text-promo"><u>(Ưu đãi)</u> <i class="text-promo-number">{item.discount}</i></span>
                            </div>
                            <div class="item--content">
                                <div class="wrap">
                                    <p class="title">{item.title} - <span class="percent">(`+${item.discount}%`)</span></p>
                                    <p class="number">{item.amount} (vnd)</p>
                                    <ul class="list">
                                        <li>Tiến độ : <span class="value">{item.progress}</span>
                                        </li>
                                        <li>Tiền đã thanh toán : <span class="value">{item.paid}
                                                                                (vnd)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div >
    )
}

export default PaymentInfo;