import React, { useState } from 'react';
import {ProductNodata, ProductGrids, ProductTable} from './index'
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import Pagination from '../../components/common/Pagination';
import { LoadDataPaging } from '../../utils/Utils';


const ProductContent = (props) => {
  const [grid, setGrid] = useState(true)

  const{data} = props
    return (
        <div className="col-12 col-sm-12 col-lg-8">
            {data && data.length > 0 ? 
              <div className="showby">
              <div className="text">
                <Trans>Total</Trans> {data.length} <Trans>products</Trans></div>
                <div className="icons">
                    <ProductMode  content={<i className={grid == true ?  "icon active fas fa-th" :'icon fas fa-th' }></i>}  switchMode={()=> setGrid(true)}/>
                    <ProductMode content={<i className={grid == false ? "icon active fas fa-list" : 'icon fas fa-list'}></i>} switchMode={()=> setGrid(false)}/>
                </div>
            </div>:
            <ProductNodata />
            }
            {
              grid == true ? 
              <ProductGrids data ={data}/>
              :
              <ProductTable /> 
            }
            <Pagination data={LoadDataPaging(20, 2, 5, 6)}/>
          </div>
        
    );
}

const ProductMode = (props) =>{
  return(
      <a onClick={props.switchMode}>
          {props.content}
      </a>
  )
}
export default ProductContent