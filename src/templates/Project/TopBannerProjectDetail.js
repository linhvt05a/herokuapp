import React from 'react';
import { Select } from 'antd';

const TopBannerProjectDetail = (props) => {

    let { dataImg } = props;
    const onChangeProject = (value) => {
        console.log(`Chọn dự án ${value}`);
    }

    const onChangeArea = (value) => {
        console.log(`Chọn khu ${value}`);
    }

    const onChangeBlock = (value) => {
        console.log(`Chọn khối/lô ${value}`);
    }

    const onChangeCategory = (value) => {
        console.log(`Loại sản phẩm ${value}`);
    }

    return (
        <div className="top_banner--detail d-flex align-items-end" style={{ backgroundImage: "url(../images/VAP-tt-nha-dat-tang.jpg)" }}>
            <div className="container container-sm container-md">
                <div className="project_detail--filter">
                    <div className="row">
                        <div className="col-3">
                            <div className="form-group">
                                <Select className="form-control hasIcon icon_project" placeholder="Chọn dự án" onChange={onChangeProject} >
                                    <Select.Option selected disabled>Chọn dự án *</Select.Option>
                                    <Select.Option value="1">TPHCM</Select.Option>
                                    <Select.Option value="2">Hà Nội</Select.Option>
                                    <Select.Option value="3">Đà Nẵng</Select.Option>
                                    <Select.Option value="4">Bình Dương</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <Select className="form-control hasIcon icon_area" placeholder="Chọn khu" onChange={onChangeArea}>
                                    <Select.Option selected disabled>Chọn khu *</Select.Option>
                                    <Select.Option value="1">TPHCM</Select.Option>
                                    <Select.Option value="2">Hà Nội</Select.Option>
                                    <Select.Option value="3">Đà Nẵng</Select.Option>
                                    <Select.Option value="4">Bình Dương</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <Select className="form-control hasIcon icon_block" placeholder="Chọn khối/lô" onChange={onChangeBlock}>
                                    <Select.Option selected disabled>Chọn khối/lô*</Select.Option>
                                    <Select.Option value="1">TPHCM</Select.Option>
                                    <Select.Option value="2">Hà Nội</Select.Option>
                                    <Select.Option value="3">Đà Nẵng</Select.Option>
                                    <Select.Option value="4">Bình Dương</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <Select className="form-control hasIcon icon_product" placeholder="Loại sản phẩm" onChange={onChangeCategory}>
                                    <Select.Option selected disabled>Loại sản phẩm *</Select.Option>
                                    <Select.Option value="1">TPHCM</Select.Option>
                                    <Select.Option value="2">Hà Nội</Select.Option>
                                    <Select.Option value="3">Đà Nẵng</Select.Option>
                                    <Select.Option value="4">Bình Dương</Select.Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBannerProjectDetail;
