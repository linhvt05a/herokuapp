import React, { Component } from 'react';
import ApartmentSlider from './ApartmentSlider';

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
                        <div className="apartment_detail">
                        <div className="sales_heading">
                            <span className="text">Giá niêm yết (đồng)
                            <i className="icon_info fas fa-info-circle" />
                            </span>
                            <span className="number">3.000.000.000</span>
                        </div>
                        <div className="info_1">
                            <div className="item">
                            <span className="title">
                                Giá thông thủy
                                <i className="icon_info fas fa-info-circle" />
                            </span>
                            <span className="number water">
                                50.560.000
                            </span>
                            <span className="unit">
                                ( đồng/m<sup>2</sup> )
                            </span>
                            </div>
                            <div className="item">
                            <span className="title">
                                Diện tích
                                <i className="icon_info fas fa-info-circle" />
                            </span>
                            <span className="number acreage">
                                100
                            </span>
                            <span className="unit">
                                ( m<sup>2</sup> )
                            </span>
                            </div>
                            <div className="item">
                            <span className="title">
                                Hướng
                            </span>
                            <span className="number direction">
                                Đông Bắc
                            </span>
                            </div>
                        </div>
                        <div className="info_2">
                            <div className="heading">Thông tin chi tiết</div>
                            <table>
                            <tbody><tr>
                                <td className="icon">
                                    <i className="icon_label fas fa-couch" />
                                </td>
                                <td className="name">
                                    Phòng khách ( m<sup>2</sup> )
                                </td>
                                <td className="number">
                                    36
                                </td>
                                </tr>
                                <tr>
                                <td className="icon">
                                    <i className="icon_label fas fa-bed" />
                                </td>
                                <td className="name">
                                    Phòng ngủ 1 ( m<sup>2</sup> )
                                </td>
                                <td className="number">
                                    16
                                </td>
                                </tr>
                                <tr>
                                <td className="icon" />
                                <td className="name">
                                    Phòng ngủ 2 ( m<sup>2</sup> )
                                </td>
                                <td className="number">
                                    16
                                </td>
                                </tr>
                                <tr>
                                <td className="icon" />
                                <td className="name">
                                    Phòng ngủ 3 ( m<sup>2</sup> )
                                </td>
                                <td className="number">
                                    15
                                </td>
                                </tr>
                                <tr>
                                <td className="icon">
                                    <i className="icon_label fas fa-toilet-paper" />
                                </td>
                                <td className="name">
                                    Phòng vệ sinh 1 ( m<sup>2</sup> )
                                </td>
                                <td className="number">
                                    6
                                </td>
                                </tr>
                                <tr>
                                <td className="icon" />
                                <td className="name">
                                    Phòng vệ sinh 2 ( m<sup>2</sup> )
                                </td>
                                <td className="number">
                                    7
                                </td>
                                </tr>
                                <tr>
                                <td className="icon">
                                    <i className="icon_label fas fa-band-aid" />
                                </td>
                                <td className="name">
                                    Ban công ( m<sup>2</sup> )
                                </td>
                                <td className="number">
                                    4
                                </td>
                                </tr>
                            </tbody></table>
                        </div>
                        <div className="incentives">
                            <div className="incentives__heading">
                            Chính sách ưu đãi
                            </div>
                            <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#incentives-tab01" role="tab" aria-controls="incentives" aria-selected="true">
                                Dự án
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#incentives-tab02" role="tab" aria-controls="profile" aria-selected="false">
                                Khách hàng
                                </a>
                            </li>
                            </ul>
                            <div className="tab-content">
                            <div className="tab-pane fade show active" id="incentives-tab01" role="tabpanel" aria-labelledby="incentives-tab01">
                                <div className="incentives__project">
                                <a href="/" className="link" />
                                <figure className="img">
                                    <img src="./assets/images/incentives.jpg" alt="Tặng ngay cặp đồng hồ Casio khi mua sản phẩm Royal Garden " />
                                </figure>
                                <div className="detail">
                                    <div className="text">
                                    Tặng ngay cặp đồng hồ Casio khi mua sản phẩm Royal Garden 
                                    </div>
                                    <span className="date">
                                    <i className="icon far fa-clock" />
                                    Từ: 02/03/2020  -  Đến: 02/06/2020
                                    </span>
                                </div>
                                </div>
                                <div className="incentives__project">
                                <a href="/" className="link" />
                                <figure className="img">
                                    <img src="./assets/images/incentives.jpg" alt="Tặng ngay cặp đồng hồ Casio khi mua sản phẩm Royal Garden " />
                                </figure>
                                <div className="detail">
                                    <div className="text">
                                    Tặng ngay cặp đồng hồ Casio khi mua sản phẩm Royal Garden 
                                    </div>
                                    <span className="date">
                                    <i className="icon far fa-clock" />
                                    Từ: 02/03/2020  -  Đến: 02/06/2020
                                    </span>
                                </div>
                                </div>
                                <div className="incentives__project">
                                <a href="/" className="link" />
                                <figure className="img">
                                    <img src="./assets/images/incentives.jpg" alt="Tặng ngay cặp đồng hồ Casio khi mua sản phẩm Royal Garden " />
                                </figure>
                                <div className="detail">
                                    <div className="text">
                                    Tặng ngay cặp đồng hồ Casio khi mua sản phẩm Royal Garden 
                                    </div>
                                    <span className="date">
                                    <i className="icon far fa-clock" />
                                    Từ: 02/03/2020  -  Đến: 02/06/2020
                                    </span>
                                </div>
                                </div>
                                <div className="incentives__project">
                                <a href="/" className="link" />
                                <figure className="img">
                                    <img src="./assets/images/incentives.jpg" alt="Tặng ngay cặp đồng hồ Casio khi mua sản phẩm Royal Garden " />
                                </figure>
                                <div className="detail">
                                    <div className="text">
                                    Tặng ngay cặp đồng hồ Casio khi mua sản phẩm Royal Garden 
                                    </div>
                                    <span className="date">
                                    <i className="icon far fa-clock" />
                                    Từ: 02/03/2020  -  Đến: 02/06/2020
                                    </span>
                                </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="incentives-tab02" role="tabpanel" aria-labelledby="incentives-tab02">
                                <div className="incentives__user">
                                <div className="heading">
                                    <a href="/" className="text">
                                    Thanh toán 30% căn hộ A01 - Royal Garden
                                    </a>
                                    <span className="date">
                                    <i className="icon far fa-clock" />
                                    Từ: 02/03/2020  -  Đến: 02/06/2020
                                    </span>
                                </div>
                                <div className="list">
                                    <p className="text">Giảm 2% giá trị</p>
                                    <p className="text">Tặng 1 lượng vàng 9999</p>
                                    <p className="text">Tặng gói bảo trì 1 năm căn hộ</p>
                                </div>
                                </div>
                                <div className="incentives__user">
                                <div className="heading">
                                    <a href="/" className="text">
                                    Thanh toán 30% căn hộ A01 - Royal Garden
                                    </a>
                                    <span className="date">
                                    <i className="icon far fa-clock" />
                                    Từ: 02/03/2020  -  Đến: 02/06/2020
                                    </span>
                                </div>
                                <div className="list">
                                    <p className="text">Giảm 2% giá trị</p>
                                    <p className="text">Tặng 1 lượng vàng 9999</p>
                                    <p className="text">Tặng gói bảo trì 1 năm căn hộ</p>
                                </div>
                                </div>
                                <div className="incentives__user">
                                <div className="heading">
                                    <a href="/" className="text">
                                    Thanh toán 30% căn hộ A01 - Royal Garden
                                    </a>
                                    <span className="date">
                                    <i className="icon far fa-clock" />
                                    Từ: 02/03/2020  -  Đến: 02/06/2020
                                    </span>
                                </div>
                                <div className="list">
                                    <p className="text">Giảm 2% giá trị</p>
                                    <p className="text">Tặng 1 lượng vàng 9999</p>
                                    <p className="text">Tặng gói bảo trì 1 năm căn hộ</p>
                                </div>
                                </div>
                                <div className="incentives__user">
                                <div className="heading">
                                    <a href="/" className="text">
                                    Thanh toán 30% căn hộ A01 - Royal Garden
                                    </a>
                                    <span className="date">
                                    <i className="icon far fa-clock" />
                                    Từ: 02/03/2020  -  Đến: 02/06/2020
                                    </span>
                                </div>
                                <div className="list">
                                    <p className="text">Giảm 2% giá trị</p>
                                    <p className="text">Tặng 1 lượng vàng 9999</p>
                                    <p className="text">Tặng gói bảo trì 1 năm căn hộ</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="list_button d-flex">
                            <a href="/" className="btn btn_green text-uppercase">MUA NGAY</a>
                            <a href="/" className="btn btn_purple text-uppercase">NGÂN SÁCH</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectDetail;