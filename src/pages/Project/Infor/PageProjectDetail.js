import React, { useEffect, useState } from "react";
import ProjectInfo from './Layout/ProjectInfo';
import ProjectTab from './Layout/ProjectTab';
import CardHeader from '../../../components/common/CardHeader';
import { projectDetailRequest } from '../../../store/action/project';
import { useDispatch, useSelector } from "react-redux";

const PageProjectDetail = (props) => {
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx';
    const dispatch = useDispatch();
    const projectStore = useSelector(state => state.project);
    useEffect(() => {
        dispatch(projectDetailRequest({ token: token, project_id: 13 }));
    }, []);

    const isProjectDetailSuccess = projectStore.projectDetail.success;
    const projectDetailRes = isProjectDetailSuccess ? projectStore.projectDetail.detail : null;

    return (
        <div class="container-fluid">
            <ProjectInfo detail={projectDetailRes} />
            <ProjectTab />
        </div>
    )
}

export default PageProjectDetail;