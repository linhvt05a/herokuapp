import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import Contact from '../Contact';
import Info02 from './Info02';

const Info = (props) => {
    const { dataInfo } = props;

    return (
        dataInfo ?
            <div className="info">
                <div>
                    {
                        dataInfo.price.map((item, index) => (
                            <div className="sales_heading" key={index}>
                                <span className="text">Giá niêm yết
                                        <i className="icon_info fas fa-info-circle" />
                                </span>
                                <span className="number">{item.estimate_price}<Trans>{item.price_unit_name}</Trans></span>
                                <p className="compare_price">
                                    <span className="num">{item.price}<Trans>{item.price_unit_name}</Trans></span>
                                    <span className="discount_label"><Trans>Giảm </Trans>{item.estimate_price&&item.price ? 100-((item.estimate_price)/(item.price))*100 : 0}<Trans></Trans>%</span>
                                </p>
                            </div>
                        ))
                    }
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
                            <span className="title">Diện tích<i className="icon_info fas fa-info-circle" /></span>
                            <span className="number acreage">
                                {dataInfo.area_m2_total}
                            </span>
                            <span className="unit">
                                <Trans>( m<sup>2</sup> )</Trans>
                            </span>
                        </div>
                        <div className="item">
                            <span className="title">
                                Hướng
                            </span>
                            <span className="number direction">
                                {dataInfo.list_direction}
                            </span>
                        </div>
                    </div>
                    <Contact dataInfo={dataInfo}/>
                    <Info02 dataInfo={dataInfo}/>
                </div>
            </div> : ""
    )
}

export default Info;
