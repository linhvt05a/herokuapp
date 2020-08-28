import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TopBannerDetail from "./Item/TopBannerDetail";
import { CardProjectList } from './Layout/index';
import { productAction } from "../../store/action/index";
import { DIRECTION_TYPE } from "../../contant";
import { translate } from "../../utils/Utils"

const ProjectDetail = (props) => {

    const location = useLocation();
    const product = useSelector(state => state.productReducer);
    const isGetSellingProductListSuccess = product.sellingProductList.success;
    const sellingProductList = isGetSellingProductListSuccess ? product.sellingProductList : null;
    const isGetComingSoonProductListSuccess = product.comingSoonProductList.success;
    const comingSoonProductList = isGetComingSoonProductListSuccess ? product.comingSoonProductList : null;
    const isGetProductTypeListSuccess = product.productTypeList.success;
    const productTypeList = isGetProductTypeListSuccess ? product.productTypeList.detail : null;
    const dispatch = useDispatch();
    const [filterDataState, setFilterDataState] = useState({
        inputSelectDatas: [],
        sliderDatas: []
    })
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
        dispatch(productAction.loadProductTypeList({}));
    }, []);

    useEffect(() => {
        var projectTypeDatas =[{value: null, label: translate("project_all")}] 
        if (productTypeList && productTypeList != null && productTypeList.length > 0) {
            for (var i = 0; i < productTypeList.length; i++) {
                projectTypeDatas.push({value: productTypeList[i].architecture_id, label: productTypeList[i].architecture_name})
            }
        }
        setFilterDataState({
            inputSelectDatas: [
                {placeholder: "product_type", datas: projectTypeDatas, onChange: onProductTypeChange},
                {placeholder: "house_direction", datas: DIRECTION_TYPE, onChange: onHouseDirectionChange, trans: "trans"}
            ],
            sliderDatas: [
                {label: "price_range", unit: "project_billions_dong", onChange: onPriceRangeChange, min: 0, max: 100},
                {label: "area", unit: "project_area_unit", onChange: onAreaChange, min: 0, max: 1000}
            ]
        })
    }, [productTypeList]);

    const onProductTypeChange = (value) => {
        setProductTypeState(value)
    }

    const onHouseDirectionChange = (value) => {
        setDirectionState(value)
    }

    const onPriceRangeChange = (value) => {
        setPriceFromState(value[0])
        setPriceToState(value[1])
    }

    const onAreaChange = (value) => {
        setAcreageFromState(value[0])
        setAcreageToState(value[1])
    }

    const onFilterClick = () => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
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
                datas={
                    location.state.projectStatus === 3 ? sellingProductList : comingSoonProductList
                }
                limit={6}
                onPageChange={onPageChange}
                inputSelectDatas={filterDataState.inputSelectDatas}
                sliderDatas={filterDataState.sliderDatas}
                onFilterClick={onFilterClick} />
        </div>
    )
}
export default ProjectDetail;
