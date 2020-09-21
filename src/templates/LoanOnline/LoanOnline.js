import React from 'react';
import { SidebarLeft } from "./Layout"

const LoanOnline = props => {
    return (
        <div className="loan_online bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading"><span>Hồ sơ vay online</span></h2>
                <div className="row">
                    <SidebarLeft />
                    <div className="col-12 col-sm-12 col-lg-8">
                        <div className="loan_online--wrap active" data-step={1}>
                            <div className="loan_online--item">
                                <div className="heading">Thông tin khách hàng</div>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div className="form-group">
                                            <label className="label">Họ tên <span className="star">*</span></label>
                                            <input type="text" placeholder="Nhập họ tên" className="form-control" />
                                        </div>
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
                        <div className="loan_online--wrap" data-step={2}>
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
                                    {/* <div class="col-12 col-md-6 col-lg-6">
                              <div class="form-group">
                                  <label class="label">Chi tiêu <span class="unit">(đồng)</span><span
                                          class="star">*</span></label>
                                  <input type="text" placeholder="Số tiền" class="form-control">
                              </div>
                          </div> */}
                                    {/* <div class="col-12 col-md-6 col-lg-6">
                              <div class="form-group">
                                  <label class="label">Thu nhập tích lũy <span class="unit">(đồng)</span><span
                                          class="star">*</span></label>
                                  <input type="text" placeholder="----" class="form-control color_e94c4c">
                              </div>
                          </div> */}
                                </div>
                                {/* <div class="personal_expenses mt-1">
                          <div class="sub_heading">CHI TIẾT KHOẢN THU NHẬP KHÁC</div>
                          <div class="row">
                              <div class="col-12 col-md-6 col-lg-6">
                                  <div class="form-group select2-italic mb-2 mb-lg-0">
                                      <label class="label">Thu nhập</label>
                                      <div class="row">
                                          <div class="col-12 col-md-6 col-lg-6 select_list">
                                              <div class="select_type_income">
                                                  <select class="form-control js-select2" data-placeholder="Chọn hình thức">
                                                      <option value="">xxxx</option>
                                                      <option value="1">xxxx</option>
                                                      <option value="2">xxxx</option>
                                                      <option value="3">xxxx</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div class="col-12 col-md-6 col-lg-6 input_money">
                                              <input type="text" placeholder="Số tiền" class="form-control child">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-6 col-lg-6">
                                  <div class="form-group select2-italic mb-2 mb-lg-0">
                                      <label class="label">Thu nhập</label>
                                      <div class="row">
                                          <div class="col-12 col-md-6 col-lg-6 select_list">
                                              <div class="select_type_income">
                                                  <select class="form-control js-select2" data-placeholder="Chọn hình thức">
                                                      <option value="">xxxx</option>
                                                      <option value="1">xxxx</option>
                                                      <option value="2">xxxx</option>
                                                      <option value="3">xxxx</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div class="col-12 col-md-6 col-lg-6 input_money">
                                              <input type="text" placeholder="Số tiền" class="form-control child">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <a href="#" class="add_new"><span class="font-style-normal">+</span> Thêm nguồn thu nhập</a>
    
                      </div>
                      <div class="personal_expenses mt-3">
                          <div class="sub_heading">CHI TIẾT KHOẢN CHI TIÊU</div>
                          <div class="row">
                              <div class="col-12 col-md-6 col-lg-6">
                                  <div class="form-group select2-italic mb-2 mb-lg-0">
                                      <label class="label">Chi tiêu</label>
                                      <div class="row">
                                          <div class="col-12 col-md-6 col-lg-6 select_list">
                                              <div class="select_type_income">
                                                  <select class="form-control js-select2" data-placeholder="Chọn hình thức">
                                                      <option value="">xxxx</option>
                                                      <option value="1">xxxx</option>
                                                      <option value="2">xxxx</option>
                                                      <option value="3">xxxx</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div class="col-12 col-md-6 col-lg-6 input_money">
                                              <input type="text" placeholder="Số tiền" class="form-control child">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-6 col-lg-6">
                                  <div class="form-group select2-italic mb-2 mb-lg-0">
                                      <label class="label">Chi tiêu</label>
                                      <div class="row">
                                          <div class="col-12 col-md-6 col-lg-6 select_list">
                                              <div class="select_type_income">
                                                  <select class="form-control js-select2" data-placeholder="Chọn hình thức">
                                                      <option value="">xxxx</option>
                                                      <option value="1">xxxx</option>
                                                      <option value="2">xxxx</option>
                                                      <option value="3">xxxx</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div class="col-12 col-md-6 col-lg-6 input_money">
                                              <input type="text" placeholder="Số tiền" class="form-control child">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <a href="#" class="add_new"><span class="font-style-normal">+</span> Thêm nguồn chi tiêu</a>
                      </div> */}
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
                                                                    <i className="icon_dropdown delete far fa-trash-alt" />
                              Xóa
                            </a>
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
                                                            <a href="#" className="add_new m-0"><span className="font-style-normal">+</span>
                            Tải lên</a>
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
                                                <tr className="last">
                                                    <td colSpan={7}>
                                                        <a href="#" className="add_new m-0"><span className="font-style-normal">+</span>
                          Thêm tài liệu</a>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="loan_online--wrap" data-step={3}>
                            <div className="loan_online--item">
                                <div className="heading">Tài sản đảm bảo</div>
                                <div className="form-group">
                                    <label className="label">Loại tài sản bảo đảm</label>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <div className="list_checkbox">
                                                <label className="checkbox-inline active style_01 active" type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Quyền sở hữu nhà ở / Quyền sử dụng đất ở
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <div className="list_checkbox">
                                                <label className="checkbox-inline active style_01" type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Ô tô / Phương tiện / Máy móc thiết bị
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <div className="list_checkbox d-flex justify-content-between">
                                                <label className="checkbox-inline style_01 pr-4" type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Khác
                    </label>
                                                <div className="form-group select2-italic mb-0 flex-grow-1">
                                                    <input type="text" className="form-control" placeholder="Nhập loại tài sản" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="label">Nguồn gốc tài sản</label>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center">
                                        <div className="form-group">
                                            <div className="list_checkbox">
                                                <label className="checkbox-inline active style_01 active" type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Thuộc sở hữu của khách hàng vay
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center">
                                        <div className="form-group">
                                            <div className="list_checkbox">
                                                <label className="checkbox-inline active style_01" type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Hình thành từ vốn vay
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center">
                                        <div className="form-group mb-0">
                                            <div className="list_checkbox d-flex justify-content-between">
                                                <label className="checkbox-inline active style_01" type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Thuộc tài sản của bên thứ ba
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group mb-0">
                                            <div className="list_checkbox d-flex justify-content-between">
                                                <label className="checkbox-inline style_01 pr-4" type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Khác
                    </label>
                                                <div className="form-group select2-italic mb-0 flex-grow-1">
                                                    <input type="text" className="form-control" placeholder="Nhập loại tài sản" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="label">TSBĐ hiện đang được cầm cố/ thế chấp tại TCTD khác</label>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 d-flex align-items-center">
                                        <div className="form-group">
                                            <div className="list_checkbox">
                                                <label className="checkbox-inline " type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Không
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 d-flex align-items-center">
                                        <div className="form-group">
                                            <div className="list_checkbox">
                                                <label className="checkbox-inline active " type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Có, hiện tại đang thế chấp tại
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                        <div className="form-group flex-grow-1">
                                            <div className="list_checkbox d-flex justify-content-between ">
                                                <div className="form-group select2-italic mb-0 flex-grow-1 ">
                                                    <input type="text" className="form-control" placeholder="Nhập loại tài sản" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loan_online--item">
                                <div className="heading">Tình hình khoảng vay</div>
                                <div className="form-group mb-0">
                                    <label className="label">Quan hệ tín dụng với tổ chức tín dụng <span className="star">*</span></label>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 d-flex align-items-center">
                                        <div className="form-group">
                                            <div className="list_checkbox">
                                                <label className="checkbox-inline " type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Không
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-1 d-flex align-items-center">
                                        <div className="form-group">
                                            <div className="list_checkbox">
                                                <label className="checkbox-inline active" type="checkbox">
                                                    <input name defaultValue={1} type="checkbox" className="checkbox-custom" />
                                                    <span className="checkbox-custom-dummy" />
                      Có
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                        <div className="form-group flex-grow-1">
                                            <div className="list_checkbox d-flex justify-content-between ">
                                                <div className="form-group select2-italic mb-0 flex-grow-1 ">
                                                    <input type="text" className="form-control" placeholder="Nhập tên TCTD" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="loan_online--item">
                      <div class="heading">Tình hình khoản vay</div>
    
                      <div class="form-group">
                          <label class="label">Quan hệ tín dụng với ngân hàng SCB <span class="star">*</span></label>
                          <div class="list_checkbox">
                              <label class="checkbox-inline active" type="radio">
                                  <input name="checkbox_loan_01" value="1" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Có
                              </label>
                              <label class="checkbox-inline" type="radio">
                                  <input name="checkbox_loan_01" value="0" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Không
                              </label>
                          </div>
                      </div>
    
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th>STT</th>
                                  <th>MÃ HỢP ĐỒNG</th>
                                  <th>SỐ TIỀN VAY</th>
                                  <th>SỐ TIỀN CÒN LẠI</th>
                                  <th>THỜI GIAN VAY</th>
                                  <th>NỢ QUÁ HẠN</th>
                                  <th><i class="icon_heading fas fa-cog"></i></th>
                              </tr>
    
                              <tr>
                                  <td>1</td>
                                  <td>HDV001</td>
                                  <td>500.000.000 (đồng)</td>
                                  <td>320.000.000 (đồng)</td>
                                  <td>5 (năm)</td>
                                  <td>Không</td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr>
                                  <td>2</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">năm</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="checkYesNo">
                                          <label class="checkbox-inline active" type="radio">
                                              <input name="checkbox_yes_no" value="1" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Có
                                          </label>
                                          <label class="checkbox-inline" type="radio">
                                              <input name="checkbox_yes_no" value="0" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Không
                                          </label>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr class="last">
                                  <td colspan="8">
                                      <a href="#" class="add_new m-0"><span class="font-style-normal">+</span> Thêm
                                          khoản vay</a>
                                  </td>
                              </tr>
    
                          </table>
                      </div>
    
                      <div class="form-group">
                          <label class="label">Quan hệ tín dụng với tổ chức tín dụng khác <span
                                  class="star">*</span></label>
                          <div class="list_checkbox">
                              <label class="checkbox-inline active" type="radio">
                                  <input name="checkbox_loan_02" value="1" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Có
                              </label>
                              <label class="checkbox-inline" type="radio">
                                  <input name="checkbox_loan_02" value="0" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Không
                              </label>
                          </div>
                      </div>
    
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th>STT</th>
                                  <th>NGÂN HÀNG</th>
                                  <th>MÃ HỢP ĐỒNG</th>
                                  <th>SỐ TIỀN VAY</th>
                                  <th>SỐ TIỀN CÒN LẠI</th>
                                  <th>THỜI GIAN VAY</th>
                                  <th>NỢ QUÁ HẠN</th>
                                  <th><i class="icon_heading fas fa-cog"></i></th>
                              </tr>
    
                              <tr>
                                  <td>1</td>
                                  <td>
                                      <div class="form-group mb-0 select2-italic">
                                          <select class="form-control js-select2" data-placeholder="--">
                                              <option value="">xxxx</option>
                                              <option value="2">xxxx</option>
                                              <option value="3">xxxx</option>
                                          </select>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">năm</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="checkYesNo">
                                          <label class="checkbox-inline active" type="radio">
                                              <input name="checkbox_yes_no" value="1" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Có
                                          </label>
                                          <label class="checkbox-inline" type="radio">
                                              <input name="checkbox_yes_no" value="0" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Không
                                          </label>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr class="last">
                                  <td colspan="7">
                                      <a href="#" class="add_new m-0"><span class="font-style-normal">+</span> Thêm
                                          khoản vay</a>
                                  </td>
                              </tr>
    
                          </table>
    
                      </div>
    
                      <div class="form-group">
                          <label class="label">Vay cá nhân / tổ chức khác <span class="star">*</span></label>
                          <div class="list_checkbox">
                              <label class="checkbox-inline active" type="radio">
                                  <input name="checkbox_loan_03" value="1" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Có
                              </label>
                              <label class="checkbox-inline" type="radio">
                                  <input name="checkbox_loan_03" value="0" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Không
                              </label>
                          </div>
                      </div>
    
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th>STT</th>
                                  <th>NGƯỜI CHO VAY</th>
                                  <th>MỐI QUAN HỆ</th>
                                  <th>SỐ TIỀN VAY</th>
                                  <th>SỐ TIỀN CÒN LẠI</th>
                                  <th>THỜI GIAN VAY</th>
                                  <th><i class="icon_heading fas fa-cog"></i></th>
                              </tr>
    
                              <tr>
                                  <td>1</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0 select2-italic">
                                          <select class="form-control js-select2" data-placeholder="--">
                                              <option value="">xxxx</option>
                                              <option value="2">xxxx</option>
                                              <option value="3">xxxx</option>
                                          </select>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">năm</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr class="last">
                                  <td colspan="7">
                                      <a href="#" class="add_new m-0"><span class="font-style-normal">+</span> Thêm
                                          khoản vay</a>
                                  </td>
                              </tr>
    
                          </table>
    
                      </div>
    
    
                  </div> */}
                        </div>
                        <div className="loan_online--wrap " data-step={4}>
                            <div className="loan_online--item">
                                <div className="loan_online--info_borrower mt-2">
                                    <div className="avatar mt-2">
                                        <img src="./assets/images/avatar_logged.jpg" className="img-fluid" alt="avatar" />
                                    </div>
                                    <div className="information">
                                        <div className="name_info">
                                            <span className="title_grey">Thông tin người vay</span>
                                            <span className="name">Trần Thị Thu Hoài</span>
                                        </div>
                                        <div className="personal_info">
                                            <div className="detail_info">
                                                <span className="title_grey">Địa chỉ</span>
                                                <span className="detail">26/03 Trần Hưng Đạo</span>
                                            </div>
                                            <div className="detail_info">
                                                <span className="title_grey">Điện thoại</span>
                                                <span className="detail">0123456789</span>
                                            </div>
                                            <div className="detail_info">
                                                <span className="title_grey">Email</span>
                                                <span className="detail">vana@minerva.vn</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {'{'}% for i in 0..2 %{'}'}
                            <div className="loan_online--item">
                                <div className="heading ">DỰ ÁN ROYAL GARDEN</div>
                                {'{'}% for i in 0..1 %{'}'}
                                <div className="border-split" />
                                <div className="loan_online--apartment_id">
                                    <div className="name_apartment">
                                        Căn hộ B6 - F01
              </div>
                                    <div className="file_number">
                                        Mã số hồ sơ vay
                <span className="d-block text_51c471">#ID123450</span>
                                    </div>
                                </div>
                                <div className="loan_online--policy">
                                    <div className="policy_list">
                                        <div className="title">
                                            <i className="icon las la-money-bill-wave" />
                  CHÍNH SÁCH VAY
                </div>
                                        <div className="content">
                                            <div className="list">
                                                <span className="list_style_01--item">Số tiền vay (vnd)</span>
                                                <span className="d-block money text_4a3bcc">500.000.000</span>
                                            </div>
                                            <div className="list">
                                                <span className="list_style_01--item">Thời gian vay (năm)</span>
                                                <span className="d-block money">10</span>
                                            </div>
                                            <div className="list">
                                                <span className="list_style_01--item">Tổng tiền trả (vnd)</span>
                                                <span className="d-block money color_e94c4c">1.333.677.000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bank">
                                        <img src="./assets/images/bankscb.jpg" className="img-fluid" alt="logo-bank" />
                                    </div>
                                </div>
                                {'{'}% endfor %{'}'}
                            </div>
                            {'{'}% endfor %{'}'}
                            {/* <div class="loan_online--item">
                      <div class="heading">Tình hình khoản vay</div>
    
                      <div class="form-group">
                          <label class="label">Quan hệ tín dụng với ngân hàng SCB <span class="star">*</span></label>
                          <div class="list_checkbox">
                              <label class="checkbox-inline active" type="radio">
                                  <input name="checkbox_loan_01" value="1" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Có
                              </label>
                              <label class="checkbox-inline" type="radio">
                                  <input name="checkbox_loan_01" value="0" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Không
                              </label>
                          </div>
                      </div>
    
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th>STT</th>
                                  <th>MÃ HỢP ĐỒNG</th>
                                  <th>SỐ TIỀN VAY</th>
                                  <th>SỐ TIỀN CÒN LẠI</th>
                                  <th>THỜI GIAN VAY</th>
                                  <th>NỢ QUÁ HẠN</th>
                                  <th><i class="icon_heading fas fa-cog"></i></th>
                              </tr>
    
                              <tr>
                                  <td>1</td>
                                  <td>HDV001</td>
                                  <td>500.000.000 (đồng)</td>
                                  <td>320.000.000 (đồng)</td>
                                  <td>5 (năm)</td>
                                  <td>Không</td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr>
                                  <td>2</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">năm</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="checkYesNo">
                                          <label class="checkbox-inline active" type="radio">
                                              <input name="checkbox_yes_no" value="1" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Có
                                          </label>
                                          <label class="checkbox-inline" type="radio">
                                              <input name="checkbox_yes_no" value="0" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Không
                                          </label>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr class="last">
                                  <td colspan="8">
                                      <a href="#" class="add_new m-0"><span class="font-style-normal">+</span> Thêm
                                          khoản vay</a>
                                  </td>
                              </tr>
    
                          </table>
                      </div>
    
                      <div class="form-group">
                          <label class="label">Quan hệ tín dụng với tổ chức tín dụng khác <span
                                  class="star">*</span></label>
                          <div class="list_checkbox">
                              <label class="checkbox-inline active" type="radio">
                                  <input name="checkbox_loan_02" value="1" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Có
                              </label>
                              <label class="checkbox-inline" type="radio">
                                  <input name="checkbox_loan_02" value="0" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Không
                              </label>
                          </div>
                      </div>
    
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th>STT</th>
                                  <th>NGÂN HÀNG</th>
                                  <th>MÃ HỢP ĐỒNG</th>
                                  <th>SỐ TIỀN VAY</th>
                                  <th>SỐ TIỀN CÒN LẠI</th>
                                  <th>THỜI GIAN VAY</th>
                                  <th>NỢ QUÁ HẠN</th>
                                  <th><i class="icon_heading fas fa-cog"></i></th>
                              </tr>
    
                              <tr>
                                  <td>1</td>
                                  <td>
                                      <div class="form-group mb-0 select2-italic">
                                          <select class="form-control js-select2" data-placeholder="--">
                                              <option value="">xxxx</option>
                                              <option value="2">xxxx</option>
                                              <option value="3">xxxx</option>
                                          </select>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">năm</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="checkYesNo">
                                          <label class="checkbox-inline active" type="radio">
                                              <input name="checkbox_yes_no" value="1" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Có
                                          </label>
                                          <label class="checkbox-inline" type="radio">
                                              <input name="checkbox_yes_no" value="0" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Không
                                          </label>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr class="last">
                                  <td colspan="7">
                                      <a href="#" class="add_new m-0"><span class="font-style-normal">+</span> Thêm
                                          khoản vay</a>
                                  </td>
                              </tr>
    
                          </table>
    
                      </div>
    
                      <div class="form-group">
                          <label class="label">Vay cá nhân / tổ chức khác <span class="star">*</span></label>
                          <div class="list_checkbox">
                              <label class="checkbox-inline active" type="radio">
                                  <input name="checkbox_loan_03" value="1" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Có
                              </label>
                              <label class="checkbox-inline" type="radio">
                                  <input name="checkbox_loan_03" value="0" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Không
                              </label>
                          </div>
                      </div>
    
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th>STT</th>
                                  <th>NGƯỜI CHO VAY</th>
                                  <th>MỐI QUAN HỆ</th>
                                  <th>SỐ TIỀN VAY</th>
                                  <th>SỐ TIỀN CÒN LẠI</th>
                                  <th>THỜI GIAN VAY</th>
                                  <th><i class="icon_heading fas fa-cog"></i></th>
                              </tr>
    
                              <tr>
                                  <td>1</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0 select2-italic">
                                          <select class="form-control js-select2" data-placeholder="--">
                                              <option value="">xxxx</option>
                                              <option value="2">xxxx</option>
                                              <option value="3">xxxx</option>
                                          </select>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">năm</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr class="last">
                                  <td colspan="7">
                                      <a href="#" class="add_new m-0"><span class="font-style-normal">+</span> Thêm
                                          khoản vay</a>
                                  </td>
                              </tr>
    
                          </table>
    
                      </div>
    
    
                  </div> */}
                        </div>
                        {/* <div class="loan_online--wrap" data-step="4">
                  <div class="loan_online--item">
                      <div class="heading">Nhu cầu vay vốn</div>
                      <div class="row">
                          <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div class="form-group">
                                  <label class="label">Tổng nhu cầu vốn <span class="unit">(đồng)</span><span
                                          class="star">*</span></label>
                                  <input type="text" placeholder="Nhập số" class="form-control">
                              </div>
                          </div>
                          <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div class="form-group">
                                  <label class="label">Vốn tự có <span class="unit">(đồng)</span><span
                                          class="star">*</span></label>
                                  <input type="text" placeholder="Nhập số" class="form-control">
                              </div>
                          </div>
                          <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div class="form-group">
                                  <label class="label">Số tiền đề nghị vay <span class="unit">(đồng)</span><span
                                          class="star">*</span></label>
                                  <input type="text" placeholder="Nhập số" class="form-control">
                              </div>
                          </div>
                          <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div class="form-group">
                                  <label class="label">Thời hạn vay vốn <span class="unit">(đồng)</span><span
                                          class="star">*</span></label>
                                  <input type="text" placeholder="Nhập số năm" class="form-control">
                              </div>
                          </div>
                          <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div class="form-group select2-italic">
                                  <label class="label">Loại hình nhà /đất <span class="star">*</span></label>
                                  <select class="form-control js-select2" data-placeholder="Chọn">
                                      <option value="">xxxx</option>
                                      <option value="2">xxxx</option>
                                      <option value="3">xxxx</option>
                                  </select>
                              </div>
                          </div>
                          <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div class="form-group select2-italic">
                                  <label class="label">Diện tích mặt bằng (m<sup>2</sup> ) <span
                                          class="star">*</span></label>
                                  <input type="text" placeholder="Nhập số" class="form-control">
                              </div>
                          </div>
                          <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div class="form-group select2-italic">
                                  <label class="label">Tỉnh / Thành phố <span class="star">*</span></label>
                                  <select class="form-control js-select2" data-placeholder="Chọn">
                                      <option value="">xxxx</option>
                                      <option value="2">xxxx</option>
                                      <option value="3">xxxx</option>
                                  </select>
                              </div>
                          </div>
                          <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div class="form-group select2-italic">
                                  <label class="label">Quận / Huyện <span class="star">*</span></label>
                                  <select class="form-control js-select2" data-placeholder="Chọn">
                                      <option value="">xxxx</option>
                                      <option value="2">xxxx</option>
                                      <option value="3">xxxx</option>
                                  </select>
                              </div>
                          </div>
                          <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                              <div class="form-group">
                                  <label class="label">Địa chỉ nhà / đất mua </span><span
                                          class="star">*</span></label>
                                  <input type="text" placeholder="Nhập số" class="form-control">
                              </div>
                          </div>
                      </div>
                  </div>
    
                  <div class="loan_online--item">
                      <div class="heading">Tài sản đảm bảo tiền vay</div>
    
                      <div class="form-group">
                          <label class="label">Tài sản bảo đảm <span class="star">*</span></label>
                          <div class="list_checkbox">
                              <label class="checkbox-inline active style_01 active" type="checkbox">
                                  <input name="" value="1" type="checkbox" class="checkbox-custom">
                                  <span class="checkbox-custom-dummy"></span>
                                  Quyền sở hữu nhà ở / Quyền sử dụng đất ở
                              </label>
                          </div>
                      </div>
    
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th>STT</th>
                                  <th>LOẠI HÌNH</th>
                                  <th>GIẤY CHỨNG NHẬN</th>
                                  <th>CHỦ SỞ HỮU</th>
                                  <th>GIÁ TRỊ</th>
                                  <th>ĐỊA CHỈ</th>
                                  <th><i class="icon_heading fas fa-cog"></i></th>
                              </tr>
    
                              <tr>
                                  <td>1</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <select class="form-control js-select2" data-placeholder="--">
                                              <option value="">xxxx</option>
                                              <option value="2">xxxx</option>
                                              <option value="3">xxxx</option>
                                          </select>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control" placeholder="--">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control" placeholder="--">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control" placeholder="--">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr class="last">
                                  <td colspan="7">
                                      <a href="#" class="add_new m-0"><span class="font-style-normal">+</span> Thêm
                                          tài sản vay</a>
                                  </td>
                              </tr>
    
                          </table>
    
                      </div>
    
                      <div class="form-group">
                          <div class="list_checkbox">
                              <label class="checkbox-inline active style_01" type="checkbox">
                                  <input name="" value="1" type="checkbox" class="checkbox-custom">
                                  <span class="checkbox-custom-dummy"></span>
                                  Ô tô / Phương tiện / Máy móc thiết bị
                              </label>
                          </div>
                      </div>
    
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th>STT</th>
                                  <th>GIẤY ĐĂNG KÝ</th>
                                  <th>CHỦ SỞ HỮU</th>
                                  <th>NHÃN HIỆU XE</th>
                                  <th>NĂM SẢN XUẤT</th>
                                  <th>GIÁ TRỊ</th>
                                  <th><i class="icon_heading fas fa-cog"></i></th>
                              </tr>
    
                              <tr>
                                  <td>1</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control" placeholder="--">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control" placeholder="--">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control" placeholder="--">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="date-picker">
                                              <input type="text" class="form-control js-datepicker" placeholder="--">
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr class="last">
                                  <td colspan="7">
                                      <a href="#" class="add_new m-0"><span class="font-style-normal">+</span> Thêm
                                          tài sản vay</a>
                                  </td>
                              </tr>
    
                          </table>
    
                      </div>
    
                      <div class="form-group">
                          <div class="list_checkbox">
                              <label class="checkbox-inline active style_01" type="checkbox">
                                  <input name="" value="1" type="checkbox" class="checkbox-custom">
                                  <span class="checkbox-custom-dummy"></span>Khác
                              </label>
                          </div>
                      </div>
    
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th>STT</th>
                                  <th width="50%">GIẤY ĐĂNG KÝ</th>
                                  <th>GIÁ TRỊ</th>
                                  <th>CHỦ SỞ HỮU</th>
                                  <th><i class="icon_heading fas fa-cog"></i></th>
                              </tr>
    
                              <tr>
                                  <td>1</td>
                                  <td>
                                      <div class="form-group mb-0 mw-100">
                                          <input type="text" class="form-control" placeholder="--">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <div class="input-group input-group-custom">
                                              <input type="number" class="form-control">
                                              <div class="input-group-append">
                                                  <span class="input-group-text">đồng</span>
                                              </div>
                                          </div>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" class="form-control" placeholder="--">
                                      </div>
                                  </td>
                                  <td>
                                      <div class="dropdown">
                                          <i class="icon_more las la-ellipsis-v" data-toggle="dropdown"></i>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown edit far fa-edit"></i>
                                                  Chỉnh sửa
                                              </a>
                                              <a class="dropdown-item" href="#">
                                                  <i class="icon_dropdown delete far fa-trash-alt"></i>
                                                  Xóa
                                              </a>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
    
                              <tr class="last">
                                  <td colspan="7">
                                      <a href="#" class="add_new m-0"><span class="font-style-normal">+</span> Thêm
                                          tài sản vay</a>
                                  </td>
                              </tr>
    
                          </table>
    
                      </div>
    
    
                  </div>
              </div>
    
              <div class="loan_online--wrap" data-step="5">
                  <div class="loan_online--profile_code">
                      <p class="code">
                          Mã số hồ sơ vay
                          <span class="number">#ID12450</span>
                      </p>
                      <figure class="img">
                          <img src="./assets/images/bank02.jpg" alt="">
                      </figure>
                  </div>
    
                  <div class="loan_online--profile_info">
                      <div class="item">
                          <div class="top">
                              <i class="icon icon_1 fas fa-user-alt"></i>
                              <div class="text">
                                  <span class="text-1">NGƯỜI VAY</span>
                                  <span class="text-2">Nguyễn Văn A</span>
                              </div>
                          </div>
                          <ul class="bottom">
                              <li>
                                  <span class="label">Địa chỉ</span>
                                  26/03 Trần Hưng Đạo
                              </li>
                              <li>
                                  <span class="label">Điện thoại</span>
                                  0930120453
                              </li>
                              <li>
                                  <span class="label">Email</span>
                                  vana@minerva.vn
                              </li>
                          </ul>
                      </div>
                      <div class="item">
                          <div class="top">
                              <i class="icon icon_2 fas fa-coins"></i>
                              <div class="text">
                                  <span class="text-1">CS BÁN HÀNG</span>
                                  <span class="text-2">Tiêu chuẩn</span>
                              </div>
                          </div>
                          <ul class="bottom">
                              <li>
                                  <span class="label">Tiền cọc (vnd)</span>
                                  100.000.000
                              </li>
                              <li>
                                  <span class="label">Số lần trả</span>
                                  9
                              </li>
                              <li>
                                  <span class="label">Tổng tiền (vnd)</span>
                                  3.000.000.000
                              </li>
                          </ul>
                      </div>
                      <div class="item">
                          <div class="top">
                              <i class="icon icon_3 las la-money-bill-wave"></i>
                              <div class="text">
                                  <span class="text-1">CHÍNH SÁCH VAY</span>
                                  <span class="text-2">Vay thả nổi</span>
                              </div>
                          </div>
                          <ul class="bottom">
                              <li>
                                  <span class="label">Số tiền vay (vnd)</span>
                                  500.000.000
                              </li>
                              <li>
                                  <span class="label">Thời gian vay (năm)</span>
                                  10
                              </li>
                              <li>
                                  <span class="label">Tổng tiền trả (vnd)</span>
                                  732.083.313
                              </li>
                          </ul>
                      </div>
                  </div>
    
                  <div class="loan_online--profile_income">
                      <div class="table_purple">
                          <table>
                              <tr>
                                  <th style="width: 20%;">STT</th>
                                  <th>NỘI DUNG</th>
                                  <th style="width: 20%;">SỐ TIỀN (vnd)</th>
                                  <th style="width: 20%;" class="text-right">
                                      <i class="icon_heading fas fa-cog"></i>
                                  </th>
                              </tr>
    
                              <tr>
                                  <td colspan="4" class="p-0 border-0">
                                      <div class="tbl_heaing">
                                          <span class="text">Tiền thu nhập</span>
                                          <i class="icon_edit las la-edit"></i>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>1</td>
                                  <td>Lương tháng</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" readonly value="10.000.000" class="form-control">
                                      </div>
                                  </td>
                                  <td></td>
                              </tr>
                              <tr class="near-heading">
                                  <td>2</td>
                                  <td>Thu nhập phụ ở ngoài buôn bán</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" readonly value="5.000.000" class="form-control">
                                      </div>
                                  </td>
                                  <td></td>
                              </tr>
                              <tr>
                                  <td colspan="4" class="p-0 border-0">
                                      <div class="tbl_heaing">
                                          <span class="text">Tài sản</span>
                                          <div class="list_icon">
                                              <i class="icon_edit las la-edit"></i>
    
                                          </div>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>3</td>
                                  <td>Đất nông nghiệp</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" readonly value="350.000.000" class="form-control">
                                      </div>
                                  </td>
                                  <td></td>
                              </tr>
                              <tr>
                                  <td>4</td>
                                  <td>Nền nhà thổ cư</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" readonly value="350.000.000" class="form-control">
                                      </div>
                                  </td>
                                  <td></td>
                              </tr>
                              <tr>
                                  <td>5</td>
                                  <td>Xe honda</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" readonly value="350.000.000" class="form-control">
                                      </div>
                                  </td>
                                  <td></td>
                              </tr>
                              <tr>
                                  <td>6</td>
                                  <td>Qũy tiết kiệm</td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" readonly value="350.000.000" class="form-control">
                                      </div>
                                  </td>
                                  <td></td>
                              </tr>
                              <tr>
                                  <td>x</td>
                                  <td>
                                      <div class="form-group select2-italic mb-0">
                                          <select class="form-control js-select2" data-placeholder="Chọn">
                                              <option value="">xxxx</option>
                                              <option value="2">xxxx</option>
                                              <option value="3">xxxx</option>
                                          </select>
                                      </div>
                                  </td>
                                  <td>
                                      <div class="form-group mb-0">
                                          <input type="text" value="--" class="form-control">
                                      </div>
                                  </td>
                                  <td></td>
                              </tr>
    
                              <tr class="data-last">
                                  <td>7</td>
                                  <td>Tổng số tiền hiện có</td>
                                  <td>662.000.000</td>
                                  <td></td>
                              </tr>
    
    
                          </table>
                      </div>
                  </div>
                  <div class="loan_online--profile_summary">
                      <div class="detail">
                          <div class="item">
                              <span class="title">Mục đích vay</span>
                              <span class="value">Mua nhà</span>
                          </div>
                          <div class="item">
                              <span class="title">Số tiền</span>
                              <span class="value">3.000.000.000 (vnd)</span>
                          </div>
                          <div class="item">
                              <span class="title">Thời hạn vay vốn</span>
                              <span class="value">10 (năm)</span>
                          </div>
                      </div>
                      <div class="money">
                          Số tiền vay (vnd)
                          <span class="number">500.000.000</span>
                      </div>
                  </div>
    
    
              </div> */}
                        {/* list button  */}
                        <div className="loan_online--btn">
                            <a href="#" className="btn btn_red_outline cancel">HỦY</a>
                            <a href="#" className="btn btn_blue save">LƯU</a>
                            <a href="#" className="btn btn_purple step_next">TIẾP THEO</a>
                            <a href="#" className="btn btn_purple complete step_next">HOÀN THÀNH</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoanOnline;