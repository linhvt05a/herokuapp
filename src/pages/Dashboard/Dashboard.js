import React, { useEffect, useState } from 'react';

import { CardHeader } from '../../components/common';
import { CardFilter, CardProjectList, ChartSell, ChartRevenua } from './Card/index';
import SalesSummary from './Card/SalesSummary';
import MapArea from '../../components/common/MapArea'
import { projectListRequest } from '../../store/action/dashboard';
import { useDispatch, useSelector } from "react-redux";

const Dashboard = (props) => {
    const dispatch = useDispatch();
    const token = "MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx"
    const [locationData, setLocationData] = useState(0);

    const res = useSelector(state => state.dashboard);
    const projectListSuccess = res.projectList.success;
    const projectListRes = projectListSuccess ? res.projectList.detail : null;
    const page = projectListSuccess ? res.projectList.page : null;
    const totalPage = projectListSuccess ? res.projectList.total_page : null;
    const totalRecord = projectListSuccess ? res.projectList.total_record : null;

    useEffect(() => {
        dispatch(projectListRequest({ token }));
    }, []);

    const onSearch = (region, province, type, status) => {
        dispatch(projectListRequest({
            token: token,
            region_id: (region && region != 0) ? region : null,
            province_id: (province && province != 0) ? province : null,
            setting_type: (type && type != 0) ? type : null,
            status_id: (status && status != 0) ? status : null}));
    }

    const onItemClick = (index) => {
        setLocationData(index);
    }

    return (
        <div>
            <SalesSummary />
            <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                    <CardHeader label="ProjectFilterTitle" />
                    <CardFilter token={token} onSearch={onSearch} />
                    <CardHeader label="ProjectListTitle" />
                    <CardProjectList updateLocation={props.updateLocation} projectListSuccess={projectListSuccess} projectListRes={projectListRes} page={page} totalPage={totalPage} totalRecord={totalRecord} onItemClick={onItemClick} />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12  mt-lg-0 mt-5  d-flex flex-column">
                    <CardHeader label="Map" />
                    <MapArea projectListSuccess={projectListSuccess} projectListRes={projectListRes} locationData={locationData} />
                </div>
            </div>
            <div className="row mt-2">
                <ChartSell />
                <ChartRevenua />
            </div>
        </div>
    )
}

export default Dashboard;
