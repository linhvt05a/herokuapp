import React, { Component } from 'react';
import {ProductForm, ProductPromotion} from './index'

const ProductRightBar = (props) =>{
  const{data, showSignInModal, handleSignUp, handleChange, values, errors} = props
    return(
        <div className="col-12 col-sm-12 col-lg-4">
        <div className="row">
          <ProductForm showSignInModal={showSignInModal} handleChange={handleChange} handleSignUp={handleSignUp}  values={values} errors={errors}/>
          <ProductPromotion data={data}/>
        </div>
      </div>
       
    )
}
export default ProductRightBar