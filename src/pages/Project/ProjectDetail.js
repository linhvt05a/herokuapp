import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import TopBannerDetail from "./Item/TopBannerDetail";
import { CardProjectList } from './Layout/index'

const ProjectDetail = (props) => {

    const location=useLocation();
    console.log(location);
    
    return (
        <div className="projectDetailPage">
            <TopBannerDetail />
            <CardProjectList headerBodyClassName="label_filter--heading" labelHeader="Royal Garden" datas={["a", "iu", "e", "vl", "wa", "di", "test"]} />
        </div>
    )
}
export default ProjectDetail;
