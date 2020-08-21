import React, { Component } from 'react'
import Accordion from './Accordion/Accordion';

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
      title: "Mặt bằng tầng và mặt bằng dự án",
      paragraph : [
        {
          content: [
            "./assets/images/living-room-area_01.jpg",
            "https://via.placeholder.com/730x420",
            "https://via.placeholder.com/730x420",
            "https://via.placeholder.com/730x420",
            "https://via.placeholder.com/730x420",
            "https://via.placeholder.com/730x420",
            "https://via.placeholder.com/730x420",
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Giới thiệu dự án và tiến độ",
      paragraph : [
        {
          content: `<p>Khu VALLEN gồm 3 tòa căn hộ, được thiết kế hiện đại với 6 loại hình căn hộ từ 29 - 95m2, đáp ứng được mọi nhu cầu của khách hàng. Phân khu Sapphire 3 được đánh số thứ tự (tính từ tuyến đường sắt đô thị số 6 vào công viên trung tâm) lần lượt là S3.01, S3.02, S3.03.</p><iframe width="680" height="380" src="https://www.youtube.com/embed/P_TT76GGhbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }
      ]
    },
    {
      id:4,
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
      id:5,
      title: "Ngân hàng hổ trợ liên kết",
      paragraph : [
        {
          content: "Các ngân hàng đầy uy tính đã liên kết với chúng tôi trong việc cho bạn vay những khoản tiền phù hợp, để mua những sản phẩm của chúng tôi :"
        }
      ]
    }
    
  ];

class SalesAccordion extends Component {
    render() {
        return (
            <div>
                <Accordion data={data}/>
            </div>
        )
    }
}
export default SalesAccordion;