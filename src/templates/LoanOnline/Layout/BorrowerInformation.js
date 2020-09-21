import React from 'react';

const BorrowerInformation = props => {
    return (
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

    )
}
export default BorrowerInformation;