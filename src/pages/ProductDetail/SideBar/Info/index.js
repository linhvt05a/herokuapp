import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import Contact from '../Contact';

const Info = (props) => {
    const { dataInfo } = props;
    console.log(dataInfo);
    
        return (
            dataInfo ?
            <div className="info">
                {
                        <div>
                            <div>
                                <div className="sales_heading">
                                    <span className="text">Giá niêm yết
                                        <i className="icon_info fas fa-info-circle" />
                                    </span>
                                    <span className="number">{dataInfo.estimate_price}<Trans>đ</Trans></span>
                                    
                                        {/* {
                                            dataInfo.price.map((item,index) => {
                                                <p className="compare_price">
                                                    <span className="num" key={index}>{item.estimate_price}<Trans>đ</Trans></span>
                                                    <span className="discount_label"><Trans>Giảm</Trans>7<Trans></Trans>%</span>
                                                </p>
                                            })
                                        } */}
                                        
                                   
                                </div>
                                <div className="info_1">
                                    <div className="item">
                                        <span className="title">
                                            Giá thông thủy
                                            <i className="icon_info fas fa-info-circle" />
                                        </span>
                                        <span className="number water">
                                            {/* {infoItem.price_m2_use} */}
                                        </span>
                                        <span className="unit">
                                            <Trans>( đồng/m<sup>2</sup> )</Trans>
                                        </span>
                                    </div>
                                    <div className="item">
                                        <span className="title">
                                            Diện tích
                                            <i className="icon_info fas fa-info-circle" />
                                        </span>
                                        <span className="number acreage">
                                            {/* {infoItem.area_m2_total} */}
                                        </span>
                                        <span className="unit">
                                            <Trans>( m<sup>2</sup> )</Trans>
                                        </span>
                                    </div>
                                    <div className="item">
                                        <span className="title">
                                            {/* {infoItem.title04} */}
                                        </span>
                                        <span className="number direction">
                                            {/* {infoItem.huong} */}
                                        </span>
                                    </div>
                                </div>
                                <Contact/>
                            </div>
                                    
                            
                        </div>
                }
            </div> : ""
        )
    }

export default Info;
