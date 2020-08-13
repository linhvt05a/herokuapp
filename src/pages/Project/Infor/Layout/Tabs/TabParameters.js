import React from 'react';
import MapParam from '../Maps/MapParam';
import { Trans } from 'react-i18next';
import TextEditor from '../../../../../components/base/Editor/TextEditor'

const TabParameters = (props) => {
    let { data, lat, long, name, durationtype } = props;
    return (
        <div>
            <div className="row mt-3">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-12">
                            <h6 className=" mb-1 uni_text_6d30ab text-uppercase">
                                <Trans>CHỨC NĂNG</Trans>
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
                            <Trans>THÔNG TIN DỰ ÁN</Trans>
                            </h6>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="form-group">
                                <label className="fw-medium" for="ranking_project"><Trans>Xếp hạng dự án</Trans></label>
                                <input type="text" disabled="" className="form-control" value={data.project_info.rank_type} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label className="fw-medium" for="ranking_project"><Trans>Mật độ xây dựng (%)</Trans></label>
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
                            <label className="fw-medium" for="ranking_project"><Trans>Số tầng hầm</Trans></label>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" name="number_of_basement" value={data.project_info.number_of_basement} className="form-control" disabled="" />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><Trans>tầng</Trans></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-md-12 col-sm-12">
                            <label className="fw-medium" for="ranking_project"><Trans>Số tầng cao</Trans></label>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" name="number_of_floor" value={data.project_info.number_of_floor} className="form-control " disabled="" />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><Trans>tầng</Trans></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label className="fw-medium" for="ranking_project"><Trans>Thời hạn sử dụng đất</Trans></label>
                                <input type="text" className="form-control" disabled="" value={durationtype} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h6 className=" uni_text_6d30ab text-uppercase">
                    <Trans>MÔ TẢ DỰ ÁN</Trans>
                    </h6>
                </div>
                <div className="summernoteOnHead col-12">
                    <TextEditor value = "" handleChange = {props.changeComment} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h6 className="uni_text_6d30ab text-uppercase">
                        <Trans>VỊ TRÍ DỰ ÁN</Trans>
                    </h6>
                </div>
                <div className="col-12">
                    <MapParam data={data.map} lat={lat} long={long} name={name}/>
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