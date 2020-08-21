import React from "react";

import TopBanner from "../../components/common/TopBanner";

class ShoppingGuide extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <div className="direction_product">
                    <div className="container container-sm container-md">
                        <h3 className="main_heading">
                            <span>Hướng dẫn mua </span>
                        </h3>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 direction_product--left">
                                <div className="tabs h-100">
                                    <ul className="nav square nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <div data-toggle="tab" to="#tab01" className="nav-link active" role="presentation" >
                                                <div className="step_item">
                                                    <figure className="icon_step">
                                                        <div className="no_active">
                                                            <img alt="xxxxxx" src="./assets/images/review_purple.png" />
                                                        </div>
                                                        <div className="actived">
                                                            <img alt="xxxxxx" src="./assets/images/review.png" />
                                                        </div>
                                                    </figure>
                                                    <span className="step fw-medium">Bước 1</span>
                                                    <div className="direction">
                                                        <div className="title text-uppercase fw-medium">Tìm kiếm sản phẩm</div>
                                                        <div className="content">
                                                            <i>Hướng dẫn khách hàng cách tìm kiếm sản phẩm
                                                    cần mua.</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="nav-link" role="presentation" data-toggle="tab" to="#tab02">
                                                <div className="step_item">
                                                    <figure className="icon_step">
                                                        <div className="no_active">
                                                            <img alt="xxxxxx" src="./assets/images/order.png" />
                                                        </div>
                                                        <div className="actived">
                                                            <img alt="xxxxxx" src="./assets/images/order_white.png" />
                                                        </div>
                                                    </figure>
                                                    <span className="step fw-medium">Bước 2</span>
                                                    <div className="direction">
                                                        <div className="title text-uppercase fw-medium">ĐẶT MUA SẢN PHẨM</div>
                                                        <div className="content uni-text-0d0d0d">
                                                            <i>
                                                                Hướng dẫn khách hàng cách đặt mua sản phẩm, kham thảo chính sách cho vay.
                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8 col-xl-8 direction_product--right">
                                <div className="card square border-0 h-100">
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane fade show active" id="tab01">
                                                <div className="direction_product--slider">
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail uni-text-6d30ab">
                                                            Bước 1.1:
                                        <span className="text">Tiêu đề</span>
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />
                                            Click chọn các trường thông tin trên khung (1)
                                        </div>
                                                            <p className="group_content">
                                                                Để tìm kiếm dự án theo các tiêu chí sau:
                                        </p>
                                                            <br />
                                        Vị trí (Thành phố/ Quận huyện) | Tiến độ | Phạm vi giá (tỷ đồng) | Diện tích (m2) | Loại hình sản phẩm
                                        <p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">
                                                                Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                                chí đã
                                                                chọn ở
                                                                trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image">
                                                            <img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" />
                                                        </figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail uni-text-6d30ab">
                                                            Bước 1.1:
                                        <span className="text">Tiêu đề</span>
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:
                                        </p>
                                                            <br />
                                        Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm
                                        <p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">
                                                                Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                                chí đã
                                                                chọn ở
                                                                trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image">
                                                            <img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" />
                                                        </figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail uni-text-6d30ab">
                                                            Bước 1.1:
                                        <span className="text">Tiêu đề</span>
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:
                                        </p>
                                                            <br />
                                        Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm
                                        <p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">
                                                                Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                                chí đã
                                                                chọn ở
                                                                trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image">
                                                            <img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" />
                                                        </figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail uni-text-6d30ab">
                                                            Bước 1.1:
                                        <span className="text">Tiêu đề</span>
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:
                                        </p>
                                                            <br />
                                        Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm
                                        <p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">
                                                                Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                                chí đã
                                                                chọn ở
                                                                trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image">
                                                            <img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="tabpanel" className="tab-pane fade" id="tab02">
                                                <div className="direction_product--slider">
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail uni-text-6d30ab">
                                                            Bước 2.1:
                                        <span className="text">Tiêu đề</span>
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:
                                        </p>
                                                            <br />
                                        Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm
                                        <p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">
                                                                Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                                chí đã
                                                                chọn ở
                                                                trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image">
                                                            <img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" />
                                                        </figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail uni-text-6d30ab">
                                                            Bước 2.2:
                                        <span className="text">Tiêu đề</span>
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:
                                        </p>
                                                            <br />
                                        Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">
                                                                Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                                chí đã
                                                                chọn ở
                                                                trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail uni-text-6d30ab">Bước 2.3:<span className="text">Tiêu đề</span></div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d">
                                                                <i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br />Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                            chí đã
                                                            chọn ở
                                                            trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail uni-text-6d30ab">Bước 2.4:<span className="text">Tiêu đề</span></div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br />Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                            chí đã
                                                            chọn ở
                                                            trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*mobile resize window*/}
                        <div className="direction_product--mobile d-none">
                            <div className="mobile_group" data-parent="mobile_group01">
                                <div className="toolbar">
                                    <div className="step_item active">
                                        <div className="row">
                                            <div className="col-md-3 col-sm-4 col-4 pl-1 pr-1 pl-md-0 pr-md-0">
                                                <div className="image">
                                                    <div className="no_active"><img alt="xxxxxx" src="./assets/images/review_purple.png" /></div>
                                                    <div className="actived"><img alt="xxxxxx" src="./assets/images/review.png" /></div>
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-8 col-8 pl-1 pr-1 pl-md-0 pr-md-0 d-flex flex-column flex-lg-row step_item--content text-center">
                                                <span className="step fw-medium">Bước 1</span><span className="title text-uppercase fw-medium">Tìm kiếm sản phẩm</span>
                                                <div className="intro"><i>Hướng dẫn khách hàng cách tìm kiếm sản phẩm cần mua.</i></div>
                                            </div>
                                        </div>
                                        <div className="intro sc-425"><i>Hướng dẫn khách hàng cách tìm kiếm sản phẩm cần mua.</i> </div>
                                    </div>
                                </div>
                                <div className="detail_slider  detail_slider-mobile_group01 active w-100">
                                    <div className="card square h-100">
                                        <div className="card-body">
                                            <div className="direction_product--slider">
                                                <div className="slider">
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail fw-medium uni-text-6d30ab">Bước 1.1:<span className="text">Tiêu đề</span></div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Click chọn các
                                                trường
                                                thông
                                                tin trên khung (1)
                                            </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br />Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                            Phạm vi
                                            giá
                                            (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                            phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Sau đó click vào
                                                nút TÌM
                                                KIẾM
                                            </div>
                                                            <p className="group_content">Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                            chí đã
                                                            chọn ở
                                                            trên.
                                            </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                            tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail fw-medium uni-text-6d30ab">Bước 1.2:<span className="text">Tiêu đề</span></div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Click chọn các
                                                trường
                                                thông
                                                tin trên khung (1)
                                            </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br />Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                            Phạm vi
                                            giá
                                            (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                            phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Sau đó click vào
                                                nút TÌM
                                                KIẾM
                                            </div>
                                                            <p className="group_content">Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                            chí đã
                                                            chọn ở
                                                            trên.
                                            </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                            tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /> </figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail fw-medium uni-text-6d30ab">Bước 1.3:<span className="text">Tiêu đề</span> </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Click chọn các
                                                trường
                                                thông
                                                tin trên khung (1)
                                            </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br /> Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                            Phạm vi
                                            giá
                                            (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                            phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"> <i className="icon fas fa-mouse" />Sau đó click vào
                                                nút TÌM
                                                KIẾM
                                            </div>
                                                            <p className="group_content"> Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                            chí đã
                                                            chọn ở
                                                            trên.
                                            </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                            tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail fw-medium uni-text-6d30ab">Bước 1.4:<span className="text">Tiêu đề</span></div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"> <i className="icon fas fa-mouse" />Click chọn các
                                                trường
                                                thông
                                                tin trên khung (1)
                                            </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br />Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                            Phạm vi
                                            giá
                                            (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                            phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Sau đó click vào
                                                nút TÌM
                                                KIẾM
                                            </div>
                                                            <p className="group_content">Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                            chí đã
                                                            chọn ở
                                                            trên.
                                            </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                            tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile_group" data-parent="mobile_group02">
                                <div className="toolbar">
                                    <div className="step_item">
                                        <div className="row">
                                            <div className="col-md-3 col-sm-4 col-4 pl-4 pl-1 pr-1">
                                                <div className="image">
                                                    <div className="no_active"><img alt="xxxxxx" src="./assets/images/order.png" /></div>
                                                    <div className="actived"><img alt="xxxxxx" src="./assets/images/order_white.png" /></div>
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-8 col-8 pl-1 pr-1 pl-md-0 pr-md-0 d-flex flex-column flex-lg-row step_item--content text-center">
                                                <span className="step fw-medium">Bước 2</span><span className="title text-uppercase fw-medium">ĐẶT MUA SẢN PHẨM</span>
                                                <div className="intro"><i>Hướng dẫn khách hàng cách đặt mua sản phẩm, kham thảo
                                        chính sách cho vay.</i>
                                                </div>
                                            </div>
                                            <div className="intro sc-425"><i>Hướng dẫn khách hàng cách đặt mua sản phẩm, kham
                                    thảo chính sách cho vay.</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail_slider detail_slider-mobile_group02 w-100">
                                    <div className="card square h-100">
                                        <div className="card-body">
                                            <div className="direction_product--slider">
                                                <div className="slider">
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail fw-medium uni-text-6d30ab">Bước 2.1:<span className="text">Tiêu đề</span></div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br />Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                            chí đã
                                                            chọn ở
                                                            trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail fw-medium uni-text-6d30ab">Bước 2.2:<span className="text">Tiêu đề</span></div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br />Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                            chí đã
                                                            chọn ở
                                                            trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail fw-medium uni-text-6d30ab">Bước 2.3:<span className="text">Tiêu đề</span></div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Click chọn các
                                            trường
                                            thông
                                            tin trên khung (1)
                                        </div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br />Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi
                                        giá
                                        (tỷ đồng) | Diện tích (m2) | Loại hình sản
                                        phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Sau đó click vào
                                            nút TÌM
                                            KIẾM
                                        </div>
                                                            <p className="group_content">Để đi bắt đầu tìm kiếm dựa trên những tiêu
                                                            chí đã
                                                            chọn ở
                                                            trên.
                                        </p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng
                                                        với các
                                        tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                    <div className="direction_product--detail">
                                                        <div className="step_detail fw-medium uni-text-6d30ab">Bước 2.4:<span className="text">Tiêu đề</span></div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Click chọn các trường thông tin trên khung (1)</div>
                                                            <p className="group_content">Để tìm kiếm dự án theo các tiêu chí sau:</p>
                                                            <br />Vị trí (Thành phố/ Quận huyện) | Tiến độ |
                                        Phạm vi giá (tỷ đồng) | Diện tích (m2) | Loại hình sản phẩm<p />
                                                        </div>
                                                        <div className="group">
                                                            <div className="group_title uni-text-0d0d0d"><i className="icon fas fa-mouse" />Sau đó click vào nút<u>TÌM KIẾM</u></div>
                                                            <p className="group_content">Để đi bắt đầu tìm kiếm dựa trên những tiêu chí đã chọn ở trên.</p>
                                                        </div>
                                                        <i className="note">Website sẽ hiển thị những dự án đúng với các tiêu chí bạn đã search.</i>
                                                        <figure className="image"><img alt="xxxxxx" className="w-100" src="./assets/images/direction1.jpg" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShoppingGuide;
