import React, { useState, useEffect } from 'react'
import Incentives from '../../../components/common/Incentives'
import SortAccordion from '../SortAccordion/SortAccordion';
import SidebarSortItem from './SidebarSortItem';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { translate } from '../../../utils/Utils';
import { DIRECTION_TYPE } from "./../../../contant";

const SideBarSort = (props) => {
        const { data } = props;

        const [state, setState] = useState({
            active: false
        });

        const handleClick = () => {
            setState({
                active: !state.active
            })
        }

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
        console.log(location);
    
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
            data ?
                <div className="col-12 col-sm-12 col-lg-4">
                    <div className="exchanges_filter">
                        <div className="heading">
                            <span className="title">Sản phẩm khối B</span>
                            <span className="icon_filter fas fa-filter" onClick={handleClick} />
                        </div>
                        <SidebarSortItem isStatusActive={state.active}
                            limit={6}
                            data={data}
                            inputSelectDatas={filterDataState.inputSelectDatas}
                            sliderDatas={filterDataState.sliderDatas}
                            onFilterClick={onFilterClick}
                        />
                        <SortAccordion data={data}/>
                    </div>
                    
                    <Incentives />
                </div>
                : ""

        )
}

export default SideBarSort;