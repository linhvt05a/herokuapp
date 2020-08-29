import React, { Component } from 'react';
import PropertyFilter from './PropertySidebar/PropertyFilter';
import PropertyContain from './PropertyContain/PropertyContain';

const PropertySelling = () => {
    return (
        <div className="sales_policy bg_grey">
        <div className="container container-sm container-md">
            <h2 className="main_heading"><span>Chính sách bán hàng</span></h2>
            <div className="row">
            <div className="col-12 col-sm-12 col-lg-8">
                <PropertyContain/>
            </div>
            <div className="col-12 col-sm-12 col-lg-4">
                <PropertyFilter/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default PropertySelling;
