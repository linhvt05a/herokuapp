import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import {Sliders} from '../../components/base/index'
import {InputSelect} from '../../components/base/Select/index'
import { Trans } from 'react-i18next';
import { useForm } from 'antd/lib/form/Form';
const data = [20, 60]
const data1 = [10, 80]
const province = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
const district = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
const status = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]

const FilterProject = () =>{
    const [priceRange, setPrice] = useState([])
    const [acreage, setAcreage] = useState([])

    const changePrice = (e) =>{
        setPrice(e)
        console.log('priceRange',priceRange)
    }
    const changeAcreage =(e)=>{
        setAcreage(e)
        console.log('acreage',acreage)
    }
    return(
        <div className="searchProject">
                <div className="searchProject__title">
                    <Trans>Search for projects by</Trans>
                </div>
                <InputSelect placeholder="Province" datas ={province}/>
                <InputSelect placeholder="District" datas={district}/>
                <InputSelect placeholder="Select progress" datas={status}/>
                <div className="map_search--range" style={{marginTop: 70}}>
                    <div className="range_item price">
                        <label className="label">
                            <Trans>Price range</Trans>
                            <br /><i><Trans>(bilions)</Trans></i>
                        </label>
                        <Sliders  defaultValue={data} reverse ={false} tooltipVisible = {true} range ={true} onChange={changePrice}/>
                    </div>
                    <div className="range_item area">
                        <label className="label"><Trans>Acreage</Trans><i> (m2)</i></label>
                        <Sliders  defaultValue={data1} reverse ={false} tooltipVisible = {true} range ={true} onChange={changeAcreage}/>
                    </div>
                </div>
                <SearchByProject />
    </div>
    )
}

const SearchByProject = () =>{
    return <Link to="#" className="btn btn_green text-uppercase w-100"><Trans>SEARCH</Trans></Link>
}

export default FilterProject