import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const TabInformation = (props) => {
    return (
        <div class="tab-pane fade active show" id="tab_01" role="tabpanel" aria-labelledby="tab_01">
            <div class="row user-acc__info">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <div class="alert alert-danger d-block d-lg-none" role="alert">
                        <i class="fas fa-exclamation-triangle"></i>
                        Một số thông tin của bạn vẫn còn thiếu. Xin bạn vui lòng cập nhật !
                    </div>
                    <div class="avatar">
                        <div class="avatar__image">
                            <div class="center no-data">
                                <i class="icon fas fa-camera-retro"></i>
                                <span class="text">Cập nhật ảnh</span>
                            </div>
                            <div class="center has-data d-none">
                                <img class="uploaded_avatar" src="" alt="avatar"/>
                            </div>

                            <input class="upload" type="file" name="" id=""/>
                        </div>
                        <div class="upload_again d-none">
                            <i class="icon fas fa-camera-retro"></i>
                            <input class="upload" type="file" name="" id=""/>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div class="alert alert-danger d-none d-lg-block" role="alert">
                        <i class="fas fa-exclamation-triangle"></i>
                        Một số thông tin của bạn vẫn còn thiếu. Xin bạn vui lòng cập nhật !
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="heading">
                                Tài khoản
                                <span class="sub">
                                    Một số thông tin tài khoản quan trọng
                                </span>
                            </div>

                            <div class="form-group row align-items-center">
                                <div class="col-12 col-sm-12 col-md-3">
                                    <label>
                                        <i class="icon fas fa-envelope"></i>
                                        Email
                                    </label>
                                </div>
                                <div class="col-12 col-sm-12 col-md-9">
                                    <input type="text" value="thutran1975@gmail.com" class="form-control"/>
                                </div>
                            </div>
                            <div class="form-group row align-items-center">
                                <div class="col-12 col-sm-12 col-md-3">
                                    <label>
                                        <i class="icon fas fa-lock"></i>
                                        Mật khẩu
                                    </label>
                                </div>
                                <div class="col-12 col-sm-12 col-md-9">
                                    <div class="row w-100 pwd_current">
                                        <div class="col-12 justify-content-start d-flex align-items-center flex-column flex-sm-row">
                                            <input type="password" value="thutran1975@gmail.com" class="form-control"/>
                                            <div class="text_pwd text_changepwd text-nowrap">Đổi mật khẩu</div>
                                        </div>
                                    </div>
                                    <div class="pwd_new d-none justify-content-start align-items-center flex-column flex-sm-row">
                                        <div class="row">
                                            <div class="col-12 col-sm-12 col-md-6">
                                                <input type="password" value="" placeholder="Mật khẩu mới" class="form-control"/>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6">
                                                <input type="password" value="" placeholder="Nhập lại" class="form-control"/>
                                            </div>
                                        </div>
                                        <div class="text_pwd text_closepwd text-nowrap">Quay lại</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="heading">
                                Hồ sơ
                                <span class="sub">
                                    Thông tin cá nhân của bạn
                                </span>
                            </div>
                            <div class="form-group row align-items-center">
                                <div class="col-12 col-sm-12 col-md-3">
                                    <label>
                                        <i class="icon fas fa-envelope"></i>
                                        Họ tên
                                    </label>
                                </div>
                                <div class="col-12 col-sm-12 col-md-9">
                                    <input type="text" value="Trần Thị Thu Hoài" class="form-control"/>
                                </div>
                            </div>
                            <div class="form-group row align-items-center">
                                <div class="col-12 col-sm-12 col-md-3">
                                    <label>
                                        <i class="icon fas fa-calendar-alt"></i>
                                        Ngày sinh
                                    </label>
                                </div>
                                <div class="col-12 col-sm-12 col-md-9">
                                    <div class="date-picker">
                                        <input type="text" value="" placeholder="---" class="form-control js-datepicker"/>
                                    </div>

                                </div>
                            </div>
                            <div class="form-group row align-items-center">
                                <div class="col-12 col-sm-12 col-md-3">
                                    <label>
                                        <i class="icon fas fa-map-marker-alt"></i>
                                        Địa chỉ
                                    </label>
                                </div>
                                <div class="col-12 col-sm-12 col-md-9">
                                    <input type="text" value="" placeholder="---" class="form-control"/>
                                </div>
                            </div>
                            <div class="form-group row align-items-center">
                                <div class="col-12 col-sm-12 col-md-3">
                                    <label>
                                        <i class="icon fas fa-phone-alt"></i>
                                        Số điện thoại
                                    </label>
                                </div>
                                <div class="col-12 col-sm-12 col-md-9">
                                    <input type="text" value="" placeholder="---" class="form-control"/>
                                </div>
                            </div>
                            <div class="form-group row align-items-center">
                                <div class="col-12 col-sm-12 col-md-3">
                                    <label>
                                        <i class="icon fas fa-venus-mars"></i>
                                        Giới tính
                                    </label>
                                </div>
                                <div class="col-12 col-sm-12 col-md-9">
                                    <div class="list_checkbox">
                                        <label class="checkbox-inline" type="radio">
                                            <input name="checkbox_gender" value="1" type="radio" class="checkbox-custom"/><span class="checkbox-custom-dummy"></span>Nam
                                        </label>
                                        <label class="checkbox-inline" type="radio">
                                            <input name="checkbox_gender" value="2" type="radio" class="checkbox-custom"/><span class="checkbox-custom-dummy"></span>Nữ
                                        </label>
                                        <label class="checkbox-inline" type="radio">
                                            <input name="checkbox_gender" value="3" type="radio" class="checkbox-custom"/><span class="checkbox-custom-dummy"></span>Khác
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row align-items-center">
                                <div class="col-12 col-sm-12 col-md-3">
                                    <label>
                                        <i class="icon fas fa-user-graduate"></i>
                                        Nghề nghiệp
                                    </label>
                                </div>
                                <div class="col-12 col-sm-12 col-md-9 d-flex align-items-center">
                                    <input type="text" value="" placeholder="---" class="form-control"/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="text-right">
                        <a href="#" class="btn btn_purple text-uppercase">
                            cập nhật
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TabInformation;