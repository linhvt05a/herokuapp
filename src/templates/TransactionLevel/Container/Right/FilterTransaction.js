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
    // console.log(isStatusActive);
    
    const { headerBodyClassName, labelHeader, datas, limit,  inputSelectDatas, sliderDatas, onFilterClick } = props
    return(
        <div className={`searchProject ${isStatusActive && "active"}`}>
            <CardInputSliderFilter 
                inputSelectDatas={inputSelectDatas} 
                sliderDatas={sliderDatas} 
                onFilterClick={onFilterClick} 
            />
        </div>
    )
}


export default FilterTransaction