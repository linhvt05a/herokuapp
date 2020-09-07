import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import Contact from './Contact'

const Info = (props) => {
    const { dataInfo } = props;

    return (
        dataInfo ?
            <div className="apartment_detail">
                <div className="sales_heading">
                    <span className="text">Giá niêm yết
                        <i className="icon_info fas fa-info-circle" />
                    </span>
                    
                {
                    dataInfo.price ?
                    dataInfo.price.map((item, index) => (
                        <div key={index}>
                            <span className="number">{item.price}<Trans>{item.price}</Trans></span> &nbsp;
                            <p className="compare_price">
                                <span className="num">{item.estimate_price}<Trans>&nbsp;{item.price_unit_name}</Trans></span>
                                <span className="discount_label"><Trans> &nbsp;</Trans>{item.estimate_price && item.price ? 100 - ((item.price) / (item.estimate_price)) * 100 : 0}<Trans></Trans>%</span>
                            </p>
                        </div>
                    )) : null
                }
                </div>
                <div className="info_1">
                    <div className="item">
                        <span className="title">
                            Giá thông thủy
                            <i className="icon_info fas fa-info-circle" />
                        </span>
                        <span className="number water">
                            {dataInfo.price_m2_use}
                        </span>
                        <span className="unit">
                            <Trans>( đồng/m<sup>2</sup> )</Trans>
                        </span>
                    </div>
                    <div className="item">
                        <span className="title"><Trans>Diện tích</Trans><i className="icon_info fas fa-info-circle" /></span>
                        <span className="number acreage">
                            {dataInfo.area_m2_total}
                        </span>
                        <span className="unit">
                            <Trans>( m<sup>2</sup> )</Trans>
                        </span>
                    </div>
                    <div className="item">
                        <span className="title">
                            <Trans>Hướng</Trans>
                        </span>
                        <span className="number direction">
                            {
                                dataInfo.list_direction ? dataInfo.list_direction.map((item, key) => { item }) : null
                            }
                        </span>
                    </div>
                </div>
                <div className="info_2 pb-4">
                    <Contact dataInfo={dataInfo} />
                    <div className="heading">Thông tin chi tiết</div>
                    <table>
                        <tbody>
                            {
                                dataInfo.detail.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="icon">
                                                <i class="icon_label fas fa-couch"></i>
                                            </td>
                                            <td className="name">
                                                <Trans>{item.name} ( {item.area_unit_name} )</Trans>
                                            </td>
                                            <td className="number">
                                                {item.area}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="list_button d-flex flex-wrap">
                        <a href="/" className="btn btn_green text-uppercase"><Trans>MUA NGAY</Trans></a>
                        <a href="/" className="btn btn_purple text-uppercase"><Trans>NGÂN SÁCH</Trans></a>
                        <a href="/" className="btn btn_red_outline w-100 mt-2 text-uppercase"><Trans>XEM NGÂN HÀNG</Trans></a>
                    </div>
                </div>
            </div> : ""
    )
}

export default Info;
