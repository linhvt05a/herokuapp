import React from 'react'
import { convertFloatToString } from '../../../functions/Utils'

const PropertyContain = (props) => {
    let data = {
        total: 30000000000,
        pile: 100000000,
        dataPile: [
            { pile: 350000000, progress: "10 ngày sau cọc, ký HĐMB", pay: 450000000, unit: "vnd", note: "chưa VAT", percent: "15", discount: false },
            { pile: 150000000, progress: "30 ngày sau ký HĐMB", pay: 600000000, unit: "vnd", note: "", percent: "20", discount: false },
            { pile: 150000000, progress: "45 ngày sau cọc, ký HĐMB", pay: 600000000, unit: "vnd", note: "", percent: "31", discount: true },
            { pile: 250000000, progress: "65 ngày sau cọc, ký HĐMB", pay: 700000000, unit: "vnd", note: "", percent: "43", discount: true },
            { pile: 250000000, progress: "100 ngày sau cọc, ký HĐMB", pay: 700000000, unit: "vnd", note: "", percent: "59", discount: true }
        ]
    }
    const renderBoxRight = (data, index, item) => {
        return (
            <div className="item boxRight" key={index}>
                {data.discount ?
                    <div className="item--percent">
                        <span className="text-promo"><u>(Ưu đãi)</u> <i className="text-promo-number">{data.percent}%</i></span>
                    </div>
                    :
                    <div className="item--percent">{data.percent}%</div>}
                <div className="item--content">
                    <div className="wrap">
                        <p className="title">Cọc lần {index} - <span className="percent">({item ? `+${data.percent - item.percent}` : data.percent}%)</span></p>
                        <p className="number">{convertFloatToString(data.pile)} ({data.unit})</p>
                        <ul className="list">
                            <li>Tiến độ : <span className="value"> {data.progress}</span></li>
                            <li>Tiền đã thanh toán : <span className="value">{convertFloatToString(data.pay)} ({data.unit})</span></li>
                            {data.note &&
                                <li>Ghi chú : <span className="value">{data.note}</span></li>}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    const renderBoxLeft = (data, index, item) => {
        return (
            <div className="item boxLeft" key={index}>
                {data.discount ?
                    <div className="item--percent">
                        <span className="text-promo"><u>(Ưu đãi)</u> <i className="text-promo-number">{data.percent}%</i></span>
                    </div>
                    :
                    <div className="item--percent">{data.percent}%</div>}
                <div className="item--content">
                    <div className="wrap">
                        <p className="title">Cọc lần {index} - <span className="percent">({item ? `+${data.percent - item.percent}` : data.percent}%)</span></p>
                        <p className="number">{convertFloatToString(data.pile)} ({data.unit})</p>
                        <ul className="list">
                            <li>Tiến độ : <span className="value"> {data.progress}</span></li>
                            <li>Tiền đã thanh toán : <span className="value">{convertFloatToString(data.pay)} ({data.unit})</span></li>
                            {data.note &&
                                <li>Ghi chú : <span className="value">{data.note}</span></li>}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="sales_policy--wrap">
            <div className="sales_policy--timeline mb-4 mb-lg-0">
                <div className="item deposits">
                    <span className="text">Tiền cọc : <i className="deposits_number">{convertFloatToString(data.pile)}</i></span>
                </div>
                {data.dataPile.length > 0 && data.dataPile.map((item, index) => {
                    if (index % 2 != 0) {
                        return renderBoxLeft(item, index + 2, data.dataPile[index - 1])
                    }
                    else {
                        if (index != 0) {
                            return renderBoxRight(item, index + 2, data.dataPile[index - 1])
                        }
                        else {
                            return renderBoxRight(item, index + 2)
                        }
                    }
                })}
                <div className="boxEnd">
                    <span className="text">Thanh toán xong</span>
                </div>
            </div>
        </div>
    )
}
export default PropertyContain