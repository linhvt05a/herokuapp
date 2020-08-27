import React, { useState } from 'react';
import {TextArea, ButtonStyle, InputBase} from '../../components/base/index'
import {validateRequest} from '../../components/base/ValidateInput/ValidateInput';
import {supportForm} from '../../components/base/ValidateInput/useForm'
import { useDispatch, useSelector } from "react-redux";
import { juridicalSupportAction } from "../../store/action/index";

const JuridicalBox =(props) =>{
    const requestValue =  {requestName:'', requestEmail:'',requestContent:''} 
    const {questionValues, questionErrors, handleRequest, handleChangeReq} = supportForm(requestValue, sendRequest, validateRequest)
    const dispatch = useDispatch(); 
function sendRequest () {
    dispatch(juridicalSupportAction.juridicalSupport({questionValues}))
}
    return (
        <div className="juridical__advisory">
            <div className="juridical__advisory--title mb-2">{props.title}</div>
                <InputBase placeholder="Full name *" name="requestName" top={10} value={questionValues.requestName} errors={questionErrors.requestName} onChange={handleChangeReq}/>
                <InputBase placeholder="Email *" name="requestEmail" top={10} value={questionValues.requestEmail} errors={questionErrors.requestEmail} onChange={handleChangeReq}/>
                <TextArea placeholder="Content *" className="w-100 mt-2" name="requestContent"  value={questionValues.requestContent} errors={questionErrors.requestContent} handleChange={handleChangeReq}/>
                <ButtonStyle className="btn btn_green text-uppercase w-100" label="Submit a question" onClick ={handleRequest}/>
        </div>
    )
  }

export default JuridicalBox
