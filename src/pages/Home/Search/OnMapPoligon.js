import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { commonAction } from "../../../store/action";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { ListSelect, InputRange, ListCheckbox } from "./index";
import { MapPoligon } from "../../../components/common/Map/index";

const OnMapPoligon = props => {
    let { active } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(commonAction.loadProvinceList({ lang: "vi" }))
    }, [])
    const province = useSelector(state => state.commonReducer);
    const isGetprovinceListSuccess = province.provinceList.success;
    const provinceList = isGetprovinceListSuccess ? province.provinceList.detail : null;

    return (
        <div className={`map_search map_tab ${active.search || active.position ? "active" : "" }`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-6 p-0 bg_image justify-content-center flex-column" 
                        style={{display: active.search ? "block" : "none" }}>
                        <div className="map_search--content_home">
                            <h2 className="heading">Tìm kiếm dự án theo</h2>
                            <ListSelect data={provinceList}/>
                            <InputRange />
                            <ListCheckbox />
                        </div>
                    </div>
                    <div className={`map_custom_show_hide col-12 col-sm-12 col-md-12 col-xl-6 p-0 ${active.search ? "active" : "" }`}>
                        {active.search || active.position ? <MapPoligon /> : ''} 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OnMapPoligon;