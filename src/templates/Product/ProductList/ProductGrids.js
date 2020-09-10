import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { IMAGE_URL } from "../../../contant";
import {Link} from 'react-router-dom'

const ProductGrids = (props) => {
    const{data, userId, localList} = props
    console.log(data)
    return (
        <div className="striking_apartment--content">
        <div className="row">
            { data && data.detail.list_product.map((item, index)=><ProductRow data={item} key={index}/>)}
        </div>:
      </div>   
    )
}
const LocalRow = () =>{
  <div className="col-12 col-sm-12 col-md-6">
        <div className="item">
          <figure className="image">
            <i className="liked active fas fa-heart" onClick={()=>saveToStorage(data.product_id)}/>
            <img
              src={data.product_avatar_url !="" ? data.product_avatar_url : IMAGE_URL +  "/images/no_data.png"}
              
            />
          </figure>
          <div className="heading">
            <div className="top">
              <a href="#" className="name">
                {data.product_name}
              </a>
              <p className="price mb-0">{data.prices} tỷ</p>
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
}
const ProductRow = (props) =>{
    const{data} = props
    const saveToStorage = (product_id) =>{
      localStorage.setItem('product_id', product_id)
    }
    const saveToOder = (product_id) =>{
      localStorage.setItem('product', product_id)
    }
    return(
        <div className="col-12 col-sm-12 col-md-6">
        <div className="item">
          <figure className="image">
            <i className="liked active fas fa-heart" onClick={()=>saveToStorage(data.product_id)}/>
            <img
              src={data.product_avatar_url !="" ? data.product_avatar_url : IMAGE_URL +  "/images/no_data.png"}
              
            />
          </figure>
          <div className="heading">
            <div className="top">
              <a href="#" className="name">
                {data.product_name}
              </a>
              <p className="price mb-0">{data.prices} tỷ</p>
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
            <Link  className="btn btn_purple" onClick={saveToOder}>
                <Trans>ADD TO CART</Trans>
            </Link>
            <Link href="#" className="btn btn_white">
                <Trans>SEE DETAIL</Trans>
            </Link>
      </div>
    )
}
export default ProductGrids