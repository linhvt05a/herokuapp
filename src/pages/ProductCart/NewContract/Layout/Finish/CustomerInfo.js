import React from 'react';

const CustomerInfo = () => {
    return (
        <div class="col-12 col-md-12 col-lg-6 d-flex flex-column mb-4 mb-lg-0">
            <div class="h-100 create-contract__summary">
                <div class="text-uppercase uni_text_6d30ab fw-medium fs-18 mb-2">
                    thông tin khách hàng
                                            </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-user"></i>Họ tên
                                                </div>
                    <div class="uni_text_6d30ab fw-medium text-right">Nguyễn Anh Đào</div>
                </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-address-card"></i>
                                                    Số CMND/CCCD/Hộ chiếu
                                                </div>
                    <div class="uni_text_000 fw-medium text-right">340320350</div>
                </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-map"></i>Địa chỉ thường trú
                                                </div>
                    <div class="uni_text_000 fw-medium text-right">
                        24/3 đường Lê Hồng Phong, Phường 16, Q.3, Tp.HCM, Việt Nam
                                                </div>
                </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-envelope"></i>Email
                                                </div>
                    <div class="uni_text_000 fw-medium text-right">anhdaonguyen@gmail.com</div>
                </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-phone"></i>Số điện thoại
                                                </div>
                    <div class="uni_text_000 fw-medium text-right">0909 789 325</div>
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo;