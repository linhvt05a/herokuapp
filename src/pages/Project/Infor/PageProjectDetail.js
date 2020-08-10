import React, { useEffect, useState } from "react";
import ProjectInfo from './Layout/ProjectInfo';
import ProjectTab from './Layout/ProjectTab';
import CardHeader from '../../../components/common/CardHeader';
import { projectDetailRequest } from '../../../store/action/project';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const PageProjectDetail = (props) => {
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx';
    // let ProjectId = props.match.params.id;

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
                <ProjectTab tabdata={projectDetailRes.investor} detail={projectDetailRes} />
            </div>
        : ""
    )
}

export default PageProjectDetail;