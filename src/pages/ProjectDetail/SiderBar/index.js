import React, { Component } from 'react'
import Insentives from './Incentives';

class SiderBar extends Component {
    render() {
        return (
            <div className="apartment_detail">
                <div className="sales_heading">
                    <span className="text">Giá niêm yết (đồng)
                    <i className="icon_info fas fa-info-circle" />
                    </span>
                    <span className="number">3.000.000.000</span>
                </div>
                <div className="info_1">
                    <div className="item">
                    <span className="title">
                        Giá thông thủy
                        <i className="icon_info fas fa-info-circle" />
                    </span>
                    <span className="number water">
                        50.560.000
                    </span>
                    <span className="unit">
                        ( đồng/m<sup>2</sup> )
                    </span>
                    </div>
                    <div className="item">
                    <span className="title">
                        Diện tích
                        <i className="icon_info fas fa-info-circle" />
                    </span>
                    <span className="number acreage">
                        100
                    </span>
                    <span className="unit">
                        ( m<sup>2</sup> )
                    </span>
                    </div>
                    <div className="item">
                    <span className="title">
                        Hướng
                    </span>
                    <span className="number direction">
                        Đông Bắc
                    </span>
                    </div>
                </div>
                <div className="info_2">
                    <div className="heading">Thông tin chi tiết</div>
                    <table>
                    <tbody><tr>
                        <td className="icon">
                            <i className="icon_label fas fa-couch" />
                        </td>
                        <td className="name">
                            Phòng khách ( m<sup>2</sup> )
                        </td>
                        <td className="number">
                            36
                        </td>
                        </tr>
                        <tr>
                        <td className="icon">
                            <i className="icon_label fas fa-bed" />
                        </td>
                        <td className="name">
                            Phòng ngủ 1 ( m<sup>2</sup> )
                        </td>
                        <td className="number">
                            16
                        </td>
                        </tr>
                        <tr>
                        <td className="icon" />
                        <td className="name">
                            Phòng ngủ 2 ( m<sup>2</sup> )
                        </td>
                        <td className="number">
                            16
                        </td>
                        </tr>
                        <tr>
                        <td className="icon" />
                        <td className="name">
                            Phòng ngủ 3 ( m<sup>2</sup> )
                        </td>
                        <td className="number">
                            15
                        </td>
                        </tr>
                        <tr>
                        <td className="icon">
                            <i className="icon_label fas fa-toilet-paper" />
                        </td>
                        <td className="name">
                            Phòng vệ sinh 1 ( m<sup>2</sup> )
                        </td>
                        <td className="number">
                            6
                        </td>
                        </tr>
                        <tr>
                        <td className="icon" />
                        <td className="name">
                            Phòng vệ sinh 2 ( m<sup>2</sup> )
                        </td>
                        <td className="number">
                            7
                        </td>
                        </tr>
                        <tr>
                        <td className="icon">
                            <i className="icon_label fas fa-band-aid" />
                        </td>
                        <td className="name">
                            Ban công ( m<sup>2</sup> )
                        </td>
                        <td className="number">
                            4
                        </td>
                        </tr>
                    </tbody></table>
                </div>
                <Insentives/>
            </div>
        )
    }
}
export default SiderBar;
