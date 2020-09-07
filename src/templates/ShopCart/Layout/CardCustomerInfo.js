import React from 'react';
import { Trans } from 'react-i18next';
import { Select, Input } from 'antd';

const CardCustomerInfo = (props) => {

    return (
        <div className="col-12 col-sm-12 col-lg-8 main-cart__info-buyer">
            <div className="block block__01">
                <h3 className="block__heading"><Trans>cart_customer_infor</Trans></h3>
                <div className="noted noted-1"><Trans>cart_note_1</Trans></div>
                <div className="noted noted-2">
                    <Trans>cart_note_2</Trans><br /><Trans>cart_note_3</Trans>
                    <a href="#" className="link"><Trans>cart_general_information</Trans></a>
                    <Trans>cart_note_4</Trans>
                </div>
                <div className="info-buyer__change">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_name</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Select className="js-select2 form-control">
                                    <Select.Option value={1}><Trans>cart_mr</Trans></Select.Option>
                                    <Select.Option value={2}><Trans>cart_mrs</Trans></Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_customer_name</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Input disabled value="Trần Thị Thu Hoài" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_customers</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Select className="js-select2 form-control">
                                    <Select.Option value={1}>Cá nhân</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_identity_card_number</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Input value="345020630" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_province_city</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Select className="js-select2 form-control">
                                    <Select.Option value={1}>Hồ Chí Minh</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_district</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Select className="js-select2 form-control">
                                    <Select.Option value={1}>Quận 1</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_ward</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Select className="js-select2 form-control">
                                    <Select.Option value={1}>Phường 8</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_address</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Input value="220/4 đường Cách Mạng Tháng 8" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_email</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Input disabled value="thutran1975@gmail.com" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label className="label">
                                    <Trans>cart_phone_number</Trans>
                                    <span className="star"> *</span>
                                </label>
                                <Input value="0909125620" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right mt-2">
                <a className="btn btn_purple text-uppercase" onClick={props.onNext}><Trans>button_confirm</Trans></a>
            </div>
        </div>
    )
}
export default CardCustomerInfo;
