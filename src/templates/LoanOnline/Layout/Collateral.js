import React from 'react';

const Collateral = props => {
    return (
        <div className="loan_online--wrap active" data-step={3}>
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                    <input defaultValue={1} type="checkbox" className="checkbox-custom" />
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
                                  <input ="checkbox_loan_01" value="1" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Có
                              </label>
                              <label class="checkbox-inline" type="radio">
                                  <input ="checkbox_loan_01" value="0" type="radio" class="checkbox-custom"><span
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
                                              <input ="checkbox_yes_no" value="1" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Có
                                          </label>
                                          <label class="checkbox-inline" type="radio">
                                              <input ="checkbox_yes_no" value="0" type="radio"
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
                                  <input ="checkbox_loan_02" value="1" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Có
                              </label>
                              <label class="checkbox-inline" type="radio">
                                  <input ="checkbox_loan_02" value="0" type="radio" class="checkbox-custom"><span
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
                                              <input ="checkbox_yes_no" value="1" type="radio"
                                                  class="checkbox-custom"><span
                                                  class="checkbox-custom-dummy"></span>Có
                                          </label>
                                          <label class="checkbox-inline" type="radio">
                                              <input ="checkbox_yes_no" value="0" type="radio"
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
                                  <input ="checkbox_loan_03" value="1" type="radio" class="checkbox-custom"><span
                                      class="checkbox-custom-dummy"></span>Có
                              </label>
                              <label class="checkbox-inline" type="radio">
                                  <input ="checkbox_loan_03" value="0" type="radio" class="checkbox-custom"><span
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

    )
}
export default Collateral;