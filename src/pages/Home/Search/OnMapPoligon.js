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

    const [state, setState] = useState({
        dataSubmit: { _city: null, _district: null, _status: null, range_area: null, range_price: null, project_sale_status: null },
    })
    const province = useSelector(state => state.commonReducer);
    const isGetprovinceListSuccess = province.provinceList.success;
    const provinceList = isGetprovinceListSuccess ? province.provinceList.detail : null;

    const HandleCity = (value) => {
        console.log(value);
        setState({ ...state, dataSubmit: { _city: value } })
    }
    const HandleDistrict = (value) => {
        setState({ ...state, dataSubmit: { _city: state.dataSubmit._city, _district: value  } })
    }
    const HandleDStatus = (value) => {
        setState({ ...state, dataSubmit: { _city: state.dataSubmit._city, _district: state.dataSubmit._district, _status: value  } })
    }
    
    const changeAcreage =(e)=>{
        setState({ ...state, dataSubmit: { _city: state.dataSubmit._city, _district: state.dataSubmit._district, _status: state.dataSubmit._status, 
            range_area: { min: e[0], max: e[1] }  } })
    }
    const changePrice = (e) =>{
        setState({ ...state, dataSubmit: { _city: state.dataSubmit._city, _district: state.dataSubmit._district, _status: state.dataSubmit._status, 
            range_area: state.dataSubmit.range_area, range_price: { min: e[0], max: e[1] }  } })
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
        setState({ ...state, dataSubmit: { project_sale_status: newList } })
    }

    const OnSearchProject =(e)=> {
        useEffect(() => {
            dispatch(projectAction.loadProjectList({ 
                province_id: state.dataSubmit._city, 
                region_id: state.dataSubmit._district,
                status_id: state.dataSubmit._status,
                area_min: state.dataSubmit.range_area.min,
                area_max: state.dataSubmit.range_area.max,
                money_min: state.dataSubmit.range_price.min,
                money_max: state.dataSubmit.range_price.max,
            }))
        }, [])
        const minmax = useSelector(state => state.commonReducer);
        const isGetminmaxListSuccess = minmax.minmaxList.success;
        const minmaxList = isGetminmaxListSuccess ? minmax.minmaxList.detail : null;
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