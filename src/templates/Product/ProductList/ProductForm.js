import React, { useEffect, useState } from "react";
import { Trans, withTranslation } from "react-i18next";
import { ButtonStyle, InputBase } from "../../../components/base/index";
import { Form, Input, Button } from "antd";
import { RULES } from "../../../contant";
import {productAction} from '../../../store/action/index'
import { useDispatch, useSelector } from "react-redux";

const ProductForm = (props) => {
  let {t} = props
  const{showSignInModal} = props
  const [formInfo] = Form.useForm();
  formInfo.setFieldsValue({
    full_name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const dispatch = useDispatch()
  const subMitted = (values) => {
    dispatch(productAction.productSignup({values}))
  };
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-12">
      <div className="save_product--login">
        <FormHeading />
        <Form form={formInfo} name="register" onFinish={subMitted}>
          <Form.Item className="form-control" name="full_name" rules={RULES.text.form}>
            <Input placeholder= {t('Full name')} />
          </Form.Item>
          <Form.Item name="email" rules={RULES.email.form}>
            <Input placeholder={t('Email')} />
          </Form.Item>
          <Form.Item name="password" rules={RULES.password.form}>
            <Input.Password placeholder={t('Password')} />
          </Form.Item>
          <Form.Item
            name="onfirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder= {t('Confirm password')} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="btn btn_green">
              Register
            </Button>
          </Form.Item>
        </Form>
        <LoginButton showSignInModal={showSignInModal} />
      </div>
    </div>
  );
};
const FormHeading = () => {
  return (
    <div className="heading">
      <Trans>Save products of interest</Trans>
      <span className="sub">
        <Trans>
          Please register with us to save the products you care about center.
        </Trans>
      </span>
    </div>
  );
};

const LoginButton = (props) => {
  const {showSignInModal} = props
  return (
    <div className="has-acc">
      <Trans>You already have an account so please</Trans>

      <a className="login" onClick={showSignInModal}>
        <Trans> Sign in </Trans>
      </a>
    </div>
  );
};

export default withTranslation() (ProductForm);
