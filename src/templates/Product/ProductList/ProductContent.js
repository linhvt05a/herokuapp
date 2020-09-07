import React, { useState } from 'react';
import {ProductNodata, ProductGrids, ProductTable} from './index'
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import Pagination from '../../../components/common/Pagination';
import { LoadDataPaging } from '../../../functions/Utils';


const ProductContent = (props) => {
  const [grid, setGrid] = useState(true)
  const{data, limit, total_page, total_record, page, onPageChange} = props
    return (
        <div className="col-12 col-sm-12 col-lg-8">
            {data && data.detail.list_product.length > 0 ? 
              <div className="showby">
              <div className="text">
                <Trans>Total</Trans> {data.detail.list_product.length} <Trans>products</Trans></div>
                <div className="icons">
                    {/* <ProductMode  content={<i className={grid == true ?  "icon active fas fa-th" :'icon fas fa-th' }></i>}  switchMode={()=> setGrid(true)}/>
                    <ProductMode content={<i className={grid == false ? "icon active fas fa-list" : 'icon fas fa-list'}></i>} switchMode={()=> setGrid(false)}/> */}
                </div>
            </div>:
            <ProductNodata />
            }
            {
              grid == true ? 
              <ProductGrids data ={data}/>
              :
              <ProductTable data ={data}/> 
            }
            <Pagination data={LoadDataPaging(total_record, page, total_page, limit)} onChange ={onPageChange}/>
          </div>
        
    );
}

// const ProductMode = (props) =>{
//   return(
//       <a onClick={props.switchMode}>
//           {props.content}
//       </a>
//   )
// }
export default ProductContent