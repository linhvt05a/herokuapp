import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import { formatCurrency } from '../../../../functions/Utils'
import { IMAGE_URL } from '../../../../contant'
import { Link } from 'react-router-dom';


const ProductDetailRight = (props) => {
    const { data } = props;

    // console.log(data);

    return (
        data ?
            <div className="apartment_detail">
                <div className="sales_heading">
                    <span className="text">Giá niêm yết (đồng)
                        <i className="icon_info fas fa-info-circle"></i>
                    </span>
                    <span className="number">
                        {formatCurrency(parseInt(data.product_sale_price))}{data.product_sale_price_master_unit}
                    </span>
                    <span className="number_origin">
                        <i className="number_origin_price">
                            {formatCurrency(parseInt(data.product_estimate_price))}{data.product_estimate_price_master_unit}
                        </i>
                        <i className="number_origin_percent">
                            Giảm {data.product_sale_promotion}{data.product_sale_promotion_master_unit}
                        </i>
                    </span>
                </div>

                <div className="info_1">
                    <div className="item">
                        <span className="title">
                            Giá thông thủy
                            <i className="icon_info fas fa-info-circle" />
                        </span>
                        <span className="number water">
                            {formatCurrency(parseInt(data.price_m2_use))}
                        </span>
                        <span className="unit">
                            <Trans>( đồng/m<sup>2</sup> )</Trans>
                        </span>
                    </div>
                    <div className="item">
                        <span className="title"><Trans>Diện tích</Trans><i className="icon_info fas fa-info-circle" /></span>
                        <span className="number acreage">
                            {formatCurrency(parseInt(data.area_m2_total))}
                        </span>
                        <span className="unit">
                            <Trans>( m<sup>2</sup> )</Trans>
                        </span>
                    </div>
                    <div className="item">
                        <span className="title">
                            <Trans>Hướng</Trans>
                        </span>
                        <div className="number direction">
                            {
                                data.list_direction && data.list_direction.length > 0 ? data.list_direction.map((item, index) => {
                                    return (
                                        <span key={index}>
                                            <i style={{ fontStyle: "normal" }}> {item.direction_name} </i>
                                            {(index + 1) === data.list_direction.length ? '' : '-'}
                                        </span>
                                    )
                                }) : ''
                            }
                        </div>
                    </div>
                </div>

                <div className="info_contact">
                    <div className="info_contact_apart">
                        {data.project_name}
                        <span className="address">{data.project_full_address}</span>
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
                                data.detail.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="icon">
                                                <i className="icon_label fas fa-couch"></i>
                                            </td>
                                            <td className="name">
                                                {item.name} ( {item.area_unit_name} )
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
                        <Link to={{
                            pathname: "/property-selling",
                            state: { productID: data.product_id }
                        }} className="btn btn_red_outline w-100 mt-2 text-uppercase"><Trans>XEM NGÂN HÀNG</Trans></Link>
                    </div>
                </div>
            </div> : ""
    )
}

export default ProductDetailRight;
