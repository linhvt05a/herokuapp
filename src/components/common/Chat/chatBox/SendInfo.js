import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { withTranslation,Trans } from 'react-i18next';
import { Input, Form, Button, Spin } from 'antd';
import { translate } from '../../../../functions/Utils'
const SendInfo = (props) => {
    const { active, data,  setActive , onSubmitInfo, t} = props;

    //form
    const FormItem = Form.Item;
    const [formInfo] = Form.useForm();
    
    //state
    const [, forceUpdate] = useState(); 

    // effect for begin 
    useEffect(() => {
        // To disable submit button at the beginning.
        forceUpdate({});

        // To reset info form
        onResetInfo();

        // set value init
        formInfo.setFieldsValue({
            // fullname: 'Bamboo',
            // phone:'09335656565',
            // email:'Bamboo@oo.oo',
            // question:'Bamboo is question!!!'
            fullname: '',
            phone:'',
            email:'',
            question:''
        });
    }, [props]);

    //submit fail
    const onSubmitInfoFailed = errorInfo => {
        console.log('Failed:', errorInfo);

    };

    //reset info when exit
    const onResetInfo = () => {
        formInfo.resetFields();
    };

    //validate info
    const validatorInfo = {
        fullname : {
            form : [
                {
                    required: true, 
                    message: 'Please input your user name!' ,
                }
            ],
            placeholder: t('full_name')
        },
        phone : {
            form : [
                {
                    required: true,
                    message: 'Please input your phone number!',
                }
            ],
            placeholder: t('phone_number'),
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
                    message: 'Please input your E-mail!',
                },
            ],
            placeholder: t('email'),
            type:'email'
        },
        question : {
            form : [
                {
                    required: true, 
                    message: 'Please input your question!' 
                }
            ],
            placeholder: t('please_enter_the_content'),
            type:'text'
        },
    }

    return (
        <div className={`send_info sendInfo ${active ? "active" : ''}`}>
                <Form noValidate 
                    form={formInfo}
                    onFinishFailed={onSubmitInfoFailed}
                    onFinish={onSubmitInfo}
                    name="form-chat-info">
                    <FormItem className="form-group" name="fullname" rules={validatorInfo.fullname.form}>
                        <Input placeholder={validatorInfo.fullname.placeholder} type={validatorInfo.fullname.type} className="form-control" />
                    </FormItem>
                    <FormItem className="form-group" name="phone" rules={validatorInfo.phone.form}>
                        <Input placeholder={validatorInfo.phone.placeholder} type={validatorInfo.phone.type} className="form-control" />
                    </FormItem>
                    <FormItem className="form-group" name="email" rules={validatorInfo.email.form}>
                        <Input placeholder={validatorInfo.email.placeholder} type={validatorInfo.email.type} className="form-control" />
                    </FormItem>
                    <FormItem className="form-group" name="question" rules={validatorInfo.question.form}>
                        <Input.TextArea placeholder={validatorInfo.question.placeholder} type={validatorInfo.question.type} className="form-control"  />
                    </FormItem>
                    <FormItem shouldUpdate className="text-center submit">
                        {() => {
                            return (
                                <Button className="btn btn_green" htmlType="Submit" 
                                    disabled={
                                        formInfo.getFieldsError().filter(({ errors }) => errors.length).length
                                    }
                                >
                                    <Trans>start_chat</Trans>
                                </Button>
                                )
                        }}
                    </FormItem>
                </Form>
            </div>
    );
}

export default withTranslation()(SendInfo);