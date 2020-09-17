import React, { Component } from 'react';
import PropertyFilter from './PropertySidebar/PropertyFilter';
import PropertyContain from './PropertyContain/PropertyContain';
import { translate } from '../../functions/Utils';
import { useHistory } from 'react-router-dom';

const PropertySelling = () => {
    let history = useHistory();
    const onNext = () => {
        history.push({ pathname: "/loan-policy", state: history.location.state })
    }
    return (
        <div className="sales_policy bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading"><span>{translate("cart_payment_policy")}</span></h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-8">
                        <PropertyContain />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4">
                        <PropertyFilter onNext={() => onNext()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertySelling;
