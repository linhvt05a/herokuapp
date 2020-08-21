import React, { useState } from 'react';
import { CardHotProduct } from '../Home/Layout/index';
import FilterProject from '../../components/common/FilterProject'

const HotProduct = (props) => {

    return (
        <div className="projectPage">
            <div className="project_page hot_product bg_grey">
                <FilterProject />
                <CardHotProduct headerBodyClassName="label_filter--heading" labelHeader="product_list_title" datas={["a", "iu", "e", "vl", "wa", "di", "test"]} detail />
            </div>
        </div>
    )
}
export default HotProduct;
