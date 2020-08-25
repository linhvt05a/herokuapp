import React, { Component } from 'react';
import {ProductForm, ProductPromotion} from './index'

const ProductRightBar = (props) =>{
  const{data, showSignInModal} = props
    return(
        <div className="col-12 col-sm-12 col-lg-4">
        <div className="row">
          <ProductForm showSignInModal={showSignInModal}/>
          <ProductPromotion data={data}/>
        </div>
      </div>
       
    )
}
export default ProductRightBar