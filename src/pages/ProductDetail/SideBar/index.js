import React, { Component } from 'react'
import Insentives from './Incentives';
import Info from './Info';


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
                <Info dataInfo={dataInfo}/>
                <Insentives />
            </div>
        )
    }
}
export default SiderBar;
