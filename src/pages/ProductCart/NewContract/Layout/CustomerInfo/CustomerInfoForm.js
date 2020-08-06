import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Select } from 'antd';

const CustomerInfoForm = (props) => {
    return (
        <div>
            <div className="create-contract__wrap">
                <div className="create-contract__item collapse show">
                    <div className="d-flex align-items-center flex-wrap mb-2 mt-4">
                        <div className="text-uppercase uni_text_6d30ab fw-medium fs-18 mr-5">
                            Thông tin khách hàng
                    </div>
                        <div className="d-flex flex-wrap mt-2 mt-md-0 mb-2 mb-md-0">
                            <label className="checkbox-inline active radio-circle mr-4">
                                <Input type="radio" name="radio-customer" value="1" className="checkbox-custom" />
                                <span className="checkbox-custom-dummy"></span>
                                            Khách hàng mới
                        </label>
                            <label className="checkbox-inline radio-circle">
                                <Input type="radio" name="radio-customer" value="2" className="checkbox-custom" />
                                <span className="checkbox-custom-dummy"></span>
                                            Khách hàng đã có trong hệ thống
                        </label>
                        </div>
                    </div>
                    <div className="create-contract__customer collapse show">
                        <i className="text-note d-block">Ghi Chú<span className="uni_star_e94c4c">(*)</span>: Thông tin bắt buộc nhập</i>
                        <div className="row mt-2 mb-4">
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Danh xưng <span className="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Họ tên <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Nhập họ tên  " className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Đối tượng khách hàng <span className="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Số CMND/CCCD/Hộ chiếu <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Nhập số" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Quốc tịch <span className="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Tỉnh / Thành phố <span className="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Quận / Huyện <span className="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Phường / Xã <span className="uni_star_e94c4c">*</span></label>
                                    <select><option>test</option></select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Số nhà <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Nhập số nhà" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Email <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Email " className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Điện thoại <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Nhập số " className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Ngày sinh</label>
                                    <div className="m_datepicker">
                                        <Input type="text" placeholder="Chọn ngày sinh " className="form-control js-datepicker" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sales_list_button text-right">
                <button type="button" className="min-width-button min-height-40 btn-uni-delete">Hủy</button>
                <button type="button" className="min-width-button min-height-40 btn-uni-purple-outline">Trở về</button>
                <Link to="/product_card/new_contract/discount_option"><button type="button" className="min-width-button min-height-40 btn-uni-purple createContractNext">Tiếp theo</button></Link>
            </div>
        </div>
    )
}

export default CustomerInfoForm;