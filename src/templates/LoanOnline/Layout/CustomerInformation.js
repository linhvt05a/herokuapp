import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from "antd"
import { useTranslation } from 'react-i18next';

import { InputBase, InputDatePicker, SelectCustom } from "../../../components/base";
import { NAME_GENDER } from '../../ShopCart/Layout';
import { commonAction } from '../../../store/action';
import { createDataSelect, getLocalStore, translate } from '../../../functions/Utils';
import { RULES, EDUCATION_TYPE, ESTATE_OWNER_TYPE, MARITAL_TYPE } from '../../../contant';

const CustomerInformation = props => {
    let { form } = props
    const { Item } = Form
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [data, setData] = React.useState({
        city: null,
        district: null,
        ward: null
    });

    React.useEffect(() => {
        dispatch(commonAction.loadProvinceList({ lang: getLocalStore('language') }))
    }, [])

    const province = useSelector(state => state.commonReducer);
    const { provinceList, districtList, wardList } = province;

    React.useEffect(() => {
        let dataDetail = provinceList.detail
        if (dataDetail && dataDetail.length > 0) {
            let newData = [];
            for (let i = 0;i < dataDetail.length;i++) {
                newData.push(createDataSelect(dataDetail[i].province_id, dataDetail[i].name))
            }
            setData({ ...data, city: newData })
        }
    }, [provinceList])
    React.useEffect(() => {
        let dataDetail = districtList.detail;
        if (dataDetail && dataDetail.length > 0) {
            let newData = [];
            for (let i = 0;i < dataDetail.length;i++) {
                newData.push(createDataSelect(dataDetail[i].district_id, dataDetail[i].name))
            }
            setData({ ...data, district: newData })
        }
    }, [districtList])
    React.useEffect(() => {
        let dataDetail = wardList.detail;
        if (dataDetail && dataDetail.length > 0) {
            let newData = [];
            for (let i = 0;i < dataDetail.length;i++) {
                newData.push(createDataSelect(dataDetail[i].district_id, dataDetail[i].name))
            }
            setData({ ...data, ward: newData })
        }
    }, [wardList])

    const onChangeCity = (value) => {
        form.setFieldsValue({ district: null, ward: null })
        setData({ ...data, ward: [] })
        dispatch(commonAction.loadDistrictList({ province_id: value }))
    }
    const onChangeDistrict = (value) => {
        dispatch(commonAction.loadWardList({ district_id: value }))
    }
    return (
        <div className="loan_online--wrap active">
            <div className="loan_online--item">
                <div className="heading">Thông tin khách hàng</div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <InputBase
                            nameItem="fullName" rules={RULES.text.form}
                            label="cart_customer_name"
                            titleClassName="label"
                            classNameInput="form-control"
                            type="text"
                            placeholder={translate("loan_input_name", t)}
                            require
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group select2-italic">
                            <label className="label">{translate("loan_birthday")} <span className="star">*</span></label>
                            <Item name="birthDay">
                                <InputDatePicker placeholder={translate("loan_chosse", t)} />
                            </Item>
                        </div>
                    </div>
                    <SelectCustom
                        nameItem="gender"
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label={translate("loan_gender", t)}
                        require
                        placeholder={translate("loan_chosse", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={NAME_GENDER}
                        trans
                    />
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <InputBase
                            nameItem="identity" rules={RULES.identity.form}
                            label="cart_identity_card_number"
                            titleClassName="label"
                            classNameInput="form-control"
                            type={RULES.identity.type}
                            placeholder={translate("card_input_number", t)}
                            require
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group">
                            <label className="label">{translate("loan_date_range")} <span className="star">*</span></label>
                            <Item name="dateRange">
                                <InputDatePicker
                                    placeholder={translate("loan_input_dates", t)}
                                />
                            </Item>
                        </div>
                    </div>
                    <SelectCustom
                        nameItem="issued"
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label="loan_issued"
                        require
                        placeholder={translate("loan_chosse", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={data.city}
                        trans
                    />
                    <SelectCustom
                        nameItem="marital"
                        noValidate
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label="loan_marital_status"
                        placeholder={translate("loan_chosse", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={MARITAL_TYPE}
                        trans
                    />
                    <SelectCustom
                        nameItem="educational"
                        noValidate
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label="loan_education_status"
                        placeholder={translate("loan_chosse", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={EDUCATION_TYPE}
                        trans
                    />

                    <SelectCustom
                        nameItem="estate"
                        noValidate
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label="loan_estate_status"
                        placeholder={translate("loan_chosse", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={ESTATE_OWNER_TYPE}
                        trans
                    />

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <InputBase
                            nameItem="address" rules={RULES.text.form}
                            className="form-group select2-italic"
                            label="cart_address"
                            titleClassName="label"
                            classNameInput="form-control"
                            type={RULES.text.type}
                            placeholder={translate("loan_input", t)}
                            require
                        />
                    </div>
                    <SelectCustom
                        nameItem="city"
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label="cart_province_city"
                        placeholder={translate("loan_chosse_place", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={data.city}
                        onChange={onChangeCity}
                        trans
                        require
                    />
                    <SelectCustom
                        nameItem="district"
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label="cart_district"
                        placeholder={translate("loan_chosse_place", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={data.district}
                        onChange={onChangeDistrict}
                        trans
                        require
                    />
                    <SelectCustom
                        nameItem="ward"
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label="cart_ward"
                        placeholder={translate("loan_chosse_place", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={data.ward}
                        onChange={onChangeDistrict}
                        trans
                        require
                    />
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <InputBase
                            nameItem="phone" rules={RULES.phone.form}
                            className="form-group select2-italic"
                            label="cart_phone_number"
                            titleClassName="label"
                            classNameInput="form-control"
                            type={RULES.phone.type}
                            placeholder={translate("card_input_number", t)}
                            require
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <InputBase
                            nameItem="email" rules={RULES.email.form}
                            className="form-group select2-italic"
                            label="Email"
                            titleClassName="label"
                            classNameInput="form-control"
                            type={RULES.email.type}
                            placeholder={translate("loan_input_email", t)}
                            require
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerInformation;