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
    let data = {
        total: 30000000000,
        pile: 100000000,
        dataPile: [
            { pile: 350000000, progress: "10 ngày sau cọc, ký HĐMB", pay: 450000000, unit: "vnd", note: "chưa VAT", percent: "15", discount: false },
            { pile: 150000000, progress: "30 ngày sau ký HĐMB", pay: 600000000, unit: "vnd", note: "", percent: "20", discount: false },
            { pile: 150000000, progress: "45 ngày sau cọc, ký HĐMB", pay: 600000000, unit: "vnd", note: "", percent: "31", discount: true },
            { pile: 250000000, progress: "65 ngày sau cọc, ký HĐMB", pay: 700000000, unit: "vnd", note: "", percent: "43", discount: true },
            { pile: 250000000, progress: "100 ngày sau cọc, ký HĐMB", pay: 700000000, unit: "vnd", note: "", percent: "59", discount: true }
        ]
    }
    return (
        <div className="sales_policy bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading"><span>{translate("cart_payment_policy")}</span></h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-8">
                        <PropertyContain data={data} />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4">
                        <PropertyFilter data={data} onNext={() => onNext()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertySelling;
