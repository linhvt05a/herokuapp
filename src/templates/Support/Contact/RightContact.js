import React, { Component, useState } from 'react';
import { Input, Form, Button } from 'antd';
import { withTranslation,Trans } from 'react-i18next';

const RightContact= (props) => {
    let { t, onSubmitInfo } = props;
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
        phone : {
            form : [
                {
                    required: true,
                    message: 'Missing information require!',
                }
            ],
            type:'number'
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
        fullname: '',
        phone:'',
        email:'',
        question:''
    });

    // const onSubmitInfo = (values) =>{
    //     console.log(values)
    // }
    return(
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-right pt-5 pt-lg-0">
            <h2 className="heading"><Trans>contact</Trans></h2>
            <Form noValidate 
                form={formInfo}
                onFinish={onSubmitInfo}
                name="form-chat-info">
                <FormItem className="form-group" name="fullname" rules={validatorInfo.fullname.form}>
                    <Input placeholder={t('full_name')} type={validatorInfo.fullname.type} name="fullName" className="form-control" />
                </FormItem>
                <FormItem className="form-group" name="phone" rules={validatorInfo.phone.form}>
                    <Input placeholder={t('phone_number')} type={validatorInfo.phone.type} name="mobile" className="form-control" />
                </FormItem>
                <FormItem className="form-group" name="email" rules={validatorInfo.email.form} >
                    <Input placeholder={t('email')} type={validatorInfo.email.type} name="emailName" className="form-control" />
                </FormItem>
                <FormItem className="form-group" name="question" rules={validatorInfo.question.form}>
                    <Input.TextArea placeholder={t('please_enter_the_content')} type={validatorInfo.question.type} name="questionName" className="form-control"  />
                </FormItem>
                <FormItem shouldUpdate className="text-center submit">
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
            </Form>
        </div>
    )
}

export default withTranslation()(RightContact);