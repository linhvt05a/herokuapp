import React, { Component } from 'react';
import Parser from 'html-react-parser';
import TabsSlider from "../../TabsSlider";
import MutiSlider from './../../../../components/common/MutiSlider';
import { Trans } from 'react-i18next';

const dataDemo = [
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
        content: "Khu VALLEN gồm 3 tòa căn hộ, được thiết kế hiện đại với 6 loại hình căn hộ từ 29 - 95m2, đáp ứng được mọi nhu cầu của khách hàng. Phân khu Sapphire 3 được đánh số thứ tự (tính từ tuyến đường sắt đô thị số 6 vào công viên trung tâm) lần lượt là S3.01, S3.02, S3.03.",
        video: `<iframe class="embed-responsive-item" width="680" height="500" src="https://www.youtube.com/embed/P_TT76GGhbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
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


class AccordionItem extends React.Component {
  state = {
    opened: true
  };

  render() {
    const {
      props: { 
        project_name, 
        area_name,
        block_name, 
        product_name, 
        address_house,
        address, 
        ward_name,
        district_name,
        province_name 
      },
      state: { opened }
    } = this;

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div
        {...{
          className: `card ${opened && "show"}`
        }}
      >
        <div {...{ className: "card-header" }}>
          <h3 {...{ className: "title" }}><Trans>Vị trí</Trans></h3>
          <div {...{ onClick: () => { this.setState({ opened: !opened }); } }}>
            <i class="icon_collapse fas fa-plus"></i>
          </div>
        </div>
        <div {...{ className: "collapse" }}>

          <div className="list_style_01">
            <div className="row">
              <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                <p className="list_style_01--item">
                  Dự án: &nbsp;
                  <span className="value">{project_name}</span>
                </p>
                <p class="list_style_01--item">
                  Khu : <span class="value">{area_name}</span>
                </p>
                <p class="list_style_01--item">
                  Khối : <span class="value">{block_name}</span>
                </p>
              </div>
              <div class="col-12 col-sm-6 col-sm-6 col-md-4">
                <p class="list_style_01--item">
                  Mã căn : <span class="value">{product_name}</span>
                </p>
                <p class="list_style_01--item">
                  Số nhà : <span class="value">{address_house}</span>
                </p>
                <p class="list_style_01--item">
                  Đường : <span class="value">{address}</span>
                </p>
              </div>
              <div class="col-12 col-sm-6 col-sm-6 col-md-4">
                <p class="list_style_01--item">
                  Phường : <span class="value">{ward_name}</span>
                </p>
                <p class="list_style_01--item">
                  Quận/Huyện : <span class="value">{district_name}</span>
                </p>
                <p class="list_style_01--item">
                  Tỉnh/Thành phố : <span class="value">{province_name}</span>
                </p>
              </div>
            </div>
          </div>

          
          {/* 
                id===2 ?
                <div className="list_style_01">
                    <div className="row">
                      {
                        paragraph.map((item,index) => (
                          <div className="col-sm-12 col-sm-12 col-md-12" key={index}>
                            <TabsSlider/>
                          </div>
                        ))
                      }
                    </div>
                  </div> :
                  id===3 ?
                  <div className="list_style_01">
                    <div className="row">
                      {
                        paragraph.map((item,index) => (
                          <div className="col-sm-12 col-sm-12 col-md-12" key={index}>
                            <p>{item.content}</p>
                            <div class="embed-responsive embed-responsive-16by9">{Parser(item.video)}</div>
                          </div>
                        ))
                      }
                    </div>
                  </div> :
                  id===4 ?
                  <div className="list_style_01">
                    <div className="row">
                      {
                        paragraph.map((item,index) => (
                          <div className="col-12 col-sm-6 col-sm-6 col-md-4" key={index}>
                            <p className="list_style_02--item" key={index}>{item.content}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div> :
                  <div className="list_style_01">
                    <div className="row">
                      {
                        paragraph.map((item,index) => (
                          <div className="col-sm-12 col-sm-12 col-md-12" key={index}>
                            <p key={index}>{item.content}</p>
                            <MutiSlider settings={settings} dataImgs={dataImgs}/>
                          </div>
                        ))
                      }
                    </div>
                  </div> */}
          {/* } */}
        </div>
      </div>
    );
  }
}
export default AccordionItem;