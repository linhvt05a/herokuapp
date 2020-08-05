import React from 'react';

const ProductInfo = () => {
    return (
        <div className="row ">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column">
                <div className="m_heading">
                    <button type="button" className="m_button no-event"><span>HÌNH ẢNH SẢN PHẨM </span></button>
                </div>

                <div className="card h-100 square ">
                    <div className="card-body p-0">
                        <div id="div_image_preview">
                            <img src="https://cloudapi.minerva.vn/cdn/sunnyworld-sale-dev/distribution_channel/avatardbdc1e6dc2ed8b441ed120200713111318.401990.jpg" className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                <div className="m_heading">
                    <button type="button" className="m_button no-event">
                        <span>THÔNG TIN SẢN PHẨM </span>
                    </button>
                </div>
                <div className="card h-100 square">
                    <div className="card-body">
                        <div className="text-uppercase fw-medium fs-18">THÔNG TIN SẢN PHẨM</div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Dự án </label>
                                    <input value="Royal Garden" readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Khu</label>
                                    <input value="Khu A" readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Khối </label>
                                    <input value="Khối A1" readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Đợt mở bán </label>
                                    <input value="Đợt 1 " readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Loại hình </label>
                                    <input value="Chung cư căn hộ " readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Tầng / Lô</label>
                                    <input value="Tầng A1 " readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Sản phẩm </label>
                                    <input value="Căn hộ B2 - F.0.18 " readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Kênh phân phối</label>
                                    <input value="Đại lý " readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Tên đại lý</label>
                                    <input value="Công ty BĐS Thành Công " readOnly type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Giá bán</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="Nhập số" value="22.2" readOnly />
                                        <div className="input-group-append select2_currency">
                                            <select>
                                                <option>VND</option>
                                                <option>USD</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Hoa hồng mặc định hiện tại </label>
                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control" placeholder="" value="3.2" readOnly />
                                        <div className="input-group-append">
                                            <div className="input-group-text pl-4 pr-4">%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label className="fw-medium">Số chính sách khuyến mãi đang có </label>
                                    <input value="4" readOnly type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductInfo;