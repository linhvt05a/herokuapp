import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import HeadingFilter from '../../components/common/HeadingFilter';
import { ItemProject } from './Item/index';
import Pagination from '../../components/common/Pagination';
import FilterProject from '../../components/common/FilterProject';
import { projectAction } from "../../store/action/index";
import CardNoData from '../../components/common/CardNoData';
import { LoadDataPaging } from '../../utils/Utils';


const Project = (props) => {

    const project = useSelector(state => state.projectReducer);
    const isGetProjectListSuccess = project.projectList.success;
    const projectList = isGetProjectListSuccess ? project.projectList.detail : null;
    const dispatch = useDispatch();
    const [state, setState] = useState({
        projectStatus: 0
    });
    
    useEffect(() => {
        if (window.location.pathname === "/project/selling") {
            dispatch(projectAction.loadProjectList({project_sale_status: 3}))
            setState({
                projectStatus: 3
            })
        } else {
            dispatch(projectAction.loadProjectList({project_sale_status: 2}))
            setState({
                projectStatus: 2
            })
        }
    }, []);

    const onStatusClick = (e) => {
        dispatch(projectAction.loadProjectList({project_sale_status: parseInt(e.target.name)}))
        setState({
            projectStatus: parseInt(e.target.name)
        });
    }

    return (
        <div className="projectPage">
            <div className="project_page bg_grey">
                <FilterProject />
                <div className="project_page--list project_tab">
                    <div className="container container-sm container-md">
                        <HeadingFilter headerBodyClassName="project_list--heading" labelHeader="project_list" status onStatusClick={onStatusClick} projectStatus={state.projectStatus} />
                        <div className="row project_list--content project_tab--content">
                            {
                                (projectList && projectList.length > 0) ? projectList.map((item, index) => (
                                    <ItemProject 
                                    key={index}
                                    data={item} />
                                )) : <CardNoData />
                            }
                        </div>
                        <Pagination data={LoadDataPaging(18, 2, 5, 6)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;
