import React, { useEffect, useState } from "react";
import { Trans } from 'react-i18next';
import { formatCurrency } from "../../../../../utils/Utils"
import Moment from 'moment';

const TabInvestor = (props) => {
    let { data } = props;
    return (
        data != null ?
            <div className="row mt-2">
                {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style="border-right: 1px solid #999999;"> */}
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-8">
                            <h6 className="text-uppercase uni_text_6d30ab">
                                <Trans>PHÁP NHÂN</Trans>
                            </h6>
                        </div>
                        <div className="col-4">
                            <a style={{ fontStyle: 'italic' }} href="#" className="float-right link_href_6d30ab">
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label className="fw-medium"><Trans>Tên chủ đầu tư</Trans></label>
                                <input type="text" disabled="" className="form-control" value={data.investor_name}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="customer_name"><Trans>Giấy chứng nhận đầu tư</Trans></label>
                                <input type="text" disabled="" className="form-control" value={data.investor_business_license}/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="date_from"><Trans>Từ ngày</Trans></label>
                                <div className="m_datepicker">
                                    <input type="text" className="form-control js-datepicker" disabled="" value={Moment(data.investment_certificate_date_from).format("DD-MM-YYYY")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <label className="fw-medium" for="investment_certificate"><Trans>Tệp chứng nhận</Trans></label>
                        </div>
                    </div>

                    <div className="row mt-1">
                        {data.investor_business_license_file_name != null ?
                            <div className="col-12">
                                <label className="font-weight-bold"><Trans>Tải tập tin</Trans>:
                                </label>
                                <a style={{ textDecoration: 'underline' }} target="_blank" class="uni_text_6d30ab" href={data.file_url_business_license}>
                                    [{data.investor_business_license_file_name}]
                                </a>
                            </div>:''
                        }
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <h6 className="mb-2 text-uppercase uni_text_6d30ab"><Trans>TỔNG VỐN ĐẦU TƯ</Trans>
                            </h6>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="form-group">
                                <label className="fw-medium" for="total_investment_master_currency_unit"><Trans>Tổng mức đầu tư</Trans></label>
                                <div className="input-group">
                                    <input type="text" className="form-control" disabled="" value={formatCurrency(data.total_investment)}/>
                                    <input type="text" disabled="" className="form-control col-2" value="vnd"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="customer_name"><Trans>Vốn chủ sở hữu</Trans></label>
                                <div className="input-group">
                                    <input type="text" disabled="" className="form-control" value={formatCurrency(data.total_capital)}/>
                                    <input type="text" disabled="" className="form-control col-3" value="vnd"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium"><Trans>Số cổ đông</Trans></label>
                                <input type="text" disabled="disabled" className="form-control" value={data.total_share_holder}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-12">
                            <h6 className=" text-uppercase uni_text_6d30ab"><Trans>THỜI LƯỢNG</Trans></h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="customer_name"><Trans>Thời lượng (năm)</Trans></label>
                                <input type="text" disabled="" className="form-control" value={props.duration.project_duration_type} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label className="fw-medium"><Trans>Số năm còn lại</Trans>
                                </label>
                                <input type="text" className="form-control" disabled="" value={props.duration.year_remaining}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="date_from"><Trans>Từ</Trans></label>
                                <div className="m_datepicker">
                                    <input type="text" className="form-control square js-datepicker" disabled="" value={Moment(data.date_from).format("DD-MM-YYYY")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        : ""
    )
}

export default TabInvestor;