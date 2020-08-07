import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';

import { mappingListToSelectList, InputSelect } from '../../../components/input';
import { regionListRequest, typeListRequest, statusListRequest, provinceListRequest } from '../../../store/action/dashboard';
import { useDispatch, useSelector } from "react-redux";

const CardFilter = (props) => {
    const [region, setRegion] = useState(null);
    const [province, setProvince] = useState(null);
    const [isClear, setClear] = useState(false);
    const [type, setType] = useState(null);
    const [status, setStatus] = useState(null);
    const { token, onSearch } = props;
    const dispatch = useDispatch();
    const res = useSelector(state => state.dashboard);

    useEffect(() => {
        dispatch(regionListRequest({ token }));
        dispatch(typeListRequest({ token }));
        dispatch(statusListRequest({ token }));
    }, []);

    const regionSuccess = res.regionList.success;
    const regionRes = regionSuccess ? res.regionList.detail : null;
    var regionData = regionRes ? mappingListToSelectList(regionRes, 'region_id', 'name') : []
    const typeSuccess = res.typeList.success;
    const typeRes = typeSuccess ? res.typeList.detail : null;
    var typeData = typeRes ? mappingListToSelectList(typeRes, 'type_id', 'type_name') : []
    const statusSuccess = res.statusList.success;
    const statusRes = statusSuccess ? res.statusList.detail : null;
    var statusData = statusRes ? mappingListToSelectList(statusRes, 'id', 'name') : []
    const provinceSuccess = res.provinceList.success;
    const provinceRes = provinceSuccess ? res.provinceList.detail : null;
    var provinceData = provinceRes ? mappingListToSelectList(provinceRes, 'province_id', 'name') : []

    const onChange = (value, option) => {
        if (option.name === 'region') {
            setRegion(value)
            if (region && (region.value != value)) {
                setProvince(null)
                setClear(true)
                setClear(false)
            }
            dispatch(provinceListRequest({ token, regionId: value }));
        } else if (option.name === 'province') {
            setProvince(value)
        }
        else if (option.name === 'type') {
            setType(value)
        }
        else if (option.name === 'status') {
            setStatus(value)
        } else {
            return
        }
    }

    const onFilterClick = () => {
        onSearch(region, province, type, status)
    }

    return (
        <div className="card square">
            <div className="card-body">
                <div className="row">
                    <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" value={region ? region : null} name="region" label="ByRegionTitle" placeholder="RegionHintText" datas={regionData} onChange={onChange} />
                    <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" value={province ? province : null} name="province" label="ByProvinceTitle" placeholder="ProvinceHintText" datas={provinceData} onChange={onChange} isClear={isClear} />
                    <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" value={type ? type : null} name="type" label="ByProjectTypeTitle" placeholder="ProjectTypeHintText" datas={typeData} onChange={onChange} />
                    <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" value={status ? status : null} name="status" label="ByProjectStatusTitle" placeholder="ProjectStatusHintText" datas={statusData} onChange={onChange} />
                </div>
                <div className="text-right mt-2">
                    <button type="submit" className="btn-uni-purple" onClick={onFilterClick} ><Trans>Search</Trans></button>
                </div>
            </div>
        </div>
    )
}

export default CardFilter;