import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import TopBanner from "../../components/common/TopBanner";
import { Input, Select, Checkbox } from 'antd';
import TopBannerDetail from "../TransactionLevel/Item/TopBannerDetailTrans";

const TransactionLevel = (props) => {

    const data = [20, 60]
    const data1 = [10, 80]

    const dataImg = "banner_exchanges.png";
    const type = 1;
    const [height, setHeight] = useState(50);
    useEffect(() => {
        const updateWindowDimensions = () => {
          const newHeight = document.getElementsByClassName('header')[0].clientHeight;
          setHeight(newHeight);
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions) 
    }, []);

    return (
        <div className="projectDetailPage" style={{paddingTop: height}}>
            <TopBannerDetail dataImg={dataImg} type={type}/>
            
        </div>
    )
}
export default TransactionLevel;
