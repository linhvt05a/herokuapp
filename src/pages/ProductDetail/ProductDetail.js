import React, { Component } from 'react';
import ApartmentSlider from './Slider';
import SideBar from './SideBar';
import SalesAccordion from './SalesAccordion';

class ProductDetail extends Component {
    render() {
        return (
            <div className="project_detail--apartment bg_grey">
                <div className="container container-sm container-md">
                    <h2 className="main_heading"><span>Căn hộ B6 - F01</span></h2>
                    <div className="row">
                    <div className="col-12 col-sm-12 col-lg-8">
                        <ApartmentSlider/>
                        <div className="description">
                            <p>Căn hộ bao gồm 1 phòng ngủ, 1 phòng khách, 1 nhà vệ sinh, 1 phòng bếp, lô gia và không gian đa năng cư dân có thể sử dụng làm phòng đọc sách, không gian chơi cho trẻ em hoặc góc làm việc riêng,...</p>
                            <p>Diện tích thông thủy là 42.8m2.</p>
                            <p>Căn hộ có hướng ban công là hướng Đông Nam.</p>
                            <p>Việc mua bán sang nhượng căn hộ thứ cấp diễn ra rất nhiều và hoàn toàn tuân thủ đúng qui định của pháp luật vì vậy người bán và người mua cần phải biết và làm thủ tục cho đúng, đầy đủ để tránh mất thời gian.</p> 
                            <p>Sau khi các bên thống nhất về giá mua bán căn hộ cần làm các bước như sau:</p>
                        </div>
                        <SalesAccordion/>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4">
                        <SideBar/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDetail;