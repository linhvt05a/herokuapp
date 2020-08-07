import React from 'react';
import MapParam from '../Maps/MapParam'

const TabParameters = (props) => {
    let { data, lat, long } = props;
    console.log('param', data.map, lat, long);
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
                    {
                        data.function && data.function.map((item, index) => (
                            <RowParam key={index} data={item} />
                        ))
                    }
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
                                <input type="text" disabled="" className="form-control" value={data.project_info.rank_type} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label className="fw-medium" for="ranking_project">Building density</label>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" name="building_density" disabled="" className="form-control" value={data.project_info.building_density} />
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
                                    <input type="text" name="number_of_basement" value={data.project_info.number_of_basement} className="form-control" disabled="" />
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
                                    <input type="text" name="number_of_floor" value={data.project_info.number_of_floor} className="form-control " disabled="" />
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
                                <input type="text" className="form-control" disabled="" value={data.project_info.year_remaining} />
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
                <div className="col-12">
                    <MapParam data={data.map} lat={lat} long={long}/>
                </div>
            </div>
        </div>
    )
}

const RowParam = (props) => {
    const { data } = props;
    return (
        <div className="row mt-2">
            <div className="col-md-12">
                <h5>{data.meta_data_group_type_name}</h5>
            </div>
            {
                data.list && data.list.map((item, index) => (
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3" key={index}>
                        <div className="custom-control custom-checkbox">
                            <input class="custom-control-input checkbox-item square" checked={item.checked_flag == true} type="checkbox"/>&nbsp;
                            <label className="custom-control-label">{item.meta_data_group_name}</label>
                        </div>
                    </div>
                ))
            }
        </div> 
    )
}

export default TabParameters;