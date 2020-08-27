import React from 'react';
import { Slider, Switch } from 'antd';

const SliderRange = (props) => {
    let { defaultValue, min, max, changeRange } = props;
    return (
        <>
            <Slider range defaultValue={defaultValue} min={min} max={max} onChange={changeRange}/>
      </>
    )
}

export default SliderRange;
