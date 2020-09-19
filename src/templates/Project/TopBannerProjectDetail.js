import React from 'react';
import { Select } from 'antd';
import { SelectCustom } from "./index"

const TopBannerProjectDetail = (props) => {
    let { dataProjectList, dataProjectType, filter, dataProjectArea, dataProjectBlock } = props
    let { dataImg } = props;
    const onChangeProject = (value) => {
        console.log(`Chọn dự án ${value}`);
        props.setFilter({ ...filter, project_id: value })
        props.onChangeFilter({ project_id: value })
    }

    const onChangeArea = (value) => {
        console.log(value);
        props.setFilter({ ...filter, area_id: value });
        props.onChangeFilter({ area_id: value })
    }

    const onChangeBlock = (value) => {
        console.log(`Chọn khối/lô ${value}`);
        props.setFilter({ ...filter, block_id: value });
        props.onChangeFilter({ block_id: value })
    }

    const onChangeCategory = (value) => {
        console.log(`Loại sản phẩm ${value}`);
        props.setFilter({ ...filter, type_id: value });
        props.onChangeFilter({ project_status_id: value })
    }
    // console.log(dataProjectArea)
    return (
        <div className="top_banner--detail d-flex align-items-end" style={{ backgroundImage: "url(../images/VAP-tt-nha-dat-tang.jpg)" }}>
            <div className="container container-sm container-md">
                <div className="project_detail--filter">
                    <div className="row">
                        <div className="col-3">
                            <SelectCustom
                                datas={dataProjectList}
                                value={filter.project_id}
                                onChange={onChangeProject}
                                classNameSelect="form-control hasIcon icon_project"
                            />
                        </div>
                        <div className="col-3">
                            <SelectCustom
                                placeholder="Chọn khu"
                                datas={dataProjectArea}
                                value={filter.area_id}
                                isClear={filter.area_id >= 0 ? false : true}
                                onChange={onChangeArea}
                                classNameSelect="form-control hasIcon icon_project"
                            />

                        </div>
                        <div className="col-3">
                            <SelectCustom
                                placeholder="Chọn khối/lô"
                                datas={dataProjectBlock}
                                value={filter.block_id}
                                isClear={filter.block_id >= 0 ? false : true}
                                onChange={onChangeBlock}
                                classNameSelect="form-control hasIcon icon_project"
                            />
                        </div>
                        <div className="col-3">
                            <SelectCustom
                                placeholder="Loại sản phẩm"
                                datas={dataProjectType}
                                value={filter.type_id}
                                isClear={filter.type_id >= 0 ? false : true}
                                onChange={onChangeCategory}
                                classNameSelect="form-control hasIcon icon_project"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBannerProjectDetail;
