import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TopBannerDetail from "./Item/TopBannerDetail";
import { CardProjectList } from './Layout/index';
import { productAction } from "../../store/action/index";

const ProjectDetail = (props) => {

    const location = useLocation();
    const product = useSelector(state => state.productReducer);
    const isGetSellingProductListSuccess = product.sellingProductList.success;
    const sellingProductList = isGetSellingProductListSuccess ? product.sellingProductList : null;
    const isGetComingSoonProductListSuccess = product.comingSoonProductList.success;
    const comingSoonProductList = isGetComingSoonProductListSuccess ? product.comingSoonProductList : null;
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId}));
        }
    }, []);

    const onFilterChange = (productType, direction, price, acreage) => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: price[0], price_to: price[1], acreage_from: acreage[0], acreage_to: acreage[1]}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: price[0], price_to: price[1], acreage_from: acreage[0], acreage_to: acreage[1]}));
        }
    }

    const onPageChange = (value) => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: value, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: value, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
        }
    }

    return (
        <div className="projectDetailPage">
            <TopBannerDetail />
            <CardProjectList 
                headerBodyClassName="label_filter--heading"
                labelHeader={location.state.projectName}
                datas={location.state.projectStatus === 3 ? sellingProductList : comingSoonProductList}
                limit={6}
                onFilterChange={onFilterChange}
                onPageChange={onPageChange} />
        </div>
    )
}
export default ProjectDetail;
