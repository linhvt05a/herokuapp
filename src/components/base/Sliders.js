import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Slider, Switch } from 'antd';


const Sliders = (props) => {
  const {value, reverse, tooltipVisible, disabled, onChange} = props
    return (
        <div className="slider-wrapper">
            <Slider 
              range 
              defaultValue={value} 
              reverse={reverse} 
              tooltipVisible ={tooltipVisible} 
              disabled={disabled} 
              onChange={onChange}
              style={{marginTop: -1}}
            />
        </div>
    );
}
export default Sliders
