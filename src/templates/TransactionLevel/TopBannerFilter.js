import { Form, Select } from 'antd';
import React from 'react';

const TopBannerFilter = (props) => {
    const {
        projectInfoInit,
        projectId, areaId, blockId,
        onChangeProject, onChangeArea, onChangeBlock,
        transacProjectNameList, transacAreaNameList, transacBlockNameList
    } = props;

    // console.log('props 1',props);

    return (
        <div className="top_banner--detail d-flex align-items-end" style={{ backgroundImage: "url(../images/banner_exchanges.png)" }}>
            <div className="container container-sm container-md d-flex justify-content-center">
                <div className="project_detail--filter column-3">
                    <Form>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    {
                                        transacProjectNameList && transacProjectNameList != null ?
                                            <Select
                                                className="form-control hasIcon icon_project"
                                                placeholder="Chọn dự án"
                                                onChange={onChangeProject}
                                                defaultValue={projectInfoInit.projectId}
                                            >
                                                <Select.Option disabled>Chọn dự án *</Select.Option>
                                                <Select.Option value={transacProjectNameList.project_id}>{transacProjectNameList.project_name}</Select.Option>
                                            </Select>
                                            : ""
                                    }

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    {
                                        transacAreaNameList && transacAreaNameList != null ?
                                            <Select className="form-control hasIcon icon_area" placeholder="Chọn khu" onChange={onChangeArea} defaultValue={projectInfoInit.areaId} >
                                                <Select.Option defaultValue={1} disabled>Chọn khu *</Select.Option>
                                                {
                                                    transacAreaNameList.map((areaItem, index) => (
                                                        <Select.Option key={index} value={areaItem.area_id}>{areaItem.area_name}</Select.Option>
                                                    ))
                                                }
                                            </Select>
                                            : ""
                                    }

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="form-group">
                                    {
                                        transacBlockNameList && transacBlockNameList != null ?

                                            <Select
                                                className="form-control hasIcon icon_block"
                                                placeholder="Chọn khối/lô"
                                                onChange={onChangeBlock}
                                                defaultValue={projectInfoInit.blockId}
                                            >
                                                <Select.Option defaultValue={2} disabled>Chọn khối/lô*</Select.Option>
                                                {
                                                    transacBlockNameList.map((blockItem, index) => (
                                                        <Select.Option key={index} value={blockItem.block_id}>{blockItem.block_name}</Select.Option>
                                                    ))
                                                }
                                            </Select>
                                            : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default TopBannerFilter;
