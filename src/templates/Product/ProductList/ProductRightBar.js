import React, { Component } from 'react';
import {ProductForm, ProductPromotion} from './index'
import Promotion from '../../../components/common/HeadingPurple/Promotion'

const ProductRightBar = (props) =>{
  const{data, showSignInModal} = props
    return(
        <div className="col-12 col-sm-12 col-lg-4">
        <div className="row">
           <ProductForm showSignInModal={showSignInModal}/>
           <div class="col-12 col-sm-12 col-md-6 col-lg-12 mt-4">
            <Promotion heading="Priority policy" data={data?.list_promotion_policy}/>
           </div>
        </div>
      </div>
       
    )
}
export default ProductRightBar