import React, { Component, useState } from 'react';
import CardInputSliderFilter from '../../../components/common/CardInputSliderFilter';

const data = [20, 60]
const data1 = [10, 80]
const province = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
const district = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
const status = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]

const SidebarSortItem = (props) =>{
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
    const { isStatusActive } = props;
    const { headerBodyClassName, labelHeader, datas, limit, onPageChange, inputSelectDatas, sliderDatas, onFilterClick } = props
    return(
        <div {...{className:`searchProject ${isStatusActive && "active"}`}}>
            <CardInputSliderFilter inputSelectDatas={inputSelectDatas} sliderDatas={sliderDatas} onFilterClick={onFilterClick} />
        </div>
    )
}


export default SidebarSortItem