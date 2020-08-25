import React, { useState, useEffect } from 'react';
import TopBannerDetailTrans from "../TransactionLevel/Item/TopBannerDetailTrans";
import Policy from './Policy';
import Exchanges from './Exchanges';
import SideBar from './SideBar';

const TransactionLevel = (props) => {

    const data = [20, 60]
    const data1 = [10, 80]

    return (
        <div className="projectDetailPage">
            <TopBannerDetailTrans />
            <div className="exchanges bg_grey">
                <div className="container container-sm container-md">
                    <h2 className="main_heading"><span>Sàn giao dịch</span></h2>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-8 mb-4 mb-lg-0">
                            <Policy/>
                            <Exchanges/>
                        </div>
                        <SideBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TransactionLevel;
