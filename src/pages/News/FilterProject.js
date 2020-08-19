import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Sliders} from '../../components/base/index'

const data = [20, 60]
const data1 = [10, 80]

const FilterProject = () =>{
    return(
        <div className="searchProject">
        <div className="searchProject__title">
            Tìm kiếm dự án theo
        </div>
        <div className="form-group mt-3">
        </div>
        <div className="form-group">
        </div>
        <div className="form-group">
        </div>
        {/*PHẠM VI GIÁ*/}
        <div className="map_search--range">
            <div className="range_item price">
                <label className="label">
                    Phạm vi giá<br /><i>(tỷ đồng)</i>
                </label>
                    <Sliders value={data} displayBox="on"/>
            </div>
            <div className="range_item area">
                <label className="label">Diện tích<i>(m2)</i></label>
                    <Sliders value={data1} displayBox="on"/>
            </div>
        </div>
            <SearchByProject />
            
    </div>

    )
}

const SearchByProject = () =>{
    return <Link to="#" className="btn btn_green text-uppercase w-100">tìm kiếm</Link>
}

export default FilterProject