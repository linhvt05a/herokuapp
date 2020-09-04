import React, { useState, useEffect  } from 'react';
import CardInputSliderFilter from '../../../../components/common/CardInputSliderFilter'
import {DIRECTION_TYPE} from '../../../../contant';

const SearchProduct = (props) => {
    const [priceRange, setPrice] = useState([])
    const [acreage, setAcreage] = useState([])
    const [filterDataState, setFilterDataState] = useState({
        inputSelectDatas: [],
        sliderDatas: []
    })
    var projectTypeDatas = [{value: '', label: ''}]

    const changePrice = (e) => {
        setPrice(e)
        console.log('priceRange', priceRange)
    }
    const changeAcreage = (e) => {
        setAcreage(e)
        console.log('acreage', acreage)
    }
    const { isStatusActive } = props;
    // console.log(isStatusActive);

    const { headerBodyClassName, labelHeader, datas, limit, inputSelectDatas, sliderDatas, onFilterClick } = props

    useEffect(() => {
        var projectTypeDatas =[{value: 'test', label: 'test'}] 
        
        setFilterDataState({
            inputSelectDatas: [
                {placeholder: "product_type", datas: projectTypeDatas, onChange: onProductTypeChange},
                {placeholder: "house_direction", datas: DIRECTION_TYPE, onChange: onHouseDirectionChange, trans: "trans"}
            ],
            sliderDatas: [
                {label: "price_range", unit: "project_billions_dong", onAfterChange: onPriceRangeChange, min: 0, max: 100},
                {label: "area", unit: "project_area_unit", onAfterChange: onAreaChange, min: 0, max: 1000}
            ]
        })
    },[])

    const onProductTypeChange = (value) => {
        console.log(value);
    }
    const onHouseDirectionChange = (value) => {
        console.log(value);
    }
    const onPriceRangeChange = (value) => {
        console.log(value);
    }
    const onAreaChange = (value) => {
        console.log(value);
    }

    return (
        <div className="project_page--filter project_page--filter_exchanges">
            <CardInputSliderFilter 
                title="project_filter" 
                inputSelectDatas={filterDataState.inputSelectDatas} 
                sliderDatas={filterDataState.sliderDatas} 
                onFilterClick={onFilterClick}
                filterWhite
            />
        </div>
    )
}


export default SearchProduct