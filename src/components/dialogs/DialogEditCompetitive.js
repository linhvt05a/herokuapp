import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Select, InputText } from "../input";
import {
  projectType,
  investorsDiaglog,
  select_rating,
  selectprovince,
  select_district,
  ward,
  currency_unit,
} from "../../constant";

class DialogEditCompetitive extends Component {
  constructor() {
    super();
    this.state = {
      regions: projectType,
      region: "",
      investorsDiaglog: investorsDiaglog,
      investor: "",
      select_rating: select_rating,
      rating: "",
      province: "",
      selectprovince: selectprovince,
      select_district: select_district,
      district: "",
      ward: ward,
      select_ward: "",
      currency_unit: currency_unit,
      select_currency_unit: "",
      select_currency_unit2:"",
      select_currency_unit3:"",
      select_currency_unit4:""
    };
  }
  onChange = (name,value) => {
    switch (name) {
    case 'regions':
       return   this.setState({
            region: value,
    })
    case 'investorsDiaglog':
      return this.setState({
          investor: value
        })
      case 'select_rating':
        return this.setState({
          rating: value
        })
      case 'selectprovince':
        return this.setState({
          province: value
        })
      case 'select_district':
        return  this.setState({
          district: value
        })
      case 'ward':
        return this.setState({
          select_ward: value
        })
      case 'currency_unit':
        return this.setState({
          select_currency_unit : value
        })
        case 'currency_unit2':
        return this.setState({
          select_currency_unit2 : value
        })
        case 'currency_unit3':
        return this.setState({
          select_currency_unit3 : value
        })
        case 'currency_unit4':
        return this.setState({
          select_currency_unit4 : value
        })
    }
   
  };

  render() {
    return (
      <Modal
        className="model fade"
        id="modal_add_competitive_project"
        size="xl"
        animation={true}
        show={this.props.visible}
      >
        <div className="modal-content square">
          <div className="modal-body" id="content-model-competitive-project">
            <form
              method="post"
              action="/backend/sale/project/edit/90"
              encType="multipart/form-data"
              autoComplete="off"
              id="form_add_project_nearby"
            >
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                defaultValue="avNJm7oqWMCyErJ6TLwgU2UrB7edjtKgli22P6Vn0jlRR5iUgnEMPf4HB9V93joW"
              />
              <input type="hidden" name="project_id" defaultValue />
              <input type="hidden" name="view_data" defaultValue="block" />
              <input type="hidden" name="project_name" defaultValue />
              <input type="hidden" name="setting_type_id" defaultValue="all" />
              <input type="hidden" name="page" defaultValue />
              <div className="row">
                <div className="col-3">
                  <div id="div_image_preview" style={{ display: "none" }}></div>
                  <div className="m_drag-images">
                    <input
                      type="file"
                      name="avatar"
                      defaultValue=""
                      className="input preview-image"
                    />
                    <p className="text">
                      <i className="fa fa-picture-o" aria-hidden="true" />
                      <span>Cập nhật ảnh đại diện</span>
                    </p>
                  </div>
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="uni-greyish-brown-two fw-medium">
                          Tên Dự Án Lân Cận
                          <i className="uni-reddish font-medium-1">*</i>
                        </label>
                        <input
                          type="text"
                          className="form-control square"
                          defaultValue="FBI SOLUTIONS"
                          name="edit_pro_name"
                          data-parsley-required="True"
                          data-parsley-errors-container="#project-nearby-error"
                          data-parsley-required-message="Thiếu thông tin Tên Dự Án"
                          placeholder="Nhập tên Dự Án"
                        />
                        <input
                          type="hidden"
                          defaultValue={90}
                          name="project_nearby"
                        />
                        <div id="project-nearby-error" />
                      </div>
                    </div>
                    <Select
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12"
                      label="Chủ Đầu Tư"
                      name="investorsDiaglog"
                      value={this.state.investor}
                      options={this.state.investorsDiaglog}
                      onChange={this.onChange}
                    />
                    <Select
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12"
                      label="Xếp Loại"
                      name="select_rating"
                      value={this.state.rating}
                      options={this.state.select_rating}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="row">
                    <Select
                      className="col-xl-8 col-lg-8 col-md-12 col-sm-12"
                      label="Loại Dự Án"
                      name="regions"
                      value={this.state.region}
                      options={this.state.regions}
                      onChange={this.onChange}
                    />
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="uni-greyish-brown-two fw-medium">
                          Tổng Diện Tích
                          <i className="uni-reddish font-medium-1">*</i>
                        </label>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control readonly"
                            step="any"
                            defaultValue={1240.0}
                            name="total_area"
                            data-parsley-required="True"
                            data-parsley-errors-container="#total_area-error"
                            data-parsley-required-message="Thiếu thông tin Tổng Diện Tích"
                            placeholder="Nhập Tổng Diện Tích"
                          />
                          <div
                            id="total_area-error"
                            className="fee_unit_error"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <label className="uni-greyish-brown-two fw-medium">
                        Vị Trí<i className="uni-reddish font-medium-1">*</i>
                        (Số Nhà, Đường)
                      </label>
                      <div
                        className="form-group autocomplete"
                        style={{ width: "100%" }}
                      >
                        <input
                          id="myInput"
                          data-href="/backend/sale/project/search_all"
                          type="text"
                          data-parsley-required="True"
                          data-parsley-errors-container="#address-error"
                          className="form-control square m_autocomplete readonly"
                          defaultValue="4456, Nguyễn Văn Trỗi"
                          name="address"
                          data-parsley-required-message="Thiếu thông tin Vị Trí"
                          placeholder="Vị Trí"
                        />
                        <div id="address-error" className="fee_unit_error" />
                      </div>
                      <div
                        id="myInputautocomplete-list"
                        className="autocomplete-items d-none"
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <Select
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12"
                      label="Chọn Tỉnh/TP"
                      name="selectprovince"
                      value={this.state.province}
                      options={this.state.selectprovince}
                      onChange={this.onChange}
                    />
                    <Select
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12"
                      label="Quận/Huyện"
                      name="select_district"
                      value={this.state.district}
                      options={this.state.select_district}
                      onChange={this.onChange}
                    />
                    <Select
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12"
                      label="Chọn Phường/Xã"
                      name="ward"
                      value={this.state.select_ward}
                      options={this.state.ward}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <label className="uni-greyish-brown-two fw-medium">
                    NLA (sqm)<i className="uni-reddish font-medium-1">*</i>
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      defaultValue
                      step="any"
                      data-parsley-required="True"
                      className="form-control square readonly"
                      name="nla"
                      data-parsley-errors-container="#nla_error"
                      data-parsley-required-message="Thiếu thông tin NLA"
                      placeholder="Nhập NLA"
                    />
                    <div id="nla_error" className="fee_unit_error" />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <label className="uni-greyish-brown-two fw-medium">
                    Số tầng<i className="uni-reddish font-medium-1">*</i>
                  </label>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control readonly"
                      name="number_floor"
                      data-parsley-required="True"
                      data-parsley-errors-container="#number_of_floor_error"
                      defaultValue={38}
                      data-parsley-required-message="Thiếu thông tin Tầng"
                      placeholder="Nhập số tầng"
                    />
                    <div
                      id="number_of_floor_error"
                      className="fee_unit_error"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <label className="uni-greyish-brown-two fw-medium">
                    Số tầng hầm<i className="uni-reddish font-medium-1">*</i>
                  </label>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control square readonly"
                      defaultValue={1}
                      data-parsley-required="True"
                      data-parsley-errors-container="#number_basement_error"
                      name="number_basement"
                      data-parsley-required-message="Thiếu thông tin Tầng Hầm"
                      placeholder="Nhập số tầng hầm"
                    />
                    <div
                      id="number_basement_error"
                      className="fee_unit_error"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <label className="uni-greyish-brown-two fw-medium">
                    Tỉ lệ lấp đầy (%)
                    <i className="uni-reddish font-medium-1">*</i>
                  </label>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control square readonly"
                      defaultValue={3}
                      data-parsley-required="True"
                      name="fill_rate"
                      max={100}
                      data-parsley-max-message="Tối đa 100 ký tự"
                      data-parsley-errors-container="#fill_rate_error"
                      data-parsley-required-message="Thiếu thông tin Tỉ lệ lấp đầy"
                      placeholder="Nhập tỉ lệ lấp đầy"
                    />
                    <div id="fill_rate_error" className="fee_unit_error" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <div className="row">
                    <InputText
                      className="col-xl-8 col-lg-8 col-md-12 col-sm-12 pr-0"
                      label="Chi Phí Thuê"
                    />
                    <Select
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-4 pt-2 pl-0"
                      name="currency_unit"
                      value={this.state.select_currency_unit}
                      options={this.state.currency_unit}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <div className="row">
                    <InputText
                      className="col-xl-8 col-lg-8 col-md-12 col-sm-12 pr-0"
                      label="Chi phí dịch vụ *"
                    />
                    <Select
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-4 pt-2 pl-0"
                      name="currency_unit2"
                      value={this.state.select_currency_unit2}
                      options={this.state.currency_unit}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <div className="row">
                    <InputText
                      className="col-xl-8 col-lg-8 col-md-12 col-sm-12 pr-0"
                      label="Chi phí đậu xe oto *"
                    />
                    <Select
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-4 pt-2 pl-0"
                      name="currency_unit3"
                      value={this.state.select_currency_unit3}
                      options={this.state.currency_unit}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <div className="row">
                    <InputText
                      className="col-xl-8 col-lg-8 col-md-12 col-sm-12 pr-0"
                      label="Phí đậu xe máy *"
                    />
                    <Select
                      className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-4 pt-2 pl-0"
                      name="currency_unit4"
                      value={this.state.select_currency_unit4}
                      options={this.state.currency_unit}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <button
                    onClick={this.props.close_modal}
                    type="button"
                    className="btn-uni-purple ml-3"
                    style={{ float: "right" }}
                    name="btn-save"
                    id="btn-save"
                  >
                    Cập Nhật
                  </button>
                  <button
                    onClick={this.props.close_modal}
                    type="button"
                    className="btn-uni-cancel "
                    style={{ float: "right" }}
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </form>
            &gt;
          </div>
          &gt;
        </div>
      </Modal>
    );
  }
}
export default DialogEditCompetitive;
