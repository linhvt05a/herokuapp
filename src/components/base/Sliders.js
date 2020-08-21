import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Slider, Switch } from 'antd';


const Sliders = (props) => {
  const {value, reverse, tooltipVisible, disabled, onChange, range} = props
    return (
        <div className="slider-wrapper">
            <Slider 
              range ={range}
              defaultValue={value} 
              reverse={reverse} 
              tooltipVisible ={tooltipVisible} 
              disabled={disabled} 
              onChange={onChange}
              style={{marginTop: 0}}
            />
        </div>
    );
}
export default Sliders
