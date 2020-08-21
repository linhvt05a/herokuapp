import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import TopBanner from "../../components/common/TopBanner";
import { Input, Select, Checkbox } from 'antd';
import TopBannerDetailTrans from "../TransactionLevel/Item/TopBannerDetailTrans";

const TransactionLevel = (props) => {

    const data = [20, 60]
    const data1 = [10, 80]

    return (
        <div className="projectDetailPage">
            <TopBannerDetailTrans />
        </div>
    )
}
export default TransactionLevel;
