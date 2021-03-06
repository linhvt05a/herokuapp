import React, { useEffect, useState, useRef } from 'react';
import { SliderRange, ButtonCustom, InputCustom } from "../../components";
import { Alert, Modal, Button, Checkbox, Input, Select, Row, Col, Group, Radio } from 'antd';
import { Link } from "react-router-dom";

import MaskedInput from 'antd-mask-input';


const Elements = (props) => {

    const [card, setCard]  = useState({
        card: '',
        expiry: '',
        ccv: '',
        phone:''
    })

    const [state, setState] = useState({
        visible: false, checked: false,
    });
    const showModal = () => {
        setState({
            visible: true,
        });
    };

    const handleOk = e => {
        setState({
            visible: false,
        });
    };

    const handleCancel = e => {
        setState({
            visible: false,
        });
    };

    const checkboxGroupOnChange = e => {
        console.log(`checkboxGroup = ${e.target.checked}`);
    }

    const radioOnChange = e => {
        console.log('radio', e.target.value);
        setState({
            value: e.target.value,
        });
    };

    const _onChangeCard = (e) => {
        console.log(e);
    setCard({[e.target.name]: e.target.value})
  }

    return (
        <div className="container">
            <div className="row mt-3">

                <div className="col-12">
                    <div className="CreditCardDetails">
                        <label>
                            Card Phone:{' '}
                            <MaskedInput className="form-control" mask="(111) 111-1111" name="card" size="15" onChange={_onChangeCard}/>
                        </label>
                        <label>
                            Card Number:{' '}
                            <MaskedInput className="form-control" mask="1111 1111 1111 1111" name="card" size="20" onChange={_onChangeCard}/>
                        </label>
                        <label>
                            Expiry Date:{' '}
                            <MaskedInput className="form-control" mask="11/1111" name="expiry" placeholder="mm/yyyy" onChange={_onChangeCard}/>
                        </label>
                        <label>
                            CCV:{' '}
                            <MaskedInput className="form-control" mask="111" name="ccv" onChange={_onChangeCard}/>
                        </label>
                    </div>
                    <hr />
                </div>
                <div className="col-12">
                    <InputCustom.InputCheckbox />
                    <hr />
                </div>
                <div className="col-12">
                    <Radio.Group onChange={radioOnChange} value={state.value}>
                        <Radio value={1}>A</Radio>
                        <Radio value={2}>B</Radio>
                        <Radio value={3}>C</Radio>
                        <Radio value={4}>D</Radio>
                    </Radio.Group>
                    <hr />
                </div>
                <div className="col-12">
                    <SliderRange />
                </div>

                <div className="col-12 mt-3 mb-3">
                    <Button type="primary" onClick={showModal}>
                        Open Modal Đăng ký tham quan
                </Button>
                    <Modal
                        title=''
                        visible={state.visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        width="390px"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Đăng ký tham quan</h5>
                            </div>
                            <div className="modal-body pt-4 pl-4 pr-4">
                                <div className="form-group">
                                    <Input placeholder="Họ tên *" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Input placeholder="Họ tên *" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Input placeholder="Điện thoại *" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Select className="form-control" placeholder="Chọn dự án">
                                        <Select.Option selected disabled>Chọn dự án *</Select.Option>
                                        <Select.Option>TPHCM</Select.Option>
                                        <Select.Option>Hà Nội</Select.Option>
                                        <Select.Option>Đà Nẵng</Select.Option>
                                        <Select.Option>Bình Dương</Select.Option>
                                    </Select>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Nội dung *" className="form-control" style={{ height: 130 }} defaultValue={""} />
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center border-top-0 pt-0 pb-4">
                                <a href="#" className="btn btn_green">ĐĂNG KÝ</a>
                            </div>
                        </div>

                    </Modal>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <Select className="form-control hasIcon icon_project" placeholder="Chọn khu">
                            <Select.Option selected disabled>Chọn dự án *</Select.Option>
                            <Select.Option>TPHCM</Select.Option>
                            <Select.Option>Hà Nội</Select.Option>
                            <Select.Option>Đà Nẵng</Select.Option>
                            <Select.Option>Bình Dương</Select.Option>
                        </Select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <Select className="form-control hasIcon icon_area" placeholder="Chọn khối/lô">
                            <Select.Option selected disabled>Chọn dự án *</Select.Option>
                            <Select.Option>TPHCM</Select.Option>
                            <Select.Option>Hà Nội</Select.Option>
                            <Select.Option>Đà Nẵng</Select.Option>
                            <Select.Option>Bình Dương</Select.Option>
                        </Select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <Select className="form-control hasIcon icon_block" placeholder="Loại sản phẩm">
                            <Select.Option selected disabled>Chọn dự án *</Select.Option>
                            <Select.Option>TPHCM</Select.Option>
                            <Select.Option>Hà Nội</Select.Option>
                            <Select.Option>Đà Nẵng</Select.Option>
                            <Select.Option>Bình Dương</Select.Option>
                        </Select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <Select className="form-control hasIcon icon_product" placeholder="Loại sản phẩm">
                            <Select.Option selected disabled>Chọn dự án *</Select.Option>
                            <Select.Option>TPHCM</Select.Option>
                            <Select.Option>Hà Nội</Select.Option>
                            <Select.Option>Đà Nẵng</Select.Option>
                            <Select.Option>Bình Dương</Select.Option>
                        </Select>
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <Select className="form-control" placeholder="Chọn dự án*">
                            <Select.Option selected disabled>Chọn dự án *</Select.Option>
                            <Select.Option>TPHCM</Select.Option>
                            <Select.Option>Hà Nội</Select.Option>
                            <Select.Option>Đà Nẵng</Select.Option>
                            <Select.Option>Bình Dương</Select.Option>
                        </Select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <Select defaultValue="lucy" className="form-control" disabled placeholder="Chọn dự án*">
                            <Select.Option>TPHCM</Select.Option>
                            <Select.Option>Hà Nội</Select.Option>
                            <Select.Option>Đà Nẵng</Select.Option>
                            <Select.Option>Bình Dương</Select.Option>
                        </Select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <Input placeholder="Họ tên *" type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <Input disabled value="Nguyen Van A" placeholder="Họ tên *" type="text" className="form-control" />
                    </div>
                </div>

                <div className="col-12 mt-3">
                    <ButtonCustom.ButtonStyle className="btn btn_white" label="btn_white" />
                    <ButtonCustom.ButtonStyle className="btn btn_green" label="btn_green" />
                    <ButtonCustom.ButtonStyle className="btn btn_purple" label="btn_purple" />
                    <ButtonCustom.ButtonStyle className="btn btn_red" label="btn_red" />
                    <ButtonCustom.ButtonStyle className="btn btn_red_outline" label="btn_red_outline" />
                    <ButtonCustom.ButtonStyle className="btn btn_blue" label="btn_blue" />
                </div>

                <div className="col-12 mt-3">
                    <Alert message="Success Tips" type="success" showIcon />
                    <br />
                    <Alert message="Informational Notes" type="info" showIcon />
                    <br />
                    <Alert message="Warning" type="warning" showIcon closable />
                    <br />
                    <Alert message="Error" type="error" showIcon />
                </div>

                <div className="col-4 mt-3">
                    <div className="header_register">
                        <ul className="nav header_register--heading" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="pills-signin-tab" data-toggle="pill" href="#pills-signin" role="tab" aria-controls="pills-signin" aria-selected="true">
                                    ĐĂNG NHẬP
                            </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false">
                                    ĐĂNG KÝ
                            </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="pills-signin" role="tabpanel" aria-labelledby="pills-signin-tab">
                                <div className="form form_signInUp">
                                    <div className="form-group">
                                        <Input type="text" placeholder="Email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <Input type="password" placeholder="Mật khẩu" className="form-control" />
                                    </div>
                                    <div className="form-group mb-0 text-center">
                                        <a href="#" className="btn btn_green btn_signIn text-uppercase">
                                            ĐĂNG NHẬP
                                    </a>
                                    </div>
                                    <div className="form-group mb-0 text-center">
                                        <a href="#" className="text-forgot">
                                            Quên mật khẩu
                                    </a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                                <div className="form form_signInUp">
                                    <div className="form-group">
                                        <Input type="text" placeholder="Họ tên" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <Input type="text" placeholder="Email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <Input type="password" placeholder="Mật khẩu" className="form-control" />
                                    </div>
                                    <div className="form-group mb-0 text-center">
                                        <a href="#" className="btn btn_green btn_signIn text-uppercase">
                                            ĐĂNG KÝ
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt-3">
                    <div className="header_register form_forgot">
                        <div className="header_register--heading text-uppercase text-white text-center">
                            QUÊN MẬT KHẨU
                </div>
                        <div className="form form_signInUp">
                            <div className="form-group form_forgot--info">
                                Hãy điền thông tin email của bạn để
                    <br />chúng tôi lấy lại mật khẩu
                    </div>
                            <div className="form-group">
                                <Input type="text" placeholder="Email" className="form-control" />
                            </div>
                            <div className="form-group mb-0 text-center">
                                <a href="#" className="btn btn_green btn_signIn text-uppercase mb-0">
                                    GỬI
                    </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt-3">
                    <div className="header_register form_logged">
                        <div className="header_register--heading">
                            <figure className="avatar">
                                <img src="./images/avatar_logged.jpg" alt="Trần Thị Thu Hoài" />
                            </figure>
                            <div className="info">
                                <div className="name">Trần Thị Thu Hoài</div>
                                <div className="mail">thutran1975@gmail.com</div>
                            </div>
                        </div>
                        <div className="form_logged--action">
                            <a href="#" className="action">
                                Đăng xuất</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Elements;
