import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TopBannerDetailTrans } from "../TransactionLevel/TopBannerDetailTrans";
import CardTransactionList from './Container/CardTransactionList';
import { transactionAction } from '../../store/action';
import { DIRECTION_TYPE } from "./../../contant";


const TransactionLevel = (props) => {
    const dispatch = useDispatch();

    //---TOP BANNER API ---
    const [projectId, setProjectId] = useState({ project_id: 13 });
    const [areaId, setAreaId] = useState({ area_id: 1 });
    const [blockId, setBlockId] = useState({ block_id: 2 });

    const [projectName, setProjectName] = useState("Royal Garden");
    const [areaName, setAreaName] = useState("VALLEN");
    const [blockName, setBlockName] = useState("B");
    
    useEffect(() => {
        dispatch(transactionAction.TransactionLoadList({ project_id: 13, area_id: 1, block_id: 2 }))
    }, [])

    //---TOP_BANNER SELECT LIST---
    useEffect(() => {
        dispatch(transactionAction.transLoadProjectNameList({project_id: 13}))
    }, [])

    useEffect(() => {
        dispatch(transactionAction.transLoadAreaNameList({project_id:13}))
    }, [])

    useEffect(() => {
        dispatch(transactionAction.transLoadBlockNameList({project_id:13}))
    }, [])

    const projectNameList = useSelector(state => state.transactionReducer);
    const isGetTransProjectNameListSuccess = projectNameList.transacProjectNameList.success;
    const transacProjectNameList = isGetTransProjectNameListSuccess ? projectNameList.transacProjectNameList.detail : null;
    
    const projectAreaList = useSelector(state => state.transactionReducer);
    const isGetTransProjectAreaListSuccess = projectAreaList.transacAreaNameList.success;
    const transacAreaNameList = isGetTransProjectAreaListSuccess ? projectAreaList.transacAreaNameList.detail : null;
    
    const projectBlockList = useSelector(state => state.transactionReducer);
    const isGetTransProjectBlockListSuccess = projectBlockList.transacBlockNameList.success;
    const transacBlockNameList = isGetTransProjectBlockListSuccess ? projectBlockList.transacBlockNameList.detail : null;
    
    
    const onChangeProject = (value, label) => {
        dispatch(transactionAction.TransactionLoadList({ project_id: value, area_id: areaId.area_id, block_id: blockId.block_id }))
        setProjectId({
            project_id: value
        })
        setProjectName(label.children)
    }
    const onChangeArea = (value, label) => {
        dispatch(transactionAction.TransactionLoadList({ project_id: projectId.project_id, area_id: value, block_id: blockId.block_id }))
        setAreaId({
            area_id: value
        })
        setAreaName(label.children)
    }
    const onChangeBlock = (value, label) => {
        dispatch(transactionAction.TransactionLoadList({ project_id: projectId.project_id, area_id: areaId.area_id, block_id: value }))
        setBlockId({
            block_id: value
        })
        setBlockName(label.children)
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
        var transProjectTypeDatas =[{value: null, label: "project_all"}] 
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
        dispatch(transactionAction.TransactionLoadList({
            project_id: projectId.project_id, area_id: areaId.area_id, block_id: blockId.block_id,
            architecture_type_id: productType, direction_id: direction, price_from: priceFrom, price_to: priceTo, acreage_from: acreageFrom, acreage_to: acreageTo}));
    }

    const data = useSelector(state => state.transactionReducer.transactionList.detail)
    return (
        <div className="projectDetailPage">
            <TopBannerDetailTrans
                transacProjectNameList={transacProjectNameList} 
                transacAreaNameList={transacAreaNameList}
                transacBlockNameList={transacBlockNameList}
                projectId={projectId}
                areaId={areaId}
                blockId={blockId}
                onChangeBlock={onChangeBlock}
                onChangeProject={onChangeProject}
                onChangeArea={onChangeArea}/>
            <CardTransactionList
                data={data}
                inputSelectDatas={filterDataState.inputSelectDatas}
                sliderDatas={filterDataState.sliderDatas}
                onFilterClick={onFilterClick}
                projectName={projectName}
                blockName={blockName}
                areaName={areaName}
            />
        </div>
    )
}
export default TransactionLevel;
