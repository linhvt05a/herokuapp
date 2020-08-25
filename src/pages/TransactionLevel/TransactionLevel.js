import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TopBannerDetailTrans from "../TransactionLevel/Item/TopBannerDetailTrans";
import Policy from './Policy';
import Exchanges from './Exchanges';
import SideBarSort from './SideBarSort';
import { transactionAction } from "../../store/action";


const TransactionLevel = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(transactionAction.TransactionLoadList({}))
    }, [])

    const data = useSelector(state => state.transactionReducer.List.detail)
    return (
        <div className="projectDetailPage">
            <TopBannerDetailTrans data={data} />
            <div className="exchanges bg_grey">
                <div className="container container-sm container-md">
                    <h2 className="main_heading"><span>Sàn giao dịch</span></h2>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-8 mb-4 mb-lg-0">
                            <Policy data={data}/>
                            <Exchanges data={data}/>
                        </div>
                        <SideBarSort/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TransactionLevel;
