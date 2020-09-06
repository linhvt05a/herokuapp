import React, { Component } from "react";
import { Trans } from "react-i18next";
import moment from 'moment'
const ProductPromotion = (props) => {
  const{data} = props
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-12" style={{marginTop: 45}}>
      <div className="incentives mt-0">
        <div className="incentives__heading"><Trans>Incentives</Trans></div>
        <div className="tab-content">
          <div className="tab-pane fade show active">
            { data && data.list_promotion_policy.map((item, index)=><UserIncentives data={item} key={index}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};
function convertDate(value){
  const date = moment(value).format('DD-MM-YYYY')
  return date
}
const UserIncentives = (props) =>{
  const{data} = props
  
  return(
      <div className="incentives__user">
      <div className="heading">
        <a href="#" className="text">
            {data.promotion_policy_name}
        </a>
        <span className="date">
          <i className="icon far fa-clock" />
            <Trans> From</Trans> : {convertDate(data.promotion_policy_start_date)} - <Trans>To</Trans> : {convertDate(data.promotion_policy_end_date) }
        </span>
      </div>
      <div className="list">
        <p className="text">{data.promotion_policy_type_name}</p>
        <p className="text">{data.promotion_policy_value_unit_name}</p>
        <p className="text">{data.promotion_policy_value}</p>
      </div>
    </div>
  )
}
export default ProductPromotion;
