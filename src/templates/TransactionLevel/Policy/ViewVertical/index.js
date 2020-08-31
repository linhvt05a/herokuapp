import React, { Component } from 'react';
import { Trans } from 'react-i18next';

export default class ViewVertical extends Component {
    render() {
        const { data } = this.props;
        return (
            data ? 
            <div className="project_item__detail">
                <div className="view_vertical">
                    <div className="item">
                        <div className="heading">
                            <span className="text-uppercase">CHÍNH SÁCH BÁN HÀNG</span>
                            <span className="value">Tiêu chuẩn</span>
                        </div>
                        <div className="list">
                            <div className="list_item">
                                <span className="title">Tiền cọc (đồng)</span>
                                <span className="value">100.000.000</span>
                            </div>
                            <div className="list_item">
                                <span className="title">Số đợt trả</span>
                                <span className="value">15</span>
                            </div>
                            <div className="list_item">
                                <span className="title">Tổng tiền (đồng)</span>
                                <span className="value">3.000.000.000</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="heading">
                            <span className="text-uppercase"><Trans>CHÍNH SÁCH VAY</Trans></span>
                            <span className="value">{data.info_banking_policy.total_support_banking}</span>
                        </div>
                        <div className="list">
                            <div className="list_item w-100">
                                <span className="title"><Trans>Tiền vay tối thiểu (đồng)</Trans></span>
                                <span className="value">{data.info_banking_policy.minimum_loan_limit_money}{data.info_banking_policy.minimum_loan_limit_money_master_unit_name}</span>
                            </div>
                            <div className="list_item">
                                <span className="title"><Trans>Thời gian vay tối thiểu</Trans></span>
                                <span className="value">{data.info_banking_policy.minimum_loan_period}{data.info_banking_policy.minimum_loan_period_unit_name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="heading">
                            <span className="text-uppercase"><Trans>TIỆN ÍCH</Trans></span>
                            <span className="value text-uppercase"><Trans>CĂN HỘ</Trans></span>
                        </div>
                        <div className="list_style_02 pt-2">
                            {data.list_internal_utility.map((item,index) => (
                                <div key={index} className="list_style_02--item">{item.floor_or_lot_internal_utility_name}</div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div> 
            : ""
        )
    }
}
