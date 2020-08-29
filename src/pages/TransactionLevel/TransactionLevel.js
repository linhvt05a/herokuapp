import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TopBannerDetailTrans } from "../TransactionLevel/TopBannerDetailTrans";
import CardTransactionList from './Container/CardTransactionList';
import { transactionAction } from '../../store/action';
import { translate } from '../../utils/Utils';
import { DIRECTION_TYPE } from "./../../contant";


const TransactionLevel = (props) => {

    const transtion = useSelector(state => state.transactionReducer);
    // const isGetSellingProductListSuccess = product.sellingProductList.success;
    // const sellingProductList = isGetSellingProductListSuccess ? product.sellingProductList : null;
    // const isGetComingSoonProductListSuccess = product.comingSoonProductList.success;
    // const comingSoonProductList = isGetComingSoonProductListSuccess ? product.comingSoonProductList : null;
    const isGetTransProductTypeListSuccess = transtion.transacProductTypeList.success;
    const transacProductTypeList = isGetTransProductTypeListSuccess ? transtion.transacProductTypeList.detail : null;
    
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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(transactionAction.loadTransProductTypeList({}));
    }, []);

    useEffect(() => {
        var transProjectTypeDatas =[{value: null, label: translate("project_all")}] 
        if (transacProductTypeList && transacProductTypeList != null && transacProductTypeList.length > 0) {
            for (var i = 0; i < transacProductTypeList.length; i++) {
                transProjectTypeDatas.push({value: transacProductTypeList[i].architecture_id, label: transacProductTypeList[i].architecture_name})
            }
        }
        setFilterDataState({
            inputSelectDatas: [
                {placeholder: "product_type", datas: transProjectTypeDatas, onChange: onProductTypeChange},
                {placeholder: "house_direction", datas: DIRECTION_TYPE, onChange: onHouseDirectionChange, trans: "trans"}
            ],
            sliderDatas: [
                {label: "price_range", unit: "project_billions_dong", onChange: onPriceRangeChange, min: 0, max: 100},
                {label: "area", unit: "project_area_unit", onChange: onAreaChange, min: 0, max: 1000}
            ]
        })
    }, [transacProductTypeList]);

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
        dispatch(transactionAction.loadTransactionFilterList({page: 1, limit: 6, project_id: location.state.projectId,
            architecture_type_id: productType, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
    }

    const onPageChange = (value) => {
        dispatch(transactionAction.loadTransactionFilterList({page: value, limit: 6, project_id: location.state.projectId,
            architecture_type_id: productType, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
    }

    const data = useSelector(state => state.transactionReducer.transactionList.detail)
    return (
        <div className="projectDetailPage">
            <TopBannerDetailTrans data={data} />
            <CardTransactionList
                data={data}
                limit={6}
                data={data}
                inputSelectDatas={filterDataState.inputSelectDatas}
                sliderDatas={filterDataState.sliderDatas}
                onFilterClick={onFilterClick}
                onPageChange={onPageChange}
            />
        </div>
    )
}
export default TransactionLevel;
