import React, { Component } from "react";
import CardHeader from '../../../components/common/CardHeader'
import {InputBase, ButtonStyle} from '../../../components/base/index'
import { Trans } from "react-i18next";

const ProductSignInModal = (props) => {
    const {handleSignIn, handleChangeSignIn, signValues,signInErrors, closeModal} = props
  return (
    <div className="modal fade save_product--modal show" style={{ display: "block", paddingRight: 15 }}>
      <div className="modal-dialog open" role="document" >
        <div className="modal-content">
          <div className="modal-header">
            <CardHeader label="My account"/>
            <span data-dismiss="modal" className="close fas fa-times-circle" onClick={closeModal}/>
          </div>
          <div className="modal-body m_slider save_product--modal-signin slick-initialized slick-slider">
            <div aria-live="polite" className="slick-list draggable">
            <div
                className="slick-track"
                role="listbox"
                style={{ opacity: 1, width: 800, left: 0 }}
              >
                <div
                  className="form form_signInUp slick-slide slick-current slick-active"
                  style={{ width: 400 }}
                >
                <InputBase type="text" placeholder="Email" name="emailSignIn" top={10} onChange ={handleChangeSignIn} value={signValues.emailSignIn} errors={signInErrors.emailSignIn}/>
                <InputBase type="password" placeholder="Password" top={10} name="passwordSignIn"  onChange={handleChangeSignIn} value={signValues.passwordSignIn} errors={signInErrors.passwordSignIn}/>
                  <div className="form-group mb-0 text-center">
                    <ButtonStyle  className="btn btn_green btn_signIn text-uppercase" label="SIGN IN" onClick={handleSignIn}/>
                  </div>
                  <div className="form-group mb-0 text-center">
                    <a className="text-forgot forgotPassword">
                      <Trans>Forgot Password</Trans>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductSignInModal