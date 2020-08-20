import React, { useState, useEffect } from 'react';
import TopBannerDetail from "./Item/TopBannerDetail";
import { CardProjectList } from './Layout/index'

const ProjectDetail = (props) => {

    const dataImg = "VAP-tt-nha-dat-tang.jpg";
    const type = 0;
    
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
            <TopBannerDetail dataImg={dataImg} type={type} />
            <CardProjectList headerBodyClassName="label_filter--heading" labelHeader="Royal Garden" datas={["a", "iu", "e", "vl", "wa", "di", "test"]} />
        </div>
    )
}
export default ProjectDetail;
