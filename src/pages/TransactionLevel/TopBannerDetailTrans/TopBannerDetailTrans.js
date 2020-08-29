import { Form, Select } from 'antd';
import React from 'react';

const TopBannerDetailTrans = (props) => {
    const {projectId, areaId, blockId, onChangeProject, onChangeArea, onChangeBlock} = props;    
    return (
        <div class="top_banner--detail d-flex align-items-end" style={{ backgroundImage: "url(../assets/images/banner_exchanges.png)" }}>
            <div class="container container-sm container-md d-flex justify-content-center">
                <div class="project_detail--filter column-3">
                    <Form
                    >
                        <div class="row">

                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <Select className="form-control hasIcon icon_project" placeholder="Chọn dự án" onChange={onChangeProject} defaultValue={projectId.project_id} >
                                        <Select.Option disabled>Chọn dự án *</Select.Option>
                                        <Select.Option value={13}>Royal Garden</Select.Option>
                                        <Select.Option value={2}>Hà Nội</Select.Option>
                                        <Select.Option value={3}>Đà Nẵng</Select.Option>
                                        <Select.Option value={4}>Bình Dương</Select.Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <Select className="form-control hasIcon icon_area" placeholder="Chọn khu" onChange={onChangeArea} defaultValue={areaId.area_id} >
                                        <Select.Option selected disabled>Chọn khu *</Select.Option>
                                        <Select.Option value={1}>VALLEN</Select.Option>
                                        <Select.Option value={2}>Hà Nội</Select.Option>
                                        <Select.Option value={3}>Đà Nẵng</Select.Option>
                                        <Select.Option value={4}>Bình Dương</Select.Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    <Select className="form-control hasIcon icon_block" placeholder="Chọn khối/lô" onChange={onChangeBlock} defaultValue={blockId.block_id} >
                                        <Select.Option selected disabled>Chọn khối/lô*</Select.Option>
                                        <Select.Option value={1}>B</Select.Option>
                                        <Select.Option value={2}>C</Select.Option>
                                        <Select.Option value={3}>D</Select.Option>
                                        <Select.Option value={4}>E</Select.Option>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default TopBannerDetailTrans;
