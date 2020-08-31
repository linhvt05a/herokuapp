import React, { useState } from 'react';
import CardInputSliderFilter from '../../../../components/common/CardInputSliderFilter';

const FilterTransaction = (props) =>{
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
            <CardInputSliderFilter inputSelectDatas={inputSelectDatas} sliderDatas={sliderDatas} onPageChange={onPageChange} onFilterClick={onFilterClick} />
        </div>
    )
}


export default FilterTransaction