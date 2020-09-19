import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

import CardNews from '../../components/common/CardNews'
import CardOverView from '../../components/common/Overview'
import HeadingLine from '../../components/common/HeadingLine'
import CardNoData from '../../components/common/CardNoData';

import { CardSaleFlash, CardHotProduct } from "./Layout/index";
import { MapPoligon } from "../../components/common/Map/index";
import { projectAction, newsAction } from "../../store/action/index";


import { LocationView } from "./Location/index";
import { OnMapPoligon } from "./Search/index";

import Advisory from "./Contact/Advisory";
import AppManagerment from './AppManagerment/AppManagerment';
import ItemProject_01 from '../../components/common/Project/ItemProject_01';
import { PROJECT_SALE_GROUP } from "../../contant";

const Home = (props) => {

    const news = useSelector(state => state.newsReducer);
    const newsListSuccess = news.newsList.success
    const newsList = newsListSuccess ? news.newsList.detail : null;
    const project = useSelector(state => state.projectReducer);
    const isGetProjectListSuccess = project.projectList.success;
    const projectList = isGetProjectListSuccess ? project.projectList.detail : null;
    const dispatch = useDispatch();
    const [state, setState] = useState({
        projectStatus: 3,
        position: false,
        search: false,
        showhide: false,
        myLocation: null
    });

    useEffect(() => {
        dispatch(projectAction.loadProjectList({project_sale_status: `[${state.projectStatus}]`}));
        dispatch(newsAction.LoadNewsList({}))

    }, []);
    const search = useSelector(state => state.projectReducer);
    const isGetsearchListSuccess = search.projectList.success;
    const searchList = isGetsearchListSuccess ? search.projectList.detail : null;
    const onStatusClick = (e) => {
        dispatch(projectAction.loadProjectList({ project_sale_status: `[${parseInt(e.target.name)}]` }))
        setState({
            projectStatus: parseInt(e.target.name)
        });
    }

    const handlerButtonPosition = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setState({ ...state, myLocation: [position.coords.latitude + 0.001, position.coords.longitude + 0.0066] })
        })
        setState({ ...state, position: true })
    }

    const handlerButtonSearch = () => {
        setState({ ...state, search: true })
    }

    const setHideSearch = (target) => {
        if (target.className.indexOf('fa-times') > -1) {
            target.className = "fas map_search--btn_exit fa-search"
            setState({ ...state, search: false, position: false, showhide: true })
        } else {
            target.className = "fas map_search--btn_exit fa-times active"
            setState({ ...state, search: true, position: true, showhide: false })
        }
    }

    var newListProject = [];
    projectList && projectList.length > 0 && projectList.map((item, index) => {
        if (item.project_sale_status === 3) {
            newListProject.push(item);
        }
        if (item.project_sale_status === 2) {
            newListProject.push(item);
        }
    })


    return (
        <div className="homePage">
            {/* block map  */}
            <div className="map">
                <div className="map_origin" style={{ display: state.position || state.search || state.showhide ? "none" : "" }}>
                    <figure>
                        <MapPoligon data={searchList} zoom={5.5} myLocation={state.myLocation} />
                    </figure>
                    <LocationView HandlerPosition={handlerButtonPosition} HandlerSearch={handlerButtonSearch} clearLocation={() => setState({ ...state, myLocation: null })} />
                </div>
                <OnMapPoligon active={state} onHideSearch={setHideSearch} />
            </div>

            {/*end block map  */}

            <CardSaleFlash headerBodyClassName="label_filter--heading" labelHeader="flash_sale" readmore timeLine />

            {/* block over  */}
            <CardOverView />
            {/* end block over  */}

            {/* project_list  */}
            {
                isGetProjectListSuccess &&
                <div className="project_list project_tab">
                    <div className="container container-sm container-md">
                        <HeadingLine headerBodyClassName="project_list--heading" data={PROJECT_SALE_GROUP} labelHeader="project_list" status onStatusClick={onStatusClick} projectStatus={state.projectStatus} />

                        {
                            (newListProject && newListProject.length > 0) ?
                                <>
                                    <div className="row project_list--content project_tab--content">
                                        {
                                            newListProject.map((item, index) => (
                                                index < 7 &&
                                                <ItemProject_01
                                                    key={index}
                                                    data={item}
                                                    projectStatus={state.projectStatus}
                                                    bodyClassName={
                                                        index === 0 ? "col col-12 col-sm-6 col-md-7 col-xl-7" :
                                                            index === 1 ? "col col-12 col-sm-6 col-md-5 col-xl-5" :
                                                                (index === 2 || index === 3 || index === 4) ? "col col-12 col-sm-4 col-md-4 col-xl-4" :
                                                                    "col col-12 col-sm-6 col-md-6 col-xl-6"
                                                    } />
                                            ))
                                        }
                                    </div>
                                    {
                                        newListProject.length > 7 &&
                                        <div className="text-center text-uppercase mt-3">
                                            <Link to={state.projectStatus === 3 ? "/project/selling" : "/project/coming-soon"} className="btn btn_purple ml-auto mr-auto">
                                                <Trans>see_all</Trans>
                                            </Link>
                                        </div>
                                    }
                                </> : <CardNoData />
                        }

                    </div>
                </div>
            }
            {/* end project_list  */}

            {/* contact  */}
            <Advisory />
            {/* end contact  */}

            {/* striking apartment  */}
            <CardHotProduct headerBodyClassName="label_filter--heading" labelHeader="hot_product" options />
            {/* end striking apartment  */}

            {/* app_managerment  */}
            <AppManagerment />
            {/* end app_managerment  */}

            {/* Latest news  */}
            <CardNews data={newsList} />
            {/* End Latest news  */}
        </div>
    )
}

export default Home;
