import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import {formatCurrency} from '../../../../functions/Utils'
import { IMAGE_URL } from '../../../../contant'


const Info = (props) => {
    const { dataInfo } = props;

    console.log(dataInfo);

    return (
        dataInfo ?
            <div className="apartment_detail">
                <div class="sales_heading">
                    <span class="text">Giá niêm yết (đồng)
                        <i class="icon_info fas fa-info-circle"></i>
                    </span>
                    {/* {
                        dataInfo.price ?
                        dataInfo.price.map((item, index) => (
                            console.log(1,item),
                            <div key={index}>
                                <span className="number">
                                    {formatCurrency(parseInt(item.price)) + item.price_unit_name}
                                </span> 
                                <span className="number_origin">
                                    <i className="number_origin_price">{item.estimate_price}{item.price_unit_name}</i>
                                    <i className="number_origin_percent">
                                        Giảm 
                                        <Trans> &nbsp;</Trans>{item.estimate_price && item.price ? 100 - ((item.price) / (item.estimate_price)) * 100 : 0}<Trans></Trans>%
                                    </i>
                                </span>
                            </div>
                        )) : null
                    } */}

                </div>

                <div className="info_1">
                    <div className="item">
                        <span className="title">
                            Giá thông thủy
                            <i className="icon_info fas fa-info-circle" />
                        </span>
                        <span className="number water">
                            {formatCurrency(parseInt(dataInfo.price_m2_use))}
                        </span>
                        <span className="unit">
                            <Trans>( đồng/m<sup>2</sup> )</Trans>
                        </span>
                    </div>
                    <div className="item">
                        <span className="title"><Trans>Diện tích</Trans><i className="icon_info fas fa-info-circle" /></span>
                        <span className="number acreage">
                        {formatCurrency(parseInt(dataInfo.area_m2_total))}
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
                            { dataInfo.list_direction ? dataInfo.list_direction.map((item, key) => { item }) : '-' }
                        </span>
                    </div>
                </div>
                
                <div className="info_contact">
                    <div className="info_contact_apart">
                        {dataInfo.project_name}
                        <span className="address">{dataInfo.project_full_address}</span>
                    </div>
                    <ul className="info_contact_support">
                        <li className="info_contact_item">
                            <i className="icon_fa fas fa-star-of-life" />
                            <span>Hotline tư vấn:</span>
                            <span className="text_phone"> <br /> <span className="pd-left">012 345 567 89</span></span>
                        </li>
                        <li className="info_contact_item">
                            <i className="icon_fa fas fa-star-of-life" /> Liên hệ qua mạng xã hội :
                            <span className="icon"><br />
                                <span className="pd-left">
                                    <img className="icon_skype" src={IMAGE_URL + "images/icon_skype.svg"} alt="icon_skype" />
                                    <img className="icon_messenger" src={IMAGE_URL + "images/icon_messenger.jpg"} alt="icon_messenger" />
                                </span>
                            </span>
                        </li>
                    </ul>
                    <a href="#" className="info_contact_link">
                        <i className="icon_file fas fa-file-alt" />
                        Chi tiết chính sách bán hàng
                    </a>
                </div>

                <div className="info_2 pb-4">
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
