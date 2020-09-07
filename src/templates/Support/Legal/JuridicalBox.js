import React from 'react';
import { withTranslation,Trans } from 'react-i18next';
import { useDispatch } from "react-redux";
import { Input, Form, Button } from 'antd';
import {legalAction} from '../../../store/action/index'

const JuridicalBox =(props) =>{
    let { t } = props;
    const FormItem = Form.Item;
    const [formInfo] = Form.useForm();
    const dispatch = useDispatch()
    const onSubmitInfo = (values) =>{
       dispatch(legalAction.legalFormSupport({values}))
    }
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
    return (
        <div className="juridical__advisory">
            <div className="juridical__advisory--title mb-2"></div>
            <Form noValidate 
                form={formInfo}
                onFinish={onSubmitInfo}
                name="form-chat-info">
                <FormItem className="form-group" name="fullname" rules={validatorInfo.fullname.form}>
                    <Input placeholder={t('full_name')} type={validatorInfo.fullname.type} name="fullName" className="form-control" />
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
                            <Button className="btn btn_green" htmlType="Submit"
                                disabled={
                                    formInfo.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                <Trans>SEND MESSAGE</Trans>
                            </Button>
                            )
                    }}
                </FormItem>
            </Form>
        </div>
    )
  }

export default withTranslation() (JuridicalBox)
