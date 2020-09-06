import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CardHotProduct } from '../Home/Layout/index';
import FilterProject from '../Project/FilterProject';
import { productAction } from "../../store/action/index";

const HotProduct = (props) => {

    const location = useLocation();
    const product = useSelector(state => state.productReducer);
    const isGetHotProductListSuccess = product.hotProductList.success;
    const hotProductList = isGetHotProductListSuccess ? product.hotProductList : null;
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.state && location.state.projectGroupId && location.state.projectGroupId != null) {
            dispatch(productAction.loadHotProductList({page: 1, limit: 6, list_product_type_id: `[${location.state.projectGroupId}]`}));
        } else {
            dispatch(productAction.loadHotProductList({page: 1, limit: 6}));
        }
    }, []);

    const onPageChange = (value) => {
        dispatch(productAction.loadHotProductList({page: value, limit: 6}));
    }

    return (
        <div className="projectPage">
            <div className="project_page hot_product bg_grey">
                <FilterProject />
                <CardHotProduct headerBodyClassName="label_filter--heading" labelHeader="product_list_title" datas={hotProductList} limit={6} detail onPageChange={onPageChange} />
            </div>
        </div>
    )
}
export default HotProduct;
