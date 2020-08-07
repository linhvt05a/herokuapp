import React from 'react';

const ProjectInfo = (props) => {
    let { detail } = props;
    return (
        detail != null ?
        <div className="row ">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column">
                <div className="m_heading">
                    <button type="button" className="m_button no-event"><span>HÌNH ẢNH</span></button>
                </div>
                <div className="card h-100 square ">
                    <div className="card-body p-0">
                        <div id="div_image_preview">
                            <img src={detail.project_avatar_url} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                <div className="m_heading">
                    <button type="button" className="m_button no-event">
                        <span>THÔNG TIN TỔNG QUÁT</span>
                    </button>
                </div>
                <div className="card h-100 square">
                    <div className="card-body">
                        <div className="text-uppercase fw-medium fs-18">THÔNG TIN DỰ ÁN</div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Tên dự án</label>
                                    <input value={detail.name} readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Loại hình dự án</label>
                                    <input value={detail.setting_type_name} readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Trạng thái dự án</label>
                                    <input value={detail.project_status_name} readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Ngày bắt đầu dự án</label>
                                    <input value={detail.date_opened} readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Diện tích (m²)</label>
                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control" placeholder="" value={detail.project_acreage} readOnly />
                                        <div className="input-group-append">
                                            <div className="input-group-text pl-4 pr-4">m²</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Vị trí</label>
                                    <input value={detail.address} readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Tỉnh / Thành phố</label>
                                    <input value={detail.province_name} readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Quận / Huyện</label>
                                    <input value={detail.district_name} readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Phường / Xã</label>
                                    <input value={detail.ward_name} readOnly type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        : ""
    )
}

export default ProjectInfo;