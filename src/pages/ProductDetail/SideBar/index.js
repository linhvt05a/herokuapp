import React, { Component } from 'react'
import Insentives from './../../../components/common/Incentives';
import Info from './Info';


const SiderBar = (props) => {
    const { dataInfo } = props;
        return (
            dataInfo ?
            <div className="apartment_detail">
                <Info dataInfo={dataInfo} />
                <Insentives />
            </div>
            : ""
        )        
    }

export default SiderBar;
