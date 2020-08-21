import React, { Component } from 'react'
import Insentives from './Incentives';

const dataInfo = [
    {
        id: 1,
        title01: "Giá niêm yết (đồng)",
        gia_niemyet: 3000000000,
        content: [],
        title02: "Giá thông thủy",
        gia_thongthuy: 50560000,
        title03: "Diện tích",
        dientich: 100,
        title04: "Hướng",
        huong: "Đông Bắc"
    },
    {
        id: 2,
        title: "Thông tin chi tiết",
        content: [
            {
                icon: '<i class="icon_label fas fa-couch"></i>',
                room: "Phòng khách",
                acreage: 36
            },
            {
                icon: 'https://via.placeholder.com/10x10',
                room: "Phòng ngủ 1",
                acreage: 16
            },
            {
                icon: 'https://via.placeholder.com/10x10',
                room: "Phòng ngủ 2",
                acreage: 16
            },
            {
                icon: 'https://via.placeholder.com/10x10',
                room: "Phòng ngủ 3",
                acreage: 15
            },
            {
                icon: 'https://via.placeholder.com/10x10',
                room: "Phòng vệ sinh 1",
                acreage: 6
            },
            {
                icon: 'https://via.placeholder.com/10x10',
                room: "Phòng vệ sinh 2",
                acreage: 7
            },
            {
                icon: 'https://via.placeholder.com/10x10',
                room: "Ban công",
                acreage: 4
            }
        ]
    }
];
class SiderBar extends Component {
    render() {
        return (
            <div className="apartment_detail">
                {
                    dataInfo.map((infoItem, index) => (
                        <div key={index}>
                        {
                            infoItem.id == 1 ? 
                            <div>
                                <div className="sales_heading">
                                    <span className="text">{infoItem.title01}
                                    <i className="icon_info fas fa-info-circle" />
                                    </span>
                                    <span className="number">{infoItem.gia_niemyet}</span>
                                </div> 
                                <div className="info_1">
                                    <div className="item">
                                        <span className="title">
                                            {infoItem.title02}
                                            <i className="icon_info fas fa-info-circle" />
                                        </span>
                                        <span className="number water">
                                            {infoItem.gia_thongthuy}
                                        </span>
                                        <span className="unit">
                                            ( đồng/m<sup>2</sup> )
                                        </span>
                                    </div>
                                    <div className="item">
                                        <span className="title">
                                            {infoItem.title03}
                                            <i className="icon_info fas fa-info-circle" />
                                        </span>
                                        <span className="number acreage">
                                            {infoItem.dientich}
                                        </span>
                                        <span className="unit">
                                            ( m<sup>2</sup> )
                                        </span>
                                    </div>
                                    <div className="item">
                                        <span className="title">
                                            {infoItem.title04}
                                        </span>
                                        <span className="number direction">
                                            {infoItem.huong}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            : 
                            <div className="info_2">
                                <div className="heading">{infoItem.title}</div>
                                <table>
                                    <tbody>
                                        {
                                            infoItem.content.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="icon">
                                                        <i class="icon_label fas fa-couch"></i>
                                                        </td>
                                                        <td className="name">
                                                            {item.room} ( m<sup>2</sup> )
                                                    </td>
                                                        <td className="number">
                                                            {item.acreage}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                        </div>
                    ))
                }

                <Insentives />
            </div>
        )
    }
}
export default SiderBar;
