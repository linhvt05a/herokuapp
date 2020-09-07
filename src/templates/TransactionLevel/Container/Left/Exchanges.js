import React, { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { formatCurrency } from '../../../../functions/Utils';

const Exchanges = (props) => {
    const { data } = props;
    const { activeIndex, setActiveIndex } = useState(null)

    const handleClick = (status) => {
        setActiveIndex(status)
    }

    console.log('Exchanges', data);

    return (
        (data && data.list_floor_or_lot != null && data.list_floor_or_lot.length > 0) ?
            data.list_floor_or_lot.map((item, index) => (
                <div className="exchanges_apartment" key={index}>
                    <div className="exchanges_apartment--item">
                        <span className="stt">{index + 1}</span>
                        <div className="exchanges_apartment--heading">
                            <div className="floor_selected">
                                <div className="floor">{item.product_floor_or_lot_name}</div>
                                <div className="channel uni_text_6d30ab text-underline border-right-0">
                                    <Trans>Tổng số sản phẩm:</Trans> {item.total_product}
                                </div>
                            </div>
                            <div className="filter sales_status_cart_bg_03" onClick={(e) => this.handleClick(e, '05')}>
                                <Trans>Đã bán:</Trans> {item.total_sold_product}
                            </div>
                            <div className="filter sales_status_cart_bg_02" onClick={(e) => this.handleClick(e, '04')}>
                                <Trans>Đặt cọc:</Trans> {item.total_booking_product}
                            </div>
                            <div className="filter sales_status_cart_bg_05" onClick={(e) => this.handleClick(e, '03')}>
                                <Trans>Đang bán:</Trans> {item.total_selling_product}
                            </div>
                            <div className="filter sales_status_cart_bg_04" onClick={(e) => this.handleClick(e, '02')}>
                                <Trans>Chưa bán:</Trans> {item.total_not_sold_yet_product}
                            </div>
                        </div>
                        <div className="exchanges_apartment--content">
                            {
                                item.list_product && item.list_product != null && item.list_product.length > 0 ?
                                    item.list_product.map((item_p, i) => (
                                        <div key={i}
                                            className={"exchanges_apartment--child" + (
                                                item_p.product_status_id == 2 ? " sales_status_02" :
                                                    item_p.product_status_id == 3 ? " sales_status_03" :
                                                        item_p.product_status_id == 4 ? " sales_status_04" :
                                                            item_p.product_status_id == 5 ? " sales_status_05" : " sales_status_02") +
                                                (activeIndex == null ? "" : activeIndex == item_p.product_status_id ? " show" : " hide")}>
                                            <div className="line line--1">
                                                <div className="left"><a href="#" className="link">{item_p.product_name}</a></div>
                                                <div className="right">{item_p.product_architecture_type_name}</div>
                                            </div>
                                            <div className="line line--2">
                                                <div className="left">{item_p.product_acreage} {item_p.product_acreage_unit_name} </div>
                                                <div className="right">{item_p.product_total_bathroom}</div>
                                            </div>
                                            <div className="line line--3">
                                                <div className="left">
                                                    <span className="icon fas fa-user-clock">
                                                        <i className="number">{item_p.product_total_watcher}</i>
                                                    </span>
                                                    <span className="icon fas fa-heart">
                                                        <i className="number">{item_p.product_total_lover}+</i>
                                                    </span>
                                                </div>
                                                <div className="right">
                                                    <Trans>{item_p.product_direction_id == 1 ? "ĐB" : item_p.product_direction_id == 2 ? "TN" : item_p.product_direction_id == 3 ? "DN" : item_p.product_direction_id == 4 ? "TB" : "TB"}</Trans>
                                                </div>
                                            </div>
                                            <div className="line line--4">
                                                <div className="left">{formatCurrency(item_p.product_estimate_price)}</div>
                                                <div className="right">{item_p.product_estimate_price_unit_name}</div>
                                            </div>
                                        </div>
                                    )) : ""
                            }
                        </div>
                    </div>

                </div>
            ))
            : ""
    )
}

export default Exchanges;