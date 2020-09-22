import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input } from "antd"

import { InputBase, SelectCustom } from "../../../components/base";
import { translate } from '../../../functions/Utils';
import { BUSINESS_TYPE, LABOR_CONSTRACT_TYPE, POSITION_JOB_TYPE, RULES, PAY_TYPE } from '../../../contant';
import JobSalary from './JobSalary';

const JobInformation = props => {
    const { t } = useTranslation();
    const renderJobInfor = () => {
        return (
            <div className="loan_online--item">
                <div className="heading">Thông tin nghề nghiệp</div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <InputBase
                            nameItem="workplace" rules={RULES.text.form}
                            label="Tên đơn vị công tác"
                            titleClassName="label"
                            classNameInput="form-control"
                            type="text"
                            placeholder={translate("Nhập tên đơn vị", t)}
                            require
                        />
                    </div>
                    <SelectCustom
                        nameItem="business"
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label={translate("Loại hình doanh nghiệp", t)}
                        require
                        placeholder={translate("loan_chosse", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={BUSINESS_TYPE}
                        trans
                    />
                    <SelectCustom
                        nameItem="positionJob"
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label={translate("Vị trí công tác", t)}
                        require
                        placeholder={translate("loan_chosse", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={POSITION_JOB_TYPE}
                        trans
                    />
                    <SelectCustom
                        nameItem="laborConstract"
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label={translate("Hợp đồng lao động", t)}
                        require
                        placeholder={translate("Chọn loại hợp đồng", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={LABOR_CONSTRACT_TYPE}
                        trans
                    />

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="form-group">
                            <label className="label">Thời gian làm việc hiện tại <span className="star">*</span></label>
                            <div className="date_month">
                                <Form.Item name="workYear" rules={RULES.number.form}>
                                    <Input
                                        style={{ display: "flex" }}
                                        className="form-control"
                                        suffix="Năm"
                                        type="number"
                                    />
                                </Form.Item>
                                <Form.Item name="workMonth" rules={RULES.number.form}>
                                    <Input
                                        style={{ display: "flex" }}
                                        className="form-control"
                                        suffix="Tháng"
                                        type="number"
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <SelectCustom
                        nameItem="salary"
                        className="col-12 col-md-6 col-lg-6 col-xl-4"
                        classNameGroup="form-group select2-italic"
                        label={translate("Hình thức trả lương", t)}
                        require
                        placeholder={translate("Chọn hình thức", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={PAY_TYPE}
                        trans
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="loan_online--wrap active" >
            {renderJobInfor()}
            <JobSalary {...props} />
        </div>

    )
}
export default JobInformation