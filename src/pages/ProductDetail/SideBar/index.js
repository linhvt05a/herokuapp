import React, { Component } from 'react'
import Insentives from './Incentives';
import Info from './Info';


const SiderBar = (props) => {
    const { dataInfo } = props;
    console.log(dataInfo);
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
