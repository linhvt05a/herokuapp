import React from 'react';
import { InputBase } from "../../../components/base"

const CustomerInformation = ({ Item }) => {
    return (
        <div className="loan_online--wrap active" data-step={1}>
            <div className="loan_online--item">
                <div className="heading">Thông tin khách hàng</div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <InputBase
                            label="cart_customer_name"
                            titleClassName="label"
                            classNameInput="form-control"
                            type="text"
                            placeholder="Nhập họ tên"
                            require
                        />
                        {/* <div className="form-group">
                            <label className="label">Họ tên <span className="star">*</span></label>
                            <input type="text" placeholder="Nhập họ tên" className="form-control" />
                        </div> */}
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Ngày sinh <span className="star">*</span></label>
                            <div className="date-picker">
                                <input type="text" placeholder="Chọn" className="form-control js-datepicker" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Giới tính <span className="star">*</span></label>
                            <select className="form-control js-select2" data-placeholder="Chọn">
                                <option value>xxxx</option>
                                <option value={1}>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group">
                            <label className="label">CMND/Hộ chiếu <span className="star">*</span></label>
                            <input type="text" placeholder="Nhập số" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group">
                            <label className="label">Ngày cấp <span className="star">*</span></label>
                            <div className="date-picker">
                                <input type="text" placeholder="Nhập ngày" className="form-control js-datepicker" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Nơi cấp <span className="star">*</span></label>
                            <select className="form-control js-select2" data-placeholder="Chọn nơi">
                                <option value>xxxx</option>
                                <option value={1}>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Tình trạng hôn nhân</label>
                            <select className="form-control js-select2" data-placeholder="Chọn">
                                <option value>xxxx</option>
                                <option value={1}>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Tình trạng học vấn</label>
                            <select className="form-control js-select2" data-placeholder="Chọn">
                                <option value>xxxx</option>
                                <option value={1}>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label" style={{ fontSize: 15 }}>Tình trạng sở hữu nhà ở/BĐS</label>
                            <select className="form-control js-select2" data-placeholder="Chọn">
                                <option value>xxxx</option>
                                <option value={1}>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Số nhà <span className="star">*</span></label>
                            <input type="text" className="form-control" placeholder="Nhập" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Tỉnh / Thành phố <span className="star">*</span></label>
                            <select className="form-control js-select2" data-placeholder="Chọn nơi">
                                <option value>xxxx</option>
                                <option value={1}>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Quận / Huyện <span className="star">*</span></label>
                            <select className="form-control js-select2" data-placeholder="Chọn nơi">
                                <option value>xxxx</option>
                                <option value={1}>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Phường / Xã <span className="star">*</span></label>
                            <select className="form-control js-select2" data-placeholder="Chọn nơi">
                                <option value>xxxx</option>
                                <option value={1}>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Điện thoại <span className="star">*</span></label>
                            <input type="text" className="form-control" placeholder="Nhập số" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Email <span className="star">*</span></label>
                            <input type="text" className="form-control" placeholder="Nhập email" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerInformation;