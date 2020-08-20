import React, { useState } from 'react';
import {Modal} from 'antd';
import {InputSelect} from '../../components/base/Select/index'
import {InputBase} from '../../components/base/index'
import { Trans } from 'react-i18next';
import useForm from '../../components/base/ValidateIinput/useForm'
import validate from '../../components/base/ValidateIinput/ValidateInput'
import TextArea from '../../components/base/TextArea/TextArea'

const project = [{value:1, label:'donalll'},{value:2, label:'cat'},{value:3, label:'dog'}]

const RegisterModal = (props) =>{

  const initialValues = {
		fullName: '',
    mobile: '',
    projectSelect:'',
    content:''
  }
  
  const {values, errors, handleChange, handleSubmit, handleSelect} = useForm(initialValues, register, validate)

  function register(){
    console.log('Ready to submit')
  }

  return (
          <Modal visible={false}  footer={null}>
              <div  className="modal fade show" style={{ paddingRight: 15,display:'block'}}>
                <div className="modal-dialog open" role="document" style={{ maxWidth: 395 }}>
                    <div className="modal-content">
                    <div className="modal-header">
                <h5 className="modal-title">
                      <Trans>Sign up to visit</Trans>
                </h5>
                <button type="button"  className="close">
                  <i className="fas fa-times-circle" />
                </button>
              </div>
                <div className="modal-body pt-4 pl-4 pr-4">
                  <InputBase placeholder="Họ tên *" type="text" name = "fullName" value={values.fullName} onChange={handleChange} errors={errors.fullName}/>
                
                  <InputBase  placeholder="Điện thoại *" type="text" name="mobile" value={values.mobile} onChange="" onChange={handleChange} errors={errors.mobile}/>

                  <InputSelect name="projectSelect" style={346}  datas={project}  onChange={handleSelect} errors={errors.projectSelect}/>

                  <TextArea placeholder="Nội dung *" name="content" className="form-control" value={values.content} handleChange = {handleChange} errors={errors.content}/>
              </div>
              <div className="modal-footer justify-content-center border-top-0 pt-0 pb-4">
                  <a href="#" className="btn btn_green" onClick={handleSubmit}> <Trans>REGISTRATION</Trans> </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default RegisterModal

