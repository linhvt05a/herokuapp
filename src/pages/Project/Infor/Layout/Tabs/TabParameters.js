import React from 'react';

const TabParameters = () => {
    return (
        <div>
            <div className="row mt-3">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-12">
                            <h6 className=" mb-1 uni_text_6d30ab text-uppercase">
                                Functionality
                            </h6>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <h5>Thành Phần Kinh Doanh</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox"/>&nbsp;
                                <label className="custom-control-label">Building</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox"/>&nbsp;
                                <label className="custom-control-label">Villa</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h5>Thành Phần Không Vận Hành</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox"/>&nbsp;
                                <label className="custom-control-label">Center Park</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox" />&nbsp;
                                <label className="custom-control-label">Internal Road</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox" />&nbsp;
                                <label className="custom-control-label">Public Construction</label>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox" />&nbsp;
                                <label className="custom-control-label">Bike Parking</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox" />&nbsp;
                                <label className="custom-control-label">Car-Operation Parking</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox" />&nbsp;
                                <label className="custom-control-label">Car-Sale Parking</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" />&nbsp;
                                <label className="custom-control-label">Basement</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h5>Thành Phần Vận Hành</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox" />
                                &nbsp;
                                <label className="custom-control-label">Retail</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" checked="checked" type="checkbox" />
                                &nbsp;
                                <label className="custom-control-label">Office</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-item square" />
                                &nbsp;
                                <label className="custom-control-label">Hotel</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 mt-1">
                    <div className="row">
                        <div className="col-12">
                            <h6 className=" mb-1 uni_text_6d30ab text-uppercase">
                                Project information
                            </h6>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="form-group">
                                <label className="fw-medium" for="ranking_project">Project rating</label>
                                <input type="text" disabled="" className="form-control" value="A+" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label className="fw-medium" for="ranking_project">Building density</label>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" name="building_density" disabled="" className="form-control" value="80.0" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-md-12 col-sm-12">
                            <label className="fw-medium" for="ranking_project">Number of basements</label>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" name="number_of_basement" value="5" className="form-control" disabled="" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">Floor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-md-12 col-sm-12">
                            <label className="fw-medium" for="ranking_project">Number of floors</label>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" name="number_of_floor" value="30" className="form-control " disabled="" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">Floor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label className="fw-medium" for="ranking_project">Land use factor</label>
                                <input type="text" className="form-control" disabled="" value="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h6 className=" uni_text_6d30ab text-uppercase">
                        Project Description
                    </h6>
                </div>
                <div className="summernoteOnHead col-12"></div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h6 className=" mb-1 uni_text_6d30ab text-uppercase">
                        Project location
                    </h6>
                </div>
                <div className="col-12"></div>
            </div>
        </div>
    )
}

export default TabParameters;