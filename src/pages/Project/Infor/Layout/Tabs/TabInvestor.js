import React from 'react';


const TabInvestor = () => {
    return (
        <div role="tabpanel" class="tab-pane show fade pt-2 pb-3 active" id="block_project_investor">
            {/* <div className="row mt-2" ref="project_tab"> */}
            <div className="row mt-2">
                {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style="border-right: 1px solid #999999;"> */}
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-8">
                            <h6 className="text-uppercase uni_text_6d30ab">
                                Legal Entity
                            </h6>
                        </div>
                        <div className="col-4">
                            {/* <a href="javascript:void(0)" class="float-right link_href_6d30ab" style="font-style: italic;" ref="view_project_investor_history" data-href="/backend/project/list_project_history_investor/">
                            </a> */}
                            <a href="#" className="float-right link_href_6d30ab">
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label className="fw-medium">Investor</label>
                                <input type="text" disabled="" className="form-control" value="Công Ty Cổ Phần Đầu Tư Sản Xuất Kinh Doanh Sài Gòn Cửu Long" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="customer_name">Investment certificates</label>
                                <input type="text" disabled="" className="form-control" value="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="date_from">Date from</label>
                                <div className="m_datepicker">
                                    <input type="text" className="form-control js-datepicker" disabled="" value="10/04/2020" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <label className="fw-medium" for="investment_certificate">Certification File</label>
                        </div>
                    </div>

                    <div className="row mt-1">
                        <div className="col-12">
                            <label className="font-weight-bold">Download file:
                            </label>
                            {/* <a style="text-decoration: underline;" target="_blank" className="uni_text_6d30ab" href="http://cloudapi.minerva.vn/cdn/sunnyworld-workflow-clone/b4343c8710a31fd0d21024.jpg">
                            </a> */}
                            <a target="_blank" className="uni_text_6d30ab" href="http://cloudapi.minerva.vn/cdn/sunnyworld-workflow-clone/b4343c8710a31fd0d21024.jpg">
                            </a>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <h6 className="mb-2 text-uppercase uni_text_6d30ab">Total investment
                            </h6>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="form-group">
                                <label className="fw-medium" for="total_investment_master_currency_unit">Total investment</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" disabled="" value="220000000.0" />
                                    <input type="text" disabled="" className="form-control col-2" value="vnd" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="customer_name">Equity</label>
                                <div className="input-group">
                                    <input type="text" disabled="" className="form-control" value="0.0" />
                                    <input type="text" disabled="" className="form-control col-3" value="vnd" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium">Number of shareholders</label>
                                <input type="text" disabled="disabled" className="form-control" value="2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-12">
                            <h6 className=" text-uppercase uni_text_6d30ab">Duration</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="customer_name">Duration (years)</label>
                                <input type="text" disabled="" className="form-control" value="50 năm" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label className="fw-medium">Number of years remaining
                                </label>
                                <input type="text" className="form-control" disabled="" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="fw-medium" for="date_from">From</label>
                                <div className="m_datepicker">
                                    <input type="text" className="form-control square js-datepicker" disabled="" value="01/04/2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabInvestor;