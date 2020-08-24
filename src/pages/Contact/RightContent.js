import React, { Component } from 'react';
import {InputBase, TextArea, ButtonStyle} from '../../components/base/index'

const RightContent= (props) =>{

    const {values, errors, handleChange, handleSubmit} = props

    return(
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-right pt-5 pt-lg-0">
        <h2 className="heading">Liên hệ</h2>
        <form className="form">
            <InputBase name="fullName" placeholder="Full name *" background="#f3f4f9" value={values.fullName} onChange={handleChange} errors={errors.fullName}/>
            <InputBase name="email" placeholder="Email *" background="#f3f4f9" value={values.email} onChange={handleChange} errors={errors.email}/>
            <InputBase name="mobile" placeholder="Phone *" background ="#f3f4f9" value={values.mobile} onChange={handleChange} errors={errors.mobile}/>
            <TextArea name="content" placeholder="Content *" background="#f3f4f9" value={values.content}  handleChange={handleChange} errors={errors.content}/>
            <ButtonStyle label="SEND MESSAGE" className="btn btn_green" onClick={handleSubmit}/>
        </form>
      </div>
   
    )
}

export default RightContent