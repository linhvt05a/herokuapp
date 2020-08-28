import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    const {dataImgs}= this.props; //dataImgs mẫu xem ở /ProductDetail/AccordionItem
    console.log(dataImgs);
    
    const { settings } = this.props;
    return (
      <div className="bank_list">
        <Slider {...settings} className="multi__slider ">
          {
            dataImgs ?
            dataImgs.map((item, index) => {
              return (
                <figure key={index}>
                  <img src={item.img} alt=""/>
                </figure>
              )
            })
            :""
          }
        </Slider>
      </div>
    );
  }
}