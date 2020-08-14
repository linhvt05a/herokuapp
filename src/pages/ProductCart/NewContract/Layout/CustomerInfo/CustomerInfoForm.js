import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Radio } from 'antd';
import Input from '../../../../../components/base/Input/Input';
import DatePicker from '../../../../../components/base/DatePicker/DatePicker';
import Select from '../../../../../components/base/Select/Select';
import { useDispatch, useSelector } from "react-redux";
import { actionsCustomer, actionsLocation } from '../../../../../store/action';
import { converAddress } from "../../../../../utils/Utils"

const CustomerInfoForm = (props) => {
    const { typeCustomer, changeTypeCustomer, customerList } = props;
    const dispatch = useDispatch();
    const [state, setState] = useState({
        dataCustomerName: [],
        valueSeach: "",
        dataCustomer: {},
        customer_name: "",
        customer_title: "",
        address: { _city: 0, _district: "", _ward: "", _address: "" },
        gender: null,
        dataCity: [],
        dataDistrict: [],
    })
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx=';
    const locationStore = useSelector(state => state.location);
    const createData = (value, label) => {
        return { value, label }
    }

    useEffect(() => {
        let data = locationStore.provinceList;
        if (data.detail && data.detail.length > 0) {
            let newData = [];
            data.detail.map((item) => {
                newData.push(createData(item.province_id, item.name))
            })
            setState({ ...state, dataCity: newData })
        }
    }, [locationStore.provinceList]);
    useEffect(() => {
        let data = locationStore.districtList;
        if (data.detail && data.detail.length > 0) {
            let newData = [];
            data.detail.map((item) => {
                newData.push(createData(item.district_id, item.name))
            })
            setState({ ...state, dataDistrict: newData })
        }
    }, [locationStore.districtList])


    useEffect(() => {
        if (typeCustomer == 1) {
            dispatch(actionsCustomer.requestCustomerList({ token }));
            setState({ ...state, address: { _city: "", _ward: "", _district: "", _address: "" } })
        }
        else {
            setState({
                ...state,
                dataCustomer: {},
                address: { _city: -1, _ward: "", _district: "", _address: "" },
                customer_name: "",
                customer_title: "",
                gender: null
            })
        }
    }, [typeCustomer])

    useEffect(() => {
        if (state.valueSeach !== "") {
            let dataCustomer = customerList[0]
            let _address = converAddress(dataCustomer.full_address);
            let _gender = dataCustomer.customer_active_flag === false ? 2 : 1
            setState({ ...state, dataCustomer, address: _address, gender: _gender })
        }
        else
            if (customerList.length > 0) {
                let newData = [];
                customerList.map((item, index) => {
                    newData.push(createData(item.customer_name, item.customer_find))
                })
                setState({ ...state, dataCustomerName: newData })
            }
    }, [customerList]);

    useEffect(() => {
        dispatch(actionsLocation.requestProvinceList({ token: token }))
    }, [])

    const onChangeTypeCustomer = (e) => {
        changeTypeCustomer(e.target.value);
        e.preventDefault();
    }
    const onSearchCustomer = (search) => {
        setState({ ...state, valueSeach: search })
        dispatch(actionsCustomer.requestCustomerList({ token: token, name: search }))
    }
    const onChangeCity = (value) => {
        setState({ ...state, address: { _city: value, _ward: "", _district: "", _address: "" } })
        dispatch(actionsLocation.requestDistrictList({ token: token, province_id: value }))
    }
    const onChangeDistrict = (value) => {
        setState({ ...state, })
    }

    const onDisable = (id) => {
        return id == 1 ? true : false
    }
    console.log(state.dataDistrict);
    return (
        <div>
            <div className="create-contract__wrap">
                <div className="create-contract__item collapse show">
                    <div className="d-flex align-items-center flex-wrap mb-2 mt-4">
                        <div className="text-uppercase uni_text_6d30ab fw-medium fs-18 mr-5">
                            Thông tin khách hàng
                        </div>
                        <div className="d-flex flex-wrap mt-2 mt-md-0 mb-2 mb-md-0">
                            <Radio.Group onChange={onChangeTypeCustomer} value={typeCustomer}>
                                <Radio className="checkbox-custom-dummy" value={0}>Khách hàng mới</Radio>
                                <Radio className="checkbox-custom-dummy" value={1}>Khách hàng đã có trong hệ thống</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    {typeCustomer === 1 &&
                        <div className="create-contract__customer collapse show">
                            <div class="row mb-4 mt-4" data-select2-id="336">
                                <div class="col-12 col-md-2 d-flex align-items-center">
                                    <label class="fw-medium mb-0 mr-5 w-auto">Tìm kiếm khách hàng </label>
                                </div>
                                <div class="col-12 col-md-10" data-select2-id="335">
                                    <div class="form-group select2-highlight mb-0">
                                        <Select onChange={onSearchCustomer} datas={state.dataCustomerName} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="create-contract__customer collapse show">
                        <i className="text-note d-block">Ghi Chú<span className="uni_star_e94c4c">(*)</span>: Thông tin bắt buộc nhập</i>
                        <div className="row mt-2 mb-4">
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Danh xưng <span className="uni_star_e94c4c">*</span></label>
                                    <Select
                                        datas={[{ label: 'Ông', value: 1 }, { label: 'Bà', value: 2 }]}
                                        disabled={onDisable(typeCustomer)}
                                        placeholder='Chọn danh xưng'
                                        onChange={value => setState({ ...state, customer_title: value })}
                                        value={typeCustomer == 1 ? state.dataCustomer.customer_active_flag !== undefined ? state.dataCustomer.customer_active_flag === false ? 2 : 1 : "" : state.customer_title}
                                    />

                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <Input
                                    label='Họ tên'
                                    type="text"
                                    value={typeCustomer == 1 ? state.dataCustomer.customer_name : state.customer_name}
                                    placeholder={typeCustomer == 1 ? "" : "Nhập họ tên"}
                                    onChange={(value => setState({ ...state, customer_name: value }))}
                                    disabled={onDisable(typeCustomer)} />
                            </div>
                            {/* {console.log(state)} */}
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Đối tượng khách hàng <span className="uni_star_e94c4c">*</span></label>
                                    <Select value={state.dataCustomer.customer_job ? state.dataCustomer.customer_job : ""} disabled={onDisable(typeCustomer)} />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <Input type="text"
                                    value={state.dataCustomer.customer_business_certification ? state.dataCustomer.customer_business_certification : ""}
                                    placeholder="Nhập số" disabled={onDisable(typeCustomer)}
                                    label={<><span>Số CMND/CCCD/Hộ chiếu</span> <span className="uni_star_e94c4c">*</span></>}
                                />
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Quốc tịch <span className="uni_star_e94c4c">*</span></label>
                                    <Select value={onDisable(typeCustomer) ? 'Việt nam' : ""} disabled={onDisable(typeCustomer)}></Select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Tỉnh / Thành phố <span className="uni_star_e94c4c">*</span></label>
                                    <Select
                                        disabled={onDisable(typeCustomer)}
                                        value={state.address._city}
                                        isClear={state.address._city === -1 ? true : false}
                                        onChange={onChangeCity}
                                        datas={state.dataCity} />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Quận / Huyện <span className="uni_star_e94c4c">*</span></label>
                                    <Select
                                        value={state.address._district}
                                        disabled={onDisable(typeCustomer)}
                                        onChange={onChangeDistrict}
                                        isClear={state.address._district === "" ? true : false}
                                        datas={state.dataDistrict} />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Phường / Xã <span className="uni_star_e94c4c">*</span></label>
                                    <Select disabled={onDisable(typeCustomer)} value={onDisable(typeCustomer) ? state.address._ward : ""}></Select>
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Số nhà <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Nhập số nhà" value={onDisable(typeCustomer) ? state.address._address : ""} disabled={onDisable(typeCustomer)} />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Email <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Email " value={state.dataCustomer.customer_email} disabled={onDisable(typeCustomer)} />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Điện thoại <span className="uni_star_e94c4c">*</span></label>
                                    <Input type="text" placeholder="Nhập số " value={state.dataCustomer.customer_mobile} disabled={onDisable(typeCustomer)} />
                                </div>
                            </div>
                            <div className="col-12 col-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label className="fw-medium">Ngày sinh</label>
                                    <DatePicker style={{ width: "100%" }} disabled={onDisable(typeCustomer)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sales_list_button text-right">
                <button type="button" className="min-width-button min-height-40 btn-uni-delete">Hủy</button>
                <button type="button" className="min-width-button min-height-40 btn-uni-purple-outline">Trở về</button>
                <Link to="/product_card/new_contract/discount_option"><button type="button" className="min-width-button min-height-40 btn-uni-purple createContractNext">Tiếp theo</button></Link>
            </div>
        </div>
    )
}

export default CustomerInfoForm;