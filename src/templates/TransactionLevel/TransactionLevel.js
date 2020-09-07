import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { transactionAction } from '../../store/action';
import TopBannerFilter from "./TopBannerFilter";
import TransactionContent from './Container/Main';

const TransactionLevel = (props) => {
    const dispatch = useDispatch();
    const [projectInfoInit, setProjectInfoInit] = useState({
        projectId: 13,
        projectName: "VTP Building",
        areaId: 1,
        areaName: "VALLEN",
        blockId: 2,
        blockName: "A1(QC TEST)"
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

    // console.log('projectNameList:', projectNameList);

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

    useEffect(() => {
        dispatch(transactionAction.loadTransProductTypeList({}));
    }, []);

    const onFilterChange = (productType, direction, price, acreage) => {
        dispatch(transactionAction.TransactionLoadList({
            project_id: projectInfoInit.projectId,
            area_id: projectInfoInit.areaId,
            block_id: projectInfoInit.blockId,
            architecture_type_id: productType,
            direction_id: direction,
            price_from: price[0],
            price_to: price[1],
            acreage_from: acreage[0],
            acreage_to: acreage[1]
        }));
    }

    const onDeleteFilterClick = () => {
        dispatch(transactionAction.TransactionLoadList({
            project_id: projectInfoInit.projectId,
            area_id: projectInfoInit.areaId,
            block_id: projectInfoInit.blockId
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
                    error={error}
                    
                    onFilterChange={onFilterChange}
                    onDeleteFilterClick={onDeleteFilterClick}
                />
            }
        </div>
    )
}
export default TransactionLevel;
