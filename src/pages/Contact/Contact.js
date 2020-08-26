import React from "react";
import TopBanner from "../../components/common/TopBanner";
import {LeftContent, RightContent} from './index'
import {useFormContact} from '../../components/base/ValidateInput/useForm'
import {validateContact} from '../../components/base/ValidateInput/ValidateInput';

const Contact = (props) => {
  const contactValue = {
		contactName: '',
    contactMobile: '',
    contactEmail:'',
    contactContent:''
  }
  const {contactValues, contactErrors, handleChangeContact, handleContactRegister} = useFormContact(contactValue, contactRegister, validateContact)
  function contactRegister () {
    console.log(contactValues)
  }
  return (
    <div className="contact__page">
      <div className="container container-sm container-md">
        <div className="row">
          <LeftContent />
          <RightContent  contactValues={contactValues} contactErrors={contactErrors} handleChangeContact={handleChangeContact} handleContactRegister={handleContactRegister}/>
        </div>
      </div>
    </div>
  );
};
export default Contact;
