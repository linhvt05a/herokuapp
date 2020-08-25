import React, {useState} from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { SliderRange } from "../../../../components/base/Slider";

const InputRange = (props) => {
    let { active } = props;
    const data = [20, 60]
    const data1 = [10, 80]
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
    return (
        <div className="map_search--range">
            <div className="range_item price">
                <label className="label">
                    Phạm vi giá (tỷ đồng)
                </label>
                <div className="slider-wrapper">
                    <SliderRange defaultValue={data} reverse={false} tooltipVisible={true} range={true} onChange={changePrice} />
                </div>
            </div>
            <div className="range_item area">
                <label className="label">
                    Diện tích (m2)
                </label>
                <div className="slider-wrapper">
                    <SliderRange defaultValue={data1} reverse={false} tooltipVisible={true} range={true} onChange={changeAcreage} />
                </div>
            </div>
        </div>
    )
}
export default InputRange;