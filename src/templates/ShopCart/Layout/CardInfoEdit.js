import React from 'react';
import { translate } from '../../../functions/Utils';
import { SelectCustom } from "../../../components/base"
import { useTranslation } from 'react-i18next';
import { NAME_GENDER } from "./index"

const InfoEdit = props => {
    let { t } = useTranslation()
    return (
        <div className="info-buyer__change">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <SelectCustom
                        label={<>{translate("cart_name")} <span className="star">*</span></>}
                        titleClassName="label"
                        classNameSelec="js-select2 form-control select2-hidden-accessible"
                        value={0}
                        trans={true}
                        datas={NAME_GENDER} />
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">Họ tên  <span className="star">*</span>
                        </label>
                        <input placeholder="---" type="text" defaultValue="Trần Thị Thu Hoài" readOnly className="form-control" />
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <SelectCustom
                        label={<>{translate("cart_customers")} <span className="star">*</span></>}
                        titleClassName="label"
                        classNameGroup="form-group"
                        classNameSelec="js-select2 form-control select2-hidden-accessible"
                        value={1}
                        datas={[{ value: 1, label: "Cá nhân" }]} />
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">Số CMND/CCCD/Hộ chiếu <span className="star">*</span>
                        </label>
                        <input placeholder="---" type="text" defaultValue={345020630} className="form-control" />
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <SelectCustom
                        label={<>{translate("cart_nation")} <span className="star">*</span></>}
                        titleClassName="label"
                        classNameGroup="form-group"
                        classNameSelec="js-select2 form-control select2-hidden-accessible"
                        value={1}
                        datas={[{ value: 1, label: "Việt Nam" }]} />
                    {/* <div className="form-group">
                        <label className="label">Quốc gia   <span className="star">*</span>
                        </label>
                        <select name id className="js-select2 form-control select2-hidden-accessible" tabIndex={-1} aria-hidden="true" data-select2-id={22}>
                            <option value={1} selected data-select2-id={24}>Việt Nam</option>
                        </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={23} style={{ width: 335 }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2--container"><span className="select2-selection__rendered" id="select2--container" role="textbox" aria-readonly="true" title="Việt Nam">Việt Nam</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                    </div> */}
                </div>
                <div className="col-12 col-sm-6">
                    <SelectCustom
                        label={<>{translate("cart_province_city")} <span className="star">*</span></>}
                        titleClassName="label"
                        classNameGroup="form-group"
                        classNameSelec="js-select2 form-control select2-hidden-accessible"
                        value={1}
                        datas={[{ value: 1, label: "Hồ Chí Minh" }]} />
                </div>
                <div className="col-12 col-sm-6">
                    <SelectCustom
                        label={<>{translate("cart_district")} <span className="star">*</span></>}
                        titleClassName="label"
                        classNameGroup="form-group"
                        classNameSelec="js-select2 form-control select2-hidden-accessible"
                        value={1}
                        datas={[{ value: 1, label: "Quân Tân Bình" }]} />
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">{translate("cart_address")} <span className="star">*</span>
                        </label>
                        <input placeholder="---" type="text" defaultValue="220/4 đường Cách Mạng Tháng
										8" className="form-control" />
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">Email  <span className="star">*</span>
                        </label>
                        <input placeholder="---" type="text" defaultValue="thutran1975@gmail.com" readOnly className="form-control" />
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label className="label">{translate("cart_phone_number")} <span className="star">*</span>
                        </label>
                        <input placeholder="---" type="text" readOnly defaultValue={"0909125620"} className="form-control" />
                    </div>
                </div>
            </div>
            <div className="text-center mt-2">
                <a className="btn btn_purple text-uppercase" >{translate("button_update")}</a>
            </div>
        </div>

    )
}
export default InfoEdit