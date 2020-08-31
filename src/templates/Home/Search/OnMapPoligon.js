import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { commonAction, projectAction } from "../../../store/action";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { ListSelect, InputRange, ListCheckbox } from "./index";
import { MapPoligon } from "../../../components/common/Map/index";

const OnMapPoligon = props => {
    let { active, onHideSearch } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(commonAction.loadProvinceList({ lang: "vi" }))
    }, [])
    const province = useSelector(state => state.commonReducer);
    const isGetprovinceListSuccess = province.provinceList.success;
    const provinceList = isGetprovinceListSuccess ? province.provinceList.detail : null;

    const [statesubmit, setStateSubmit] = useState({
        dataSubmit: { _city: null, _district: null, _status: null, 
            range_area: { min: null, max: null }, 
            range_price: { min: null, max: null }, 
            project_sale_group_type: null },
    })

    const HandleCity = (value) => {
        setStateSubmit({ ...statesubmit, 
            dataSubmit: { 
                _city: value, 
                _district: null, 
                _status: null, 
                range_area: { min: null, max: null }, 
                range_price: { min: null, max: null }, 
                project_sale_group_type: null 
            }
        })
    }
    const HandleDistrict = (value) => {
        setStateSubmit({ ...statesubmit,
            dataSubmit: { 
                _city: statesubmit.dataSubmit._city, 
                _district: value, 
                _status: null, 
                range_area: { min: null, max: null }, 
                range_price: { min: null, max: null }, 
                project_sale_group_type: null 
            }
        })
    }
    const HandleDStatus = (value) => {
        setStateSubmit({ ...statesubmit,
            dataSubmit: { 
                _city: statesubmit.dataSubmit._city, 
                _district: statesubmit.dataSubmit._district, 
                _status: value, 
                range_area: { min: null, max: null }, 
                range_price: { min: null, max: null }, 
                project_sale_group_type: null 
            }
        })
    }
    const changeAcreage =(e)=>{
        setStateSubmit({ ...statesubmit,
            dataSubmit: { 
                _city: statesubmit.dataSubmit._city, 
                _district: statesubmit.dataSubmit._district, 
                _status: statesubmit.dataSubmit._status, 
                range_area: { min: e[0], max: e[1] }, 
                range_price: { min: null, max: null }, 
                project_sale_group_type: null 
            }
        })
    }
    const changePrice = (e) =>{
        setStateSubmit({ ...statesubmit,
            dataSubmit: { 
                _city: statesubmit.dataSubmit._city, 
                _district: statesubmit.dataSubmit._district, 
                _status: statesubmit.dataSubmit._status, 
                range_area: statesubmit.dataSubmit.range_area, 
                range_price: { min: e[0], max: e[1] }, 
                project_sale_group_type: null 
            }
        })
    }
    const listCheckbox = (data, checked) => {
        let newList = [];
        if(data === parseInt(data))
        {
            var i;
            for(i = 0; i < data; i++) {
                if(checked === true){
                    newList.push(i + 1)
                }
            }
        } else {
            data && data.map((item, index) => {
                if(item.status === "active"){
                    newList.push(index)
                }
            })
        }
        setStateSubmit({ ...statesubmit,
            dataSubmit: { 
                _city: statesubmit.dataSubmit._city, 
                _district: statesubmit.dataSubmit._district, 
                _status: statesubmit.dataSubmit._status, 
                range_area: statesubmit.dataSubmit.range_area, 
                range_price: statesubmit.dataSubmit.range_price, 
                project_sale_group_type: newList 
            }
        })
    }
    const search = useSelector(state => state.projectReducer);
    const isGetsearchListSuccess = search.projectList.success;
    const searchList = isGetsearchListSuccess ? search.projectList.detail : null;
    
    const OnSearchProject = (e)=> {
        dispatch(projectAction.loadProjectList({ 
            province_id: statesubmit.dataSubmit._city, 
            region_id: statesubmit.dataSubmit._district,
            status_id: statesubmit.dataSubmit._status,
            area_min: statesubmit.dataSubmit.range_area.min,
            area_max: statesubmit.dataSubmit.range_area.max,
            money_min: statesubmit.dataSubmit.range_price.min,
            money_max: statesubmit.dataSubmit.range_price.max,
            project_sale_group_type: statesubmit.dataSubmit.project_sale_group_type
        }));
    }
    
    return (
        <div className={`map_search map_tab ${active.search || active.position || active.showhide ? "active" : "" }`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-6 p-0 bg_image justify-content-center flex-column" 
                        style={{display: active.search ? "block" : "none" }}>
                        <div className="map_search--content_home">
                            <h2 className="heading"><Trans>search_project_by</Trans></h2>
                            <ListSelect data={provinceList} HandleCity={HandleCity} HandleDistrict={HandleDistrict} HandleDStatus={HandleDStatus}/>
                            <InputRange changePrice={changePrice} changeAcreage={changeAcreage}/>
                            <ListCheckbox OnSearchProject={OnSearchProject} OnCheckbox={listCheckbox}/>
                        </div>
                    </div>
                    <div className={`map_custom_show_hide col-12 col-sm-12 col-md-12 col-xl-6 p-0 ${active.search ? "active" : "" }`}>
                        {active.showhide ? <MapPoligon data={searchList}/> : ''}
                        {active.search || active.position ? <MapPoligon data={searchList} /> : ''}
                        <span>
                            <i class={`fas map_search--btn_exit ${active.search ? "fa-times" : "fa-search" }`} onClick={e => onHideSearch(e.target)} style={{right: "auto", padding: "15px 20px", cursor: "pointer" }}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OnMapPoligon;