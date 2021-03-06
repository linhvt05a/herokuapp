import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import HeadingLine from '../../components/common/HeadingLine';
import Pagination from '../../components/common/Pagination';
import { projectAction } from "../../store/action/index";
import CardNoData from '../../components/common/CardNoData';
import { LoadDataPaging } from '../../functions/Utils';
import ItemProject_02 from '../../components/common/Project/ItemProject_02';
import CardFilterList from '../../components/common/CardFilterList';


const ProjectList = (props) => {

    const project = useSelector(state => state.projectReducer);
    const isGetProjectListSuccess = project.projectList.success;
    const projectList = isGetProjectListSuccess ? project.projectList.detail : null;
    const totalPage = isGetProjectListSuccess ? project.projectList.total_page : null;
    const page = isGetProjectListSuccess ? project.projectList.page : null;
    const totalRecord = isGetProjectListSuccess ? project.projectList.total_record : null;
    const dispatch = useDispatch();
    const [state, setState] = useState({
        projectStatus: 0
    });

    useEffect(() => {
        if (window.location.pathname === "/project/selling") {
            dispatch(projectAction.loadProjectList({ page: 1, limit: 6, project_sale_status: `[3]` }))
            setState({
                projectStatus: 3
            })
        } else {
            dispatch(projectAction.loadProjectList({ page: 1, limit: 6, project_sale_status: `[2]` }))
            setState({
                projectStatus: 2
            })
        }
    }, []);

    const onStatusClick = (e) => {
        dispatch(projectAction.loadProjectList({ project_sale_status: `[${parseInt(e.target.name)}]` }))
        setState({
            projectStatus: parseInt(e.target.name)
        });
    }

    const onPageChange = (value) => {
        dispatch(projectAction.loadProjectList({ page: value, limit: 6, project_sale_status: `[${state.projectStatus}]` }));
    }
    const onFilterSubmit = ({ province_id, district_id, status_id, area_min, area_max, money_min, money_max, project_sale_status }) => {
        dispatch(projectAction.loadProjectList({
            province_id: province_id,
            district_id: district_id,
            status_id: status_id,
            area_min: area_min,
            area_max: area_max,
            money_min: money_min,
            money_max: money_max,
            project_sale_status: project_sale_status
        }));
    }
    return (
        <div className="projectPage">
            <div className="project_page bg_grey">
                {/* <FilterProjectList /> */}
                <CardFilterList title="search_project_by" onFilterSubmit={onFilterSubmit} />
                <div className="project_page--list project_tab">
                    <div className="container container-sm container-md">
                        <HeadingLine headerBodyClassName="project_list--heading" labelHeader="project_list" status onStatusClick={onStatusClick} projectStatus={state.projectStatus} />
                        <div className="row project_list--content project_tab--content">
                            {
                                (projectList && projectList.length > 0) ? projectList.map((item, index) => (
                                    <ItemProject_02
                                        key={index}
                                        data={item} />
                                )) : <CardNoData />
                            }
                        </div>
                        <Pagination data={LoadDataPaging(totalRecord, page, totalPage, 6)} onChange={onPageChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectList;
