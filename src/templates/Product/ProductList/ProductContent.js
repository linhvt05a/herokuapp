import React, { useState } from 'react';
import {ProductNodata, ProductGrids, ProductTable} from './index'
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import Pagination from '../../../components/common/Pagination';
import { LoadDataPaging } from '../../../functions/Utils';


const ProductContent = (props) => {
  const{data, limit, total_page, total_record, page, onPageChange, userId, localList} = props
    return (
        <div className="col-12 col-sm-12 col-lg-8">
            {data && data.detail.list_product.length > 0 && localList && localList.length > 0   ? 
              <div className="showby">
              <div className="text">
                <Trans>Total</Trans> {data.detail.list_product.length || localList.length} <Trans>products</Trans></div>
                <div className="icons">
                </div>
            </div>:
            <ProductNodata />
            }
            {<ProductGrids data ={data} localList = {localList}/>}
            <Pagination data={LoadDataPaging(total_record, page, total_page, limit)} onChange ={onPageChange}/>
          </div>
        
    );
}
export default ProductContent