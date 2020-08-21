import React, { Component } from 'react'
import Collapse from './Accordion';

const data = [
    {
      id:1,
      title: "Vị trí",
      paragraph : [
        {
            title: "Dự án : ",
            txt: "Royal Garden"
        },
        {
            title: "Mã căn: ",
            txt: "CH0123"
        },
        {
            title: "Phường: ",
            txt: "12"
        },
        {
            title: "Khu: ",
            txt: "Valencia"
        },
        {
            title: "Số nhà: ",
            txt: "B6 - F01"
        },
        {
            title: "Quận/Huyện: ",
            txt: "Hồ Chí Minh"
        },
        {
            title: "Khối: ",
            txt: "A"
        },
        {
            title: "Đường: ",
            txt: "Lí Thường Kiệt"
        },
        {
            title: "Tỉnh/Thành phố: ",
            txt: "Hồ Chí Minh"
        }
      ]
    },
    {
      id:2,
      title: "Tiện ích nội khu",
      paragraph : [
        {
          content: "Bể bơi người lớn"
        },
        {
          content: "Bể bơi trẻ em"
        },
        {
          content: "Đường dạo quanh bể bơi"
        },
        {
          content: "Giàn hoa, ghế nghỉ"
        },
        {
          content: "Vườn dưỡng sinh- chơi cờ"
        },
        {
          content: "Vườn thiền"
        },
        {
          content: "Thảm cỏ dưỡng sinh"
        },
        {
          content: "Sân chơi trẻ em"
        },
        {
          content: "Sân tập gym ngoài trời"
        },
        {
          content: "Thảm cỏ đa năng"
        },
        {
          content: "Chòi nghỉ cảnh quan"
        }
      ]
    },
    {
      id:3,
      title: "Mặt bằng tầng và mặt bằng dự án",
      paragraph : [
        {
          content: "content 4"
        },
        {
          content: "content 5"
        },
        {
          content: "content 6"
        }
      ]
    }
  ];

class SalesAccordion extends Component {
    render() {
        return (
            <div>
                <Collapse data={data}/>
            </div>
        )
    }
}
export default SalesAccordion;