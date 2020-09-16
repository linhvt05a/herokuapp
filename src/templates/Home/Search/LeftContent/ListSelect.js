import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SelectCustom } from '../../../../components/base';
import { commonAction } from "../../../../store/action";
import { translate } from '../../../../functions/Utils';

const ListSelect = (props) => {
    let { t } = useTranslation()
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
            for (let i = 0;i < data.length;i++) {
                if (i == 0) {
                    newData.push(createData(0, translate("project_all", t)))
                }
                newData.push(createData(data[i].province_id, data[i].name))
            }
            // data.map((item) => {
            //     newData.push(createData(item.province_id, item.name))
            // })
            setState({ ...state, dataCity: newData })
        }
    }, [data]);

    useEffect(() => {
        let data = locationStore.districtList;
        if (data.detail && data.detail.length > 0) {
            let newData = [];
            for (let i = 0;i < data.detail.length;i++) {
                let item = data.detail[i]
                if (i == 0) {
                    newData.push(createData(0, translate("project_all", t)))
                }
                newData.push(createData(item.district_id, item.name))
            }
            // data.detail.map((item) => {

            // })
            setState({ ...state, dataDistrict: newData })
        }
    }, [locationStore.districtList]);

    useEffect(() => {
        let data = locationStore.statusList;
        if (data.detail && data.detail.length > 0) {
            let newData = [];
            for (let i = 0;i < data.detail.length;i++) {
                let item = data.detail[i];
                if (i == 0) {
                    newData.push(createData(0, translate("project_all", t)))
                }
                newData.push(createData(item.id, item.name))
            }
            // data.detail.map((item) => {
            //     newData.push(createData(item.id, item.name))
            // })
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
                    <SelectCustom placeholder={<Trans>province</Trans>} datas={state.dataCity} onChange={onChangeCity} />
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <SelectCustom placeholder={<Trans>district</Trans>} datas={state.dataDistrict} onChange={onChangeDistrict} />
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <SelectCustom placeholder={<Trans>select_progress</Trans>} datas={state.dataStatus} onChange={onChangeStatus} />
                </div>
            </div>
        </div>
    )
}
export default ListSelect;