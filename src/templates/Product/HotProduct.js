import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { CardHotProduct } from '../Home/Layout/index';
import FilterProjectList from '../Project/FilterProjectList';

const HotProduct = (props) => {

    const location = useLocation();

    console.log('location', location);

    return (
        <div className="projectPage">
            <div className="project_page hot_product bg_grey">
                <FilterProjectList />
                <CardHotProduct
                    headerBodyClassName="label_filter--heading"
                    labelHeader="product_list_title"
                    location={location} limit={9}
                    detail
                />
            </div>
        </div>
    )
}
export default HotProduct;
