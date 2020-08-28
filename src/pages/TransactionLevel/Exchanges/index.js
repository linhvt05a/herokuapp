import React, { Component } from 'react';
import { Trans } from 'react-i18next';

export default class Exchanges extends Component {
    render() {
        const { data } = this.props;
        return (
            data ?
            data.list_floor_or_lot.map((item,index) => (
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
                        <div className="filter sales_status_cart_bg_03">
                            <Trans>Đã bán:</Trans> {item.total_sold_product}
                        </div>
                        <div className="filter sales_status_cart_bg_02">
                            <Trans>Đặt cọc:</Trans> {item.total_booking_product}
                        </div>
                        <div className="filter sales_status_cart_bg_05">
                            <Trans>Đang bán:</Trans> {item.total_selling_product}
                        </div>
                        <div className="filter sales_status_cart_bg_04">
                            <Trans>Chưa bán:</Trans> {item.total_not_sold_yet_product}
                        </div>
                    </div>
                    <div className="exchanges_apartment--content">
                        {
                            item.list_product.map((item_p,i) => (
                                <div key={i} className={"exchanges_apartment--child" +(item_p.product_status_id == 2 ? " sales_status_02" : item_p.product_status_id == 3 ? " sales_status_03": item_p.product_status_id == 4 ? " sales_status_04": item_p.product_status_id == 5 ? " sales_status_05":" sales_status_02")}>
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
                                            <Trans>{item_p.product_direction_id ==1 ? "ĐB" : item_p.product_direction_id ==2 ? "TN" : item_p.product_direction_id ==3 ? "DN" : item_p.product_direction_id ==4 ? "TB":"TB"}</Trans>
                                        </div>
                                    </div>
                                    <div className="line line--4">
                                        <div className="left">{item_p.product_estimate_price}</div>
                                        <div className="right">{item_p.product_estimate_price_unit_name}</div>
                                    </div>
                                </div>
                            ))
                        }
                    
                    </div>
                </div>
            
            </div>
            ))
            
        :""
        )
    }
}
