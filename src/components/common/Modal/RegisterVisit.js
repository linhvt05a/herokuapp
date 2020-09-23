import React, { useEffect, useState } from 'react';
import { Input, Form, Button, Spin, Modal, Select } from 'antd';
import { RULES } from '../../../contant';
import { TOKEN, translate } from '../../../functions/Utils';
import { withTranslation } from 'react-i18next';
import { SelectDefault } from '../../base';
import { useDispatch, useSelector } from 'react-redux';
import { transactionAction, visitorAction } from '../../../store/action';
const RegisterVisit = (props) => {

    const { visible, setVisible, t } = props;
    const [showNoti, setShowNoti] = useState(false);
    const dispatch = useDispatch();

    //form
    const FormItem = Form.Item;
    const [formInfo] = Form.useForm();

    //submit fail
    const onSubmitInfoFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const handleOk = () => { }
    const onSubmitInfo = (values) => {
        dispatch(visitorAction.visitorForm({ values }));
    }

    const response = useSelector(state => state.visitorReducer)
    useEffect(() => {
        if (response.visitorForm.success) {
            setShowNoti(!showNoti)
        }
    }, [response])


    const responseProjectList = useSelector(state => state.transactionReducer);
    const arrProjectList = responseProjectList.projectList
    useEffect(() => {
        dispatch(transactionAction.getProjectList({}));
    }, [])


    return (
        <Modal
            title=""
            visible={visible}
            onOk={handleOk}
            onCancel={setVisible}
            width="390px"
        >
            <div className="modal-content modal_special">
                <div className="modal-header">
                    <h5 className="modal-title">{translate('visitor_signup_title')}</h5>
                </div>
                <div className="modal-body pt-4 pl-4 pr-4">
                    <Form noValidate
                        form={formInfo}
                        onFinishFailed={onSubmitInfoFailed}
                        onFinish={onSubmitInfo}
                        name="form-register-visit">
                        <FormItem className="form-group" name="full_name" rules={RULES.text.form}>
                            <Input placeholder={t('full_name')} type={RULES.text.type} className="form-control" />
                        </FormItem>
                        <FormItem className="form-group" name="mobile" rules={RULES.phone.form}>
                            <Input placeholder={t('phone_number')} type={RULES.phone.type} className="form-control" />
                        </FormItem>
                        <FormItem className="form-group" name="project_id" rules={RULES.text.form}>
                            <Select className="form-control" placeholder="Chọn dự án*">
                                {
                                    arrProjectList && arrProjectList.map((value, index) => {
                                        return (
                                            <Select.Option value={value.project_id} key={index}>{value.project_name}</Select.Option>
                                        )
                                    })
                                }

                            </Select>
                        </FormItem>
                        <FormItem className="form-group" name="content" rules={RULES.text.form}>
                            <Input.TextArea placeholder={t('please_enter_the_content')} type={RULES.text.type} className="form-control" />
                        </FormItem>
                        <div className={`${showNoti ? 'd-block' : 'd-none'} mb-3 text-center`} style={{ color: '#25b15f', fontSize: '15px' }}>{translate('register_visit_success')}</div>

                        <FormItem shouldUpdate className="text-center submit">
                            {() => {
                                return (
                                    <Button className="btn btn_green mb-3" htmlType="Submit"
                                        disabled={
                                            formInfo.getFieldsError().filter(({ errors }) => errors.length).length
                                        }
                                    >
                                        {translate('register_visit_button')}
                                    </Button>
                                )
                            }}
                        </FormItem>


                    </Form>
                </div>
            </div>

        </Modal>

    );
}

export default withTranslation()(RegisterVisit);