import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { commonAction } from "../../store/action";
import { ListSelect, InputRange } from "../../templates/Home/Search";
import { PROJECT_SALE_GROUP } from "../../functions/Helper";
import { getLocalStore, translate } from '../../functions/Utils';

const CardFilterList = ({ title, onFilterSubmit }) => {
    const dispatch = useDispatch();

    const [statesubmit, setStateSubmit] = useState({
        _city: null, _district: null, _status: null,
        range_area: [],
        range_price: [],
        project_sale_group_type: null
    })
    const [click, setClick] = useState([]);
    const [state, setState] = useState({
        checked: false
    });

    const province = useSelector(state => state.commonReducer);
    const isGetprovinceListSuccess = province.provinceList.success;
    const provinceList = isGetprovinceListSuccess ? province.provinceList.detail : null;

    const search = useSelector(state => state.projectReducer);
    const isGetsearchListSuccess = search.projectList.success;
    const searchList = isGetsearchListSuccess ? search.projectList.detail : null;


    useEffect(() => {
        dispatch(commonAction.loadProvinceList({ lang: getLocalStore('language') }))
    }, [])

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



    const listCheckbox = (target, index) => {
        let newData = [].concat(click);
        let newList = [];
        if (target.checked) {
            newData[index] = { id: index, status: "active" }
        }
        else { newData[index] = { id: index, status: "" } }
        setClick(newData)
        newData && newData.map((item, index) => {
            if (item.status === "active") {
                newList.push(index)
            }
        })
        setStateSubmit({
            ...statesubmit,
            project_sale_group_type: `[${newList}]`
        })
    }


    const classNameRange = "col-12 col-sm-12 col-md-6";

    const OnSearchProject = (e) => {
        if (onFilterSubmit) {
            onFilterSubmit({
                province_id: statesubmit._city,
                district_id: statesubmit._district,
                status_id: statesubmit._status,
                area_min: statesubmit.range_area[0],
                area_max: statesubmit.range_area[1],
                money_min: statesubmit.range_price[0],
                money_max: statesubmit.range_price[1],
                project_sale_status: statesubmit.project_sale_group_type
            })
        }
        // dispatch(projectAction.loadProjectList({
        //     province_id: statesubmit._city,
        //     district_id: statesubmit._district,
        //     status_id: statesubmit._status,
        //     area_min: statesubmit.range_area[0],
        //     area_max: statesubmit.range_area[1],
        //     money_min: statesubmit.range_price[0],
        //     money_max: statesubmit.range_price[1],
        //     project_sale_status: statesubmit.project_sale_group_type
        // }));
    }

    // console.log(searchList);

    return (
        <div className="project_page--filter">
            <div className="container container-sm container-md">
                <div className="map_search--content" style={{ maxWidth: "100%" }}>
                    <h2 className="heading">{translate(title ? title : "search_project_by")}</h2>
                    <ListSelect data={provinceList} HandleCity={HandleCity} HandleDistrict={HandleDistrict} HandleDStatus={HandleDStatus} />
                    <InputRange
                        classRange={classNameRange}
                        changePrice={changePrice}
                        valueArea={statesubmit.range_area}
                        valuePrice={statesubmit.range_price}
                        changeAcreage={changeAcreage}
                    />
                    <div className="map_search--option">
                        <div className="search_option option_project">
                            <ul className="list-inline list-inline-sm">
                                {PROJECT_SALE_GROUP.length > 0 && PROJECT_SALE_GROUP.map((item, index) => (
                                    item.value != 0 ?
                                        <li key={index}>
                                            <label onChange={event => listCheckbox(event.target, index)}
                                                className={`checkbox-inline ${click.length > 0 ? click[index] && click[index].status : null} ${state.checked ? 'active' : ''}`}>
                                                <input name="checkbox-1" value={item.value === 0 ? "" : item.value} type="checkbox" className="checkbox-custom" />
                                                <span className="checkbox-custom-dummy" />{translate(item.label)}
                                            </label>
                                        </li> : ""
                                ))}
                            </ul>
                        </div>
                        <a className="btn btn_green" onClick={OnSearchProject}>
                            TÌM KIẾM
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFilterList;
