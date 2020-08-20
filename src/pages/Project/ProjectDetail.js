import React, { useState, useEffect } from 'react';
import TopBannerDetail from "./Item/TopBannerDetail";
import { CardProjectList } from './Layout/index'

const ProjectDetail = (props) => {

    const type = 0;

    return (
        <div className="projectDetailPage">
            <CardProjectList headerBodyClassName="label_filter--heading" labelHeader="Royal Garden" datas={["a", "iu", "e", "vl", "wa", "di", "test"]} />
        </div>
    )
}
export default ProjectDetail;
