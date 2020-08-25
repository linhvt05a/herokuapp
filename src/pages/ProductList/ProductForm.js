import React, { Component } from "react";
import { Trans } from "react-i18next";
import {ButtonStyle, InputBase} from '../../components/base/index'

const ProductForm = (props) => {
  const {showSignInModal} = props
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-12">
      <div className="save_product--login">
          <FormHeading />
          <InputBase placeholder="Full name"/>
          <InputBase placeholder="Email"/>
          <InputBase placeholder="Password"/>
          <InputBase placeholder="Re-Enter the password"/>
          <ButtonStyle className="btn btn_green" label="REGISTRATION"/>
          <LoginButton showSignInModal={showSignInModal}/>
      </div>
    </div>
  );
};
const FormHeading = () =>{
  return(
    <div className="heading">
        <Trans>Save products of interest</Trans>
      <span className="sub">
        <Trans>Please register with us to save the products you care about center.</Trans>
      </span>
    </div>
  )
}

const LoginButton = (props) =>{
  return(
    <div className="has-acc">
      <Trans>You already have an account so please</Trans>

      <a className="login" onClick={props.showSignInModal}>
          <Trans> Sign in </Trans>
      </a>
    </div>
  )
}

export default ProductForm;
