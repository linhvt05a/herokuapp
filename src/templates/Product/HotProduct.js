import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { CardHotProduct } from '../Home/Layout/index';
import FilterProject from '../Project/Layout/FilterProject';

const HotProduct = (props) => {

    const location = useLocation();

    return (
        <div className="projectPage">
            <div className="project_page hot_product bg_grey">
                <FilterProject />
                <CardHotProduct headerBodyClassName="label_filter--heading" labelHeader="product_list_title" location={location} limit={9} detail />
            </div>
        </div>
    )
}
export default HotProduct;
