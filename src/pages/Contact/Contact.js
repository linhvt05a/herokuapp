import React from "react";
import TopBanner from "../../components/common/TopBanner";
import {LeftContent, RightContent} from './index'
import {useFormContact} from '../../components/base/ValidateInput/useForm'
import {validateContact} from '../../components/base/ValidateInput/ValidateInput';
import { useDispatch, useSelector } from "react-redux";
import { contactAddAction } from "../../store/action/index";

const Contact = (props) => {
  const contactAdd = useSelector(state => state.contactReducer);
  const contactAddSuccess = contactAdd.contactAdd.success
  const dispatch = useDispatch();
  const contactValue = {
		contactName: '',
    contactMobile: '',
    contactEmail:'',
    contactContent:''
  }
  const {contactValues, contactErrors, handleChangeContact, handleContactRegister} = useFormContact(contactValue, contactRegister, validateContact)
  
  function contactRegister () {
    dispatch(contactAddAction.contactAdd({contactValues}))
  }
  return (
    <div className="contact__page">
      <div className="container container-sm container-md">
        <div className="row">
          <LeftContent />
          
          <RightContent  
            contactValues={contactValues} 
            contactErrors={contactErrors} 
            handleChangeContact={handleChangeContact} 
            handleContactRegister={handleContactRegister}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
