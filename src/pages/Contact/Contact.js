import React from "react";
import TopBanner from "../../components/common/TopBanner";
import {LeftContent, RightContent} from './index'
import useForm from '../../components/base/ValidateInput/useForm'
import validate from '../../components/base/ValidateInput/ValidateInput'

const Contact = (props) => {
  const initialValues = {
		fullName: '',
    mobile: '',
    email:'',
    content:''
  }

  const {values, errors, handleChange, handleSubmit} = useForm(initialValues, register, validate)

  const register = ()=>{}
  
  return (
    <div className="contact__page">
      <div className="container container-sm container-md">
        <div className="row">
          <LeftContent />
          <RightContent values ={values} errors ={errors} handleChange ={handleChange} handleSubmit ={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
export default Contact;
