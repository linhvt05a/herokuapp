import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { withTranslation, Trans } from 'react-i18next';
import { Input, Form, Button, Spin } from 'antd';
import { translate } from '../../../../functions/Utils'
import { RULES } from '../../../../contant';
const SendInfo = (props) => {
    const { active, data, setActive, onSubmitInfo, t } = props;

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
            phone: '',
            email: '',
            question: ''
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



    return (
        <div className={`send_info sendInfo ${active ? "active" : ''}`}>
            <Form noValidate
                form={formInfo}
                onFinishFailed={onSubmitInfoFailed}
                onFinish={onSubmitInfo}
                name="form-chat-info">
                <FormItem className="form-group" name="fullname" rules={RULES.text.form}>
                    <Input placeholder={t('full_name')} type={RULES.text.type} className="form-control" />
                </FormItem>
                <FormItem className="form-group" name="phone" rules={RULES.phone.form}>
                    <Input placeholder={t('phone_number')} type={RULES.phone.type} className="form-control" />
                </FormItem>
                <FormItem className="form-group" name="email" rules={RULES.email.form}>
                    <Input placeholder={t('email')} type={RULES.email.type} className="form-control" />
                </FormItem>
                <FormItem className="form-group" name="question" rules={RULES.text.form}>
                    <Input.TextArea placeholder={t('please_enter_the_content')} type={RULES.text.type} className="form-control" />
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