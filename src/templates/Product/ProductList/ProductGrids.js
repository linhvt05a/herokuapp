import React, { Component, useState } from 'react';
import { Trans } from 'react-i18next';
import { IMAGE_URL } from "../../../contant";
import {Link} from 'react-router-dom'
import {ProductNodata} from './index'
import {formatCurrency} from '../../../functions/Utils'

const ProductGrids = (props) => {
    const{data, productLocal, loginData} = props
  
    return (
        <div className="striking_apartment--content">
        {loginData && loginData.user_id !== null ? 
        <div className="row">
            {data && data.detail.list_product.map((item, index)=><ProductRow data={item} key={index}/>)}
        </div>:
        <div className="row">
            {productLocal && productLocal.map((item, index)=><ProductRow data={item} key={index}/>)}
            
        </div>
        }
      </div>   
    )
}

const ProductRow = (props) =>{
    const{data} = props
    const[is_favorite, setIs_favorite] = useState(false)
    const saveToStorage = () =>{
        setIs_favorite(!is_favorite)
                  var favorite = JSON.parse(sessionStorage.getItem('favor'))
                  for (var index = 0; index < favorite.length; index++) {
                       if(favorite[index].product_id == data.product_id){
                          favorite[index].is_favorite = is_favorite
                          console.log(favorite)
                       }
                  }
                if (!favorite) {
                  favorite = [];
              }
            //   var index = favorite.indexOf(function (favorItem) {
            //     return favorItem.product_id == data.product_id;
            // });
       
    
    }
    const saveToOder = (product_id) =>{
      localStorage.setItem('product', product_id)
    }
    return(
        <div className="col-12 col-sm-12 col-md-6">
        <div className="item">
          <figure className="image">
            <i className={!is_favorite && data.is_favorite === true ? "liked active fas fa-heart" : "liked fas fa-heart"} onClick={saveToStorage}/>
            <img
              src={data.product_avatar_url !="" ? data.product_avatar_url : IMAGE_URL +  "/images/no_data.png"}
              
            />
          </figure>
          <div className="heading">
            <div className="top">
              <a href="#" className="name">
                {data.product_name}
              </a>
              <p className="price mb-0">{formatCurrency(data.product_estimate_price)} tỷ</p>
            </div>
            <p className="address mb-0">
                <Trans>Listed price (VND)</Trans>
              <i
                className="noted fas fa-info-circle"/>
            </p>
          </div>
          <div className="details">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                <p className="child mb-0">
                  <i className="icon far fa-object-ungroup" />
                  <span className="text">
                    Diện tích :{data.product_acreage} ( m<sup>2</sup> )
                    <i
                      className="noted fas fa-info-circle"/>
                  </span>
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                <p className="child mb-0">
                  <i className="icon fas fa-bed" />
                  <span className="text">Phòng ngủ : {data.product_total_bedroom}</span>
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                <p className="child mb-0">
                  <i className="icon fas fa-compass" />
                  <span className="text">Hướng : {data.product_direction_name}</span>
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                <p className="child mb-0">
                  <i className="icon fas fa-restroom" />
                  <span className="text">Nhà vệ sinh : {data.product_total_bathroom}</span>
                </p>
              </div>
            </div>
          </div>
            <ProductButton saveToOder={()=>saveToOder(data.product_id)}/>
        </div>
      </div>
   
    )
}

const ProductButton = (props) =>{
  const {saveToOder} = props
    return(
        <div className="actions">
            <button className="btn btn_purple" onClick={saveToOder}>
                <Trans>ADD TO CART</Trans>
            </button>
            <button className="btn btn_white">
                <Trans>SEE DETAIL</Trans>
            </button>
      </div>
    )
}
export default ProductGrids