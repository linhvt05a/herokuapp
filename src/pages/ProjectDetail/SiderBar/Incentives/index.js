import React, { Component } from 'react';
import SidebarTab from './SidebarTab';

const dataTabs = [
    {
        id_tab: "tab01",
        title: "Dự án",
        content : [
          {
            txtTitle:'Tặng ngay cặp đồng hồ Casio khi mua sản phẩm Royal Garden',
            img: "./assets/images/incentives.jpg",
            date: "Từ: 02/03/2020  -  Đến: 02/06/2020"
          },
          {
            txtTitle:'Tặng ngay túi xách khi mua sản phẩm Royal Garden',
            img: "./assets/images/incentives.jpg",
            date: "Từ: 02/03/2020  -  Đến: 02/06/2020"
          },
          {
            txtTitle:'Tặng ngay Balo khi mua sản phẩm Royal Garden',
            img: "./assets/images/incentives.jpg",
            date: "Từ: 02/03/2020  -  Đến: 02/06/2020"
          },
          {
            txtTitle:'Tặng ngay Balo khi mua sản phẩm Royal Garden',
            img: "./assets/images/incentives.jpg",
            date: "Từ: 02/03/2020  -  Đến: 02/06/2020"
          }
        ]
    },
    {
        id_tab: "tab02",
        title: "Khách hàng",
        content : [
          {
            txtTitle:'Thanh toán 30% căn hộ A01 - Royal Garden',
            txtContent: [
              "Giảm 2% giá trị",
              "Tặng 1 lượng vàng 9999",
              "Tặng gói bảo trì 1 năm căn hộ"
            ],
            date: "Từ: 02/03/2020  -  Đến: 02/06/2020",
            img: "https://via.placeholder.com/730x420"
          },
          {
            txtTitle:'Thanh toán 30% căn hộ A01 - Royal Garden',
            txtContent: [
              "Giảm 2% giá trị",
              "Tặng 1 lượng vàng 9999",
              "Tặng gói bảo trì 1 năm căn hộ"
            ],
            date: "Từ: 02/03/2020  -  Đến: 02/06/2020",
            img: "https://via.placeholder.com/730x420"
          },
          {
            txtTitle:'Thanh toán 30% căn hộ A01 - Royal Garden',
            txtContent: [
              "Giảm 2% giá trị",
              "Tặng 1 lượng vàng 9999",
              "Tặng gói bảo trì 1 năm căn hộ"
            ],
            date: "Từ: 02/03/2020  -  Đến: 02/06/2020",
            img: "https://via.placeholder.com/730x420"
          },
          {
            txtTitle:'Thanh toán 30% căn hộ A01 - Royal Garden',
            txtContent: [
              "Giảm 2% giá trị",
              "Tặng 1 lượng vàng 9999",
              "Tặng gói bảo trì 1 năm căn hộ"
            ],
            date: "Từ: 02/03/2020  -  Đến: 02/06/2020",
            img: "https://via.placeholder.com/730x420"
          }
        ]
    }
]

export default class index extends Component {
    
    render() {
        return (
            <div className="incentives">
                <SidebarTab dataTabs={dataTabs}/>
                <div className="list_button d-flex">
                    <a href="/" className="btn btn_green text-uppercase">MUA NGAY</a>
                    <a href="/" className="btn btn_purple text-uppercase">NGÂN SÁCH</a>
                </div>
            </div>
        )
    }
}