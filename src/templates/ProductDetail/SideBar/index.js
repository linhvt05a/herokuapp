import React, { Component } from 'react'
import PolicyAdvice from './../../../components/common/PolicyAdvice';
import Info from './Info';


const SiderBar = (props) => {
    const { dataInfo } = props;
        return (
            dataInfo ?
            <div className="apartment_detail">
                <Info dataInfo={dataInfo} />
                {/* <Insentives /> */}
            </div>
            : ""
        )        
    }

export default SiderBar;
