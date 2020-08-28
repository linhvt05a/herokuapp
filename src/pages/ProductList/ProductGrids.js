import React, { Component } from 'react';
import { Trans } from 'react-i18next';

const ProductGrids = (props) => {
    const{data} = props
    return (
        <div className="striking_apartment--content">
        <div className="row">
           { data && data.detail.list_product.map((item, index)=><ProductRow data={item} key={index}/>)}
        </div>
      </div>   
    )
}

const ProductRow = (props) =>{
    const{data} = props
    return(
        <div className="col-12 col-sm-12 col-md-6">
        <div className="item">
          <figure className="image">
            <i className="liked active fas fa-heart" />
            <img
              src={data.product_avatar_url}
              
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
                {data.priceDefine}
              <i
                className="noted fas fa-info-circle"
                data-toggle="tooltip"
                data-placement="right"
                title
                data-original-title="Tooltip is here"
              />
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
                      className="noted fas fa-info-circle"
                      data-toggle="tooltip"
                      data-placement="top"
                      title
                      data-original-title="Tooltip is here"
                    />
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
            <ProductButton />
        </div>
      </div>
   
    )
}

const ProductButton = () =>{
    return(
        <div className="actions">
            <a href="#" className="btn btn_purple">
                <Trans>ADD TO CART</Trans>
            </a>
            <a href="#" className="btn btn_white">
                <Trans>SEE DETAIL</Trans>
            </a>
      </div>
    )
}
export default ProductGrids