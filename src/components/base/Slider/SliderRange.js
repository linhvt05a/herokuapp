import React from 'react';
import { Slider } from 'antd';

const SliderRange = (props) => {

    let { defaultValue, min, max, changeRange, onAfterChange, tooltipVisible } = props;
    
    return (
        <Slider className="w-100" range defaultValue={defaultValue} min={min} max={max} onChange={changeRange} onAfterChange={onAfterChange} tooltipVisible={(tooltipVisible && tooltipVisible === false) ? false : true} />
    )
}

export default SliderRange;
