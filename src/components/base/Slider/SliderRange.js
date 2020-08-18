import React from 'react';
import { Slider, Switch } from 'antd';

const SliderRange = (props) => {

    return (
        <>
            <Slider defaultValue={30} />
            <Slider range defaultValue={[20, 50]} />
      </>
    )
}

export default SliderRange;
