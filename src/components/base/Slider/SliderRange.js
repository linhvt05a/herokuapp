import React from 'react';
import { Slider, Switch } from 'antd';

const SliderRange = (props) => {

    const { onChange, min, max } = props

    return (
        <Slider className="w-100" range onChange={onChange} min={min} max={max} />
    )
}

export default SliderRange;
