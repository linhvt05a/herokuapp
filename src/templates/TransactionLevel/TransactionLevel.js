import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { transactionAction } from '../../store/action';
import TopBannerFilter from "../../components/common/TopBanner/TopBannerFilter";
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
    //call api lan 1
    useEffect(() => {
        dispatch(transactionAction.loadTransProductTypeList({}));
    }, []);

    //store
    const projectNameList = useSelector(state => state.transactionReducer);
    let { transacProjectNameList, transacAreaNameList, transacBlockNameList, error } = projectNameList;
    transacProjectNameList = transacProjectNameList.detail ? transacProjectNameList.detail : null;
    transacAreaNameList = transacAreaNameList.detail ? transacAreaNameList.detail : null;
    transacBlockNameList = transacBlockNameList.detail ? transacBlockNameList.detail : null;
    // --- ITEM DETAIL API----
    const transtion = useSelector(state => state.transactionReducer);
    const isGetTransProductTypeListSuccess = transtion.transacProductTypeList.success;
    const transacProductTypeList = isGetTransProductTypeListSuccess ? transtion.transacProductTypeList.detail : null;
    const { isLoadingList } = transtion
    // console.log('projectNameList:', projectNameList);
    //get project name
    const project = useSelector(state => state.transactionReducer)
    const { projectList } = project;


    //call api filter
    const callApiProduct = ({ project_id, area_id, block_id, architecture_type_id, direction_id, price_from, price_to, acreage_from, acreage_to, project_status_id }) => {
        dispatch(transactionAction.TransactionLoadList({
            project_id,
            area_id,
            block_id,
            architecture_type_id,
            direction_id,
            price_from,
            price_to,
            acreage_from,
            acreage_to,
            project_status_id
        }));
    }

    useEffect(() => {
        if (projectList.length > 0) {
            for (let i = 0;i < projectList.length;i++) {
                let newProjectName = projectList[i]
                if (newProjectName.project_id == projectInfoInit.projectId) {
                    setProjectInfoInit({ ...projectInfoInit, projectId: newProjectName.project_id, projectName: newProjectName.project_name })
                }
            }
        }
    }, [projectList, projectInfoInit.projectId])


    const onFilterChange = (productType, direction, price, acreage) => {
        callApiProduct({
            project_id: projectInfoInit.projectId,
            area_id: projectInfoInit.areaId,
            block_id: projectInfoInit.blockId,
            architecture_type_id: productType,
            direction_id: direction,
            price_from: price[0],
            price_to: price[1],
            acreage_from: acreage[0],
            acreage_to: acreage[1]
        })
    }

    const onDeleteFilterClick = () => {
        callApiProduct({
            project_id: projectInfoInit.projectId,
            area_id: projectInfoInit.areaId,
            block_id: projectInfoInit.blockId
        })

    }
    const onChangeFilter = ({ project_id, area_id, block_id, project_status_id }) => {
        callApiProduct({
            project_id,
            area_id,
            block_id,
            project_status_id
        })
    }

    const dataFilter = useSelector(state => state.transactionReducer.transactionList.detail)
    return (
        <div className="transaction-page">
            {
                <TopBannerFilter
                    project_id={projectInfoInit.projectId}
                    onChangeFilter={onChangeFilter}
                    dataDefault={true}
                    noStatus={true}
                    setProjectId={value => setProjectInfoInit({ ...projectInfoInit, projectId: value })}
                    setAreaName={(value) => setProjectInfoInit({ ...projectInfoInit, areaName: value })}
                    setBlockName={(value) => setProjectInfoInit({ ...projectInfoInit, blockName: value })}
                />}
            <TransactionContent
                projectInfoInit={projectInfoInit}
                dataFilter={dataFilter}
                error={error}
                isLoading={isLoadingList}
                onFilterChange={onFilterChange}
                onDeleteFilterClick={onDeleteFilterClick}
            />
        </div>
    )
}
export default TransactionLevel;
