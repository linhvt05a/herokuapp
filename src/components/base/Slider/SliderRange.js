import React, { useState, useEffect } from 'react';
import { Slider } from 'antd';

const SliderRange = (props) => {

    let { defaultValue, min, max, changeRange, onAfterChange, tooltipVisible, isClear } = props;

    const [value, setValueState] = useState([0, 0])

    const onAfterDataChange = (data) => {
        setValueState(data);
        onAfterChange(data);
    }
    
    return (
        <Slider
            className="w-100"
            range
            defaultValue={defaultValue}
            min={min}
            max={max}
            onChange={changeRange}
            onAfterChange={data => onAfterDataChange(data)}
            tooltipVisible={(tooltipVisible && tooltipVisible === false) ? false : true}
            value={isClear ? [0, 0] : value} />
    )
}

export default SliderRange;
