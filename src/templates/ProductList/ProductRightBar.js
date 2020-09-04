import React, { Component } from 'react';
import {ProductForm, ProductPromotion} from './index'
import Promotion from '../../components/common/HeadingPurple/Promotion'
const ProductRightBar = (props) =>{
  const{data, showSignInModal, handleSignUp, handleChange, values, errors} = props
    return(
        <div className="col-12 col-sm-12 col-lg-4">
        
          <Promotion heading="Priority policy" data={data}/>
        
      </div>
       
    )
}
export default ProductRightBar