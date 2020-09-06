import React, { useEffect, useState } from 'react';
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

    const [productType, setProductTypeState] = useState(null)
    const [direction, setDirectionState] = useState(null)
    const [priceFrom, setPriceFromState] = useState(null)
    const [priceTo, setPriceToState] = useState(null)
    const [acreageFrom, setAcreageFromState] = useState(null)
    const [acreageTo, setAcreageToState] = useState(null)

    useEffect(() => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId}));
        }
    }, []);

    const onProductTypeChange = (value) => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: value, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: value, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
        }
        setProductTypeState(value)
    }

    const onHouseDirectionChange = (value) => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: value, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: value, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
        }
        setDirectionState(value)
    }

    const onPriceRangeChange = (value) => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: value[0], price_to: value[1], acreage_from: acreageFrom, acreage_to: acreageTo}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: value[0], price_to: value[1], acreage_from: acreageFrom, acreage_to: acreageTo}));
        }
        setPriceFromState(value[0])
        setPriceToState(value[1])
    }

    const onAreaChange = (value) => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: value[0], acreage_to: value[1]}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: value[0], acreage_to: value[1]}));
        }
        setAcreageFromState(value[0])
        setAcreageToState(value[1])
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
                onPageChange={onPageChange}
                onProductTypeChange={onProductTypeChange}
                onHouseDirectionChange={onHouseDirectionChange}
                onPriceRangeChange={onPriceRangeChange}
                onAreaChange={onAreaChange} />
        </div>
    )
}
export default ProjectDetail;
