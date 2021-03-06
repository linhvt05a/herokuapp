import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardFilterList from '../../components/common/CardFilterList';
import { productAction } from '../../store/action';
import ProductList from "./ProductList";
import {PRODUCT_LIST_TYPE_VALUE} from "../../functions/Helper";

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
        <div className="projectPage ">
            <div className="project_page bg_grey">
                <CardFilterList title={"search_product_by"} onFilterSubmit={onFilterSubmit} />
                <ProductList  labelHeader="hot_product" numberItem={limit}
                              productListType={PRODUCT_LIST_TYPE_VALUE('hot-product').id} classMb0="mb-0"/>

            </div>
        </div>
    )
}
export default HotProductPage;
