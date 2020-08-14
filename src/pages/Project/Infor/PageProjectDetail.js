import React, { useEffect, useState } from "react";
import ProjectInfo from './Layout/ProjectInfo';
import ProjectTab from './Layout/ProjectTab';
import CardHeader from '../../../components/Card/CardHeader';
import { projectDetailRequest } from '../../../store/action/project';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const PageProjectDetail = (props) => {
    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';

    let { id } = useParams();
    const tab_include = "['statistical','investor','metadata']";
    const dispatch = useDispatch();
    const projectStore = useSelector(state => state.project);
    useEffect(() => {
        dispatch(projectDetailRequest({ token: token, project_id: id, tab_include: tab_include }));
    }, []);

    const isProjectDetailSuccess = projectStore.projectDetail.success;
    const projectDetailRes = isProjectDetailSuccess ? projectStore.projectDetail.detail : null;

    return (
        projectDetailRes != null ?
            <div class="container-fluid">
                <ProjectInfo detail={projectDetailRes} />           
                <ProjectTab tabdata={projectDetailRes.investor} detail={projectDetailRes} project_id={id} token={token} />
                <div class="sales_list_button text-right">
                    <a href={`/info/project/`}><button type="button" id="btn-back" class="min-width-button min-height-40 btn-uni-exit">Quay lại</button></a>
                </div>
            </div>
        : ""
    )
}

export default PageProjectDetail;