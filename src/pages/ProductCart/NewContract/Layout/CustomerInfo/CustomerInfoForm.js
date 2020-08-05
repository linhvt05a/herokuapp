import React from 'react';
import { Link } from 'react-router-dom';

const CustomerInfoForm = (props) => {
    return (
        <div>
            <div class="create-contract__wrap">
                <div class="create-contract__item collapse show">
                    <div class="d-flex align-items-center flex-wrap mb-2 mt-4">
                        <div class="text-uppercase uni_text_6d30ab fw-medium fs-18 mr-5">
                            Thông tin khách hàng
                    </div>
                        <div class="d-flex flex-wrap mt-2 mt-md-0 mb-2 mb-md-0">
                            <label class="checkbox-inline active radio-circle mr-4">
                                <input type="radio" name="radio-customer" value="1" class="checkbox-custom" />
                                <span class="checkbox-custom-dummy"></span>
                                            Khách hàng mới
                        </label>
                            <label class="checkbox-inline radio-circle">
                                <input type="radio" name="radio-customer" value="2" class="checkbox-custom" />
                                <span class="checkbox-custom-dummy"></span>
                                            Khách hàng đã có trong hệ thống
                        </label>
                        </div>
                    </div>
                    <div class="create-contract__customer collapse show">
                        <i class="text-note d-block">Ghi Chú<span class="uni_star_e94c4c">(*)</span>: Thông tin bắt buộc nhập</i>
                        <div class="row mt-2 mb-4">
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Danh xưng <span class="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Họ tên <span class="uni_star_e94c4c">*</span></label>
                                    <input type="text" placeholder="Nhập họ tên  " class="form-control" />
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Đối tượng khách hàng <span class="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Số CMND/CCCD/Hộ chiếu <span class="uni_star_e94c4c">*</span></label>
                                    <input type="text" placeholder="Nhập số" class="form-control" />
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Quốc tịch <span class="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Tỉnh / Thành phố <span class="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Quận / Huyện <span class="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Phường / Xã <span class="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Số nhà <span class="uni_star_e94c4c">*</span></label>
                                    <input type="text" placeholder="Nhập số nhà" class="form-control" />
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Email <span class="uni_star_e94c4c">*</span></label>
                                    <input type="text" placeholder="Email " class="form-control" />
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Điện thoại <span class="uni_star_e94c4c">*</span></label>
                                    <input type="text" placeholder="Nhập số " class="form-control" />
                                </div>
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-3">
                                <div class="form-group">
                                    <label class="fw-medium">Ngày sinh</label>
                                    <div class="m_datepicker">
                                        <input type="text" placeholder="Chọn ngày sinh " class="form-control js-datepicker" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sales_list_button text-right">
                <button type="button" class="min-width-button min-height-40 btn-uni-delete">Hủy</button>
                <button type="button" class="min-width-button min-height-40 btn-uni-purple-outline">Trở về</button>
                <Link to="/product_card/new_contract/discount_option"><button type="button" class="min-width-button min-height-40 btn-uni-purple createContractNext">Tiếp theo</button></Link>
            </div>
        </div>
    )
}

export default CustomerInfoForm;