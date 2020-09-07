import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { Heading, Label, ChangePass } from "../../index";
import { Alert, Input, Select, Row, Col, Group, Radio } from 'antd';
import { accountAction, commonAction } from "../../../../store/action/index";
import { SelectCustom } from '../../../../components/base';
import InputDatePicker from '../../../../components/base/Input/InputDatePicker';
import moment from 'moment';

const CardFile = (props) => {
    let { data, avatarUpload } = props
    const dispatch = useDispatch();
    const locationStore = useSelector(state => state.commonReducer);
    const createData = (value, label) => {
        return { value, label }
    }
    useEffect(() => {
        dispatch(commonAction.loadProvinceList({ lang: "vi" }))
    }, [])

    const [state, setState] = useState({
        passActive: 0,
        customer_name: "",
        customer_birthday: "",
        customer_title: "",
        customer_mobile: "",
        customer_email: "",
        customer_business: "",
        gender: "",
        address: { _province: 0, _district: "", _ward: "", _address: "" },
        dataProvince: [],
        dataDistrict: [],
        dataWard: [],
    });

    useEffect(() => {
        let data = locationStore.provinceList;
        if (data.detail && data.detail.length > 0) {
            let newData = [];
            data.detail.map((item) => {
                newData.push(createData(item.province_id, item.name))
            })
            setState({ ...state, dataProvince: newData })
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
        let data = locationStore.wardList;
        if (data.detail && data.detail.length > 0) {
            let newData = [];
            data.detail.map((item) => {
                newData.push(createData(item.ward_id, item.name))
            })
            setState({ ...state, dataWard: newData })
        }
    }, [locationStore.wardList])

    const onChangeCity = (value) => {
        dispatch(commonAction.loadDistrictList({ province_id: value }))
        setState({ ...state, address: { _province: value, _district: "", _ward: "", _address: "" } })
    }
    const onChangeDistrict = (value) => {
        dispatch(commonAction.loadWardList({ district_id: value }))
        setState({ ...state, address: { _province: state.address._province, _district: value, _ward: "", _address: "" } })
    }

    const onChangeWard = (value) => {
        setState({ ...state, address: { _province: state.address._province, _district: state.address._district, _ward: value, _address: "" } })
    }
    
    const radioOnChange = e => {
        setState({ ...state, gender: e.target.value })
    };
    const onChangeDate = (name, value) => {
        const dateFormat = "YYYY-MM-DD";
        const formatSend = moment(value).format(dateFormat);
        setState({ ...state, customer_birthday: formatSend })

        console.log(formatSend, value);
    }
    const changePassword = () => {
        setState({...state, passActive: 1});
    };
    const handelOnBack = () => {
        setState({...state, passActive: 0});
    };

    const updateProfile = () => {
        dispatch(accountAction.loadUpdateCustomer({
            avatar: avatarUpload,
            email: state.customer_email,
            name: state.customer_name,
            // birthday: state.customer_birthday,
            address: state.address._address,
            province: state.address._province, 
            district: state.address._district, 
            ward: state.address._ward, 
            // phone: state.customer_mobile, 
            gender: state.gender
        }));
    }

    const isupdate = useSelector(state => state.accountReducer);
    const updateSuccess = isupdate.updateCustomer.success
    const update = updateSuccess ? isupdate.updateCustomer.detail : null;

    console.log(state);

    return (
        <div class="col-12 col-sm-12 col-md-12 col-lg-8">
            <Alert message="Một số thông tin của bạn vẫn còn thiếu. Xin bạn vui lòng cập nhật !" type="warning" showIcon closable />
            <div class="card">
                <div class="card-body">
                    <Heading title="Tài khoản" content="Một số thông tin tài khoản quan trọng" />

                    <div class="form-group row align-items-center">
                        <Label icon="fa-envelope" text="Email" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <Input type="text" placeholder="Email" defaultValue={data.email}
                            onChange={(value => setState({ ...state, customer_email: value.target.value }))} className="form-control" />
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-lock" text="Mật khẩu" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <div class={`row w-100 pwd_current ${state.passActive === 1 ? "d-none" : ""}`}>
                                <div class="col-12 justify-content-start d-flex align-items-center flex-column flex-sm-row">
                                    <Input.Password type="password" placeholder="Password" defaultValue="thutran1975@gmail.com" className="form-control" />
                                    <div class="text_pwd text_changepwd text-nowrap" onClick={changePassword}>Đổi mật khẩu</div>
                                </div>
                            </div>
                            <ChangePass showpass={state.passActive} handelOnBack={handelOnBack}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <Heading title="Hồ sơ" content="Thông tin cá nhân của bạn" />
                    <div class="form-group row align-items-center">
                        <Label icon="fa-envelope" text="Họ tên" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <Input type="text" defaultValue={data.name}
                            onChange={(value => setState({ ...state, customer_name: value.target.value }))} className="form-control" /> 
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-calendar-alt" text="Ngày sinh" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <div class="date-picker">
                                <InputDatePicker style={{width: '100%', height: 48 }} defaultValue={data.birthday}  
                                name="dateFrom" placeholder="From date" onChange={onChangeDate}/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-map-marker-alt" text="Địa chỉ" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <div class="row">
                                <div class="col-6">
                                    <Input type="text" defaultValue={data.full_address} placeholder="---" className="form-control" 
                                    onChange={(value => setState({ ...state, address: { _province: state.address._province, _district: state.address._district, _ward: state.address._ward, _address: value.target.value } }))} /> 
                                </div>
                                <div class="col-6">
                                    <SelectCustom placeholder={<Trans>province</Trans>} datas={state.dataProvince} 
                                    onChange={onChangeCity} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <SelectCustom placeholder={<Trans>district</Trans>} datas={state.dataDistrict}
                                    onChange={onChangeDistrict}/> 
                                </div>
                                <div class="col-6">
                                    <SelectCustom placeholder={<Trans>ward</Trans>} datas={state.dataWard}
                                    onChange={onChangeWard} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-phone-alt" text="Số điện thoại" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <Input type="number" defaultValue={data.mobile} placeholder="---" className="form-control" 
                            onChange={(value => setState({ ...state, customer_mobile: value.target.value }))} />
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-venus-mars" text="Giới tính" />
                        <div class="col-12 col-sm-12 col-md-9">
                            <Radio.Group onChange={radioOnChange} defaultValue={state.value} style={{display: "flex"}}>
                                <Radio value={1}>Nam</Radio>
                                <Radio value={2}>Nữ</Radio>
                                <Radio value={3}>Khác</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div class="form-group row align-items-center">
                        <Label icon="fa-user-graduate" text="Nghề nghiệp" />
                        <div class="col-12 col-sm-12 col-md-9 d-flex align-items-center">
                            <Input type="text" defaultValue={data.department_name} placeholder="---" className="form-control" 
                            onChange={(value => setState({ ...state, customer_business: value.target.value }))} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-right">
                <a class="btn btn_purple text-uppercase" onClick={updateProfile}>
                    cập nhật
                </a>
            </div>
        </div>
    )
}
export default CardFile;