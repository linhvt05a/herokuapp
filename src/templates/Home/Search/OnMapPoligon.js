import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { commonAction, projectAction } from "../../../store/action";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { ListSelect, InputRange, ListCheckbox } from "./index";
import { MapPoligon } from "../../../components/common/Map/index";
import { LOCALSTORAGE_GET } from "../../../contant";

const OnMapPoligon = props => {
    let { active, onHideSearch } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(commonAction.loadProvinceList({ lang: LOCALSTORAGE_GET.LANG }))
    }, [])
    const province = useSelector(state => state.commonReducer);
    const isGetprovinceListSuccess = province.provinceList.success;
    const provinceList = isGetprovinceListSuccess ? province.provinceList.detail : null;

    const [statesubmit, setStateSubmit] = useState({
        _city: null, _district: null, _status: null,
        range_area: [],
        range_price: [],
        project_sale_group_type: null
    })

    const HandleCity = (value) => {
        setStateSubmit({
            ...statesubmit,
            _city: value,
        })
    }
    const HandleDistrict = (value) => {
        setStateSubmit({
            ...statesubmit,
            _district: value,
        })
    }
    const HandleDStatus = (value) => {
        setStateSubmit({
            ...statesubmit,
            _status: value,
        })
    }
    const changeAcreage = (e) => {
        setStateSubmit({
            ...statesubmit,
            range_area: e,
        })
    }
    const changePrice = (e) => {
        setStateSubmit({
            ...statesubmit,
            range_price: e,
        })
    }
    const listCheckbox = (data, checked) => {
        let newList = [];
        if (data === parseInt(data)) {
            var i;
            for (i = 0;i < data;i++) {
                if (checked === true) {
                    newList.push(i + 1)
                }
            }
        } else {
            data && data.map((item, index) => {
                if (item.status === "active") {
                    newList.push(index)
                }
            })
        }
        setStateSubmit({
            ...statesubmit,
            project_sale_group_type: `[${newList}]`
        })
    }
    const search = useSelector(state => state.projectReducer);
    const isGetsearchListSuccess = search.projectList.success;
    const searchList = isGetsearchListSuccess ? search.projectList.detail : null;

    const OnSearchProject = (e) => {
        dispatch(projectAction.loadProjectList({
            province_id: statesubmit._city,
            region_id: statesubmit._district,
            status_id: statesubmit._status,
            area_min: statesubmit.range_area[0],
            area_max: statesubmit.range_area[1],
            money_min: statesubmit.range_price[0],
            money_max: statesubmit.range_price[1],
            project_sale_status: statesubmit.project_sale_group_type
        }));
    }

    return (
        <div className={`map_search map_tab ${active.search || active.position || active.showhide ? "active" : ""}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-6 p-0 bg_image justify-content-center flex-column"
                        style={{ display: active.search ? "block" : "none" }}>
                        <div className="map_search--content_home">
                            <h2 className="heading"><Trans>search_project_by</Trans></h2>
                            <ListSelect data={provinceList} HandleCity={HandleCity} HandleDistrict={HandleDistrict} HandleDStatus={HandleDStatus} />
                            <InputRange
                                changePrice={changePrice}
                                valueArea={statesubmit.range_area}
                                valuePrice={statesubmit.range_price}
                                changeAcreage={changeAcreage}
                            />
                            <ListCheckbox OnSearchProject={OnSearchProject} OnCheckbox={listCheckbox} />
                        </div>
                    </div>
                    <div className={`map_custom_show_hide col-12 col-sm-12 col-md-12 col-xl-6 p-0 ${active.search ? "active" : ""}`}>
                        {active.showhide ? <MapPoligon data={searchList} zoom={6} /> : ''}
                        {active.search || active.position ? <MapPoligon data={searchList} zoom={6} /> : ''}
                        <span>
                            <i className={`fas map_search--btn_exit ${active.search ? "fa-times" : "fa-search"}`} onClick={e => onHideSearch(e.target)} style={{ right: "auto", padding: "15px 20px", cursor: "pointer" }}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OnMapPoligon;