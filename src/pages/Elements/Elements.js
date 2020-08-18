import React from "react";
import { SelectDefault, SelectMultiple } from "../../components/base/Select";
import { SliderRange } from "../../components/base/Slider";
import ButtonStyle from "../../components/base/Button";
import { Alert } from 'antd';


const Elements = (props) => {

    return (
        <div className="container" style={{ paddingTop: '300px', paddingBottom: "100px" }}>
            <div className="row">
                <div className="col-3">
                    <SelectDefault />
                </div>
                <div className="col-3">
                    <SelectMultiple />
                </div>
                <div className="col-3">
                    <SliderRange />
                </div>

                <div className="col-12 mt-3">
                    <ButtonStyle className="btn_white" value="btn_white" />
                    <ButtonStyle className="btn_green" value="btn_green" />
                    <ButtonStyle className="btn_purple" value="btn_purple" />
                    <ButtonStyle className="btn_red" value="btn_red" />
                    <ButtonStyle className="btn_red_outline" value="btn_red_outline" />
                    <ButtonStyle className="btn_blue" value="btn_blue" />
                </div>

                <div className="col-12 mt-3">
                    <Alert message="Success Tips" type="success" showIcon />
                    <Alert message="Informational Notes" type="info" showIcon />
                    <Alert message="Warning" type="warning" showIcon closable />
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
                                        <input type="text" placeholder="Email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Mật khẩu" className="form-control" />
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
                                        <input type="text" placeholder="Họ tên" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Mật khẩu" className="form-control" />
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
                                <input type="text" placeholder="Email" className="form-control" />
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
                                <img src="./assets/images/avatar_logged.jpg" alt="Trần Thị Thu Hoài" />
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
