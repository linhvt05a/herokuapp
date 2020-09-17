import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { productAction } from "../../store/action/index";
import TopBannerProjectDetail from './TopBannerProjectDetail';
import DataProjectList from './DataProjectList';


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
    const [price, setPriceState] = useState([])
    const [acreage, setAcreageState] = useState([])

    useEffect(() => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId}));
        }
    }, []);

    const onFilterChange = (productTypeData, directionData, priceData, acreageData) => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productTypeData, direction_id: directionData, price_from: priceData[0], price_to: priceData[1], acreage_from: acreageData[0], acreage_to: acreageData[1]}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productTypeData, direction_id: directionData, price_from: priceData[0], price_to: priceData[1], acreage_from: acreageData[0], acreage_to: acreageData[1]}));
        }
        setProductTypeState(productTypeData);
        setDirectionState(directionData);
        setPriceState(priceData);
        setAcreageState(acreageData);
    }

    const onPageChange = (value) => {
        if (location.state.projectStatus === 3) {
            dispatch(productAction.loadSellingProductList({page: value, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: price[0], price_to: price[1], acreage_from: acreage[0], acreage_to: acreage[1]}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: value, limit: 6, project_id: location.state.projectId,
                architecture_type_id: productType, direction_id: direction, price_from: price[0], price_to: price[1], acreage_from: acreage[0], acreage_to: acreage[1]}));
        }
    }

    return (
        <div className="projectDetailPage">
            <TopBannerProjectDetail />
            <DataProjectList 
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
