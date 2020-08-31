import React, { Component } from 'react';
import {InputBase, TextArea } from '../../../components/base';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

const RightContent= (props) =>{

    const {contactValues, contactErrors, handleChangeContact, handleContactRegister} = props

    return(
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-right pt-5 pt-lg-0">
            <h2 className="heading"><Trans>Contact</Trans></h2>
            <form className="form">
                <InputBase name="contactName" placeholder="Full name *" background="#f3f4f9" onChange={handleChangeContact} value={contactValues.contactName} errors ={contactErrors.contactName} />
                <InputBase name="contactEmail" placeholder="Email *" background="#f3f4f9" onChange={handleChangeContact} value={contactValues.contactEmail} errors ={contactErrors.contactEmail}/>
                <InputBase name="contactMobile" placeholder="Phone *" background ="#f3f4f9" onChange={handleChangeContact} value={contactValues.contactMobile} errors ={contactErrors.contactMobile}/>
                <TextArea name="contactContent" placeholder="Content *" background="#f3f4f9" handleChange={handleChangeContact} value={contactValues.contactContent} errors ={contactErrors.contactContent}/>
                <a onClick={handleContactRegister} className="btn btn_green"><Trans>SEND MESSAGE</Trans></a>
            </form>
        </div>
    )
}

export default RightContent