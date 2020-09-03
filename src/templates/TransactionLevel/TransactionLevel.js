import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { transactionAction } from '../../store/action';
import { DIRECTION_TYPE } from "./../../contant";
import TopBannerFilter from "./TopBannerFilter";
import TransactionContent from './Container/TransactionContent';

const TransactionLevel = (props) => {
    const dispatch = useDispatch();
    const [projectInfoInit, setProjectInfoInit] = useState({
        projectId: 13,
        projectName: "Royal Garden",
        areaId: 1,
        areaName: "VALLEN",
        blockId: 2,
        blockName: "B"
    })

    useEffect(() => {
        dispatch(transactionAction.TransactionLoadList({
            project_id: projectInfoInit.projectId,
            area_id: projectInfoInit.areaId,
            block_id: projectInfoInit.blockId
        }));
        dispatch(transactionAction.transLoadProjectNameList({ project_id: projectInfoInit.projectId }))
        dispatch(transactionAction.transLoadAreaNameList({ project_id: projectInfoInit.projectId }))
        dispatch(transactionAction.transLoadBlockNameList({ project_id: projectInfoInit.projectId }))
    }, [])

    const projectNameList = useSelector(state => state.transactionReducer);

    let { transacProjectNameList, transacAreaNameList, transacBlockNameList, error } = projectNameList;
    transacProjectNameList = transacProjectNameList.detail ? transacProjectNameList.detail : null;
    transacAreaNameList = transacAreaNameList.detail ? transacAreaNameList.detail : null;
    transacBlockNameList = transacBlockNameList.detail ? transacBlockNameList.detail : null;

    console.log('projectNameList:', projectNameList);

    const onChangeProject = (props) => {
        console.log('project_id:', props);
        dispatch(transactionAction.TransactionLoadList({
            project_id: props,
            area_id: projectInfoInit.areaId,
            block_id: projectInfoInit.blockId
        }))
        setProjectInfoInit({
            ...projectInfoInit,
            project_id: projectInfoInit.projectId,
            project_name: projectInfoInit.projectName
        })
    }
    const onChangeArea = (props) => {
        console.log('area_id:', props);
        dispatch(transactionAction.TransactionLoadList({
            project_id: projectInfoInit.projectId,
            area_id: props,
            block_id: projectInfoInit.blockId
        }))
        setProjectInfoInit({
            ...projectInfoInit,
            area_id: projectInfoInit.areaId,
            area_name: projectInfoInit.areaName
        })
    }
    const onChangeBlock = (props) => {
        console.log('block_id:', props);
        dispatch(transactionAction.TransactionLoadList({
            project_id: projectId.projectId,
            area_id: areaId.areaId,
            block_id: props
        }))
        setProjectInfoInit({
            ...projectInfoInit,
            block_id: projectInfoInit.blockId,
            block_name: projectInfoInit.blockName
        })
    }


    // --- ITEM DETAIL API----
    const transtion = useSelector(state => state.transactionReducer);
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

    useEffect(() => {
        dispatch(transactionAction.loadTransProductTypeList({}));
    }, []);

    useEffect(() => {
        var transProjectTypeDatas = [{ value: null, label: "project_all" }]
        if (transacProductTypeList && transacProductTypeList != null && transacProductTypeList.length > 0) {
            for (var i = 0; i < transacProductTypeList.length; i++) {
                transProjectTypeDatas.push(
                    {
                        value: transacProductTypeList[i].architecture_id,
                        label: transacProductTypeList[i].architecture_name
                    }
                )
            }
        }
        setFilterDataState({
            inputSelectDatas: [
                { placeholder: "product_type", datas: transProjectTypeDatas, onChange: onProductTypeChange },
                { placeholder: "house_direction", datas: DIRECTION_TYPE, onChange: onHouseDirectionChange, trans: "trans" }
            ],
            sliderDatas: [
                { label: "price_range", unit: "project_billions_dong", onChange: onPriceRangeChange, min: 0, max: 100 },
                { label: "area", unit: "project_area_unit", onChange: onAreaChange, min: 0, max: 1000 }
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
        dispatch(transactionAction.TransactionLoadList({
            project_id: projectInfoInit.projectId,
            area_id: projectInfoInit.areaId,
            block_id: projectInfoInit.blockId,
            architecture_type_id: productType,
            direction_id: direction,
            price_from: priceFrom,
            price_to: priceTo,
            acreage_from: acreageFrom,
            acreage_to: acreageTo
        }));
    }

    const dataFilter = useSelector(state => state.transactionReducer.transactionList.detail)
    return (
        <div className="projectDetailPage">
            <TopBannerFilter
                projectInfoInit={projectInfoInit}
                transacProjectNameList={transacProjectNameList}
                transacAreaNameList={transacAreaNameList}
                transacBlockNameList={transacBlockNameList}
                onChangeBlock={onChangeBlock}
                onChangeProject={onChangeProject}
                onChangeArea={onChangeArea} />
            {
                <TransactionContent
                    projectInfoInit={projectInfoInit}
                    dataFilter={dataFilter}
                    inputSelectDatas={filterDataState.inputSelectDatas}
                    sliderDatas={filterDataState.sliderDatas}
                    onFilterClick={onFilterClick}
                    error={error}
                />
            }
        </div>
    )
}
export default TransactionLevel;
