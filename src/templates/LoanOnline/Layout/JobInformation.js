import React from 'react';

const JobInformation = props => {
    return (
        <div className="loan_online--wrap active" data-step={2}>
            <div className="loan_online--item">
                <div className="heading">Thông tin nghề nghiệp</div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group">
                            <label className="label">Tên đơn vị công tác <span className="star">*</span></label>
                            <input type="text" placeholder="Nhập tên đơn vị" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Loại hình doanh nghiệp <span className="star">*</span></label>
                            <select className="form-control js-select2" data-placeholder="Chọn">
                                <option value>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Vị trí công tác <span className="star">*</span></label>
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
                            <label className="label">Hợp đồng lao động <span className="star">*</span></label>
                            <input type="text" placeholder="Nhập họ tên" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group">
                            <label className="label">Thời gian làm việc hiện tại <span className="star">*</span></label>
                            <div className="date_month">
                                <div className="input-group">
                                    <input type="number" className="form-control" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">Năm</span>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <input type="number" className="form-control" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">Tháng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">Hình thức trả lương <span className="star">*</span></label>
                            <select className="form-control js-select2" data-placeholder="Chọn hình thức">
                                <option value>xxxx</option>
                                <option value={1}>xxxx</option>
                                <option value={2}>xxxx</option>
                                <option value={3}>xxxx</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loan_online--item">
                <div className="heading">Thu nhập hiện có</div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="form-group">
                            <label className="label">Lương thực lãnh <span className="unit">(đồng)</span><span className="star">*</span></label>
                            <input type="text" placeholder="Số tiền" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="form-group">
                            <label className="label">Thu nhập khác <span className="unit">(đồng)</span></label>
                            <input type="text" placeholder="Số tiền" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="personal_expenses mt-3">
                    <div className="table_purple">
                        <table>
                            <tbody><tr>
                                <th>STT</th>
                                <th>LOẠI TÀI LIỆU</th>
                                <th>NHẬP TÊN TÀI LIỆU</th>
                                <th>ĐÍNH KÈM TỆP</th>
                                <th><i className="icon_heading fas fa-cog" /></th>
                            </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="form-group select2-italic mb-0">
                                            <select className="form-control js-select2" data-placeholder="Chọn hình thức">
                                                <option value>xxxx</option>
                                                <option value={1}>xxxx</option>
                                                <option value={2}>xxxx</option>
                                                <option value={3}>xxxx</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ width: '43%' }}>
                                        <div className="form-group mb-0 form_file_name">
                                            <input type="text" className="form-control" defaultValue="BẢNG SAO KÊ LƯƠNG THÁNG 08_SCB" />
                                        </div>
                                    </td>
                                    <td style={{ maxWidth: 115 }}>
                                        <div className="form-group mb-0 form_file_type">
                                            <img className="w-100 img-fluid" src="./assets/images/excel_picture.png" alt="file name" />
                                            <span>sao_ke.xlxs</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <i className="icon_more las la-ellipsis-v" data-toggle="dropdown" />
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon_dropdown edit far fa-edit" />
                              Chỉnh sửa
                            </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon_dropdown delete far fa-trash-alt" />
                              Xóa
                            </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="form-group select2-italic mb-0">
                                            <select className="form-control js-select2" data-placeholder="Chọn hình thức">
                                                <option value>xxxx</option>
                                                <option value={1}>xxxx</option>
                                                <option value={2}>xxxx</option>
                                                <option value={3}>xxxx</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ width: '43%' }}>
                                        <div className="form-group mb-0 form_file_name">
                                            <input type="text" className="form-control" defaultValue="BẢNG SAO KÊ LƯƠNG THÁNG 08_SCB" />
                                        </div>
                                    </td>
                                    <td style={{ maxWidth: 115 }}>
                                        <div className="form-group mb-0 form_file_type">
                                            <img className="w-100 img-fluid" src="./assets/images/excel_picture.png" alt="file name" />
                                            <span>sao_ke.xlxs</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <i className="icon_more las la-ellipsis-v" data-toggle="dropdown" />
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon_dropdown edit far fa-edit" />
                              Chỉnh sửa
                            </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon_dropdown delete far fa-trash-alt" />  Xóa</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="form-group select2-italic mb-0">
                                            <select className="form-control js-select2" data-placeholder="Chọn hình thức">
                                                <option value>xxxx</option>
                                                <option value={1}>xxxx</option>
                                                <option value={2}>xxxx</option>
                                                <option value={3}>xxxx</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ width: '43%' }}>
                                        <div className="form-group mb-0 form_file_name">
                                            <input type="text" className="form-control" placeholder="Nhập tên tài liệu" defaultValue />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group mb-0 form_file_type">
                                            {/* <img class="w-100 img-fluid" src="./assets/images/excel_picture.png"
                                                  alt="file name">
                                              <span>sao_ke.xlxs</span> */}
                                            <a href="#" className="add_new m-0"><span className="font-style-normal">+</span> Tải lên</a>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <i className="icon_more las la-ellipsis-v" data-toggle="dropdown" />
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon_dropdown edit far fa-edit" /> Chỉnh sửa </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon_dropdown delete far fa-trash-alt" />Xóa  </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="last">
                                    <td colSpan={7}>
                                        <a href="#" className="add_new m-0"><span className="font-style-normal">+</span> Thêm tài liệu</a>
                                    </td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default JobInformation