import React, { useState, useEffect } from 'react';
import { Slider } from 'antd';

const SliderRange = (props) => {

    let { defaultValue, data, min, max, range, changeRange, onAfterChange, tooltipVisible } = props;
    
    return (
        <Slider
            className="w-100"
            defaultValue={defaultValue ? defaultValue : [0, 0]}
            range={range ? range : true}
            min={min}
            max={max}
            onChange={changeRange}
            onAfterChange={onAfterChange}
            tooltipVisible={(tooltipVisible && tooltipVisible === false) ? false : true}
            value={(data && data.length === 0) ? [0, 0] : data} />
    )
}

export default SliderRange;
