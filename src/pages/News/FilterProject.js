import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Sliders} from '../../components/base/index'
import {InputSelect} from '../../components/base/Select/index'
import { Trans } from 'react-i18next';
const data = [20, 60]
const data1 = [10, 80]
const province = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
const district = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
const status = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]

const FilterProject = () =>{
    return(
        <div className="searchProject">
                <div className="searchProject__title">
                    <Trans>Search for projects by</Trans>
                </div>
                <InputSelect placeholder="Tỉnh/Thành phố" datas ={province}/>
                <InputSelect placeholder="Quận/Huyện" datas={district}/>
                <InputSelect placeholder="Chọn tiến độ" datas={status}/>
                {/*PHẠM VI GIÁ*/}
                <div className="map_search--range">
                    <div className="range_item price">
                        <label className="label">
                            <Trans>Price range</Trans>
                            <br /><i>(tỷ đồng)</i>
                        </label>
                            <Sliders value={data} displayBox="on"/>
                    </div>
                    <div className="range_item area">
                        <label className="label"><Trans>Acreage</Trans><i> (m2)</i></label>
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