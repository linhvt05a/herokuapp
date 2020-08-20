import React, { Component } from 'react';
import ApartmentSlider from './Slider/ApartmentSlider';
import SiderBar from './SiderBar';

class ProjectDetail extends Component {
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
                        <div className="sales_collapse">
                        <div className="card show">
                            <div className="card-header">
                                <h2 className="title">Vị trí</h2>
                                <div className="icon_action">
                                    <i className="icon_collapse fas fa-plus" />
                                </div>
                            </div>
                            <div className="collapse">
                            <div className="list_style_01">
                                <div className="row">
                                <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                    <p className="list_style_01--item">
                                    Dự án : <span className="value">Royal Garden</span>
                                    </p>
                                    <p className="list_style_01--item">
                                    Khu : <span className="value">Valencia</span>
                                    </p>
                                    <p className="list_style_01--item">
                                    Khối : <span className="value">A</span>
                                    </p>
                                </div>
                                <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                    <p className="list_style_01--item">
                                    Mã căn : <span className="value">CH0123</span>
                                    </p>
                                    <p className="list_style_01--item">
                                    Số nhà : <span className="value">B6 - F01</span>
                                    </p>
                                    <p className="list_style_01--item">
                                    Đường : <span className="value">Lí Thường Kiệt</span>
                                    </p>
                                </div>
                                <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                    <p className="list_style_01--item">
                                    Phường : <span className="value">12</span>
                                    </p>
                                    <p className="list_style_01--item">
                                    Quận/Huyện : <span className="value">Hồ Chí Minh</span>
                                    </p>
                                    <p className="list_style_01--item">
                                    Tỉnh/Thành phố : <span className="value">Hồ Chí Minh</span>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="sales_collapse">
                        <div className="card show">
                            <div className="card-header">
                                <h2 className="title">Tiện ích nội khu</h2>
                                <div className="icon_action">
                                    <i className="icon_collapse fas fa-plus" />
                                </div>
                            </div>
                            <div className="collapse">
                            <div className="list_style_02">
                                <div className="row">
                                <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                    <p className="list_style_02--item">Bể bơi người lớn</p>
                                    <p className="list_style_02--item">Giàn hoa, ghế nghỉ</p>
                                    <p className="list_style_02--item">Vườn thiền</p>
                                    <p className="list_style_02--item">Sân tập gym ngoài trời</p>
                                </div>
                                <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                    <p className="list_style_02--item">Bể bơi trẻ em</p>
                                    <p className="list_style_02--item">Vườn cảnh quan</p>
                                    <p className="list_style_02--item">Thảm cỏ dưỡng sinh</p>
                                    <p className="list_style_02--item">Thảm cỏ đa năng</p>
                                </div>
                                <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                    <p className="list_style_02--item">Đường dạo quanh bể bơi</p>
                                    <p className="list_style_02--item">Vườn dưỡng sinh- chơi cờ</p>
                                    <p className="list_style_02--item">Sân chơi trẻ em</p>
                                    <p className="list_style_02--item">Chòi nghỉ cảnh quan</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="sales_collapse">
                        <div className="card show">
                            <div className="card-header">
                            <h2 className="title">Mặt bằng tầng và mặt bằng dự án</h2>
                            <div className="icon_action">
                                <i className="icon_collapse fas fa-plus" />
                            </div>
                            </div>
                            <div className="collapse">
                            <div className="apartment_slider selectApartment mt-3 mb-0">
                                <ul className="image_type selectApartmentType">
                                <li data-type="2d" className="type_2d active">2d</li>
                                <li data-type="3d" className="type_3d ">3d</li>
                                <li data-type="ar" className="type_ar">AR</li>
                                </ul>
                                <div className="wrap wrap_2d active">
                                <div className="apartment_slider-for">
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="apartment_slider-nav">
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                </div>
                                </div>
                                <div className="wrap wrap_3d">
                                <div className="apartment_slider-for">
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="apartment_slider-nav">
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                    <figure>
                                    <img src="./assets/images/living-room-area.jpg" alt="" />
                                    </figure>
                                </div>
                                </div>
                                <div className="wrap wrap_ar">
                                <figure>
                                    <img className="w-100" src="./assets/images/living-room-area.jpg" alt="" />
                                </figure>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4">
                        <SiderBar/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectDetail;