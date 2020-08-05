import React from 'react';

import { CardHeader } from '../../components/common';
import { CardFilter, CardProjectList, ChartSell, ChartRevenua } from './Card/index';
import SalesSummary from './Card/SalesSummary';
import MapArea from '../../components/common/MapArea'
import { projectListRequest } from '../../store/action/dashboard';
import { useDispatch } from "react-redux";

const Dashboard = (props) => {
    const dispatch = useDispatch();

    const onSearch = (region, province, type, status) => {
        dispatch(projectListRequest({
            token: "MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx",
            region_id: region ? region.value : null,
            province_id: province ? province.value : null,
            setting_type: type ? type.value : null,
            status_id: status ? status.value : null}));
    }
    
    return (
        <div>
            <SalesSummary />
            <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                    <CardHeader label="ProjectFilterTitle" />
                    <CardFilter token="MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx" onSearch={onSearch} />
                    <CardHeader label="ProjectListTitle" />
                    <CardProjectList 
                        token="MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx" 
                        updateLocation={props.updateLocation} />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12  mt-lg-0 mt-5  d-flex flex-column">
                    <CardHeader label="Map" />
                    <MapArea />
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
