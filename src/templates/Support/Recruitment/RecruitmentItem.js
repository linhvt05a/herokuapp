import React, { Component } from 'react';
import CardNoData from '../../../components/common/CardNoData'
import { Trans } from 'react-i18next';
import {Link} from 'react-router-dom'

const RecruitmentItem = (props) => {
  const {data} = props
    return (
      <div className="row">
        {data && data.length > 0 ? 
          data.map((item, index)=><ItemRow key={index} data ={item}/>) : <CardNoData />
        }
      </div>
    );
}

const ItemRow = (props) =>{
  const {data} = props
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
    <div className="item">
      <div className="information">
        <Link className="position" to="">
            {data.jobTitle}
        </Link>
        <div className="group group_sales"><Trans>{data.jobDept}</Trans></div>
        <ul className="details">
          <li>
            <i className="icon fas fa-user-alt" />
            <span className="text"><Trans>Số lượng</Trans>:{data.qty}</span>
          </li>
          <li>
            <i className="icon fas fa-map-marker-alt" />
            <span className="text"><Trans>Nơi làm việc</Trans>:{data.place}</span>
          </li>
          <li>
            <i className="icon fas fa-clock" />
            <span className="text"><Trans>Loại</Trans>: {data.type}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
export default RecruitmentItem