import React, { Component } from 'react';
import PolicyTitle from './PolicyTitle';

export default class Policy extends Component {
    render() {
        return (
            <div className="project_item__detail">
                <PolicyTitle />
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
                            <span className="text-uppercase">CHÍNH SÁCH VAY</span>
                            <span className="value">10 Ngân hàng hổ trợ</span>
                        </div>
                        <div className="list">
                            <div className="list_item w-100">
                                <span className="title">Tiền vay tối thiểu (đồng)</span>
                                <span className="value">500.000.000</span>
                            </div>
                            <div className="list_item">
                                <span className="title">Thời gian vay tối thiểu</span>
                                <span className="value">15 năm</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="heading">
                            <span className="text-uppercase">TIỆN ÍCH</span>
                            <span className="value text-uppercase">CĂN HỘ</span>
                        </div>
                        <div className="list_style_02 pt-2">
                            <div className="list_style_02--item">Bể bơi người lớn</div>
                            <div className="list_style_02--item">Giàn hoa, ghế nghỉ</div>
                            <div className="list_style_02--item">Vườn thiền</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
