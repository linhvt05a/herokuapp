import React, { Component } from "react";
import { Trans } from "react-i18next";

const ProductPromotion = (props) => {
  const{data} = props
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-12" style={{marginTop: 45}}>
      <div className="incentives mt-0">
        <div className="incentives__heading"><Trans>Incentives</Trans></div>
        <div className="tab-content">
          <div className="tab-pane fade show active">
            { data && data.map((item, index)=><UserIncentives data={item} key={index}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

const UserIncentives = (props) =>{
  const{data} = props
  return(
      <div className="incentives__user">
      <div className="heading">
        <a href="#" className="text">
            {data.title}
        </a>
        <span className="date">
          <i className="icon far fa-clock" />
            {data.time}
        </span>
      </div>
      <div className="list">
        <p className="text">{data.pro1}</p>
        <p className="text">{data.pro2}</p>
        <p className="text">{data.pro3}</p>
      </div>
    </div>
  )
}
export default ProductPromotion;
