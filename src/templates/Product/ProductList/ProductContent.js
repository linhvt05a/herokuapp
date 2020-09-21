import React, { useState } from 'react';
import {ProductNodata, ProductGrids, ProductTable} from './index'
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import Pagination from '../../../components/common/Pagination';
import { LoadDataPaging } from '../../../functions/Utils';


const ProductContent = (props) => {
  const{data, limit, total_page,loginData, total_record, page, onPageChange, productLocal} = props
    return (
        <div className="col-12 col-sm-12 col-lg-8">
            <div className="showby">
              <div className="text">
                <Trans>Total</Trans> {data && data.detail.list_product.length || productLocal && productLocal.length} <Trans>products</Trans>
              </div>
              <div className="icons">
              </div>
            </div>
            <ProductGrids data ={data} productLocal={productLocal} loginData={loginData}/>
           {loginData && loginData.user_id !== null ? 
            data && data.detail.list_product.length === 0 && <ProductNodata />
           : <DisplayNodata productLocal={productLocal}/>}
            <Pagination data={LoadDataPaging(total_record, page, total_page, limit)} onChange ={onPageChange}/>
          </div>
        
    );
}

function DisplayNodata(props){
  const {productLocal} = props
  if(productLocal && productLocal.length === 0){
    return <ProductNodata />
  }
  return <></>
  
}
export default ProductContent