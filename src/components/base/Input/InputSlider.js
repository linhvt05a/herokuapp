import { InputNumber, Slider } from 'antd';
import React from 'react';


const InputNumberCustoms = props => {
    let { readOnly, label, onChange, value, addonBefore, className, classNameInput, style, min, max, defaultValue, classNameSlider, titleClassName, classNameUnit, unit, classNameGroupSlider } = props;
    return (
        <div className="form-group">
            {
                label &&
                <label className={titleClassName ? titleClassName : "fw-medium"}>
                    {label}
                    {
                        unit ? <span className={classNameUnit ? classNameUnit : "unit"}>({unit})</span> : ""
                    }
                </label>
            }
            <div className={classNameGroupSlider ? classNameGroupSlider : "pull-range"}>
                <div className="slider-wrapper">
                    <Slider
                        tipFormatter={null}
                        className={classNameSlider ? classNameSlider : ""}
                        min={min}
                        max={max}
                        onChange={onChange}
                        value={typeof value === 'number' ? value : 0} />
                </div>
                <div className={className ? className : ""}>
                    <InputNumber
                        min={min ? min : 0}
                        max={max ? max : 0}
                        style={style ? style : { margin: '0 16px' }}
                        value={value}
                        readOnly={readOnly ? true : false}
                        // disabled={readOnly ? true : false}
                        onChange={onChange}
                        className={classNameInput ? classNameInput : "form-control"}
                    />
                    {addonBefore &&
                        <div className="input-group-append">
                            <span className="input-group-text">
                                {addonBefore}
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default InputNumberCustoms;