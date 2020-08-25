import React, { Component } from 'react';
import Parser from 'html-react-parser';
import TabsSlider from "../../TabsSlider";
import MutiSlider from './../../../../components/common/MutiSlider';
import { Trans } from 'react-i18next';

const dataImgs = [
  {
    id: 1,
    img: "./assets/images/scb_logo.png",
    width: 152,
    height: 80
  },
  {
    id: 2,
    img: "./assets/images/vcb_logo.png",
    width: 152,
    height: 80
  },
  {
    id: 3,
    img: "./assets/images/tcb_logo.png",
    width: 152,
    height: 80
  },
  {
    id: 4,
    img: "./assets/images/acb_logo.png",
    width: 152,
    height: 80
  },
  {
    id: 5,
    img: "https://via.placeholder.com/177x93",
    width: 152,
    height: 80
  },
  {
    id: 6,
    img: "https://via.placeholder.com/177x93",
    width: 152,
    height: 80
  }
]

class AccordionItem extends React.Component {
  state = {
    opened: true
  };

  render() {
    const {
      props: { project_name, area_name,block_name, product_name, address_house,address, ward_name,district_name,province_name },
      state: { opened }
    } = this;
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
                            <MutiSlider dataImgs={dataImgs}/>
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