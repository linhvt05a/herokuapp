import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { InputSelect } from '../../../../components/base/Select/index';
import { commonAction } from "../../../../store/action";

const ListSelect = (props) => {
    let { data, active } = props;
    const dispatch = useDispatch();
    const locationStore = useSelector(state => state.commonReducer);
    const createData = (value, label) => {
        return { value, label }
    }
    const [state, setState] = useState({
        dataCustomerName: [],
        valueSeach: "",
        dataCustomer: {},
        address: { _city: 0, _district: "", _status: "", _address: "" },
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
        dispatch(commonAction.loadDistrictList({ province_id: 69 }))
    }, []);

    // useEffect(() => {
    //     let data = locationStore.districtList;
    //     console.log(data);
    //     if (data.detail && data.detail.length > 0) {
    //         let newData = [];
    //         data.detail.map((item) => {
    //             newData.push(createData(item.province_id, item.name))
    //         })
    //         setState({ ...state, dataDistrict: newData })
    //     }
    // }, [locationStore.districtList]);

    const onChangeCity = (value) => {
        setState({ ...state, address: { _city: value, _ward: "", _district: "", _address: state.address._address } })
        dispatch(commonAction.loadDistrictList({ province_id: value }))
    }

    // console.log(state);

    // const onChangeDistrict = (value) => {
    //     setState({ ...state, address: { _city: state.address._city, _ward: "", _district: value, _address: state.address._address } })
    //     dispatch(commonAction.requestWardList({ token: token, district_id: value }))
    // }

    console.log(state.dataCity);
    const district = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
    const status = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <InputSelect placeholder="Tỉnh/Thành Phố" datas={state.dataCity} onChange={onChangeCity} />
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <InputSelect placeholder="Quận/Huyện" datas={district}/>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <InputSelect placeholder="Chọn tiến độ" datas={status}/>
                </div>
            </div>
        </div>
    )
}
export default ListSelect;