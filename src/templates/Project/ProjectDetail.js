import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { productAction } from "../../store/action/index";
import TopBannerFilter from '../../components/common/TopBanner/TopBannerFilter';
import DataProjectList from './DataProjectList';


const ProjectDetail = (props) => {



    const location = useLocation()
    const project_id = location.pathname.split("/")[2];
    const project_status = location.search.split("=")[1];

    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer);
    const isGetSellingProductListSuccess = product.sellingProductList.success;
    const sellingProductList = isGetSellingProductListSuccess ? product.sellingProductList : null;
    const isGetComingSoonProductListSuccess = product.comingSoonProductList.success;
    const comingSoonProductList = isGetComingSoonProductListSuccess ? product.comingSoonProductList : null;


    const [productType, setProductTypeState] = useState(null)
    const [direction, setDirectionState] = useState(null)
    const [price, setPriceState] = useState([])
    const [acreage, setAcreageState] = useState([])

    useEffect(() => {
        if (project_status === 3) {
            dispatch(productAction.loadSellingProductList({page: 1, limit: 6, project_id: project_id}));
        } else {
            dispatch(productAction.loadComingSoonProductList({page: 1, limit: 6, project_id: project_id}));
        }
    }, []);

    const onFilterChange = (productTypeData, directionData, priceData, acreageData) => {
        if (project_status === 3) {
            dispatch(productAction.loadSellingProductList({
                page: 1, limit: 6,
                project_id: project_id,
                architecture_type_id: productTypeData,
                direction_id: directionData,
                price_from: priceData[0],
                price_to: priceData[1],
                acreage_from: acreageData[0],
                acreage_to: acreageData[1]})
            );
        } else {
            dispatch(productAction.loadComingSoonProductList({
                page: 1, limit: 6,
                project_id: project_id,
                architecture_type_id: productTypeData,
                direction_id: directionData,
                price_from: priceData[0],
                price_to: priceData[1],
                acreage_from: acreageData[0],
                acreage_to: acreageData[1]})
            );
        }
        setProductTypeState(productTypeData);
        setDirectionState(directionData);
        setPriceState(priceData);
        setAcreageState(acreageData);
    }

    const onPageChange = (value) => {
        if (project_status === 3) {
            dispatch(productAction.loadSellingProductList({
                page: value, limit: 6, project_id: project_id,
                architecture_type_id: productType, 
                direction_id: direction, 
                price_from: price[0], 
                price_to: price[1], 
                acreage_from: acreage[0], 
                acreage_to: acreage[1]})
            );
        } else {
            dispatch(productAction.loadComingSoonProductList({
                page: value, 
                limit: 6, 
                project_id: project_id,
                architecture_type_id: productType, 
                direction_id: direction, 
                price_from: price[0], 
                price_to: price[1], 
                acreage_from: acreage[0], 
                acreage_to: acreage[1]})
            );
        }
    }

    return (
        <div className="projectDetailPage">
            <TopBannerFilter
                projectInfoInit={projectInfoInit}
                transacProjectNameList={transacProjectNameList}
                transacAreaNameList={transacAreaNameList}
                transacBlockNameList={transacBlockNameList}
                onChangeBlock={onChangeBlock}
                onChangeProject={onChangeProject}
                onChangeArea={onChangeArea} 
            />
            <DataProjectList
            headerBodyClassName="label_filter--heading"
            labelHeader={location.state?location.state.projectName: ""}
            datas={project_status === 3 ? sellingProductList : comingSoonProductList}
            limit={6}
            onFilterChange={onFilterChange}
            onPageChange={onPageChange} />
            
        </div>
    )
}
export default ProjectDetail;
