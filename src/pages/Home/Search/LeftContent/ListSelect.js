import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { InputSelect } from '../../../../components/base/Select/index';
import { commonAction } from "../../../../store/action";

const ListSelect = (props) => {
    let { data, active, HandleCity, HandleDistrict, HandleDStatus } = props;
    const dispatch = useDispatch();
    const locationStore = useSelector(state => state.commonReducer);
    const createData = (value, label) => {
        return { value, label }
    }
    useEffect(() => {
        dispatch(commonAction.loadStatusList({}))
    }, [])

    const [state, setState] = useState({
        address: { _city: 0, _district: "", _status: "", _address: "" },
        status: 0,
        dataCity: [],
        dataDistrict: [],
        dataStatus: []
    })
    useEffect(() => {
        if (data && data.length > 0) {
            let newData = [];
            data.map((item) => {
                newData.push(createData(item.province_id, item.name))
            })
            setState({ ...state, dataCity: newData })
        }
    }, [data]);

    useEffect(() => {
        let data = locationStore.districtList;
        if (data.detail && data.detail.length > 0) {
            let newData = [];
            data.detail.map((item) => {
                newData.push(createData(item.district_id, item.name))
            })
            setState({ ...state, dataDistrict: newData })
        }
    }, [locationStore.districtList]);

    useEffect(() => {
        let data = locationStore.statusList;
        if (data.detail && data.detail.length > 0) {
            let newData = [];
            data.detail.map((item) => {
                newData.push(createData(item.id, item.name))
            })
            setState({ ...state, dataStatus: newData })
        }
    }, [locationStore.statusList]);

    const onChangeCity = (value) => {
        dispatch(commonAction.loadDistrictList({ province_id: value }))
        HandleCity(value)
    }
    const onChangeDistrict = (value) => {
        setState({ ...state, address: { _city: state.address._city, _district: value, _address: state.address._address } })
        HandleDistrict(value)
    }
    const onChangeStatus = (value) => {
        setState({ ...state, status: value })
        HandleDStatus(value)
    }
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <InputSelect placeholder="Tỉnh/Thành Phố" datas={state.dataCity} onChange={onChangeCity} />
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <InputSelect placeholder="Quận/Huyện" datas={state.dataDistrict} onChange={onChangeDistrict}/>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <InputSelect placeholder="Chọn tiến độ" datas={state.dataStatus} onChange={onChangeStatus}/>
                </div>
            </div>
        </div>
    )
}
export default ListSelect;