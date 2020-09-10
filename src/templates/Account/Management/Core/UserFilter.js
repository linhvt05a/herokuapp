import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { Input, Select } from 'antd';

const UserFilter = (props) => {
    let { filterTab, activeGird, activeList, girdlist } = props;
    return (
        <div className="user-acc__filter">
            <div className="filter__left">
                {filterTab === 1 ?
                <div className="form-group">
                    <Input type="text" placeholder="Nhập mã đơn hàng" className="form-control"/>
                    <a className="btn btn_green">TÌM KIẾM</a>
                </div> 
                : filterTab === 2 || filterTab === 3 ?
                <div className="form-group">
                    <Select className="form-control" placeholder="Tất cả dự án">
                        <Select.Option selected disabled>Tất cả dự án</Select.Option>
                        <Select.Option value={1}>TPHCM</Select.Option>
                        <Select.Option value={2}>Hà Nội</Select.Option>
                        <Select.Option value={3}>Đà Nẵng</Select.Option>
                        <Select.Option value={4}>Bình Dương</Select.Option>
                    </Select>
                    <a className="btn btn_green">LỌC</a>
                </div> : ""
                }
            </div>
            <div className="filter__right">
                {filterTab === 1 || filterTab === 3 ?
                <a className="icon fas fa-calendar-alt"></a>
                : filterTab === 2 ?
                <>
                    <a className={`icon fas fa-th ${girdlist === 0 ? "active" : ""}`} onClick={activeGird}></a>
                    <a className={`icon fas fa-list ${girdlist === 1 ? "active" : ""}`} onClick={activeList}></a>
                </>: ""
                }
            </div>
        </div>
    )
}
export default UserFilter;