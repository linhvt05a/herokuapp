import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class CardFilter extends Component {
    render() {
        return (
            <div>
                <div className="m_heading">
                    <button className="m_button no-event"><span>TÌM KIẾM DỰ ÁN</span></button>
                </div>
                <div className="card square">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="fw-medium">Theo vùng miền </label>
                                    <select className="form-control js-seclect2" data-placeholder="Chọn khu vực" name="region" id="id_region" tabIndex={-1} aria-hidden="true">
                                        <option value>Chọn khu vực</option>
                                        <option value={3}>Bắc Trung Bộ</option>
                                        <option value={6}>Đông Bắc Bộ</option>
                                        <option value={8}>Đồng Bằng Sông Cửu Long</option>
                                        <option value={5}>Đồng Bằng Sông Hồng</option>
                                        <option value={9}>Đông Nam Bộ</option>
                                        <option value={2}>Nam Trung Bộ</option>
                                        <option value={4}>Tây Bắc Bộ</option>
                                        <option value={1}>Tây Nguyên</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="fw-medium">Theo Tỉnh/TP</label>
                                    <select className="form-control js-seclect2" data-placeholder="Chọn Tỉnh/TP" id="id_province" aria-label="Chọn Tỉnh/TP" name="province" tabIndex={-1} aria-hidden="true">
                                        <option value>Chọn Tỉnh/TP</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="fw-medium">Theo loại dự án</label>
                                    <select className="form-control js-seclect2" data-placeholder="Chọn loại dự án" name="type_project" tabIndex={-1} aria-hidden="true">
                                        <option value>Chọn loại dự án</option>
                                        <option value={1}>Chung Cư Căn Hộ</option>
                                        <option value={3}>Văn Phòng Cho Thuê</option>
                                        <option value={6}>Trung Tâm Thương Mại</option>
                                        <option value={8}>Biệt Thự Cao Cấp</option>
                                        <option value={5}>Siêu Thị</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="fw-medium"> Theo trạng thái dự án</label>
                                    <select className="form-control js-seclect2" data-placeholder="Chọn loại dự án" name="status_project" tabIndex={-1} aria-hidden="true">
                                        <option value>Chọn loại dự án </option>
                                        <option value={1}>Mới</option>
                                        <option value={2}>Đang chờ</option>
                                        <option value={3}>Đang triển khai</option>
                                        <option value={4}>Dừng</option>
                                        <option value={5}>Hoàn Thành</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn-uni-purple">Tìm Kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardFilter;
