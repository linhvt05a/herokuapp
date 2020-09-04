import React, { Component } from 'react';
import {ProductForm, ProductPromotion} from './index'
import PolicyAdvice from '../../components/common/PolicyAdvice'
const ProductRightBar = (props) =>{
  const{data, showSignInModal, handleSignUp, handleChange, values, errors} = props
    return(
        <div className="col-12 col-sm-12 col-lg-4">
        
          <PolicyAdvice heading="Priority policy" data={data}/>
        
      </div>
       
    )
}
export default ProductRightBar