import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { commonAction, projectAction } from "../../../store/action";
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

    const [statesubmit, setStateSubmit] = useState({
        dataSubmit: { _city: null, _district: null, _status: null, range_area: null, range_price: null, project_sale_status: null },
    })

    const HandleCity = (value) => {
        console.log(value);
        setStateSubmit({ ...statesubmit, dataSubmit: { _city: value } })
    }
    const HandleDistrict = (value) => {
        setStateSubmit({ ...statesubmit, dataSubmit: { _district: value  } })
    }
    const HandleDStatus = (value) => {
        setStateSubmit({ ...statesubmit, dataSubmit: { _status: value  } })
    }
    
    const changeAcreage =(e)=>{
        setStateSubmit({ ...statesubmit, dataSubmit: { range_area: { min: e[0], max: e[1] } } })
    }
    const changePrice = (e) =>{
        setStateSubmit({ ...statesubmit, dataSubmit: { range_price: { min: e[0], max: e[1] }  } })
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
        setStateSubmit({ ...state, dataSubmit: { project_sale_status: newList } })
    }
    // useEffect(() => {
    //     dispatch(projectAction.loadProjectList({ 
    //         province_id: state.dataSubmit._city, 
    //         region_id: state.dataSubmit._district,
    //         status_id: state.dataSubmit._status,
    //         // area_min: state.dataSubmit.range_area.min,
    //         // area_max: state.dataSubmit.range_area.max,
    //         // money_min: state.dataSubmit.range_price.min,
    //         // money_max: state.dataSubmit.range_price.max,
    //         project_sale_status: state.project_sale_status
    //     }))
    // }, [])
    // const search = useSelector(state => state.projectReducer);
    // const isGetsearchListSuccess = search.projectList.success;
    // const searchList = isGetsearchListSuccess ? search.projectList.detail : null;

    // console.log(searchList);

    const OnSearchProject =(e)=> {
        // console.log(searchList);
        // dispatch(projectAction.loadProjectList({ 
        //     province_id: state.dataSubmit._city, 
        //     region_id: state.dataSubmit._district,
        //     status_id: state.dataSubmit._status,
        //     area_min: state.dataSubmit.range_area.min,
        //     area_max: state.dataSubmit.range_area.max,
        //     money_min: state.dataSubmit.range_price.min,
        //     money_max: state.dataSubmit.range_price.max,
        //     project_sale_status: state.project_sale_status
        // }))
        // const search = useSelector(state => state.projectReducer);
        // const isGetsearchListSuccess = search.projectList.success;
        // const searchList = isGetsearchListSuccess ? search.projectList.detail : null;
    }
    return (
        <div className={`map_search map_tab ${active.search || active.position ? "active" : "" }`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-6 p-0 bg_image justify-content-center flex-column" 
                        style={{display: active.search ? "block" : "none" }}>
                        <div className="map_search--content_home">
                            <h2 className="heading">Tìm kiếm dự án theo</h2>
                            <ListSelect data={provinceList} HandleCity={HandleCity} HandleDistrict={HandleDistrict} HandleDStatus={HandleDStatus}/>
                            <InputRange changePrice={changePrice} changeAcreage={changeAcreage}/>
                            <ListCheckbox OnSearchProject={OnSearchProject} listCheckbox={listCheckbox}/>
                        </div>
                        <span class="map_search--btn_exit">
                            <i class="fas fa-times"></i>
                        </span>
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