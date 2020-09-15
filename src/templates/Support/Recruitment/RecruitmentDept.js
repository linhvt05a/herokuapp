import React, { Component } from 'react';
import { Trans } from 'react-i18next';

const RecruitmentDept = ()=> {
    return (
        <div className="overview">
        <div className="container container-sm container-md">
          <h2 className="overview_heading pb-0">
            <span className="sub overview_heading pb-0 mt-0">
             <Trans>
                    We look for individuals who share our values ​​as one
                    Means that reinforce and continue the company's philosophy of success. They
                    I am looking for active, active people who specialize in:
             </Trans>
            </span>
          </h2>
            <Categories className="overview_parts" title="TECHNOLOGY" icon="fas fa-user-cog"/>
        </div>
      </div>
    );
}

const Categories = (props) =>{
  const {className, icon, title} = props
  return(
      <div className={className}>
        <div className="item">
          <p className="icon">
            <i className={icon} />
          </p>
          <p className="title"><Trans>{title}</Trans></p>
        </div>
    </div>
  )
}
export default RecruitmentDept
