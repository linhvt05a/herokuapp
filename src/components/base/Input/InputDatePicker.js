import React, { useState, useEffect} from "react";
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';
const InputDatePicker = (props) =>{
    const [date, setDate] = useState(new Date())
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
        
    },[]);

    const {placeholder, style, onChange, name, value} = props
    return(
        <DatePicker 
            defaultValue={moment(date, dateFormat)} 
            value={value} 
            name={name} 
            format ={dateFormat} 
            placeholder={placeholder} 
            style={style} 
            onChange={onChange}
        />
    )
}

export default InputDatePicker