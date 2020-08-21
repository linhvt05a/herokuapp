import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 18,
      width: 18,
      backgroundColor: '#fff',
      border: '2px solid #25b15f',
      marginTop: -5,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 4,
      borderRadius: 4,
    },
    rail: {
      height: 4,
      borderRadius: 4,
     
     
    },
  })(Slider);

const Sliders = (props) => {
    return (
        <div className="slider-wrapper">
            <PrettoSlider defaultValue={props.value} valueLabelDisplay={props.displayBox} style={{marginTop: -5}}/>
        </div>
    );
}
export default Sliders
