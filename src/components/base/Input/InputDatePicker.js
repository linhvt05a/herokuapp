import React, { useState, useEffect} from "react";
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

const InputDatePicker = (props) =>{
    const {placeholder, style, onChange, name, value} = props
    return(
        <DatePicker value={value} name={name} format ={dateFormat} placeholder={placeholder} style={style} onChange={onChange}/>
    )
}

export default InputDatePicker