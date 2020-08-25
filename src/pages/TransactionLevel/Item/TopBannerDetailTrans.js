import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Select } from 'antd';

const TopBannerDetailTrans = (props) => {

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

    return (
        <div class="top_banner--detail d-flex align-items-end" style={{backgroundImage: "url(../assets/images/banner_exchanges.png)"}}>
            <div class="container container-sm container-md d-flex justify-content-center">
                <div class="project_detail--filter column-3">
                    <div class="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <Select className="form-control hasIcon icon_project" placeholder="Chọn dự án" onChange={onChangeProject} >
                                    <Select.Option selected disabled>Chọn dự án *</Select.Option>
                                    <Select.Option value="1">Royal Garden</Select.Option>
                                    <Select.Option value="2">Hà Nội</Select.Option>
                                    <Select.Option value="3">Đà Nẵng</Select.Option>
                                    <Select.Option value="4">Bình Dương</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <Select className="form-control hasIcon icon_area" placeholder="Chọn khu" onChange={onChangeArea}>
                                    <Select.Option selected disabled>Chọn khu *</Select.Option>
                                    <Select.Option value="1">VALLEN</Select.Option>
                                    <Select.Option value="2">Hà Nội</Select.Option>
                                    <Select.Option value="3">Đà Nẵng</Select.Option>
                                    <Select.Option value="4">Bình Dương</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="form-group">
                                <Select className="form-control hasIcon icon_block" placeholder="Chọn khối/lô" onChange={onChangeBlock}>
                                    <Select.Option selected disabled>Chọn khối/lô*</Select.Option>
                                    <Select.Option value="1">B</Select.Option>
                                    <Select.Option value="2">C</Select.Option>
                                    <Select.Option value="3">D</Select.Option>
                                    <Select.Option value="4">E</Select.Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default TopBannerDetailTrans;
