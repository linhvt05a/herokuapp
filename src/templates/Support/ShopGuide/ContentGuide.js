import React, { Component } from 'react';
import Slider from "react-slick";
import {SwipeGuide} from './index'

const guide = [
  {
    step:'2.1', 
    title:'Tiêu đề', 
    field:'Click chọn các trường thông tin trên khung (1)', 
    criteria:'Để tìm kiếm dự án theo các tiêu chí sau:', 
    categories:' Vị trí (Thành phố/ Quận huyện) | Tiến độ | Phạm vi giá (tỷ đồng) | Diện tích(m2) | Loại hình sản phẩm',
    guideMouse:'Sau đó click vào nút TÌM KIẾM',
    content:'Để đi bắt đầu tìm kiếm dựa trên những tiêu chí đã chọn ở trên.',
    webGuide:' Website sẽ hiển thị những dự án đúng với các tiêu chí bạn đã search.',
    guideImage:'../images/direction1.jpg'
  },
  {
    step:'2.2', 
    title:'Tiêu đề', 
    field:'Click chọn các trường thông tin trên khung (1)', 
    criteria:'Để tìm kiếm dự án theo các tiêu chí sau:', 
    categories:' Vị trí (Thành phố/ Quận huyện) | Tiến độ | Phạm vi giá (tỷ đồng) | Diện tích(m2) | Loại hình sản phẩm',
    guideMouse:'Sau đó click vào nút TÌM KIẾM',
    content:'Để đi bắt đầu tìm kiếm dựa trên những tiêu chí đã chọn ở trên.',
    webGuide:' Website sẽ hiển thị những dự án đúng với các tiêu chí bạn đã search.',
    guideImage:'../images/direction1.jpg'
  },
  {
    step:'2.3', 
    title:'Tiêu đề', 
    field:'Click chọn các trường thông tin trên khung (1)', 
    criteria:'Để tìm kiếm dự án theo các tiêu chí sau:', 
    categories:' Vị trí (Thành phố/ Quận huyện) | Tiến độ | Phạm vi giá (tỷ đồng) | Diện tích(m2) | Loại hình sản phẩm',
    guideMouse:'Sau đó click vào nút TÌM KIẾM',
    content:'Để đi bắt đầu tìm kiếm dựa trên những tiêu chí đã chọn ở trên.',
    webGuide:' Website sẽ hiển thị những dự án đúng với các tiêu chí bạn đã search.',
    guideImage:'../images/direction1.jpg'
  },
  {
    step:'2.4', 
    title:'Tiêu đề', 
    field:'Click chọn các trường thông tin trên khung (1)', 
    criteria:'Để tìm kiếm dự án theo các tiêu chí sau:', 
    categories:' Vị trí (Thành phố/ Quận huyện) | Tiến độ | Phạm vi giá (tỷ đồng) | Diện tích(m2) | Loại hình sản phẩm',
    guideMouse:'Sau đó click vào nút TÌM KIẾM',
    content:'Để đi bắt đầu tìm kiếm dựa trên những tiêu chí đã chọn ở trên.',
    webGuide:' Website sẽ hiển thị những dự án đúng với các tiêu chí bạn đã search.',
    guideImage:'../images/direction1.jpg'
  }
]

const ContentGuide = () =>{
    return(
        <div role="tabpanel" className="tab-pane fade active show" id="tab02">
          <div className="direction_product--slider slick-initialized ">
              <Slider >
                  { guide && guide.map((guide, index)=><SwipeGuide key={index} item={guide}/>)}
              </Slider>
          </div>
      </div>
    )
}

export default ContentGuide

