import React from "react";
import TopBanner from "../../../components/common/Header/TopBanner";
import {LeftContent, RightContent} from './index'
import { useDispatch, useSelector } from "react-redux";
import RightContact from "./RightContact";

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
  
  const ContactRegister = values => {
    // console.log('Success:', values);
    dispatch(contactAddAction.contactAdd({
        full_name: values.fullname,
        email: values.email,
        phone_number: values.phone,
        content: values.question
    }));
  };

  return (
    <div className="contact__page">
      <div className="container container-sm container-md">
        <div className="row">
          <LeftContent />
          <RightContact />
        </div>
      </div>
    </div>
  );
};
export default Contact;
