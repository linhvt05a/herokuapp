import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { SliderRange } from "../../../../components/base";
import { commonAction } from "../../../../store/action";
import { formatCurrency } from "../../../../functions/Utils";

const InputRange = (props) => {
    let { active, classRange, valueArea, valuePrice, changePrice, changeAcreage } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(commonAction.loadMinMaxList({}))
    }, [])
    const minmax = useSelector(state => state.commonReducer);
    const isGetminmaxListSuccess = minmax.minmaxList.success;
    const minmaxList = isGetminmaxListSuccess ? minmax.minmaxList.detail : null;

    return (
        minmaxList && minmaxList != null ?
        <div className="map_search--range" style={{ display: classRange ? "flex" : "block" }}>
            <div className={`range_item price ${classRange ? classRange : "" }`}>
                <label className="label">
                    <Trans>range_of_price</Trans>
                </label>
                <div className="slider-wrapper">
                    <SliderRange 
                        data={valuePrice} 
                        defaultValue={[minmaxList.price_min, minmaxList.price_max]} 
                        min={minmaxList.price_min} 
                        max={minmaxList.price_max} 
                        range={true} 
                        changeRange={changePrice} 
                    />
                </div>
            </div>
            <div className={`range_item area ${classRange ? classRange : "" }`} >
                <label className="label">
                    <Trans>range_of_area</Trans> (m<sup>2</sup>)
                </label>
                <div className="slider-wrapper">
                    <SliderRange 
                    data={valueArea} 
                    defaultValue={[minmaxList.area_min, minmaxList.area_max]} 
                    min={minmaxList.area_min} 
                    max={minmaxList.area_max} 
                    range={true} 
                    changeRange={changeAcreage} 
                    />
                </div>
            </div>
        </div>
        : ''
    )
}
export default InputRange;