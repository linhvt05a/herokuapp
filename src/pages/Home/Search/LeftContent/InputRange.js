import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { SliderRange } from "../../../../components/base/Slider";
import { commonAction } from "../../../../store/action";

const InputRange = (props) => {
    let { active, changePrice, changeAcreage } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(commonAction.loadMinMaxList({}))
    }, [])
    const minmax = useSelector(state => state.commonReducer);
    const isGetminmaxListSuccess = minmax.minmaxList.success;
    const minmaxList = isGetminmaxListSuccess ? minmax.minmaxList.detail : null;

    return (
        minmaxList && minmaxList != null ?
        <div className="map_search--range">
            <div className="range_item price">
                <label className="label">
                    Phạm vi giá (tỷ đồng)
                </label>
                <div className="slider-wrapper">
                    <SliderRange defaultValue={[minmaxList.price_min, minmaxList.price_max]} min={0} max={200000000000} range={true} changeRange={changePrice} />
                </div>
            </div>
            <div className="range_item area">
                <label className="label">
                    Diện tích (m2)
                </label>
                <div className="slider-wrapper">
                    <SliderRange defaultValue={[minmaxList.area_min, minmaxList.area_max]} min={0} max={1000000} range={true} changeRange={changeAcreage} />
                </div>
            </div>
        </div>
        : ''
    )
}
export default InputRange;