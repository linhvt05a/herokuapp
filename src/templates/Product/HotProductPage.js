import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import CardFilterList from '../../components/common/CardFilterList';
import { productAction } from '../../store/action';
import { CardHotProduct } from '../Home/Layout/index';

const HotProductPage = (props) => {
    const dispatch = useDispatch();
    const limit = 9

    const onFilterSubmit = ({ province_id, district_id, status_id, area_min, area_max, money_min, money_max, project_sale_status }) => {
        dispatch(productAction.loadHotProductList({
            page: 1, limit: limit,
            province_id,
            district_id,
            status_id,
            area_min,
            area_max,
            money_min,
            money_max,
            list_product_type_id: project_sale_status
        }))
    }
    return (
        <div className="projectPage">
            <div className="project_page hot_product bg_grey">
                {/* <FilterProjectList /> */}
                <CardFilterList title={"search_product_by"} onFilterSubmit={onFilterSubmit} />
                <CardHotProduct
                    headerBodyClassName="label_filter--heading"
                    labelHeader="product_list_title"
                    location={location} limit={limit}
                    detail
                />
            </div>
        </div>
    )
}
export default HotProductPage;
