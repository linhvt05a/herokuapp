import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { Heading, Label, ChangePass } from "../../index";
import { Alert, Input, Select, Row, Col, Group, Radio } from 'antd';

const CardFile = (props) => {
    const [state, setState] = useState({
        passActive: 0
    });
    const radioOnChange = e => {
        setState({
            value: e.target.value,
        });
    };
    const changePassword = () => {
        setState({...state, passActive: 1});
    };
    const handelOnBack = () => {
        setState({...state, passActive: 0});
    };
    return (
        <div class="col-12 col-sm-12 col-md-12 col-lg-8">
            <Alert message="Một số thông tin của bạn vẫn còn thiếu. Xin bạn vui lòng cập nhật !" type="warning" showIcon closable />
            <div class="card">
                <div class="card-body">
                    <Heading title="Tài khoản" content="Một số thông tin tài khoản quan trọng" />

                    <div class="form-group row align-items-center">
                        <Label icon="fa-envelope" text="Email" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <Input type="text" placeholder="Email" value="thutran1975@gmail.com" className="form-control" />
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-lock" text="Mật khẩu" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <div class="row w-100 pwd_current">
                                <div class="col-12 justify-content-start d-flex align-items-center flex-column flex-sm-row">
                                    <Input type="password" placeholder="Password" value="thutran1975@gmail.com" className="form-control" />
                                    <div class="text_pwd text_changepwd text-nowrap" onClick={changePassword}>Đổi mật khẩu</div>
                                </div>
                            </div>
                            <ChangePass passActive={state.passActive} handelOnBack={handelOnBack}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <Heading title="Hồ sơ" content="Thông tin cá nhân của bạn" />
                    <div class="form-group row align-items-center">
                        <Label icon="fa-envelope" text="Họ tên" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <Input type="text" value="Trần Thị Thu Hoài" className="form-control" /> 
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-calendar-alt" text="Ngày sinh" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <div class="date-picker">
                                <input type="text" value="" placeholder="---" class="form-control js-datepicker"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-map-marker-alt" text="Địa chỉ" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <Input type="text"  placeholder="---" className="form-control" />
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-phone-alt" text="Số điện thoại" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <Input type="text"  placeholder="---" className="form-control" />
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-venus-mars" text="Giới tính" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <Radio.Group onChange={radioOnChange} value={state.value} style={{display: "flex"}}>
                                <Radio value={1}>Nam</Radio>
                                <Radio value={2}>Nữ</Radio>
                                <Radio value={3}>Khác</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-user-graduate" text="Nghề nghiệp" />
                        <div class="col-12 col-sm-12 col-md-9 d-flex align-items-center">
                            <Input type="text"  placeholder="---" className="form-control" />
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
    )
}
export default CardFile;