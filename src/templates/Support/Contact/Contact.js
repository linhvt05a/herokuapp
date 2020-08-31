import React from "react";
import TopBanner from "../../../components/common/Header/TopBanner";
import {LeftContent, RightContent} from './index'
import {useFormContact} from '../../../components/base/ValidateInput/useForm'
import {validateContact} from '../../../components/base/ValidateInput/ValidateInput';
import { useDispatch, useSelector } from "react-redux";
import { contactAddAction } from "../../../store/action/index";

const Contact = (props) => {
  const contact = useSelector(state => state.contactReducer);
  const contactAddSuccess = contact.contactAdd.success;
  const contactList = contactAddSuccess ? contact.contactAdd.detail : null;
  const dispatch = useDispatch();
  const contactValue = {
		contactName: '',
    contactMobile: '',
    contactEmail:'',
    contactContent:''
  }
  const {contactValues, contactErrors, handleChangeContact, handleContactRegister} = useFormContact(contactValue, validateContact)
  
  const ContactRegister = () => {
    dispatch(contactAddAction.contactAdd({
      full_name: "Võ Văn Dương",
      email: "duongvv@minerva.vn",
      phone_number: "0385381052",
      content: "what is this?"
    }))
  }
  // console.log("contact", contactList);
  return (
    <div className="contact__page">
      <div className="container container-sm container-md">
        <div className="row">
          <LeftContent />
          
          <RightContent  
            contactValues={contactValues} 
            contactErrors={contactErrors} 
            handleChangeContact={handleChangeContact} 
            handleContactRegister={ContactRegister}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
