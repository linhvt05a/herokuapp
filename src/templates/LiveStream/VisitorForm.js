import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { visitorAction } from "../../store/action/index";
import { Trans, withTranslation } from "react-i18next";
import { Form, Input, Button, Select } from "antd";
import {RULES} from '../../contant'

const project = [
  { value: 0, label: "--Select--" },
  { value: 1, label: "donalll" },
  { value: 2, label: "cat" },
  { value: 3, label: "dog" },
];

const VisitorForm = (props) => {
  let { t } = props;
  const { Option } = Select;
  const [formInfo] = Form.useForm();
  const { show, closeModel } = props;
  const dispatch = useDispatch();
  formInfo.setFieldsValue({
    full_name: "",
    mobile: "",
    project_id: "",
    content: "",
  });
  function visitRegister(values) {
    dispatch(visitorAction.visitorForm({ values }));
  }

  return (
    <Modal visible={show} footer={null}>
      <div className="modal-content" >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Đăng ký tham quan
          </h5>
          <button type="button" className="close" >
            <i className="fas fa-times-circle" onClick={closeModel}/>
          </button>
        </div>
        <div className="modal-body pt-4 pl-4 pr-4" >
        <Form form={formInfo} name="register" onFinish={visitRegister}>
          <Form.Item
            name="full_name"
            rules={RULES.text.form}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="mobile"
            rules ={RULES.phone.form}
          >
            <Input />
          </Form.Item>
          <Form.Item name="project_id" rules={RULES.text.form}>
           <Select
          placeholder="Select a option and change input text above"
          allowClear
          children ={project && project.map((e, key)=>{
                return  <Option key={key}  value= {e.value}><Trans>{e.label}</Trans></Option>
          })}
        >
        </Select>
          </Form.Item>
          <Form.Item name="content" rules={RULES.text.form}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="btn btn_green">
              Register
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    </Modal>
  );
};

export default withTranslation()(VisitorForm);
