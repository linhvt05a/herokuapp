import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {withTranslation ,Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { contactAddAction } from "../../../store/action/index";
import { Input, Form, Button } from 'antd';

const Advisory = (props) => {

    let { t } = props;
    const FormItem = Form.Item;
    const [formInfo] = Form.useForm();
    
    const validatorInfo = {
        fullname : {
            form : [
                {
                    required: true, 
                    message: 'Missing information require!' ,
                }
            ],
        },
        email : {
            form : [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Missing information require!',
                },
            ],
            type:'email'
        },
        question : {
            form : [
                {
                    required: true, 
                    message: 'Missing information require!' 
                }
            ],
            type:'text'
        },
    }
    
    formInfo.setFieldsValue({
        email: "",
        fullname: "",
        question: "",
    });
    const dispatch = useDispatch();
    const advisory = useSelector(state => state.contactAddReducer);
    const advisoryAddSuccess = advisory.advisoryAdd.success;
    const advisoryList = advisoryAddSuccess ? advisory.advisoryAdd.detail : null;

    const onSubmitAdvisory = (values) => {
        dispatch(contactAddAction.loadAdvisory({
            name: values.fullname,
            email: values.email,
            content: values.question
        }));
    }

    return (
        <div className="container container-sm container-md">
            <div className="contact">
                <div className="contact--left">
                    <div className="icon_phone">
                        <i className=" fas fa-phone-alt" />
                    </div>
                    <div className="text">
                        Liên hệ và tư vấn qua số điện thoại
                    </div>
                    <div className="phone">1900 - 123 -456</div>
                </div>
                <div className="contact--right">
                    <Form noValidate 
                        form={formInfo}
                        onFinish={onSubmitAdvisory}
                        name="form-advisory">
                        <label className="label">Tư vấn miễn phí</label>
                        <div className="row">
                            <FormItem className="col-12 col-sm-6 form-group" name="fullname" rules={validatorInfo.fullname.form}>
                                <Input placeholder={t('full_name')} type={validatorInfo.fullname.type} className="form-control" />
                            </FormItem>
                            <FormItem className="col-12 col-sm-6 form-group" name="email" rules={validatorInfo.email.form}>
                                <Input placeholder={t('email')} type={validatorInfo.email.type} className="form-control" />
                            </FormItem>
                            <FormItem className="col-12 form-group" name="question" rules={validatorInfo.question.form}>
                                <Input.TextArea placeholder={t('please_enter_the_content')} type={validatorInfo.question.type} className="form-control"  />
                            </FormItem>
                            <FormItem shouldUpdate className="text-center submit contact--footer" style={{ padding: "0 15px" }}>
                                {() => {
                                    return (
                                        <Button className="btn btn_green" htmlType="Submit" style={{float: "left"}}
                                            disabled={
                                                formInfo.getFieldsError().filter(({ errors }) => errors.length).length
                                            }
                                        >
                                            <Trans>send_message</Trans>
                                        </Button>
                                        )
                                }}
                            </FormItem>
                        </div>
                    </Form>
                    { advisoryList && advisoryList != null ? 
                        <div className="contact--footer">
                            <span className="noti">
                                Cảm ơn, hẹn gặp lại trong hộp thư đến của bạn!
                            </span>
                        </div>: ""
                    }
                </div>
            </div>
        </div>
    )
}
export default withTranslation()(Advisory);