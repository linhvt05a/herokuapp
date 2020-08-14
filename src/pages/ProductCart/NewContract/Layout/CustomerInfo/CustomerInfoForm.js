import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Radio } from 'antd';
import Input from '../../../../../components/base/Input/Input';
import DatePicker from '../../../../../components/base/DatePicker/DatePicker';
import Select from '../../../../../components/base/Select/Select';
import { useDispatch } from "react-redux";
import { customerListRequest } from '../../../../../store/action';

const CustomerInfoForm = (props) => {
    const { typeCustomer, changeTypeCustomer, customerList } = props;
    const dispatch = useDispatch();
    const onChangeTypeCustomer = (e) => {
        changeTypeCustomer(e.target.value);
        e.preventDefault();
    }
    const onSearchCustomer = (search) => {
        // dispatch(customerListRequest({token, search}));
    }
    return (
        <div>
            <div className="create-contract__wrap">
                <div className="create-contract__item collapse show">
                    <div className="d-flex align-items-center flex-wrap mb-2 mt-4">
                        <div className="text-uppercase uni_text_6d30ab fw-medium fs-18 mr-5">
                            Thông tin khách hàng
                        </div>
                        <div className="d-flex flex-wrap mt-2 mt-md-0 mb-2 mb-md-0">
                            <Radio.Group onChange={onChangeTypeCustomer} value={typeCustomer}>
                                <Radio className="checkbox-custom-dummy" value={0}>Khách hàng mới</Radio>
                                <Radio className="checkbox-custom-dummy" value={1}>Khách hàng đã có trong hệ thống</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    {typeCustomer === 1 &&
                        <div className="create-contract__customer collapse show">
                            <div class="row mb-4 mt-4" data-select2-id="336">
                                <div class="col-12 col-md-2 d-flex align-items-center">
                                    <label class="fw-medium mb-0 mr-5 w-auto">Tìm kiếm khách hàng </label>
                                </div>
                                <div class="col-12 col-md-10" data-select2-id="335">
                                    <div class="form-group select2-highlight mb-0">
                                        <Select onSearch={onSearchCustomer} data={customerList} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="create-contract__customer collapse show">
                        <i className="text-note d-block">Ghi Chú<span className="uni_star_e94c4c">(*)</span>: Thông tin bắt buộc nhập</i>
                        <div className="row mt-2 mb-4">
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Danh xưng <span className="uni_star_e94c4c">*</span></label>
                                    <Select datas={[{ label: 'Ông', value: 0 }, { label: 'Bà', value: 1 }]}
                                        placeholder='Chọn danh xưng'
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <Input label='Họ tên' type="text" placeholder="Nhập họ tên" />
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Đối tượng khách hàng <span className="uni_star_e94c4c">*</span></label>
                                    <Select></Select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <Input type="text"
                                    placeholder="Nhập số"
                                    label={<><span>Số CMND/CCCD/Hộ chiếu</span> <span className="uni_star_e94c4c">*</span></>}
                                />
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Quốc tịch <span className="uni_star_e94c4c">*</span></label>
                                    <Select></Select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Tỉnh / Thành phố <span className="uni_star_e94c4c">*</span></label>
                                    <Select></Select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Quận / Huyện <span className="uni_star_e94c4c">*</span></label>
                                    <Select></Select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Phường / Xã <span className="uni_star_e94c4c">*</span></label>
                                    <Select></Select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Số nhà <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Nhập số nhà" />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Email <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Email " />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Điện thoại <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Nhập số " />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Ngày sinh</label>
                                    <DatePicker style={{ width: "100%" }} />
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